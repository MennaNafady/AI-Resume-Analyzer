import dotenv from "dotenv";
dotenv.config();

import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function getAISuggestions(resume, job, missingSkills) {
  const prompt = `
You are a professional technical recruiter.

Resume:
${resume}

Job Description:
${job}

Missing Skills:
${missingSkills.join(", ")}

Tasks:
1. Suggest how to improve the resume for this job
2. Suggest which missing skills to learn first
3. Give 3 concrete improvement tips

Respond in bullet points.
`;

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.4
  });

  return response.choices[0].message.content;
}
