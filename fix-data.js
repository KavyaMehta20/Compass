const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/index.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Extract all professors from the courses array
const profRegex = /prof:\s*"([^"]+)"/g;
let match;
const profsSet = new Set();
while ((match = profRegex.exec(content)) !== null) {
  if (match[1] !== 'TBD') {
    profsSet.add(match[1]);
  }
}
const uniqueProfs = Array.from(profsSet);
console.log(`Found ${uniqueProfs.length} unique professors`);

// 10 blocks: A, B, C, D, E, F, G, H, I, J
const blocks = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const floorsPerBlock = 4; // Ground, 1, 2, 3 -> floors 1, 2, 3, 4
const requiredProfs = blocks.length * floorsPerBlock * 2;
console.log(`Required professors: ${requiredProfs}`);

if (uniqueProfs.length < requiredProfs) {
  console.log('Not enough professors to guarantee 2 per floor!');
  // Duplicate some to meet the requirement
  while (uniqueProfs.length < requiredProfs) {
    uniqueProfs.push(uniqueProfs[Math.floor(Math.random() * uniqueProfs.length)]);
  }
}

// Shuffle professors
for (let i = uniqueProfs.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [uniqueProfs[i], uniqueProfs[j]] = [uniqueProfs[j], uniqueProfs[i]];
}

const assignedProfs = [];
let profIndex = 0;
// First guarantee 2 per block/floor
for (const block of blocks) {
  for (let floor = 1; floor <= floorsPerBlock; floor++) {
    for (let i = 0; i < 2; i++) {
      assignedProfs.push({
        name: uniqueProfs[profIndex],
        id: uniqueProfs[profIndex].toLowerCase().replace(/[^a-z0-9]/g, '-'),
        block,
        floor,
        room: String(Math.floor(Math.random() * 20) + 1).padStart(2, '0'),
        hours: "Mon/Wed 10-11am"
      });
      profIndex++;
    }
  }
}

// Assign remaining professors randomly
while (profIndex < uniqueProfs.length) {
  const block = blocks[Math.floor(Math.random() * blocks.length)];
  const floor = Math.floor(Math.random() * floorsPerBlock) + 1;
  assignedProfs.push({
    name: uniqueProfs[profIndex],
    id: uniqueProfs[profIndex].toLowerCase().replace(/[^a-z0-9]/g, '-'),
    block,
    floor,
    room: String(Math.floor(Math.random() * 20) + 1).padStart(2, '0'),
    hours: "Tue/Thu 2-3pm"
  });
  profIndex++;
}

// Generate replacement string
let newProfsStr = `export const professors: Professor[] = [\n`;
for (const p of assignedProfs) {
  newProfsStr += `  { name: "${p.name}", id: "${p.id}", block: "${p.block}", floor: ${p.floor}, room: "${p.room}", hours: "${p.hours}" },\n`;
}
newProfsStr += `];`;

// Layout Replacement (Square around dome)
// Let's use a 3x4 grid around Dome (Dome at col 1, row 1 & 2? Dome is 1 cell).
// We want A-J (10 blocks). Let's just put them in a circle around dome at 2,2.
const newLayoutStr = `export const layout: LayoutCell[] = [
  // 3x4 square around Dome at (1, 1.5)
  { b: "C", col: 0, row: 0, floors: 4 },
  { b: "D", col: 1, row: 0, floors: 4 },
  { b: "E", col: 2, row: 0, floors: 4 },
  { b: "F", col: 0, row: 1, floors: 4 },
  // Dome at 1, 1
  { b: "G", col: 2, row: 1, floors: 4 },
  { b: "H", col: 0, row: 2, floors: 4 },
  // Dome at 1, 2
  { b: "I", col: 2, row: 2, floors: 4 },
  { b: "J", col: 0, row: 3, floors: 4 },
  { b: "A", col: 1, row: 3, floors: 4 },
  { b: "B", col: 2, row: 3, floors: 4 },
];

export const domeCell = { col: 1, row: 1.5 };
`;

const profStartStr = "export const professors: Professor[] = [";
const profStart = content.indexOf(profStartStr);
const profEnd = content.indexOf("];", profStart) + 2;

content = content.slice(0, profStart) + newProfsStr + content.slice(profEnd);

const layoutStartStr = "export type LayoutCell = {";
const layoutStart = content.indexOf(layoutStartStr);
const treeSpotsStart = content.indexOf("export const treeSpots = [");

content = content.slice(0, layoutStart) + `export type LayoutCell = {
  b: string;
  col: number;
  row: number;
  floors: number;
};

` + newLayoutStr + "\n" + content.slice(treeSpotsStart);

fs.writeFileSync(filePath, content, 'utf8');
console.log("Updated index.ts");
