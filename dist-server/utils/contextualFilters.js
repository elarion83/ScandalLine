export const filterTimelineBy = (scandals, contextualFilter) => {
    if (!contextualFilter)
        return scandals;
    switch (contextualFilter.type) {
        case 'personality':
            return scandals.filter(scandal => scandal.personalities?.some(person => person === contextualFilter.value.toString()) ?? false);
        case 'party':
            return scandals.filter(scandal => scandal.politicalParty && scandal.politicalParty === contextualFilter.value);
        case 'status':
            return scandals.filter(scandal => scandal.status === contextualFilter.value);
        case 'scandalType':
            return scandals.filter(scandal => scandal.type === contextualFilter.value);
        default:
            return scandals;
    }
};
export const getContextualTitle = (contextualFilter) => {
    switch (contextualFilter.type) {
        case 'personality':
            return `Skandalz de ${contextualFilter.label}`;
        case 'party':
            return `Affaires liées au ${contextualFilter.label}`;
        case 'status':
            return `Affaires ${contextualFilter.label}`;
        case 'scandalType':
            return `Affaires de type "${contextualFilter.label}"`;
        default:
            return 'Timeline Contextuelle';
    }
};
export const getContextualDescription = (contextualFilter, filteredCount) => {
    const baseText = `${filteredCount} affaire${filteredCount > 1 ? 's' : ''}`;
    switch (contextualFilter.type) {
        case 'personality':
            return `${contextualFilter.label} est impliqué(e) dans ${baseText}`;
        case 'party':
            return `${baseText} liée${filteredCount > 1 ? 's' : ''} au ${contextualFilter.label}`;
        case 'status':
            return `${baseText} avec le statut "${contextualFilter.label}"`;
        case 'scandalType':
            return `${baseText} de type "${contextualFilter.label}"`;
        default:
            return baseText;
    }
};
export const createContextualFilter = (type, value, label) => {
    return {
        type,
        value,
        label: label || value.toString()
    };
};
