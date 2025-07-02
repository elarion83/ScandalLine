export var filterTimelineBy = function (scandals, contextualFilter) {
    if (!contextualFilter)
        return scandals;
    switch (contextualFilter.type) {
        case 'personality':
            return scandals.filter(function (scandal) {
                var _a, _b;
                return (_b = (_a = scandal.personalities) === null || _a === void 0 ? void 0 : _a.some(function (person) {
                    return person === contextualFilter.value.toString();
                })) !== null && _b !== void 0 ? _b : false;
            });
        case 'party':
            return scandals.filter(function (scandal) {
                return scandal.politicalParty && scandal.politicalParty === contextualFilter.value;
            });
        case 'status':
            return scandals.filter(function (scandal) {
                return scandal.status === contextualFilter.value;
            });
        case 'scandalType':
            return scandals.filter(function (scandal) {
                return scandal.type === contextualFilter.value;
            });
        default:
            return scandals;
    }
};
export var getContextualTitle = function (contextualFilter) {
    switch (contextualFilter.type) {
        case 'personality':
            return "Skandalz de ".concat(contextualFilter.label);
        case 'party':
            return "Affaires li\u00E9es au ".concat(contextualFilter.label);
        case 'status':
            return "Affaires ".concat(contextualFilter.label);
        case 'scandalType':
            return "Affaires de type \"".concat(contextualFilter.label, "\"");
        default:
            return 'Timeline Contextuelle';
    }
};
export var getContextualDescription = function (contextualFilter, filteredCount) {
    var baseText = "".concat(filteredCount, " affaire").concat(filteredCount > 1 ? 's' : '');
    switch (contextualFilter.type) {
        case 'personality':
            return "".concat(contextualFilter.label, " est impliqu\u00E9(e) dans ").concat(baseText);
        case 'party':
            return "".concat(baseText, " li\u00E9e").concat(filteredCount > 1 ? 's' : '', " au ").concat(contextualFilter.label);
        case 'status':
            return "".concat(baseText, " avec le statut \"").concat(contextualFilter.label, "\"");
        case 'scandalType':
            return "".concat(baseText, " de type \"").concat(contextualFilter.label, "\"");
        default:
            return baseText;
    }
};
export var createContextualFilter = function (type, value, label) {
    return {
        type: type,
        value: value,
        label: label || value.toString()
    };
};
