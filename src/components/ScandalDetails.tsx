import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Users, Building, Tag, Link2, Scale, DollarSign, 
  FileText, ExternalLink, Calendar, X, Building2, AlertTriangle, BadgeCheck, Timer, Ban 
} from 'lucide-react';
import { Scandal } from '../types/scandal';
import { formatLargeNumber, formatDate, cleanScandalName, getCategoryColors, getCategoryLabel } from '../utils/scandalUtils';
import { ClickableType } from './ClickableElements';
import { ScandalModalSection } from './modals/ScandalModalSection';
import { ScandalTimeline } from './modals/ScandalTimeline';
import PersonalityModal from './modals/PersonalityModal';
import { perso_Photos } from '../data/perso_photos';
import { nameToSlug } from '../utils/shareUtils';
//import { ShareMenu } from './modals/ShareMenu';

interface ScandalDetailsProps {
  scandal: Scandal;
  onClose: () => void;
}

const ScandalDetails: React.FC<ScandalDetailsProps> = ({ scandal, onClose }) => {
  const [selectedPerson, setSelectedPerson] = useState<string | null>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) onClose();
  };

  const getPersonPhoto = (personName: string) => {
    const slug = nameToSlug(personName);
    const photoData = perso_Photos[0]?.[slug];
    return photoData?.url || null;
  };

  const handlePersonClick = (personName: string) => {
    setSelectedPerson(personName);
  };

  // Construction des événements de la timeline
  const timelineEvents = [
    { date: scandal.startDate, label: 'Faits', type: 'start' as const },
    ...(scandal.investigationDate ? [{ 
      date: scandal.investigationDate, 
      label: 'Mise en examen', 
      type: 'investigation' as const 
    }] : []),
    ...(scandal.judgmentDate ? [{ 
      date: scandal.judgmentDate, 
      label: 'Jugement', 
      type: 'judgment' as const 
    }] : []),
    ...(scandal.convictionDate ? [{ 
      date: scandal.convictionDate, 
      label: 'Condamnation', 
      type: 'conviction' as const 
    }] : [])
  ];

  const year = new Date(scandal.startDate).getFullYear();

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={handleOverlayClick}
        style={{zIndex: 60}}
      >
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
          {/* Header Sticky */}
          <div className={`sticky top-0 z-10 ${getCategoryColors(scandal.type).gradient} texture-overlay text-white p-4 border-b border-gray-200/50 dark:border-gray-700/50`}>
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-3">
                  {scandal.region && (
                    <span className="flex items-center gap-1.5 ml-5 px-2 py-1 text-sm font-medium bg-white/20 rounded-md">
                      <MapPin className="w-3 h-3" />
                      {scandal.region}
                    </span>
                  )}
                </div>

                <h2 className="text-2xl font-bold ml-5 text-white mb-3 mt-0">
                  {cleanScandalName(scandal.name)}
                </h2>

                <div className="flex flex-wrap items-center ml-5 gap-2">
                  <ClickableType 
                    type={scandal.type}
                    onFilter={onClose}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium shadow-sm bg-white/20"
                  >
                    <Tag className="w-3 h-3" />
                    {getCategoryLabel(scandal.type)}
                  </ClickableType>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/*<ShareMenu scandal={scandal} />*/}
                <button
                  onClick={onClose}
                    className="p-2 rounded-lg hover:bg-white/20 transition-colors"
                    title="Fermer (Échap)"
                >
                    <X className="w-8 h-8 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Contenu Scrollable */}
          <div className="overflow-y-auto max-h-[calc(90vh-12rem)]">
            <div className="p-6 space-y-6">
              {/* Description en premier */}
              <ScandalModalSection 
                title="Description" 
                icon={FileText}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-2 border-gray-300 dark:border-gray-700/50"
              >
                <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {scandal.description}
                </div>
              </ScandalModalSection>

              {/* Section Faits & Sanctions - Affichée uniquement s'il y a des sanctions */}
              {((scandal.moneyAmount ?? 0) > 0 || (scandal.fine ?? 0) > 0 || (scandal.prisonYears ?? 0) > 0 || (scandal.ineligibilityYears ?? 0) > 0 || (scandal.sanctions?.length ?? 0) > 0 || scandal.status || scandal.politicalParty) && (
                <ScandalModalSection 
                  title="Faits & Sanctions" 
                  icon={Scale}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700/50"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {scandal.status && (
                      <div className={`p-4 rounded-xl border ${
                        scandal.status === 'convicted' ? 'bg-red-50 dark:bg-red-900/20 border-red-100 dark:border-red-800/30' :
                        scandal.status === 'acquitted' ? 'bg-green-50 dark:bg-green-900/20 border-green-100 dark:border-green-800/30' :
                        'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-100 dark:border-yellow-800/30'
                      }`}>
                        <div className="flex items-center gap-2 mb-2">
                          {scandal.status === 'convicted' ? <AlertTriangle className="w-4 h-4 text-red-500 dark:text-red-400" /> :
                           scandal.status === 'acquitted' ? <BadgeCheck className="w-4 h-4 text-green-500 dark:text-green-400" /> :
                           <Timer className="w-4 h-4 text-yellow-500 dark:text-yellow-400" />}
                          <span className={`text-sm ${
                            scandal.status === 'convicted' ? 'text-red-600 dark:text-red-400' :
                            scandal.status === 'acquitted' ? 'text-green-600 dark:text-green-400' :
                            'text-yellow-600 dark:text-yellow-400'
                          }`}>
                            Statut
                          </span>
                        </div>
                        <div className={`text-xl font-bold ${
                          scandal.status === 'convicted' ? 'text-red-700 dark:text-red-300' :
                          scandal.status === 'acquitted' ? 'text-green-700 dark:text-green-300' :
                          'text-yellow-700 dark:text-yellow-300'
                        }`}>
                          {scandal.status === 'convicted' ? 'Condamné' : 
                           scandal.status === 'acquitted' ? 'Acquitté' : 
                           scandal.status === 'ongoing' ? 'En cours' : 'Jugé'}
                        </div>
                      </div>
                    )}

                    {(scandal.moneyAmount ?? 0) > 0 && (
                      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-xl border border-red-100 dark:border-red-800/30">
                        <div className="flex items-center gap-2 mb-2">
                          <DollarSign className="w-4 h-4 text-red-500 dark:text-red-400" />
                          <span className="text-sm text-red-600 dark:text-red-400">
                            Montant concerné
                          </span>
                        </div>
                        <div className="text-xl font-bold text-red-700 dark:text-red-300">
                          {formatLargeNumber(scandal.moneyAmount ?? 0)}
                        </div>
                      </div>
                    )}

                    {(scandal.fine ?? 0) > 0 && (
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800/30">
                        <div className="flex items-center gap-2 mb-2">
                          <DollarSign className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                          <span className="text-sm text-blue-600 dark:text-blue-400">
                            Amende
                          </span>
                        </div>
                        <div className="text-xl font-bold text-blue-700 dark:text-blue-300">
                          {formatLargeNumber(scandal.fine ?? 0)}
                        </div>
                      </div>
                    )}

                    {(scandal.prisonYears ?? 0) > 0 && (
                      <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-xl border border-orange-100 dark:border-orange-800/30">
                        <div className="flex items-center gap-2 mb-2">
                          <Scale className="w-4 h-4 text-orange-500 dark:text-orange-400" />
                          <span className="text-sm text-orange-600 dark:text-orange-400">
                            Prison
                          </span>
                        </div>
                        <div className="text-xl font-bold text-orange-700 dark:text-orange-300">
                          {`${scandal.prisonYears ?? 0} an${(scandal.prisonYears ?? 0) > 1 ? 's' : ''}`}
                        </div>
                      </div>
                    )}

                    {(scandal.ineligibilityYears ?? 0) > 0 && (
                      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl border border-purple-100 dark:border-purple-800/30">
                        <div className="flex items-center gap-2 mb-2">
                          <Ban className="w-4 h-4 text-purple-500 dark:text-purple-400" />
                          <span className="text-sm text-purple-600 dark:text-purple-400">
                            Inéligibilité
                          </span>
                        </div>
                        <div className="text-xl font-bold text-purple-700 dark:text-purple-300">
                          {`${scandal.ineligibilityYears ?? 0} an${(scandal.ineligibilityYears ?? 0) > 1 ? 's' : ''}`}
                        </div>
                      </div>
                    )}
                  </div>
                </ScandalModalSection>
              )}

              {/* Section Personnes impliquées */}
              <ScandalModalSection 
                title="Personnes impliquées" 
                icon={Users}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700/50"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {scandal.personalities.map((person, index) => {
                    // Chercher si la personne a des sanctions
                    const sanction = scandal.sanctions?.find(s => s.person === person);
                    const personPhoto = getPersonPhoto(person);
                    
                    return (
                      <div key={index} className="flex flex-col gap-2 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-200/50 dark:border-gray-600/50">
                        <div className="flex items-center gap-3">
                          {personPhoto ? (
                            <img 
                              src={personPhoto} 
                              alt={person}
                              className="w-10 h-10 rounded object-cover"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                          ) : (
                            <div className="w-10 h-10 rounded bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
                              <Users className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                            </div>
                          )}
                          <div className="flex-1">
                            <div className="font-medium text-gray-900 dark:text-white">
                              <button
                                onClick={() => handlePersonClick(person)}
                                className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200 cursor-pointer group"
                                title={`Voir les détails de ${person}`}
                              >
                                <span className="group-hover:underline">{person}</span>
                                <svg 
                                  className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" 
                                  fill="none" 
                                  stroke="currentColor" 
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </button>
                            </div>
                            {scandal.positions[index] && (
                              <div className="text-sm text-gray-600 dark:text-gray-400">
                                {scandal.positions[index]}
                              </div>
                            )}
                          </div>
                        </div>
                        
                        {/* Afficher les sanctions si elles existent */}
                        {sanction && (
                          <div className="mt-2 pt-2 border-t border-gray-200/50 dark:border-gray-600/50">
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              {sanction.penalty}
                            </div>
                            {sanction.fine > 0 && (
                              <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-1">
                                Amende : {formatLargeNumber(sanction.fine)} €
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </ScandalModalSection>

              {/* Section Institution */}
              {(scandal.politicalParty || scandal.institution) && (
                <ScandalModalSection 
                  title="Institution concernée" 
                  icon={Building2}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700/50"
                >
                  <div className="space-y-4">
                    {scandal.politicalParty && (
                      <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-200/50 dark:border-gray-600/50">
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                          Parti politique
                        </div>
                        <div className="font-medium text-gray-900 dark:text-white">
                          {scandal.politicalParty}
                        </div>
                      </div>
                    )}
                    {scandal.institution && (
                      <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-200/50 dark:border-gray-600/50">
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                          Institution
                        </div>
                        <div className="font-medium text-gray-900 dark:text-white">
                          {scandal.institution}
                        </div>
                      </div>
                    )}
                  </div>
                </ScandalModalSection>
              )}

              {/* Timeline */}
              <ScandalModalSection 
                title="Chronologie" 
                icon={Calendar}
                className="bg-white dark:bg-gray-800 p-6 pb-0 rounded-xl border border-gray-100 dark:border-gray-700/50"
              >
                <ScandalTimeline events={timelineEvents} />
              </ScandalModalSection>

              {/* Section Tags et Connexions */}
              {((scandal.tags && scandal.tags.length > 0) || (scandal.relatedScandals && scandal.relatedScandals.length > 0)) && (
                <ScandalModalSection 
                  title="Tags et connexions" 
                  icon={Tag}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700/50"
                >
                  {scandal.tags && scandal.tags.length > 0 && (
                    <div className="mb-4">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        Mots-clés
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {scandal.tags.map((tag, index) => (
                          <ClickableType
                            key={index}
                            type={tag}
                            onFilter={onClose}
                            className="px-3 py-1 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                          >
                            {tag}
                          </ClickableType>
                        ))}
                      </div>
                    </div>
                  )}

                  {scandal.relatedScandals && scandal.relatedScandals.length > 0 && (
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        Affaires liées
                      </div>
                      <div className="space-y-2">
                        {scandal.relatedScandals.map((related, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg text-sm text-gray-700 dark:text-gray-300 transition-colors"
                          >
                            <Link2 className="w-4 h-4" />
                            {related}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </ScandalModalSection>
              )}

              {/* Section Sources */}
              {scandal.sources && scandal.sources.length > 0 && (
                <ScandalModalSection 
                  title="Sources" 
                  icon={FileText}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700/50"
                >
                  <div className="space-y-2">
                    {scandal.sources.map((source, index) => (
                      <a
                        key={index}
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg text-sm text-gray-700 dark:text-gray-300 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {source.name}
                      </a>
                    ))}
                  </div>
                </ScandalModalSection>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* PersonalityModal */}
      {selectedPerson && (
        <PersonalityModal
          name={selectedPerson}
          onClose={() => setSelectedPerson(null)}
          onCloseParent={onClose}
        />
      )}
    </>
  );
};

export default ScandalDetails;