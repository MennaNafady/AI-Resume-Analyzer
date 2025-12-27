export function matchSkills(resumeSkills, jobSkills) {
  const matched = resumeSkills.filter(skill =>
    jobSkills.includes(skill)
  );

  const percentage = jobSkills.length === 0
    ? 0
    : Math.round((matched.length / jobSkills.length) * 100);

  return {
    matched,
    missing: jobSkills.filter(skill => !matched.includes(skill)),
    percentage
  };
}
