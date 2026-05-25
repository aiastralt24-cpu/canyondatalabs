import { readFileSync } from "node:fs";

const requiredFiles = ["index.html", "styles.css", "script.js"];
for (const file of requiredFiles) {
  readFileSync(file, "utf8");
}

const html = readFileSync("index.html", "utf8");
const requiredSnippets = [
  "<main id=\"main\">",
  "Make every decision visible.",
  "Not more software. More control.",
  "Start small. Prove fast. Scale clean.",
  "Sales & Distribution Intelligence",
  "Built inside real operating environments.",
  "data-contact-form"
];

const missing = requiredSnippets.filter((snippet) => !html.includes(snippet));
if (missing.length) {
  console.error("Missing required snippets:");
  for (const snippet of missing) console.error(`- ${snippet}`);
  process.exit(1);
}

console.log("Canyon site structure check passed.");
