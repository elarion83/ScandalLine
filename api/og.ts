import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
}

export default async function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const name = searchParams.get('name')
  const scandalsCount = searchParams.get('count')
  const totalAmount = searchParams.get('amount')
  const totalFines = searchParams.get('fines')
  const prisonYears = searchParams.get('prison')

  // Formatage des montants
  const formatAmount = (amount: string) => {
    const num = parseInt(amount)
    if (num >= 1000000000) return `${(num / 1000000000).toFixed(1)}Md€`
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M€`
    if (num >= 1000) return `${(num / 1000).toFixed(0)}k€`
    return `${num}€`
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
          color: 'white',
          position: 'relative',
          padding: '40px',
        }}
      >
        {/* Logo ScandalLine en haut à gauche */}
        <div
          style={{
            position: 'absolute',
            top: '40px',
            left: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              fontWeight: 'bold',
            }}
          >
            SK
          </div>
          <div
            style={{
              fontSize: '32px',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            ScandalLine
          </div>
        </div>

        {/* Contenu principal centré */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          {/* Nom de la personnalité */}
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              margin: '0 0 20px 0',
              background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            {name}
          </h1>

          {/* Sous-titre */}
          <p
            style={{
              fontSize: '32px',
              color: '#94a3b8',
              margin: '0 0 60px 0',
            }}
          >
            Timeline des scandales
          </p>
        </div>

        {/* Statistiques en bas */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '60px',
            marginTop: 'auto',
          }}
        >
          {/* Nombre de scandales */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                fontWeight: 'bold',
              }}
            >
              📄
            </div>
            <div
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
              }}
            >
              {scandalsCount}
            </div>
            <div
              style={{
                fontSize: '16px',
                color: '#94a3b8',
              }}
            >
              Scandales
            </div>
          </div>

          {/* Montant total */}
          {totalAmount && parseInt(totalAmount) > 0 && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  fontWeight: 'bold',
                }}
              >
                💰
              </div>
              <div
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                }}
              >
                {formatAmount(totalAmount)}
              </div>
              <div
                style={{
                  fontSize: '16px',
                  color: '#94a3b8',
                }}
              >
                Montant
              </div>
            </div>
          )}

          {/* Amendes */}
          {totalFines && parseInt(totalFines) > 0 && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  fontWeight: 'bold',
                }}
              >
                ⚖️
              </div>
              <div
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                }}
              >
                {formatAmount(totalFines)}
              </div>
              <div
                style={{
                  fontSize: '16px',
                  color: '#94a3b8',
                }}
              >
                Amendes
              </div>
            </div>
          )}

          {/* Années de prison */}
          {prisonYears && parseInt(prisonYears) > 0 && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  fontWeight: 'bold',
                }}
              >
                🔒
              </div>
              <div
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                }}
              >
                {prisonYears}
              </div>
              <div
                style={{
                  fontSize: '16px',
                  color: '#94a3b8',
                }}
              >
                Ans prison
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
  )
} 