import dotenv from "dotenv";
import express from "express";
import analyzeRoute from "./routes/analyze.js";

dotenv.config();

const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// view engine
app.set("view engine", "ejs");

// homepage (ONLY ONE)
app.get("/", (req, res) => {
  res.render("index", {
    result: null,
    aiTips: null
  });
});

// analyze route
app.use("/analyze", analyzeRoute);

// start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
