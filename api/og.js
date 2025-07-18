export default async function handler(req, res) {
  try {
    console.log('[OG API] Request received:', req.url);
    console.log('[OG API] Query:', req.query);
    
    // Test simple en JSON d'abord
    if (req.query.test === 'true') {
      return res.status(200).json({
        message: 'API OG fonctionne !',
        timestamp: new Date().toISOString(),
        query: req.query
      });
    }
    
    // Pour l'instant, retourner juste du JSON pour tester
    return res.status(200).json({
      message: 'API OG en mode image (pas encore implémenté)',
      query: req.query,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Erreur lors de la génération de l\'image OG:', error);
    
    return res.status(500).json({
      error: 'Erreur lors de la génération de l\'image',
      message: error.message,
      timestamp: new Date().toISOString()
    });
  }
} 