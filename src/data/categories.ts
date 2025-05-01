export interface Category {
  id: string;
  name: string;
  description: string;
  icon?: string;
}

export const categories: Category[] = [
  {
    id: "systems-strategy",
    name: "Systems & Strategy",
    description: "Digital power, code, and strategic design",
    icon: "💻",
  },
  {
    id: "integration-growth",
    name: "Integration & Growth",
    description: "Inner mastery, parenting, masculine leadership",
    icon: "🧘🏽‍♂️",
  },
  {
    id: "parenting",
    name: "Parenting",
    description:
      "Raising resilient children, family dynamics, and personal growth",
    icon: "👨‍👩‍👧‍👦",
  },
  {
    id: "diy-creation",
    name: "DIY & Creation",
    description: "Physical builds, handmade goods, crafting",
    icon: "🛠️",
  },
  {
    id: "art-expression",
    name: "Art & Expression",
    description: "Creative soul, aesthetic power, truth-telling",
    icon: "🎵",
  },
  {
    id: "learning-projects",
    name: "Learning Projects",
    description: "Documentation of mastery in progress",
    icon: "📚",
  },
  {
    id: "metaspace",
    name: "Metaspace",
    description:
      "Reflections on the journey itself — the why, the how, the code of life",
    icon: "🌀",
  },
];
