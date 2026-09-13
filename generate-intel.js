const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'src/data/index.ts');
const intelPath = path.join(__dirname, 'src/data/intel.ts');

const content = fs.readFileSync(indexPath, 'utf8');

// Extract all professors from the professors array to get their IDs
const profIdRegex = /id:\s*"([^"]+)"/g;
let match;
const profIds = new Set();
while ((match = profIdRegex.exec(content)) !== null) {
  profIds.add(match[1]);
}

const possibleTraits = [
  "Good grading", "Curved exams", "Group project heavy", "Attendance mandatory", 
  "No final exam", "Pop quizzes", "Tough grader", "Amazing lectures", 
  "Lots of reading", "Homework heavy", "Caring professor", "Open book exams"
];

const generatedIntel = [];

for (const profId of profIds) {
  // Random rating between 3.0 and 5.0
  const rating = (Math.random() * 2 + 3).toFixed(1);
  
  // Pick 2-4 random traits
  const numTraits = Math.floor(Math.random() * 3) + 2;
  const shuffledTraits = [...possibleTraits].sort(() => 0.5 - Math.random());
  const traits = shuffledTraits.slice(0, numTraits);

  // Generate 4-5 random reviews
  const numReviews = Math.floor(Math.random() * 2) + 4;
  const reviews = [];
  for (let i = 0; i < numReviews; i++) {
    const revRating = Math.min(5, Math.max(1, Math.floor(parseFloat(rating)) + (Math.random() > 0.5 ? 1 : -1)));
    const texts = [
      "Really enjoyed this class, but you have to put in the work.",
      "The professor is very knowledgeable and helpful during office hours.",
      "Tough exams, but the curve saved my grade.",
      "One of the best classes I've taken at RIT.",
      "A lot of group work, which can be hit or miss depending on your team.",
      "Attendance is super strict, don't skip class!",
      "Very theoretical, I wish there was more practical application.",
      "Easy A if you just do the homework and show up."
    ];
    reviews.push({
      author: "Student " + (Math.floor(Math.random() * 900) + 100),
      rating: revRating,
      text: texts[Math.floor(Math.random() * texts.length)]
    });
  }

  generatedIntel.push({
    profId,
    rating: parseFloat(rating),
    traits,
    reviews
  });
}

const intelFileContent = `export type ProfIntel = {
  profId: string;
  rating: number;
  traits: string[];
  reviews: { author: string; text: string; rating: number }[];
};

export const profIntelData: Record<string, ProfIntel> = ${JSON.stringify(
  generatedIntel.reduce((acc, curr) => ({ ...acc, [curr.profId]: curr }), {}),
  null,
  2
)};
`;

fs.writeFileSync(intelPath, intelFileContent, 'utf8');
console.log("Generated src/data/intel.ts");
