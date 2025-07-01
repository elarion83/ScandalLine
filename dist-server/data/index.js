// Import all scandal files
import { scandals2000_2001 } from './scandals2000-2001.js';
import { scandals2002_2003 } from './scandals2002-2003.js';
import { scandals2004_2005 } from './scandals2004-2005.js';
import { scandals2006_2007 } from './scandals2006-2007.js';
import { scandals2008_2009 } from './scandals2008-2009.js';
import { scandals2010_2011 } from './scandals2010-2011.js';
import { scandals2012_2013 } from './scandals2012-2013.js';
import { scandals2014_2015 } from './scandals2014-2015.js';
import { scandals2016_2017 } from './scandals2016-2017.js';
import { scandals2018_2019 } from './scandals2018-2019.js';
import { scandals2020_2021 } from './scandals2020-2021.js';
import { scandals2022_2023 } from './scandals2022-2023.js';
import { scandals2024_2025 } from './scandals2024-2025.js';
// Combine all scandals into one array
export const allScandals = [
    ...scandals2000_2001,
    ...scandals2002_2003,
    ...scandals2004_2005,
    ...scandals2006_2007,
    ...scandals2008_2009,
    ...scandals2010_2011,
    ...scandals2012_2013,
    ...scandals2014_2015,
    ...scandals2016_2017,
    ...scandals2018_2019,
    ...scandals2020_2021,
    ...scandals2022_2023,
    ...scandals2024_2025
];
// Create a map of scandals by year for easy filtering
export const scandalsByYear = new Map();
// Group scandals by year
allScandals.forEach(scandal => {
    const year = new Date(scandal.startDate).getFullYear();
    if (!scandalsByYear.has(year)) {
        scandalsByYear.set(year, []);
    }
    scandalsByYear.get(year).push(scandal);
});
// Export individual year arrays for specific access
export const scandals2000 = scandalsByYear.get(2000) || [];
export const scandals2001 = scandalsByYear.get(2001) || [];
export const scandals2002 = scandalsByYear.get(2002) || [];
export const scandals2003 = scandalsByYear.get(2003) || [];
export const scandals2004 = scandalsByYear.get(2004) || [];
export const scandals2005 = scandalsByYear.get(2005) || [];
export const scandals2006 = scandalsByYear.get(2006) || [];
export const scandals2007 = scandalsByYear.get(2007) || [];
export const scandals2008 = scandalsByYear.get(2008) || [];
export const scandals2009 = scandalsByYear.get(2009) || [];
export const scandals2010 = scandalsByYear.get(2010) || [];
export const scandals2011 = scandalsByYear.get(2011) || [];
export const scandals2012 = scandalsByYear.get(2012) || [];
export const scandals2013 = scandalsByYear.get(2013) || [];
export const scandals2014 = scandalsByYear.get(2014) || [];
export const scandals2015 = scandalsByYear.get(2015) || [];
export const scandals2016 = scandalsByYear.get(2016) || [];
export const scandals2017 = scandalsByYear.get(2017) || [];
export const scandals2018 = scandalsByYear.get(2018) || [];
export const scandals2019 = scandalsByYear.get(2019) || [];
export const scandals2020 = scandalsByYear.get(2020) || [];
export const scandals2021 = scandalsByYear.get(2021) || [];
export const scandals2022 = scandalsByYear.get(2022) || [];
export const scandals2023 = scandalsByYear.get(2023) || [];
export const scandals2024 = scandalsByYear.get(2024) || [];
export const scandals2025 = scandalsByYear.get(2025) || [];
// Helper function to get scandals by year range
export const getScandalsByYearRange = (startYear, endYear) => {
    return allScandals.filter(scandal => {
        const year = new Date(scandal.startDate).getFullYear();
        return year >= startYear && year <= endYear;
    });
};
// Helper function to get scandals by decade
export const getScandalsByDecade = (decade) => {
    const startYear = decade;
    const endYear = decade + 9;
    return getScandalsByYearRange(startYear, endYear);
};
// Statistics helper
export const getScandalsStats = () => {
    const totalScandals = allScandals.length;
    const totalMoney = allScandals.reduce((sum, s) => sum + (s.moneyAmount || 0), 0);
    const totalPrisonYears = allScandals.reduce((sum, s) => sum + (s.prisonYears || 0), 0);
    const totalFines = allScandals.reduce((sum, s) => sum + (s.fine || 0), 0);
    const byType = allScandals.reduce((acc, scandal) => {
        acc[scandal.type] = (acc[scandal.type] || 0) + 1;
        return acc;
    }, {});
    const byParty = allScandals.reduce((acc, scandal) => {
        if (scandal.politicalParty) {
            acc[scandal.politicalParty] = (acc[scandal.politicalParty] || 0) + 1;
        }
        return acc;
    }, {});
    const byStatus = allScandals.reduce((acc, scandal) => {
        acc[scandal.status] = (acc[scandal.status] || 0) + 1;
        return acc;
    }, {});
    return {
        total: totalScandals,
        totalMoney,
        totalPrisonYears,
        totalFines,
        byType,
        byParty,
        byStatus
    };
};
// Export the main scandals array as default for backward compatibility
export default allScandals;
