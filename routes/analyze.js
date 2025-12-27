import express from "express";
import { getAISuggestions } from "../utils/aiSuggestions.js";
import { extractSkills } from "../utils/extractSkills.js";
import { matchSkills } from "../utils/matchSkills.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const resumeText = req.body.resume;
    const jobText = req.body.job;

    const resumeSkills = extractSkills(resumeText);
    const jobSkills = extractSkills(jobText);

    const result = matchSkills(resumeSkills, jobSkills);

    const aiTips = await getAISuggestions(
      resumeText,
      jobText,
      result.missing
    );

    res.render("index", {
      result,
      aiTips
    });

  } catch (error) {
    console.error(error);
    res.send("AI analysis failed.");
  }
});

export default router;
