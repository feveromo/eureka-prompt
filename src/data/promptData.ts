interface PromptPiece {
  text: string;
  theme: string;
  weight: number;
}

export const subjects: PromptPiece[] = [
  { text: "a majestic dragon", theme: "fantasy", weight: 0.8 },
  { text: "a cyberpunk city", theme: "scifi", weight: 0.7 },
  { text: "a serene landscape", theme: "nature", weight: 0.6 },
  { text: "an ancient temple", theme: "historical", weight: 0.7 },
  { text: "a cosmic nebula", theme: "space", weight: 0.8 }
];

export const styles: PromptPiece[] = [
  { text: "in watercolor style", theme: "artistic", weight: 0.6 },
  { text: "with neon accents", theme: "scifi", weight: 0.7 },
  { text: "in oil painting style", theme: "artistic", weight: 0.6 },
  { text: "with ethereal lighting", theme: "fantasy", weight: 0.8 },
  { text: "in minimalist style", theme: "modern", weight: 0.5 }
];

export const modifiers: PromptPiece[] = [
  { text: "during sunset", theme: "nature", weight: 0.6 },
  { text: "in a dystopian future", theme: "scifi", weight: 0.7 },
  { text: "with magical elements", theme: "fantasy", weight: 0.8 },
  { text: "in deep space", theme: "space", weight: 0.8 },
  { text: "with ancient ruins", theme: "historical", weight: 0.7 }
];