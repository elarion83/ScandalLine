import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  try {
    const url = new URL(req.url);
    const searchParams = url.searchParams;
    
    console.log('[OG API] Request received:', req.url);
    
    // Test simple en JSON d'abord
    if (searchParams.get('test') === 'true') {
      return new Response(JSON.stringify({
        message: 'API OG fonctionne !',
        timestamp: new Date().toISOString(),
        query: Object.fromEntries(searchParams.entries())
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    
    // Paramètres avec valeurs par défaut pour éviter les erreurs
    const name = searchParams.get('name') || 'ScandalLine';
    const scandalsCount = searchParams.get('count') || '0';
    const totalAmount = searchParams.get('amount') || '0';
    const totalFines = searchParams.get('fines') || '0';
    const totalPrison = searchParams.get('prison') || '0';
    
    // Fonction helper pour formater les nombres
    const formatLargeNumber = (num) => {
      const number = parseInt(num, 10);
      if (number >= 1000000000) return `${(number / 1000000000).toFixed(1)}Md€`;
      if (number >= 1000000) return `${(number / 1000000).toFixed(1)}M€`;
      if (number >= 1000) return `${(number / 1000).toFixed(0)}k€`;
      return `${number.toLocaleString('fr-FR')}€`;
    };

    // Charger le logo (base64 embedded pour éviter les erreurs de chargement)
    const logoSvg = `<svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="40" rx="8" fill="white"/>
      <text x="60" y="25" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="#1f2937">ScandalLine</text>
    </svg>`;

    const imageResponse = new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '40px',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          {/* Header avec logo */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              width: '100%',
            }}
          >
            <div
              style={{
                width: '120px',
                height: '40px',
                background: 'white',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1f2937',
                fontSize: '16px',
                fontWeight: 'bold',
              }}
            >
              ScandalLine
            </div>
          </div>

          {/* Titre central */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <h1
              style={{
                fontSize: '48px',
                fontWeight: 'bold',
                margin: '0 0 20px 0',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              }}
            >
              {name}
            </h1>
            <p
              style={{
                fontSize: '24px',
                margin: '0',
                opacity: 0.9,
              }}
            >
              {scandalsCount} scandal{parseInt(scandalsCount) > 1 ? 's' : ''} référencé{parseInt(scandalsCount) > 1 ? 's' : ''}
            </p>
          </div>

          {/* Statistiques en bas */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '40px',
              width: '100%',
              flexWrap: 'wrap',
            }}
          >
            {/* Montant concerné */}
            {parseInt(totalAmount) > 0 && (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  background: 'rgba(255,255,255,0.1)',
                  padding: '20px',
                  borderRadius: '12px',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div
                  style={{
                    fontSize: '24px',
                    marginBottom: '8px',
                  }}
                >
                  💰
                </div>
                <div
                  style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: '#fbbf24',
                  }}
                >
                  {formatLargeNumber(totalAmount)}
                </div>
                <div
                  style={{
                    fontSize: '14px',
                    opacity: 0.8,
                  }}
                >
                  Montant concerné
                </div>
              </div>
            )}

            {/* Amendes */}
            {parseInt(totalFines) > 0 && (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  background: 'rgba(255,255,255,0.1)',
                  padding: '20px',
                  borderRadius: '12px',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div
                  style={{
                    fontSize: '24px',
                    marginBottom: '8px',
                  }}
                >
                  ⚖️
                </div>
                <div
                  style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: '#f97316',
                  }}
                >
                  {formatLargeNumber(totalFines)}
                </div>
                <div
                  style={{
                    fontSize: '14px',
                    opacity: 0.8,
                  }}
                >
                  Amendes
                </div>
              </div>
            )}

            {/* Prison */}
            {parseInt(totalPrison) > 0 && (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  background: 'rgba(255,255,255,0.1)',
                  padding: '20px',
                  borderRadius: '12px',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div
                  style={{
                    fontSize: '24px',
                    marginBottom: '8px',
                  }}
                >
                  🔒
                </div>
                <div
                  style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: '#dc2626',
                  }}
                >
                  {totalPrison} an{parseInt(totalPrison) > 1 ? 's' : ''}
                </div>
                <div
                  style={{
                    fontSize: '14px',
                    opacity: 0.8,
                  }}
                >
                  Prison
                </div>
              </div>
            )}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );

    console.log('[OG API] Image générée avec succès');
    return imageResponse;
    
  } catch (error) {
    console.error('Erreur lors de la génération de l\'image OG:', error);
    
    // Retourner une erreur JSON en cas de problème
    return new Response(JSON.stringify({
      error: 'Erreur lors de la génération de l\'image',
      message: error.message,
      timestamp: new Date().toISOString()
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    // Image de fallback en cas d'erreur (commenté pour debug)
    /*return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          <div
            style={{
              fontSize: '48px',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            ScandalLine
          </div>
          <div
            style={{
              fontSize: '24px',
              marginTop: '20px',
              opacity: 0.8,
            }}
          >
            Timeline des scandales politiques français
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );*/
  }
} 