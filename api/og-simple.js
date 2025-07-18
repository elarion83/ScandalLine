export default async function handler(req, res) {
  try {
    console.log('[OG Simple API] Request received:', req.url);
    console.log('[OG Simple API] Query:', req.query);
    
    // Toujours retourner du JSON pour debug
    return res.status(200).json({
      message: 'API OG Simple fonctionne !',
      timestamp: new Date().toISOString(),
      url: req.url,
      method: req.method,
      query: req.query,
      runtime: 'nodejs'
    });
    
  } catch (error) {
    console.error('[OG Simple API] Error:', error);
    return res.status(500).json({
      error: 'Erreur dans l\'API OG Simple',
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString()
    });
  }
} 