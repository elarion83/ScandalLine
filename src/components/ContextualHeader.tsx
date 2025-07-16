import React, { useState } from 'react';
import { ArrowLeft, Users, Building, Scale, FileText, Copy, Check } from 'lucide-react';
import { ContextualFilter } from '../types/scandal';
import { getContextualTitle, getContextualDescription } from '../utils/contextualFilters';
import { nameToSlug } from '../utils/shareUtils';
import { perso_Photos } from '../data/perso_photos';

interface ContextualHeaderProps {
  contextualFilter: ContextualFilter;
  filteredCount: number;
  totalMoney: number;
  filteredScandals: any[];
  onBack: () => void;
  shouldUseAdaptiveLayout: boolean;
  startYear: number;
  endYear: number;
  containerRef: React.RefObject<HTMLDivElement>;
}

const ContextualHeader: React.FC<ContextualHeaderProps> = ({
  contextualFilter,
  filteredCount,
  totalMoney,
  filteredScandals,
  onBack
}) => {
  const [copied, setCopied] = useState(false);

  const getIcon = () => {
    switch (contextualFilter.type) {
      case 'personality':
        return <Users className="w-6 h-6" />;
      case 'party':
        return <Building className="w-6 h-6" />;
      case 'status':
        return <Scale className="w-6 h-6" />;
      case 'scandalType':
        return <FileText className="w-6 h-6" />;
      default:
        return <FileText className="w-6 h-6" />;
    }
  };

  const getColorClasses = () => {
    switch (contextualFilter.type) {
      case 'personality':
        return 'bg-slate-600 text-white';
      case 'party':
        return 'bg-slate-700 text-white';
      case 'status':
        return 'bg-slate-500 text-white';
      case 'scandalType':
        return 'bg-slate-800 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getPersonalityPhoto = () => {
    if (contextualFilter.type !== 'personality') return null;
    
    const slug = nameToSlug(contextualFilter.value.toString());
    // Type assertion pour éviter l'erreur TypeScript
    const photoData = (perso_Photos[0] as any)?.[slug];
    
    if (photoData?.url) {
      return (
        <img 
          src={photoData.url} 
          alt={contextualFilter.value.toString()}
          className="w-8 h-8 rounded object-cover"
          onError={(e) => {
            // En cas d'erreur de chargement, remplacer par l'icône
            e.currentTarget.style.display = 'none';
            e.currentTarget.nextElementSibling?.classList.remove('hidden');
          }}
        />
      );
    }
    
    // Si aucune photo n'est trouvée, retourner null pour que l'icône de fallback s'affiche
    return null;
  };

  // Récupérer le dernier poste connu de la personne
  const getCurrentPosition = (personName: string) => {
    // Trier les scandales par date décroissante
    const sortedScandals = [...filteredScandals].sort((a, b) => 
      new Date(b.startDate) - new Date(a.startDate)
    );

    // Trouver le dernier scandale où la personne a un poste
    for (const scandal of sortedScandals) {
      if (scandal.personalities) {
        // Gérer les deux formats : tableau de chaînes ou tableau d'objets
        const personIndex = scandal.personalities.findIndex(personData => {
          const personalityName = typeof personData === 'string' ? personData : personData.personality;
          return personalityName === personName;
        });
        
        if (personIndex !== -1) {
          // Si c'est le nouveau format (objets), récupérer la position directement
          if (typeof scandal.personalities[personIndex] === 'object') {
            return scandal.personalities[personIndex].position;
          }
          // Si c'est l'ancien format (chaînes), utiliser le tableau positions
          else if (scandal.positions && scandal.positions[personIndex]) {
        return scandal.positions[personIndex];
          }
        }
      }
    }

    return ''; // Retourner une chaîne vide si aucun poste trouvé
  };

  const currentPosition = contextualFilter.type === 'personality' 
    ? getCurrentPosition(contextualFilter.value.toString())
    : '';

  const handleCopyUrl = async () => {
    try {
      // Générer l'URL au format /timeline/nom
      let url = '';
      if (contextualFilter.type === 'personality') {
        const slug = nameToSlug(contextualFilter.value.toString());
        url = `${window.location.origin}/timeline/${slug}`;
      } else {
        // Pour les autres types, utiliser l'URL actuelle
        url = window.location.href;
      }

      await navigator.clipboard.writeText(url);
      setCopied(true);
      
      // Reset après 2 secondes
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Erreur lors de la copie:', error);
    }
  };

  return (
    <div className="texture-overlay bg-gradient-to-r from-gray-800 to-gray-900 text-white px-4 py-2 md:px-6 md:py-4 border-b border-gray-700">
      {/* Desktop version */}
      <div className="hidden md:flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span className="text-sm font-medium">Retour</span>
          </button>

          <div className="w-px h-8 bg-white/20" />

          <div className="flex items-center gap-3">
            <div className={`p-1 rounded-lg ${getColorClasses()} relative`}>
              {contextualFilter.type === 'personality' ? (
                getPersonalityPhoto() ? (
                  getPersonalityPhoto()
                ) : (
                  getIcon()
                )
              ) : (
                getIcon()
              )}
            </div>
            <div>
              <h1 className="text-xl font-bold">
                {getContextualTitle(contextualFilter)}
              </h1>
              <p className="text-sm text-gray-300">
                {getContextualDescription(contextualFilter, filteredCount)} • {totalMoney.toLocaleString('fr-FR')}€ concernés
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={handleCopyUrl}
          className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
          title="Copier l'URL de la page"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium text-green-400">Copié !</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span className="text-sm font-medium">Copier l'URL</span>
            </>
          )}
        </button>
      </div>

      {/* Mobile version - Layout compact avec bouton retour à gauche */}
      <div className="md:hidden flex items-center gap-3">
        {/* Bouton retour à gauche */}
        <button
          onClick={onBack}
          className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-lg transition-colors flex-shrink-0"
          title="Retour"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>

        {/* Photo/Icone */}
        <div className={`p-1 rounded-lg ${getColorClasses()} relative flex-shrink-0`}>
          {contextualFilter.type === 'personality' ? (
            getPersonalityPhoto() ? (
              getPersonalityPhoto()
            ) : (
              getIcon()
            )
          ) : (
            getIcon()
          )}
        </div>

        {/* Nom et informations */}
        <div className="flex-1 min-w-0">
          <h1 className="text-base font-bold truncate">
            {getContextualTitle(contextualFilter)}
          </h1>
          <p className="text-xs text-gray-300 truncate">
            {currentPosition || `${filteredCount} affaires • ${totalMoney.toLocaleString('fr-FR')}€`}
          </p>
        </div>

        {/* Bouton partage */}
        <button
          onClick={handleCopyUrl}
          className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-lg transition-colors flex-shrink-0"
          title="Copier l'URL"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ContextualHeader;