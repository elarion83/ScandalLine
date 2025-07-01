const baseUrl = 'https://scandalline.fr';
export const shareUtils = {
    // Copy text to clipboard with fallback
    async copyToClipboard(text) {
        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(text);
                return true;
            }
            else {
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
        }
        catch (error) {
            console.error('Failed to copy to clipboard:', error);
            return false;
        }
    },
    generateShareUrl: (contextualFilter) => {
        if (!contextualFilter)
            return baseUrl;
        const params = new URLSearchParams();
        params.set('filter', contextualFilter.type);
        params.set('value', contextualFilter.value.toString());
        params.set('label', contextualFilter.label);
        return `${baseUrl}?${params.toString()}`;
    },
    parseUrlFilter: () => {
        if (typeof window === 'undefined')
            return null;
        const params = new URLSearchParams(window.location.search);
        const filterType = params.get('filter');
        const filterValue = params.get('value');
        const filterLabel = params.get('label');
        if (!filterType || !filterValue || !filterLabel)
            return null;
        if (['personality', 'party', 'status', 'scandalType'].includes(filterType)) {
            return {
                type: filterType,
                value: filterValue,
                label: filterLabel
            };
        }
        return null;
    },
    // Update URL without reload
    updateUrl(contextualFilter) {
        const newUrl = this.generateShareUrl(contextualFilter);
        // Only update if URL has changed
        if (newUrl !== window.location.href) {
            window.history.pushState({ filter: contextualFilter }, '', newUrl);
        }
    },
    // Generate title based on context for sharing
    generateShareTitle(contextualFilter) {
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
    // Share via Web Share API with fallback
    async shareNative(title, text, url) {
        try {
            if (navigator.share) {
                await navigator.share({ title, text, url });
                return true;
            }
            else {
                // Fallback to copying the full text
                const fullText = `${title}\n\n${text}\n\n${url}`;
                return await this.copyToClipboard(fullText);
            }
        }
        catch (error) {
            console.error('Error sharing:', error);
            return false;
        }
    }
};
