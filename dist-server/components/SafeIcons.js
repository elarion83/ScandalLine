import React from 'react';
import { IconFallback } from './IconFallback';
// Tentative d'import des icônes Lucide avec fallback
let LucideIcons = {};
// Import dynamique pour éviter les erreurs si lucide-react est bloqué
import('lucide-react').then(module => {
    LucideIcons = module;
}).catch(error => {
    console.warn('Lucide React non disponible, utilisation des icônes de fallback');
});
// Composants d'icônes sécurisés avec fallback
export const SafeIcons = {
    ZoomIn: (props) => {
        const Icon = LucideIcons.ZoomIn || IconFallback.ZoomIn;
        return <Icon {...props}/>;
    },
    ZoomOut: (props) => {
        const Icon = LucideIcons.ZoomOut || IconFallback.ZoomOut;
        return <Icon {...props}/>;
    },
    Filter: (props) => {
        const Icon = LucideIcons.Filter || IconFallback.Filter;
        return <Icon {...props}/>;
    },
    BarChart3: (props) => {
        const Icon = LucideIcons.BarChart3 || IconFallback.BarChart3;
        return <Icon {...props}/>;
    },
    RotateCcw: (props) => {
        const Icon = LucideIcons.RotateCcw || IconFallback.RotateCcw;
        return <Icon {...props}/>;
    },
    Calendar: (props) => {
        const Icon = LucideIcons.Calendar || IconFallback.Calendar;
        return <Icon {...props}/>;
    },
    Users: (props) => {
        const Icon = LucideIcons.Users || IconFallback.Users;
        return <Icon {...props}/>;
    },
    DollarSign: (props) => {
        const Icon = LucideIcons.DollarSign || IconFallback.DollarSign;
        return <Icon {...props}/>;
    },
    Scale: (props) => {
        const Icon = LucideIcons.Scale || IconFallback.Scale;
        return <Icon {...props}/>;
    }
};
