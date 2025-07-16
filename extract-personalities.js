import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Fonction pour extraire les personnalités d'un fichier
function extractPersonalitiesFromFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Rechercher tous les patterns de personnalités dans le fichier
    const personalityPattern = /personality:\s*"([^"]+)"/g;
    const personalities = new Set();
    
    let match;
    while ((match = personalityPattern.exec(content)) !== null) {
      personalities.add(match[1]);
    }
    
    return Array.from(personalities);
  } catch (error) {
    console.error(`Erreur lors de la lecture du fichier ${filePath}:`, error.message);
    return [];
  }
}

// Fonction principale
function extractAllPersonalities() {
  const dataDir = path.join(__dirname, 'src', 'data');
  const personalityFiles = [
    'scandals2000-2001.ts',
    'scandals2002-2003.ts',
    'scandals2004-2005.ts',
    'scandals2006-2007.ts',
    'scandals2008-2009.ts',
    'scandals2010-2011.ts',
    'scandals2012-2013.ts',
    'scandals2014-2015.ts',
    'scandals2015-2016.ts',
    'scandals2016-2017.ts',
    'scandals2017-2018.ts',
    'scandals2018.ts',
    'scandals2019.ts',
    'scandals2020.ts',
    'scandals2021.ts',
    'scandals2022.ts',
    'scandals2023.ts',
    'scandals2024.ts',
    'scandals2025.ts'
  ];
  
  const allPersonalities = new Set();
  
  personalityFiles.forEach(fileName => {
    const filePath = path.join(dataDir, fileName);
    const personalities = extractPersonalitiesFromFile(filePath);
    
    console.log(`Fichier ${fileName}: ${personalities.length} personnalités trouvées`);
    personalities.forEach(personality => allPersonalities.add(personality));
  });
  
  // Convertir en tableau et trier
  const sortedPersonalities = Array.from(allPersonalities).sort();
  
  console.log('\n=== RÉSULTAT ===');
  console.log(`Total: ${sortedPersonalities.length} personnalités uniques`);
  console.log('\nTableau formaté:');
  console.log(JSON.stringify(sortedPersonalities, null, 2));
  
  return sortedPersonalities;
}

// Exécuter l'extraction
extractAllPersonalities(); 