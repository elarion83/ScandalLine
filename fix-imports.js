import fs from 'fs';
import path from 'path';

const dataDir = './dist/data';

// Lire tous les fichiers .js dans le dossier data
const files = fs.readdirSync(dataDir).filter(file => file.endsWith('.js'));

files.forEach(file => {
  const filePath = path.join(dataDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remplacer les imports relatifs sans extension par des imports avec .js
  content = content.replace(/from ['"]\.\/([^'"]+)['"]/g, "from './$1.js'");
  
  fs.writeFileSync(filePath, content);
  console.log(`Fixed imports in ${file}`);
}); 