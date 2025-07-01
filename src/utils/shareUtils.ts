import { ContextualFilter } from '../types/scandal';

// Utility functions for sharing and URL management
export const shareUtils = {
  
  // Generate shareable URL with filters encoded
  generateShareUrl(contextualFilter?: ContextualFilter | null): string {
    const baseUrl = window.location.origin + window.location.pathname;
    
    if (!contextualFilter) {
      return baseUrl;
    }
    
    const params = new URLSearchParams();
    params.set('filter', JSON.stringify(contextualFilter));
    
    return `${baseUrl}?${params.toString()}`;
  },

  // Parse URL parameters to restore contextual filter
  parseUrlFilter(): ContextualFilter | null {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const filterParam = urlParams.get('filter');
      
      if (!filterParam) {
        return null;
      }
      
      const parsedFilter = JSON.parse(filterParam);
      
      // Validate the filter structure
      if (parsedFilter && 
          typeof parsedFilter.type === 'string' && 
          (parsedFilter.value !== undefined) &&
          typeof parsedFilter.label === 'string') {
        return parsedFilter as ContextualFilter;
      }
      
      return null;
    } catch (error) {
      console.warn('Error parsing URL filter:', error);
      return null;
    }
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