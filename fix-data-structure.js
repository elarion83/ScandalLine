import fs from 'fs';
import path from 'path';

const dataDir = './dist/data';
const nestedDataDir = path.join(dataDir, 'data');

// Vérifier si le dossier data/data existe
if (fs.existsSync(nestedDataDir)) {
  console.log('Moving files from data/data to data/');
  
  // Lire tous les fichiers dans data/data
  const files = fs.readdirSync(nestedDataDir);
  
  files.forEach(file => {
    const sourcePath = path.join(nestedDataDir, file);
    const destPath = path.join(dataDir, file);
    
    // Déplacer le fichier
    fs.renameSync(sourcePath, destPath);
    console.log(`Moved ${file}`);
  });
  
  // Supprimer le dossier data/data vide
  fs.rmdirSync(nestedDataDir);
  console.log('Removed empty data/data directory');
} else {
  console.log('No data/data directory found, skipping...');
} 