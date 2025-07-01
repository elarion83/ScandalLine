import { ContextualFilter } from '../types/scandal';

const baseUrl = 'https://scandalline.fr';

interface ShareUtils {
  copyToClipboard(text: string): Promise<boolean>;
  shareNative(title: string, text: string, url: string): Promise<void>;
  generateShareTitle(contextualFilter: ContextualFilter | null): string;
  generateShareUrl(contextualFilter: ContextualFilter | null): string;
  parseUrlFilter(): ContextualFilter | null;
}

export const shareUtils: ShareUtils = {
  copyToClipboard: async (text: string): Promise<boolean> => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      console.error('Failed to copy text: ', err);
      return false;
    }
  },

  shareNative: async (title: string, text: string, url: string): Promise<void> => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url
        });
      } catch (err) {
        if (err instanceof Error && err.name !== 'AbortError') {
          console.error('Error sharing:', err);
        }
      }
    } else {
      await shareUtils.copyToClipboard(`${title}\n\n${text}\n\n${url}`);
    }
  },

  generateShareTitle: (contextualFilter: ContextualFilter | null): string => {
    if (!contextualFilter) return 'ScandalList : La bibliothèque aux scandales';

    switch (contextualFilter.type) {
      case 'personality':
        return `ScandalList de ${contextualFilter.label}`;
      case 'party':
        return `Affaires liées au ${contextualFilter.label}`;
      case 'status':
        return `Affaires ${contextualFilter.label}`;
      case 'scandalType':
        return `Affaires de type "${contextualFilter.label}"`;
      default:
        return 'ScandalList : La bibliothèque aux scandales';
    }
  },

  generateShareUrl: (contextualFilter: ContextualFilter | null): string => {
    if (!contextualFilter) return baseUrl;

    const params = new URLSearchParams();
    params.set('filter', contextualFilter.type);
    params.set('value', contextualFilter.value.toString());
    params.set('label', contextualFilter.label);

    return `${baseUrl}?${params.toString()}`;
  },

  parseUrlFilter: (): ContextualFilter | null => {
    if (typeof window === 'undefined') return null;

    const params = new URLSearchParams(window.location.search);
    const filterType = params.get('filter');
    const filterValue = params.get('value');
    const filterLabel = params.get('label');

    if (!filterType || !filterValue || !filterLabel) return null;

    if (['personality', 'party', 'status', 'scandalType'].includes(filterType)) {
      return {
        type: filterType as 'personality' | 'party' | 'status' | 'scandalType',
        value: filterValue,
        label: filterLabel
      };
    }

    return null;
  },

  // Update URL without reload
  updateUrl(contextualFilter?: ContextualFilter | null): void {
    const newUrl = this.generateShareUrl(contextualFilter);
    
    // Only update if URL has changed
    if (newUrl !== window.location.href) {
      window.history.pushState({ filter: contextualFilter }, '', newUrl);
    }
  },

  // Generate title based on context for sharing
  generateShareTitle(contextualFilter?: ContextualFilter | null): string {
    if (!contextualFilter) {
      return 'ScandalList : La bibliothèque aux scandales';
    }

    switch (contextualFilter.type) {
      case 'personality':
        return `ScandalList de ${contextualFilter.value}`;
      case 'party':
        return `ScandalList du ${contextualFilter.value}`;
      case 'status':
        const statusText = contextualFilter.value === 'convicted' ? 'condamnées' :
                          contextualFilter.value === 'acquitted' ? 'acquittées' :
                          contextualFilter.value === 'ongoing' ? 'en cours' : 'jugées';
        return `ScandalList des affaires ${statusText}`;
      case 'scandalType':
        const typeText = contextualFilter.value === 'political' ? 'politiques' :
                        contextualFilter.value === 'financial' ? 'financiers' :
                        contextualFilter.value === 'corruption' ? 'de corruption' :
                        String(contextualFilter.value);
        return `ScandalList des scandales ${typeText}`;
      default:
        return 'ScandalList : La bibliothèque aux scandales';
    }
  },

  // Copy text to clipboard with fallback
  async copyToClipboard(text: string): Promise<boolean> {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      } else {
        // Fallback for older browsers or non-secure contexts
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        return successful;
      }
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
      return false;
    }
  },

  // Share via Web Share API with fallback
  async shareNative(title: string, text: string, url: string): Promise<boolean> {
    try {
      if (navigator.share) {
        await navigator.share({ title, text, url });
        return true;
      } else {
        // Fallback to copying the full text
        const fullText = `${title}\n\n${text}\n\n${url}`;
        return await this.copyToClipboard(fullText);
      }
    } catch (error) {
      console.error('Error sharing:', error);
      return false;
    }
  }
}; 