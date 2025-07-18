// Route de test simple pour vérifier que les API routes fonctionnent
export default function handler(req, res) {
  console.log('[TEST API] Request received:', req.url);
  
  res.status(200).json({
    message: 'API routes fonctionnent correctement !',
    timestamp: new Date().toISOString(),
    method: req.method,
    query: req.query,
    url: req.url
  });
} 