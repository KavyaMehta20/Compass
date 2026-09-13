"use client";

import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { CameraControls, Text } from "@react-three/drei";
import * as THREE from "three";
import { layout, domeCell, treeSpots, Professor } from "@/data";
import gsap from "gsap";

const CELL = 2.5;

function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]} receiveShadow>
      <planeGeometry args={[80, 80]} />
      <meshStandardMaterial color="#E4DDC7" roughness={1} />
    </mesh>
  );
}

function GridDots() {
  // Subtle grid of small cylinders instead of wireframe (looks nicer)
  const dots: React.JSX.Element[] = [];
  for (let c = -2; c <= 5; c++) {
    for (let r = -2; r <= 5; r++) {
      const x = c * CELL - (3 * CELL) / 2;
      const z = r * CELL - (4 * CELL) / 2;
      dots.push(
        <mesh key={`${c}-${r}`} position={[x, 0, z]}>
          <cylinderGeometry args={[0.04, 0.04, 0.04, 8]} />
          <meshStandardMaterial color="#C9C1A2" />
        </mesh>
      );
    }
  }
  return <>{dots}</>;
}

function Tree({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh position={[0, 0.55, 0]} castShadow>
        <cylinderGeometry args={[0.07, 0.09, 1.1, 8]} />
        <meshStandardMaterial color="#6B5232" roughness={0.9} />
      </mesh>
      <mesh position={[0, 1.5, 0]} castShadow>
        <sphereGeometry args={[0.48, 14, 14]} />
        <meshStandardMaterial color="#4C7A46" roughness={0.85} />
      </mesh>
      <mesh position={[0, 1.15, 0]} castShadow>
        <sphereGeometry args={[0.38, 14, 14]} />
        <meshStandardMaterial color="#5A8E51" roughness={0.85} />
      </mesh>
    </group>
  );
}

function BuildingBlock({
  b,
  col,
  row,
  floors,
  isActive,
  isDimmed,
  isDome,
  onClick,
}: {
  b: string;
  col: number;
  row: number;
  floors: number;
  isActive: boolean;
  isDimmed: boolean;
  isDome?: boolean;
  onClick: () => void;
}) {
  const height = isDome ? 1.6 : floors * 0.9;
  const size = CELL * 0.82;
  const x = col * CELL - (3 * CELL) / 2 + CELL / 2;
  const z = row * CELL - (4 * CELL) / 2 + CELL / 2;

  const sideColor = isActive ? "#C99A45" : isDome ? "#7A5A3C" : "#C7BE9E";
  const topColor = isActive ? "#F3D9AE" : isDome ? "#B48A62" : "#EDE7D3";

  const groupRef = useRef<THREE.Group>(null);

  return (
    <group
      ref={groupRef}
      position={[x, height / 2, z]}
      onClick={(e) => {
        e.stopPropagation();
        if (!isDome) onClick();
      }}
      onPointerOver={() => {
        if (!isDome && groupRef.current) {
          gsap.to(groupRef.current.position, {
            y: height / 2 + 0.28,
            duration: 0.22,
            ease: "power2.out",
          });
        }
      }}
      onPointerOut={() => {
        if (!isDome && groupRef.current) {
          gsap.to(groupRef.current.position, {
            y: height / 2,
            duration: 0.3,
            ease: "power2.inOut",
          });
        }
      }}
    >
      {/* Body */}
      <mesh castShadow receiveShadow>
        {isDome ? (
          <cylinderGeometry args={[size * 0.44, size * 0.5, height, 32]} />
        ) : (
          <boxGeometry args={[size, height, size]} />
        )}
        <meshStandardMaterial
          color={sideColor}
          roughness={0.65}
          transparent
          opacity={isDimmed ? 0.22 : 1}
        />
      </mesh>

      {/* Top cap */}
      {!isDome && (
        <mesh position={[0, height / 2, 0]} receiveShadow>
          <boxGeometry args={[size, 0.04, size]} />
          <meshStandardMaterial
            color={topColor}
            roughness={0.45}
            transparent
            opacity={isDimmed ? 0.22 : 1}
          />
        </mesh>
      )}

      {/* Dome cap hemisphere */}
      {isDome && (
        <mesh position={[0, height / 2 - 0.05, 0]}>
          <sphereGeometry args={[size * 0.44, 28, 28, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#B48A62" roughness={0.55} transparent opacity={isDimmed ? 0.22 : 1} />
        </mesh>
      )}

      {/* Block label */}
      {!isDome && (
        <Text
          position={[0, height / 2 + 0.1, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          fontSize={0.44}
          color="#2B2A23"
          fillOpacity={isDimmed ? 0.2 : 0.85}
          anchorX="center"
          anchorY="middle"
        >
          {b}
        </Text>
      )}
      {isDome && (
        <Text
          position={[0, height / 2 + 0.3, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          fontSize={0.3}
          color="#fff"
          fillOpacity={isDimmed ? 0.2 : 0.8}
          anchorX="center"
          anchorY="middle"
        >
          dome
        </Text>
      )}

      {/* Active ring glow on ground */}
      {isActive && (
        <mesh position={[0, -height / 2 + 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[size * 0.54, size * 0.68, 32]} />
          <meshBasicMaterial color="#C99A45" transparent opacity={0.55} />
        </mesh>
      )}
    </group>
  );
}

export function MapScene({
  activeProf,
  activeBlock,
  onSelectBlock,
}: {
  activeProf: Professor | null;
  activeBlock: string | null;
  onSelectBlock: (block: string) => void;
}) {
  const cameraControlsRef = useRef<CameraControls>(null);

  useEffect(() => {
    const cc = cameraControlsRef.current;
    if (!cc) return;

    if (activeBlock) {
      const cell = layout.find((c) => c.b === activeBlock);
      if (cell) {
        const tx = cell.col * CELL - (3 * CELL) / 2 + CELL / 2;
        const tz = cell.row * CELL - (4 * CELL) / 2 + CELL / 2;
        cc.setTarget(tx, 0, tz, true);
        cc.dollyTo(8.5, true);
      }
    } else {
      cc.setTarget(0, 0, 0, true);
      cc.dollyTo(26, true);
    }
  }, [activeBlock]);

  return (
    // IMPORTANT: Canvas needs an explicit-sized wrapper — Tailwind className on Canvas itself
    // is unreliable in Next.js App Router. We use a wrapper div styled in globals.css.
    <div className="map-canvas-wrap">
      <Canvas
        shadows
        camera={{ position: [22, 26, 16], fov: 28 }}
        dpr={[1, 2]}
      >
        <color attach="background" args={["#F1ECDF"]} />

        <ambientLight intensity={0.6} />
        <directionalLight
          position={[14, 20, 12]}
          intensity={1.1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={0.5}
          shadow-camera-far={60}
          shadow-camera-left={-18}
          shadow-camera-right={18}
          shadow-camera-top={18}
          shadow-camera-bottom={-18}
        />
        <directionalLight position={[-8, 8, -8]} intensity={0.28} />

        <CameraControls
          ref={cameraControlsRef}
          minPolarAngle={Math.PI / 9}
          maxPolarAngle={Math.PI / 2.6}
          minDistance={4}
          maxDistance={45}
        />

        <Ground />
        <GridDots />

        {layout.map((cell) => {
          const isActiveCell = activeBlock === cell.b;
          const isDimmed = !!activeBlock && !isActiveCell;
          return (
            <BuildingBlock
              key={cell.b}
              {...cell}
              isActive={isActiveCell}
              isDimmed={isDimmed}
              onClick={() => onSelectBlock(cell.b)}
            />
          );
        })}

        <BuildingBlock
          b="dome"
          col={domeCell.col}
          row={domeCell.row}
          floors={1}
          isActive={false}
          isDimmed={!!activeBlock}
          isDome
          onClick={() => {}}
        />

        {treeSpots.map((spot, i) => {
          const tx = spot.col * CELL - (6 * CELL) / 2 + CELL / 2;
          const tz = spot.row * CELL - (4 * CELL) / 2 + CELL / 2;
          return <Tree key={i} position={[tx, 0, tz]} />;
        })}
      </Canvas>
    </div>
  );
}
