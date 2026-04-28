
const path = require('path');
const fs = require('fs');
const matter = require('gray-matter');

function getMDXFiles(dir) {
  if (!fs.existsSync(dir)) {
    console.error("Directory does not exist:", dir);
    return [];
  }
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(rawContent);
  return { metadata: data, content, slug: path.basename(filePath, path.extname(filePath)) };
}

const dir = 'c:/Users/Omer/phoenix-ascent/bomsexpo/src/app/portfolio/posts';
const files = getMDXFiles(dir);
const data = files.map(file => readMDXFile(path.join(dir, file)));

console.log("Slugs found:");
data.forEach(d => console.log(`- ${d.slug}`));
