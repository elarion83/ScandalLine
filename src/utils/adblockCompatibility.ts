// Utilitaires pour améliorer la compatibilité avec les adblocks

export const adblockCompatibility = {
  // Détecter si l'adblock est probablement actif
  isAdBlockActive(): boolean {
    try {
      // Test 1: Vérifier si les éléments avec des noms suspects sont cachés
      const testElement = document.createElement('div');
      testElement.className = 'adsbox';
      testElement.style.position = 'absolute';
      testElement.style.left = '-10000px';
      testElement.style.top = '-1000px';
      testElement.style.width = '1px';
      testElement.style.height = '1px';
      
      document.body.appendChild(testElement);
      
      const isHidden = testElement.offsetHeight === 0 || testElement.offsetWidth === 0;
      document.body.removeChild(testElement);
      
      return isHidden;
    } catch (error) {
      return false;
    }
  },

  // Charger les icônes de manière sécurisée
  async loadIcons(): Promise<any> {
    try {
      const lucideModule = await import('lucide-react');
      return lucideModule;
    } catch (error) {
      console.warn('Impossible de charger lucide-react, utilisation des icônes de fallback');
      return null;
    }
  },

  // Vérifier si les scripts externes sont bloqués
  checkExternalScripts(): boolean {
    try {
      // Test simple pour vérifier si les scripts externes sont bloqués
      const testScript = document.createElement('script');
      testScript.src = 'https://example.com/test.js';
      testScript.onerror = () => {
        console.warn('Scripts externes potentiellement bloqués');
      };
      document.head.appendChild(testScript);
      setTimeout(() => {
        if (document.head.contains(testScript)) {
          document.head.removeChild(testScript);
        }
      }, 1000);
      return true;
    } catch (error) {
      return false;
    }
  },

  // Appliquer des styles pour éviter la détection
  applyAntiDetectionStyles(): void {
    // Ajouter des styles pour éviter la détection par certains adblocks
    const style = document.createElement('style');
    style.textContent = `
      /* Styles pour éviter la détection par les adblocks */
      .adsbox, .advertisement, .ads {
        display: none !important;
      }
      
      /* Masquer les éléments qui pourraient être détectés comme des pubs */
      [class*="ad-"], [id*="ad-"], [class*="ads-"], [id*="ads-"] {
        display: none !important;
      }
    `;
    document.head.appendChild(style);
  }
}; 