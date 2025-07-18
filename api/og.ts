import { ImageResponse } from '@vercel/og'

export default async function handler(req: any, res: any) {
  const { searchParams } = new URL(req.url, `http://${req.headers.host}`)
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
    {
      type: 'div',
      props: {
        style: {
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
          color: 'white',
          position: 'relative',
          padding: '40px',
        },
        children: [
          // Logo ScandalLine en haut à gauche
          {
            type: 'div',
            props: {
              style: {
                position: 'absolute',
                top: '40px',
                left: '40px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      width: '48px',
                      height: '48px',
                      background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '24px',
                      fontWeight: 'bold',
                    },
                    children: 'SK',
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: '32px',
                      fontWeight: 'bold',
                      background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
                      backgroundClip: 'text',
                      color: 'transparent',
                    },
                    children: 'ScandalLine',
                  },
                },
              ],
            },
          },
          // Contenu principal centré
          {
            type: 'div',
            props: {
              style: {
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
              },
              children: [
                // Nom de la personnalité
                {
                  type: 'h1',
                  props: {
                    style: {
                      fontSize: '72px',
                      fontWeight: 'bold',
                      margin: '0 0 20px 0',
                      background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                      backgroundClip: 'text',
                      color: 'transparent',
                    },
                    children: name || 'Personnalité',
                  },
                },
                // Sous-titre
                {
                  type: 'p',
                  props: {
                    style: {
                      fontSize: '32px',
                      color: '#94a3b8',
                      margin: '0 0 60px 0',
                    },
                    children: 'Timeline des scandales',
                  },
                },
              ],
            },
          },
          // Statistiques en bas
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                justifyContent: 'center',
                gap: '60px',
                marginTop: 'auto',
              },
              children: [
                // Nombre de scandales
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '8px',
                    },
                    children: [
                      {
                        type: 'div',
                        props: {
                          style: {
                            width: '48px',
                            height: '48px',
                            background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '20px',
                            fontWeight: 'bold',
                          },
                          children: '📄',
                        },
                      },
                      {
                        type: 'div',
                        props: {
                          style: {
                            fontSize: '24px',
                            fontWeight: 'bold',
                          },
                          children: scandalsCount || '0',
                        },
                      },
                      {
                        type: 'div',
                        props: {
                          style: {
                            fontSize: '16px',
                            color: '#94a3b8',
                          },
                          children: 'Scandales',
                        },
                      },
                    ],
                  },
                },
                // Montant total
                ...(totalAmount && parseInt(totalAmount) > 0 ? [{
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '8px',
                    },
                    children: [
                      {
                        type: 'div',
                        props: {
                          style: {
                            width: '48px',
                            height: '48px',
                            background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '20px',
                            fontWeight: 'bold',
                          },
                          children: '💰',
                        },
                      },
                      {
                        type: 'div',
                        props: {
                          style: {
                            fontSize: '24px',
                            fontWeight: 'bold',
                          },
                          children: formatAmount(totalAmount),
                        },
                      },
                      {
                        type: 'div',
                        props: {
                          style: {
                            fontSize: '16px',
                            color: '#94a3b8',
                          },
                          children: 'Montant',
                        },
                      },
                    ],
                  },
                }] : []),
                // Amendes
                ...(totalFines && parseInt(totalFines) > 0 ? [{
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '8px',
                    },
                    children: [
                      {
                        type: 'div',
                        props: {
                          style: {
                            width: '48px',
                            height: '48px',
                            background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '20px',
                            fontWeight: 'bold',
                          },
                          children: '⚖️',
                        },
                      },
                      {
                        type: 'div',
                        props: {
                          style: {
                            fontSize: '24px',
                            fontWeight: 'bold',
                          },
                          children: formatAmount(totalFines),
                        },
                      },
                      {
                        type: 'div',
                        props: {
                          style: {
                            fontSize: '16px',
                            color: '#94a3b8',
                          },
                          children: 'Amendes',
                        },
                      },
                    ],
                  },
                }] : []),
                // Années de prison
                ...(prisonYears && parseInt(prisonYears) > 0 ? [{
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '8px',
                    },
                    children: [
                      {
                        type: 'div',
                        props: {
                          style: {
                            width: '48px',
                            height: '48px',
                            background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '20px',
                            fontWeight: 'bold',
                          },
                          children: '🔒',
                        },
                      },
                      {
                        type: 'div',
                        props: {
                          style: {
                            fontSize: '24px',
                            fontWeight: 'bold',
                          },
                          children: prisonYears,
                        },
                      },
                      {
                        type: 'div',
                        props: {
                          style: {
                            fontSize: '16px',
                            color: '#94a3b8',
                          },
                          children: 'Ans prison',
                        },
                      },
                    ],
                  },
                }] : []),
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
    }
  )
} 