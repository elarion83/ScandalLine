// API route pour générer des images de partage social
module.exports = async function handler(req, res) {
  try {
    const { searchParams } = new URL(req.url, `http://${req.headers.host}`)
    const name = searchParams.get('name')
    const scandalsCount = searchParams.get('count')
    const totalAmount = searchParams.get('amount')
    const totalFines = searchParams.get('fines')
    const prisonYears = searchParams.get('prison')

    // Formatage des montants
    const formatAmount = (amount) => {
      const num = parseInt(amount)
      if (num >= 1000000000) return `${(num / 1000000000).toFixed(1)}Md€`
      if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M€`
      if (num >= 1000) return `${(num / 1000).toFixed(0)}k€`
      return `${num}€`
    }

    // Créer une image SVG simple
    const svg = `
      <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#1e293b;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#334155;stop-opacity:1" />
          </linearGradient>
          <linearGradient id="logo" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#ec4899;stop-opacity:1" />
          </linearGradient>
          <linearGradient id="title" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#fbbf24;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#f59e0b;stop-opacity:1" />
          </linearGradient>
        </defs>
        
        <!-- Background -->
        <rect width="1200" height="630" fill="url(#bg)"/>
        
        <!-- Logo ScandalLine en haut à gauche -->
        <g transform="translate(40, 40)">
          <rect width="48" height="48" rx="12" fill="url(#logo)"/>
          <text x="24" y="32" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="24" font-weight="bold">SK</text>
          <text x="70" y="32" fill="url(#logo)" font-family="Arial, sans-serif" font-size="32" font-weight="bold">ScandalLine</text>
        </g>
        
        <!-- Contenu principal centré -->
        <g transform="translate(600, 315)">
          <!-- Nom de la personnalité -->
          <text y="-50" text-anchor="middle" fill="url(#title)" font-family="Arial, sans-serif" font-size="72" font-weight="bold">${name || 'Personnalité'}</text>
          
          <!-- Sous-titre -->
          <text y="20" text-anchor="middle" fill="#94a3b8" font-family="Arial, sans-serif" font-size="32">Timeline des scandales</text>
        </g>
        
        <!-- Statistiques en bas -->
        <g transform="translate(600, 550)">
          <!-- Nombre de scandales -->
          <g transform="translate(-180, 0)">
            <rect x="-24" y="-24" width="48" height="48" rx="12" fill="#3b82f6"/>
            <text x="0" y="8" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="20" font-weight="bold">📄</text>
            <text x="0" y="40" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="24" font-weight="bold">${scandalsCount || '0'}</text>
            <text x="0" y="60" text-anchor="middle" fill="#94a3b8" font-family="Arial, sans-serif" font-size="16">Scandales</text>
          </g>
          
          ${totalAmount && parseInt(totalAmount) > 0 ? `
          <!-- Montant total -->
          <g transform="translate(-60, 0)">
            <rect x="-24" y="-24" width="48" height="48" rx="12" fill="#ef4444"/>
            <text x="0" y="8" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="20" font-weight="bold">💰</text>
            <text x="0" y="40" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="24" font-weight="bold">${formatAmount(totalAmount)}</text>
            <text x="0" y="60" text-anchor="middle" fill="#94a3b8" font-family="Arial, sans-serif" font-size="16">Montant</text>
          </g>
          ` : ''}
          
          ${totalFines && parseInt(totalFines) > 0 ? `
          <!-- Amendes -->
          <g transform="translate(60, 0)">
            <rect x="-24" y="-24" width="48" height="48" rx="12" fill="#f97316"/>
            <text x="0" y="8" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="20" font-weight="bold">⚖️</text>
            <text x="0" y="40" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="24" font-weight="bold">${formatAmount(totalFines)}</text>
            <text x="0" y="60" text-anchor="middle" fill="#94a3b8" font-family="Arial, sans-serif" font-size="16">Amendes</text>
          </g>
          ` : ''}
          
          ${prisonYears && parseInt(prisonYears) > 0 ? `
          <!-- Années de prison -->
          <g transform="translate(180, 0)">
            <rect x="-24" y="-24" width="48" height="48" rx="12" fill="#8b5cf6"/>
            <text x="0" y="8" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="20" font-weight="bold">🔒</text>
            <text x="0" y="40" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="24" font-weight="bold">${prisonYears}</text>
            <text x="0" y="60" text-anchor="middle" fill="#94a3b8" font-family="Arial, sans-serif" font-size="16">Ans prison</text>
          </g>
          ` : ''}
        </g>
      </svg>
    `

    // Retourner l'image SVG
    res.setHeader('Content-Type', 'image/svg+xml')
    res.setHeader('Cache-Control', 'public, max-age=3600')
    res.status(200).send(svg)
  } catch (error) {
    console.error('Erreur dans l\'API og:', error)
    res.status(500).send('Erreur interne du serveur')
  }
} 