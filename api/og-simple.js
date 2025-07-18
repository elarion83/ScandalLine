export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  try {
    const url = new URL(req.url);
    const searchParams = url.searchParams;
    
    // Toujours retourner du JSON pour debug
    return new Response(JSON.stringify({
      message: 'API OG Edge Runtime fonctionne !',
      timestamp: new Date().toISOString(),
      url: req.url,
      method: req.method,
      query: Object.fromEntries(searchParams.entries()),
      runtime: 'edge'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
  } catch (error) {
    return new Response(JSON.stringify({
      error: 'Erreur dans l\'API OG',
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString()
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
} 