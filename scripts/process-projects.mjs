import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const PROJECTS_DIR = 'projects-data/projekti';
const PUBLIC_DIR = 'public/projects';
const DATA_FILE = 'data/projects.json';

// Ensure directories exist
if (!fs.existsSync('data')) fs.mkdirSync('data');
if (!fs.existsSync(PUBLIC_DIR)) fs.mkdirSync(PUBLIC_DIR, { recursive: true });

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

async function processProjects() {
  const folders = fs.readdirSync(PROJECTS_DIR);
  const projects = [];

  for (const folder of folders) {
    const folderPath = path.join(PROJECTS_DIR, folder);
    if (!fs.statSync(folderPath).isDirectory()) continue;

    const slug = slugify(folder);
    const targetDir = path.join(PUBLIC_DIR, slug);
    if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

    let info = {
      title: folder,
      client: 'Vanjskotrgovinska komora BiH',
      service: 'Dizajn, izrada, transport, montaža i demontaža sajamskog štanda',
      description: `Realizacija sajamskog nastupa na prestižnom sajmu ${folder}.`,
      year: folder.match(/\d{4}/)?.[0] || '2024'
    };

    const infoPath = path.join(folderPath, 'informacije.txt');
    if (fs.existsSync(infoPath)) {
      const content = fs.readFileSync(infoPath, 'utf8');
      const lines = content.split('\n').map(l => l.trim()).filter(l => l.length > 0);
      
      // Basic parsing logic
      if (lines.length >= 4) {
        // Line 1: Label "Klijent", Line 2: Value
        // Line 3: Label "Usluga", Line 4: Value
        // Line 5+: Description
        if (lines[0].toLowerCase().includes('klijent')) info.client = lines[1];
        if (lines[2].toLowerCase().includes('usluga')) info.service = lines[3];
        info.description = lines.slice(4).join(' ');
      } else {
        info.description = lines.join(' ');
      }
    }

    const files = fs.readdirSync(folderPath);
    const images = [];
    let featuredImage = null;

    // Process top-level images
    for (const file of files) {
      if (['.jpg', '.jpeg', '.png', '.webp'].includes(path.extname(file).toLowerCase())) {
        const inputPath = path.join(folderPath, file);
        const fileName = `${path.parse(file).name}.webp`;
        const outputPath = path.join(targetDir, fileName);
        
        try {
          await sharp(inputPath)
            .resize(1920, null, { withoutEnlargement: true }) // Cap width but keep aspect
            .webp({ quality: 75 })
            .toFile(outputPath);
          
          const webpUrl = `/projects/${slug}/${fileName}`;
          images.push(webpUrl);
          if (!featuredImage) featuredImage = webpUrl;
        } catch (err) {
          console.error(`Error processing ${inputPath}:`, err);
        }
      }
    }

    // Process 'slike' subfolder
    const subSlikePath = path.join(folderPath, 'slike');
    if (fs.existsSync(subSlikePath) && fs.statSync(subSlikePath).isDirectory()) {
      const subFiles = fs.readdirSync(subSlikePath);
      for (const file of subFiles) {
        if (['.jpg', '.jpeg', '.png', '.webp'].includes(path.extname(file).toLowerCase())) {
          const inputPath = path.join(subSlikePath, file);
          const fileName = `gallery-${path.parse(file).name}.webp`;
          const outputPath = path.join(targetDir, fileName);
          
          try {
            await sharp(inputPath)
              .resize(1600, null, { withoutEnlargement: true })
              .webp({ quality: 70 })
              .toFile(outputPath);
            
            images.push(`/projects/${slug}/${fileName}`);
          } catch (err) {
            console.error(`Error processing ${inputPath}:`, err);
          }
        }
      }
    }

    projects.push({
      slug,
      ...info,
      featuredImage: featuredImage || 'https://picsum.photos/seed/placeholder/1200/800',
      gallery: images
    });

    console.log(`✅ Processed: ${folder}`);
  }

  fs.writeFileSync(DATA_FILE, JSON.stringify(projects, null, 2));
  console.log(`\n🚀 Saved ${projects.length} projects to ${DATA_FILE}`);
}

processProjects().catch(console.error);
