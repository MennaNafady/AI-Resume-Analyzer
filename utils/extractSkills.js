const SKILLS = [
  "javascript", "python", "java", "c++",
  "node", "express", "react",
  "sql", "mongodb", "git", "docker"
];

export function extractSkills(text) {
  text = text.toLowerCase();
  return SKILLS.filter(skill => text.includes(skill));
}
