var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Import all scandal files
import { scandals2000_2001 } from './scandals2000-2001';
import { scandals2002_2003 } from './scandals2002-2003';
import { scandals2004_2005 } from './scandals2004-2005';
import { scandals2006_2007 } from './scandals2006-2007';
import { scandals2008_2009 } from './scandals2008-2009';
import { scandals2010_2011 } from './scandals2010-2011';
import { scandals2012_2013 } from './scandals2012-2013';
import { scandals2014_2015 } from './scandals2014-2015';
import { scandals2016_2017 } from './scandals2016-2017';
import { scandals2018_2019 } from './scandals2018-2019';
import { scandals2020_2021 } from './scandals2020-2021';
import { scandals2022_2023 } from './scandals2022-2023';
import { scandals2024_2025 } from './scandals2024-2025';
// Combine all scandals into one array
export var allScandals = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], scandals2000_2001, true), scandals2002_2003, true), scandals2004_2005, true), scandals2006_2007, true), scandals2008_2009, true), scandals2010_2011, true), scandals2012_2013, true), scandals2014_2015, true), scandals2016_2017, true), scandals2018_2019, true), scandals2020_2021, true), scandals2022_2023, true), scandals2024_2025, true);
// Create a map of scandals by year for easy filtering
export var scandalsByYear = new Map();
// Group scandals by year
allScandals.forEach(function (scandal) {
    var year = new Date(scandal.startDate).getFullYear();
    if (!scandalsByYear.has(year)) {
        scandalsByYear.set(year, []);
    }
    scandalsByYear.get(year).push(scandal);
});
// Export individual year arrays for specific access
export var scandals2000 = scandalsByYear.get(2000) || [];
export var scandals2001 = scandalsByYear.get(2001) || [];
export var scandals2002 = scandalsByYear.get(2002) || [];
export var scandals2003 = scandalsByYear.get(2003) || [];
export var scandals2004 = scandalsByYear.get(2004) || [];
export var scandals2005 = scandalsByYear.get(2005) || [];
export var scandals2006 = scandalsByYear.get(2006) || [];
export var scandals2007 = scandalsByYear.get(2007) || [];
export var scandals2008 = scandalsByYear.get(2008) || [];
export var scandals2009 = scandalsByYear.get(2009) || [];
export var scandals2010 = scandalsByYear.get(2010) || [];
export var scandals2011 = scandalsByYear.get(2011) || [];
export var scandals2012 = scandalsByYear.get(2012) || [];
export var scandals2013 = scandalsByYear.get(2013) || [];
export var scandals2014 = scandalsByYear.get(2014) || [];
export var scandals2015 = scandalsByYear.get(2015) || [];
export var scandals2016 = scandalsByYear.get(2016) || [];
export var scandals2017 = scandalsByYear.get(2017) || [];
export var scandals2018 = scandalsByYear.get(2018) || [];
export var scandals2019 = scandalsByYear.get(2019) || [];
export var scandals2020 = scandalsByYear.get(2020) || [];
export var scandals2021 = scandalsByYear.get(2021) || [];
export var scandals2022 = scandalsByYear.get(2022) || [];
export var scandals2023 = scandalsByYear.get(2023) || [];
export var scandals2024 = scandalsByYear.get(2024) || [];
export var scandals2025 = scandalsByYear.get(2025) || [];
// Helper function to get scandals by year range
export var getScandalsByYearRange = function (startYear, endYear) {
    return allScandals.filter(function (scandal) {
        var year = new Date(scandal.startDate).getFullYear();
        return year >= startYear && year <= endYear;
    });
};
// Helper function to get scandals by decade
export var getScandalsByDecade = function (decade) {
    var startYear = decade;
    var endYear = decade + 9;
    return getScandalsByYearRange(startYear, endYear);
};
// Statistics helper
export var getScandalsStats = function () {
    var totalScandals = allScandals.length;
    var totalMoney = allScandals.reduce(function (sum, s) { return sum + (s.moneyAmount || 0); }, 0);
    var totalPrisonYears = allScandals.reduce(function (sum, s) { return sum + (s.prisonYears || 0); }, 0);
    var totalFines = allScandals.reduce(function (sum, s) { return sum + (s.fine || 0); }, 0);
    var byType = allScandals.reduce(function (acc, scandal) {
        acc[scandal.type] = (acc[scandal.type] || 0) + 1;
        return acc;
    }, {});
    var byParty = allScandals.reduce(function (acc, scandal) {
        if (scandal.politicalParty) {
            acc[scandal.politicalParty] = (acc[scandal.politicalParty] || 0) + 1;
        }
        return acc;
    }, {});
    var byStatus = allScandals.reduce(function (acc, scandal) {
        acc[scandal.status] = (acc[scandal.status] || 0) + 1;
        return acc;
    }, {});
    return {
        total: totalScandals,
        totalMoney: totalMoney,
        totalPrisonYears: totalPrisonYears,
        totalFines: totalFines,
        byType: byType,
        byParty: byParty,
        byStatus: byStatus
    };
};
// Export the main scandals array as default for backward compatibility
export default allScandals;
