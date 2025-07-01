import React, { useState, useRef, useEffect } from 'react';
import { Users, DollarSign, Scale, Tag, Building2, BadgeCheck, Timer, AlertTriangle } from 'lucide-react';
import { cleanScandalName, formatLargeNumber, formatDate, getCategoryColors, getCategoryLabel, getMainCategory } from '../utils/scandalUtils';
import { ClickablePerson, ClickableParty, ClickableStatus, ClickableType } from './ClickableElements';
import { AnimatedNumber } from './AnimatedNumber';
import { useTimeline } from '../contexts/TimelineContext';
const ScandalCard = ({ scandal, onClick, isSelected, position, timelineY, className, style }) => {
    const { state } = useTimeline();
    const year = new Date(scandal.startDate).getFullYear();
    const connectionHeight = position.y - timelineY - 4;
    // State to track hover and focus states for dynamic z-index management
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [intersectionRatio, setIntersectionRatio] = useState(0);
    // Check if content should be collapsed (zoom < 67%)
    const isContentCollapsed = (state.zoomLevel / 15) * 100 < 67;
    // Check if there are any sanctions
    const hasSanctions = (scandal.moneyAmount ?? 0) > 0 ||
        (scandal.fine ?? 0) > 0 ||
        (scandal.prisonYears ?? 0) > 0 ||
        (scandal.ineligibilityYears ?? 0) > 0 ||
        (scandal.sanctions?.length ?? 0) > 0;
    // Calculate dynamic z-index based on interaction states and vertical position
    // Higher z-index for hovered/focused cards to ensure they appear above others
    // Lower z-index for cards lower on the timeline
    const getZIndex = () => {
        // Base z-index inversement proportionnel à la position Y
        // Plus la carte est basse, plus son z-index de base est bas
        const baseZIndex = Math.max(1, Math.floor(1000 - position.y));
        if (isSelected)
            return baseZIndex + 1000; // Selected cards always on top
        if (isHovered || isFocused)
            return baseZIndex + 500; // Hovered/focused cards above normal cards
        return baseZIndex; // Default z-index based on vertical position
    };
    const getStatusIcon = () => {
        switch (scandal.status) {
            case 'convicted': return <AlertTriangle className="w-4 h-4"/>;
            case 'acquitted': return <BadgeCheck className="w-4 h-4"/>;
            default: return <Timer className="w-4 h-4"/>;
        }
    };
    // Get color scheme based on scandal type
    const getColorScheme = () => {
        const mainCategory = getMainCategory(scandal.type);
        switch (mainCategory) {
            case 'corruption':
                return {
                    selected: {
                        line: 'w-2 bg-gradient-to-b from-indigo-400 to-indigo-600 shadow-lg shadow-indigo-200/50 dark:shadow-indigo-900/50',
                        dot: 'w-7 h-7 bg-gradient-to-br from-indigo-400 to-indigo-600 border-2 border-white dark:border-gray-800 shadow-lg shadow-indigo-200/50 dark:shadow-indigo-900/50 ring-4 ring-indigo-200/30 dark:ring-indigo-900/30'
                    },
                    hover: {
                        line: 'w-2 bg-gradient-to-b from-indigo-300 to-indigo-500 shadow-md shadow-indigo-200/30 dark:shadow-indigo-900/30',
                        dot: 'w-6 h-6 bg-gradient-to-br from-indigo-300 to-indigo-500 border-2 border-white dark:border-gray-800 shadow-md shadow-indigo-200/30 dark:shadow-indigo-900/30 ring-2 ring-indigo-200/20 dark:ring-indigo-900/20'
                    },
                    default: {
                        line: 'w-1.5 bg-gradient-to-b from-indigo-200 to-indigo-400 dark:from-indigo-600 dark:to-indigo-800',
                        dot: 'w-5 h-5 bg-gradient-to-br from-indigo-200 to-indigo-400 dark:from-indigo-600 dark:to-indigo-800 border-2 border-white dark:border-gray-800'
                    }
                };
            case 'fraude-financiere':
                return {
                    selected: {
                        line: 'w-2 bg-gradient-to-b from-fuchsia-400 to-fuchsia-600 shadow-lg shadow-fuchsia-200/50 dark:shadow-fuchsia-900/50',
                        dot: 'w-7 h-7 bg-gradient-to-br from-fuchsia-400 to-fuchsia-600 border-2 border-white dark:border-gray-800 shadow-lg shadow-fuchsia-200/50 dark:shadow-fuchsia-900/50 ring-4 ring-fuchsia-200/30 dark:ring-fuchsia-900/30'
                    },
                    hover: {
                        line: 'w-2 bg-gradient-to-b from-fuchsia-300 to-fuchsia-500 shadow-md shadow-fuchsia-200/30 dark:shadow-fuchsia-900/30',
                        dot: 'w-6 h-6 bg-gradient-to-br from-fuchsia-300 to-fuchsia-500 border-2 border-white dark:border-gray-800 shadow-md shadow-fuchsia-200/30 dark:shadow-fuchsia-900/30 ring-2 ring-fuchsia-200/20 dark:ring-fuchsia-900/20'
                    },
                    default: {
                        line: 'w-1.5 bg-gradient-to-b from-fuchsia-200 to-fuchsia-400 dark:from-fuchsia-600 dark:to-fuchsia-800',
                        dot: 'w-5 h-5 bg-gradient-to-br from-fuchsia-200 to-fuchsia-400 dark:from-fuchsia-600 dark:to-fuchsia-800 border-2 border-white dark:border-gray-800'
                    }
                };
            case 'manipulation-marche':
                return {
                    selected: {
                        line: 'w-2 bg-gradient-to-b from-orange-400 to-orange-600 shadow-lg shadow-orange-200/50 dark:shadow-orange-900/50',
                        dot: 'w-7 h-7 bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-white dark:border-gray-800 shadow-lg shadow-orange-200/50 dark:shadow-orange-900/50 ring-4 ring-orange-200/30 dark:ring-orange-900/30'
                    },
                    hover: {
                        line: 'w-2 bg-gradient-to-b from-orange-300 to-orange-500 shadow-md shadow-orange-200/30 dark:shadow-orange-900/30',
                        dot: 'w-6 h-6 bg-gradient-to-br from-orange-300 to-orange-500 border-2 border-white dark:border-gray-800 shadow-md shadow-orange-200/30 dark:shadow-orange-900/30 ring-2 ring-orange-200/20 dark:ring-orange-900/20'
                    },
                    default: {
                        line: 'w-1.5 bg-gradient-to-b from-orange-200 to-orange-400 dark:from-orange-600 dark:to-orange-800',
                        dot: 'w-5 h-5 bg-gradient-to-br from-orange-200 to-orange-400 dark:from-orange-600 dark:to-orange-800 border-2 border-white dark:border-gray-800'
                    }
                };
            case 'tech':
                return {
                    selected: {
                        line: 'w-2 bg-gradient-to-b from-purple-400 to-purple-600 shadow-lg shadow-purple-200/50 dark:shadow-purple-900/50',
                        dot: 'w-7 h-7 bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white dark:border-gray-800 shadow-lg shadow-purple-200/50 dark:shadow-purple-900/50 ring-4 ring-purple-200/30 dark:ring-purple-900/30'
                    },
                    hover: {
                        line: 'w-2 bg-gradient-to-b from-purple-300 to-purple-500 shadow-md shadow-purple-200/30 dark:shadow-purple-900/30',
                        dot: 'w-6 h-6 bg-gradient-to-br from-purple-300 to-purple-500 border-2 border-white dark:border-gray-800 shadow-md shadow-purple-200/30 dark:shadow-purple-900/30 ring-2 ring-purple-200/20 dark:ring-purple-900/20'
                    },
                    default: {
                        line: 'w-1.5 bg-gradient-to-b from-purple-200 to-purple-400 dark:from-purple-600 dark:to-purple-800',
                        dot: 'w-5 h-5 bg-gradient-to-br from-purple-200 to-purple-400 dark:from-purple-600 dark:to-purple-800 border-2 border-white dark:border-gray-800'
                    }
                };
            case 'crise':
                return {
                    selected: {
                        line: 'w-2 bg-gradient-to-b from-rose-400 to-rose-600 shadow-lg shadow-rose-200/50 dark:shadow-rose-900/50',
                        dot: 'w-7 h-7 bg-gradient-to-br from-rose-400 to-rose-600 border-2 border-white dark:border-gray-800 shadow-lg shadow-rose-200/50 dark:shadow-rose-900/50 ring-4 ring-rose-200/30 dark:ring-rose-900/30'
                    },
                    hover: {
                        line: 'w-2 bg-gradient-to-b from-rose-300 to-rose-500 shadow-md shadow-rose-200/30 dark:shadow-rose-900/30',
                        dot: 'w-6 h-6 bg-gradient-to-br from-rose-300 to-rose-500 border-2 border-white dark:border-gray-800 shadow-md shadow-rose-200/30 dark:shadow-rose-900/30 ring-2 ring-rose-200/20 dark:ring-rose-900/20'
                    },
                    default: {
                        line: 'w-1.5 bg-gradient-to-b from-rose-200 to-rose-400 dark:from-rose-600 dark:to-rose-800',
                        dot: 'w-5 h-5 bg-gradient-to-br from-rose-200 to-rose-400 dark:from-rose-600 dark:to-rose-800 border-2 border-white dark:border-gray-800'
                    }
                };
            case 'gestion-frauduleuse':
                return {
                    selected: {
                        line: 'w-2 bg-gradient-to-b from-emerald-400 to-emerald-600 shadow-lg shadow-emerald-200/50 dark:shadow-emerald-900/50',
                        dot: 'w-7 h-7 bg-gradient-to-br from-emerald-400 to-emerald-600 border-2 border-white dark:border-gray-800 shadow-lg shadow-emerald-200/50 dark:shadow-emerald-900/50 ring-4 ring-emerald-200/30 dark:ring-emerald-900/30'
                    },
                    hover: {
                        line: 'w-2 bg-gradient-to-b from-emerald-300 to-emerald-500 shadow-md shadow-emerald-200/30 dark:shadow-emerald-900/30',
                        dot: 'w-6 h-6 bg-gradient-to-br from-emerald-300 to-emerald-500 border-2 border-white dark:border-gray-800 shadow-md shadow-emerald-200/30 dark:shadow-emerald-900/30 ring-2 ring-emerald-200/20 dark:ring-emerald-900/20'
                    },
                    default: {
                        line: 'w-1.5 bg-gradient-to-b from-emerald-200 to-emerald-400 dark:from-emerald-600 dark:to-emerald-800',
                        dot: 'w-5 h-5 bg-gradient-to-br from-emerald-200 to-emerald-400 dark:from-emerald-600 dark:to-emerald-800 border-2 border-white dark:border-gray-800'
                    }
                };
            case 'financement-illegal':
                return {
                    selected: {
                        line: 'w-2 bg-gradient-to-b from-blue-400 to-blue-600 shadow-lg shadow-blue-200/50 dark:shadow-blue-900/50',
                        dot: 'w-7 h-7 bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white dark:border-gray-800 shadow-lg shadow-blue-200/50 dark:shadow-blue-900/50 ring-4 ring-blue-200/30 dark:ring-blue-900/30'
                    },
                    hover: {
                        line: 'w-2 bg-gradient-to-b from-blue-300 to-blue-500 shadow-md shadow-blue-200/30 dark:shadow-blue-900/30',
                        dot: 'w-6 h-6 bg-gradient-to-br from-blue-300 to-blue-500 border-2 border-white dark:border-gray-800 shadow-md shadow-blue-200/30 dark:shadow-blue-900/30 ring-2 ring-blue-200/20 dark:ring-blue-900/20'
                    },
                    default: {
                        line: 'w-1.5 bg-gradient-to-b from-blue-200 to-blue-400 dark:from-blue-600 dark:to-blue-800',
                        dot: 'w-5 h-5 bg-gradient-to-br from-blue-200 to-blue-400 dark:from-blue-600 dark:to-blue-800 border-2 border-white dark:border-gray-800'
                    }
                };
            case 'crime':
                return {
                    selected: {
                        line: 'w-2 bg-gradient-to-b from-red-800 to-red-900 shadow-lg shadow-red-200/50 dark:shadow-red-900/50',
                        dot: 'w-7 h-7 bg-gradient-to-br from-red-800 to-red-900 border-2 border-white dark:border-gray-800 shadow-lg shadow-red-200/50 dark:shadow-red-900/50 ring-4 ring-red-200/30 dark:ring-red-900/30'
                    },
                    hover: {
                        line: 'w-2 bg-gradient-to-b from-red-700 to-red-800 shadow-md shadow-red-200/30 dark:shadow-red-900/30',
                        dot: 'w-6 h-6 bg-gradient-to-br from-red-700 to-red-800 border-2 border-white dark:border-gray-800 shadow-md shadow-red-200/30 dark:shadow-red-900/30 ring-2 ring-red-200/20 dark:ring-red-900/20'
                    },
                    default: {
                        line: 'w-1.5 bg-gradient-to-b from-red-600 to-red-700 dark:from-red-800 dark:to-red-900',
                        dot: 'w-5 h-5 bg-gradient-to-br from-red-600 to-red-700 dark:from-red-800 dark:to-red-900 border-2 border-white dark:border-gray-800'
                    }
                };
            default:
                return {
                    selected: {
                        line: 'w-2 bg-gradient-to-b from-gray-400 to-gray-600 shadow-lg shadow-gray-200/50 dark:shadow-gray-900/50',
                        dot: 'w-7 h-7 bg-gradient-to-br from-gray-400 to-gray-600 border-2 border-white dark:border-gray-800 shadow-lg shadow-gray-200/50 dark:shadow-gray-900/50 ring-4 ring-gray-200/30 dark:ring-gray-900/30'
                    },
                    hover: {
                        line: 'w-2 bg-gradient-to-b from-gray-300 to-gray-500 shadow-md shadow-gray-200/30 dark:shadow-gray-900/30',
                        dot: 'w-6 h-6 bg-gradient-to-br from-gray-300 to-gray-500 border-2 border-white dark:border-gray-800 shadow-md shadow-gray-200/30 dark:shadow-gray-900/30 ring-2 ring-gray-200/20 dark:ring-gray-900/20'
                    },
                    default: {
                        line: 'w-1.5 bg-gradient-to-b from-gray-200 to-gray-400 dark:from-gray-600 dark:to-gray-800',
                        dot: 'w-5 h-5 bg-gradient-to-br from-gray-200 to-gray-400 dark:from-gray-600 dark:to-gray-800 border-2 border-white dark:border-gray-800'
                    }
                };
        }
    };
    const colorScheme = getColorScheme();
    const getState = () => {
        if (isSelected)
            return 'selected';
        if (isHovered || isFocused)
            return 'hover';
        return 'default';
    };
    const ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            // Mettre à jour le ratio d'intersection
            setIntersectionRatio(entry.intersectionRatio);
            // Une fois que la carte est entrée dans le viewport, elle reste "visible"
            if (entry.isIntersecting) {
                setIsVisible(true);
            }
        }, {
            threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
            rootMargin: '100px -100px'
        });
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);
    return (<div ref={ref} className={`scandal-card absolute ${isSelected ? 'z-50' : `z-${getZIndex()}`} ${isVisible ? 'visible' : ''}`} style={{
            left: position.x,
            top: position.y,
            zIndex: getZIndex(),
            '--intersection-ratio': intersectionRatio
        }}>
      {/* Date label */}
      <div className="absolute text-sm font-medium text-gray-600 dark:text-gray-400" style={{
            left: '57%',
            top: -(connectionHeight + 70),
            transform: 'translateX(-50%) rotate(-65deg)',
            transformOrigin: 'bottom center'
        }}>
        {formatDate(scandal.startDate, 'MMM yyyy')}
      </div>

      {/* Connection line to timeline */}
      <div className={`absolute transition-all duration-500 ${colorScheme[getState()].line}`} style={{
            left: '50%',
            top: -connectionHeight,
            height: connectionHeight,
            transform: 'translateX(-50%)'
        }}/>
      
      {/* Anchor point on timeline */}
      <div className={`absolute rounded-full transition-all duration-500 ${colorScheme[getState()].dot}`} style={{
            left: '50%',
            top: -(connectionHeight + (isSelected ? 15 : isHovered || isFocused ? 15 : 13)),
            transform: 'translateX(-50%)'
        }}/>

      {/* Card */}
      <div className={`
          backdrop-blur-sm bg-white/95 dark:bg-gray-800/95 rounded-xl shadow-lg transition-all duration-500 cursor-pointer
          hover:shadow-xl hover:-translate-y-2 select-none overflow-hidden w-[320px]
          focus:outline-none focus:ring-2 focus:ring-purple-500/50 border-2 border-t-0
          ${isSelected
            ? `shadow-2xl transform -translate-y-2 scale-105 ${getCategoryColors(scandal.type).border}`
            : isHovered || isFocused
                ? getCategoryColors(scandal.type).border
                : `border-gray-200/80 dark:border-gray-700/80 ${getCategoryColors(scandal.type).darkBorder}`}
          ${(isHovered || isFocused) && !isSelected ? 'shadow-2xl -translate-y-1 scale-102' : ''}
          ${isContentCollapsed ? 'scandal-card-collapsed' : ''}
          relative
        `} onClick={onClick} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} tabIndex={0}>
        {/* Bordure supérieure floue */}
        <div className={`absolute -top-0.5 left-0 right-0 h-2 blur-[3px] ${isSelected || isHovered || isFocused
            ? getCategoryColors(scandal.type).border.replace('border-', 'bg-')
            : getCategoryColors(scandal.type).darkBorder.replace('border-t-', 'bg-')}`}/>

        {/* Header with gradient background */}
        <div className="relative overflow-hidden texture-overlay">
          <div className={`absolute inset-0 ${getCategoryColors(scandal.type).gradient}`}></div>
          <div className="relative p-4">
            <h3 className="font-bold text-lg text-white leading-tight">
              {cleanScandalName(scandal.name)}
            </h3>
          </div>
        </div>

        {/* Content Grid */}
        <div className="p-4 grid grid-cols-2 gap-3 bg-gray-50/50 dark:bg-gray-800/50">
          {/* Personalities */}
          <div className="col-span-2  bg-white dark:bg-gray-700 p-3 rounded-xl shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4 text-purple-500 dark:text-purple-400"/>
              <span className="text-xs text-gray-600 dark:text-gray-300  font-semibold">Impliqués</span>
            </div>
            <div className="text-sm text-gray-800 dark:text-gray-100">
              {(scandal.personalities || []).slice(0, 2).map((person, index) => (<span key={person}>
                  <ClickablePerson name={person} data-tour="timeline" className="cursor-pointer hover:text-purple-600 dark:hover:text-purple-400 transition-colors hover:underline decoration-purple-400/50 dark:decoration-purple-600/50">
                    {person}
                  </ClickablePerson>
                  {index < Math.min((scandal.personalities || []).length - 1, 1) && ", "}
                </span>))}
              {(scandal.personalities || []).length > 2 && (<span className="text-gray-500 dark:text-gray-400"> et {(scandal.personalities || []).length - 2} autres</span>)}
            </div>
          </div>

          {/* Stats or Description */}
          {hasSanctions ? (<div className="col-span-2 statOrDesc grid grid-cols-2 gap-3">
              {/* Money Amount */}
              {(scandal.moneyAmount ?? 0) > 0 && (<div className="bg-white dark:bg-gray-700 p-3 rounded-xl shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-4 h-4 text-red-500 dark:text-red-400"/>
                    <span className="text-xs text-gray-600 dark:text-gray-300 font-semibold">Concernés</span>
                  </div>
                  <div className="text-sm font-bold text-red-600 dark:text-red-400">
                    <AnimatedNumber value={scandal.moneyAmount ?? 0} formatFn={formatLargeNumber}/>
                  </div>
                </div>)}

              {/* Parti politique si on n'a que la somme concernée */}
              {scandal.politicalParty && (scandal.moneyAmount ?? 0) > 0 &&
                !(scandal.fine ?? 0) && !(scandal.prisonYears ?? 0) && !(scandal.ineligibilityYears ?? 0) && (<div className="bg-white dark:bg-gray-700 p-3 rounded-xl shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="w-4 h-4 text-blue-500 dark:text-blue-400"/>
                    <span className="text-xs text-gray-600 dark:text-gray-300 font-semibold">Parti</span>
                  </div>
                  <div className="text-sm text-gray-800 dark:text-gray-100">
                    <ClickableParty party={scandal.politicalParty} data-tour="timeline" className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:underline decoration-blue-400/50 dark:decoration-blue-600/50">
                      {scandal.politicalParty}
                    </ClickableParty>
                  </div>
                </div>)}

              {/* Fine */}
              {(scandal.fine ?? 0) > 0 && (<div className="bg-white dark:bg-gray-700 p-3 rounded-xl shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-4 h-4 text-blue-500 dark:text-blue-400"/>
                    <span className="text-xs text-gray-600 dark:text-gray-300 font-semibold">Amende</span>
                  </div>
                  <div className="text-sm font-bold text-blue-600 dark:text-blue-400">
                    <AnimatedNumber value={scandal.fine ?? 0} formatFn={formatLargeNumber}/>
                  </div>
                </div>)}

              {/* Prison Sentence */}
              {(scandal.prisonYears ?? 0) > 0 && (<div className="bg-white dark:bg-gray-700 p-3 rounded-xl shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Scale className="w-4 h-4 text-orange-500 dark:text-orange-400"/>
                    <span className="text-xs text-gray-600 dark:text-gray-300 font-semibold">Prison</span>
                  </div>
                  <div className="text-sm font-bold text-orange-600 dark:text-orange-400">
                    <AnimatedNumber value={scandal.prisonYears ?? 0} formatFn={(val) => `${val} an${val > 1 ? 's' : ''}`}/>
                  </div>
                </div>)}

              {/* Ineligibility */}
              {(scandal.ineligibilityYears ?? 0) > 0 && (<div className="bg-white dark:bg-gray-700 p-3 rounded-xl shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="w-4 h-4 text-purple-500 dark:text-purple-400"/>
                    <span className="text-xs text-gray-600 dark:text-gray-300 font-semibold">Inéligibilité</span>
                  </div>
                  <div className="text-sm font-bold text-purple-600 dark:text-purple-400">
                    <AnimatedNumber value={scandal.ineligibilityYears ?? 0} formatFn={(val) => `${val} an${val > 1 ? 's' : ''}`}/>
                  </div>
                </div>)}
            </div>) : (
        // Description
        <div className="col-span-2 statOrDesc bg-white dark:bg-gray-700 p-3 rounded-xl shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Tag className="w-4 h-4 text-gray-500 dark:text-gray-400"/>
                <span className="text-xs text-gray-600 dark:text-gray-300 font-semibold">Description</span>
              </div>
              <div className="text-sm text-gray-800 dark:text-gray-100 line-clamp-3">
                {scandal.description}
              </div>
            </div>)}

          {/* Status Badge */}
          <div className="col-span-2 flex justify-between items-center">
            <ClickableStatus status={scandal.status} data-tour="timeline" className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm cursor-pointer hover:scale-105 transition-transform active:scale-95 ${scandal.status === 'convicted'
            ? 'bg-red-100 text-red-700 dark:bg-red-900/60 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-800/60'
            : scandal.status === 'acquitted'
                ? 'bg-green-100 text-green-700 dark:bg-green-900/60 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-800/60'
                : 'bg-orange-100 text-orange-700 dark:bg-orange-900/60 dark:text-orange-300 hover:bg-orange-200 dark:hover:bg-orange-800/60'}`}>
              {getStatusIcon()}
              {scandal.status === 'convicted' ? 'Condamné' :
            scandal.status === 'acquitted' ? 'Acquitté' :
                scandal.status === 'ongoing' ? 'En cours' : 'Jugé'}
            </ClickableStatus>
            <ClickableType type={getMainCategory(scandal.type)} data-tour="timeline" className="text-xs text-gray-500 dark:text-gray-400 font-medium hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
              {getCategoryLabel(getMainCategory(scandal.type))}
            </ClickableType>
          </div>
        </div>
      </div>
    </div>);
};
export default ScandalCard;
