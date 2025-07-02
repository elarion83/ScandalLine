import React, { useState } from 'react';
import { Share2, Facebook, Twitter, Link as LinkIcon, Download, Check } from 'lucide-react';
import { Scandal } from '../../types/scandal';
import { cleanScandalName } from '../../utils/scandalUtils';

interface ShareMenuProps {
  scandal: Scandal;
}

export const ShareMenu: React.FC<ShareMenuProps> = ({ scandal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = async (platform: 'facebook' | 'twitter' | 'copy' | 'download') => {
    const url = window.location.href;
    const text = `${scandal.name} - ${scandal.description}`;

    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        break;
      case 'download':
        // TODO: Implémenter la génération de PDF/PNG
        console.log('Download not implemented yet');
        break;
    }
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg hover:bg-white/20 transition-colors"
        title="Partager"
      >
        <Share2 className="w-5 h-5 text-white" />
      </button>

      {isOpen && (
        <>
          {/* Overlay */}
          <div className="fixed inset-0" style={{ zIndex: 55 }} onClick={() => setIsOpen(false)} />

          {/* Menu */}
          <div className="absolute top-full right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden" style={{ zIndex: 60 }}>
            <div className="p-2 space-y-1">
              <button
                onClick={() => handleShare('facebook')}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <Facebook className="w-4 h-4" />
                Facebook
              </button>
              <button
                onClick={() => handleShare('twitter')}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <Twitter className="w-4 h-4" />
                Twitter
              </button>
              <button
                onClick={() => handleShare('copy')}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <LinkIcon className="w-4 h-4" />
                )}
                {copied ? 'Copié !' : 'Copier le lien'}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}; 