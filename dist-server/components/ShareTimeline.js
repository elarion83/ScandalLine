import React, { useState } from 'react';
import { Share2, Facebook, Twitter, Link2 } from 'lucide-react';
import { formatLargeNumber } from '../utils/scandalUtils';
import { shareUtils } from '../utils/shareUtils';
const ShareTimeline = ({ scandals, contextualFilter }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    // Calculate cumulative statistics for all scandals
    const stats = {
        count: scandals.length,
        totalMoney: scandals.reduce((sum, s) => sum + (s.moneyAmount || 0), 0),
        totalFines: scandals.reduce((sum, s) => sum + (s.fine || 0), 0),
        totalPrison: scandals.reduce((sum, s) => sum + (s.prisonYears || 0), 0),
        mostAffectedParty: (() => {
            const byParty = scandals.reduce((acc, scandal) => {
                if (scandal.politicalParty) {
                    acc[scandal.politicalParty] = (acc[scandal.politicalParty] || 0) + 1;
                }
                return acc;
            }, {});
            if (Object.keys(byParty).length === 0)
                return null;
            const sorted = Object.entries(byParty).sort(([, a], [, b]) => b - a);
            return { party: sorted[0][0], count: sorted[0][1] };
        })()
    };
    // Generate share description with the 4 main statistics
    const getShareDescription = () => {
        let description = `📊 ${stats.count} affaire${stats.count > 1 ? 's' : ''} recensée${stats.count > 1 ? 's' : ''}`;
        if (stats.totalMoney > 0) {
            description += ` • 💰 ${formatLargeNumber(stats.totalMoney)} concernés`;
        }
        if (stats.totalFines > 0) {
            description += ` • 🏛️ ${formatLargeNumber(stats.totalFines)} d'amendes`;
        }
        if (stats.totalPrison > 0) {
            description += ` • ⚖️ ${stats.totalPrison} an${stats.totalPrison > 1 ? 's' : ''} de prison`;
        }
        // Only show most affected party if not filtering by a specific personality
        if (stats.mostAffectedParty && contextualFilter?.type !== 'personality') {
            description += ` • 🎯 ${stats.mostAffectedParty.party} le plus concerné`;
        }
        return description;
    };
    // Handle copy to clipboard with user feedback
    const handleCopy = async (text) => {
        const success = await shareUtils.copyToClipboard(text);
        if (success) {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };
    // Share functions for different platforms
    const shareToTwitter = () => {
        const title = shareUtils.generateShareTitle(contextualFilter);
        const description = getShareDescription();
        const url = shareUtils.generateShareUrl(contextualFilter);
        const text = encodeURIComponent(`${title}\n\n${description}`);
        const encodedUrl = encodeURIComponent(url);
        window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodedUrl}`, '_blank');
    };
    const shareToFacebook = () => {
        const url = encodeURIComponent(shareUtils.generateShareUrl(contextualFilter));
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
    };
    const shareNative = async () => {
        const title = shareUtils.generateShareTitle(contextualFilter);
        const description = getShareDescription();
        const url = shareUtils.generateShareUrl(contextualFilter);
        await shareUtils.shareNative(title, description, url);
    };
    // Generate full share text
    const getFullShareText = () => {
        const title = shareUtils.generateShareTitle(contextualFilter);
        const description = getShareDescription();
        const url = shareUtils.generateShareUrl(contextualFilter);
        return `${title}\n\n${description}\n\n${url}`;
    };
    return (<div className="relative">
      {/* Share button */}
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2 px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors text-sm font-medium" title="Partager cette timeline">
        <Share2 className="w-4 h-4"/>
        <span className="hidden sm:inline">Partager</span>
      </button>

      {/* Share modal */}
      {isOpen && (<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Partager la timeline
              </h3>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-xl" aria-label="Fermer">
                ✕
              </button>
            </div>

            {/* Preview */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                {shareUtils.generateShareTitle(contextualFilter)}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {getShareDescription()}
              </p>
            </div>

            {/* Share options */}
            <div className="space-y-3">
              {/* Copy link */}
              <button onClick={() => handleCopy(shareUtils.generateShareUrl(contextualFilter))} className="w-full flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors">
                <Link2 className="w-5 h-5 text-gray-600 dark:text-gray-400"/>
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {copied ? '✓ Copié !' : 'Copier le lien'}
                </span>
              </button>
              
              {/* Social media */}
              <div className="flex gap-2">
                <button onClick={shareToTwitter} className="flex-1 flex items-center justify-center gap-2 p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
                  <Twitter className="w-4 h-4"/>
                  <span className="text-sm font-medium">Twitter</span>
                </button>

                <button onClick={shareToFacebook} className="flex-1 flex items-center justify-center gap-2 p-3 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors">
                  <Facebook className="w-4 h-4"/>
                  <span className="text-sm font-medium">Facebook</span>
                </button>
              </div>

              
            </div>

            {/* Info note */}
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
              Le lien partagé inclut les filtres actuels et permettra de recréer cette vue
            </p>
          </div>
        </div>)}
    </div>);
};
export default ShareTimeline;
