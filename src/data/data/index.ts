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
].sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());

export {
  scandals2000_2001,
  scandals2002_2003,
  scandals2004_2005,
  scandals2006_2007,
  scandals2008_2009,
  scandals2010_2011,
  scandals2012_2013,
  scandals2014_2015,
  scandals2016_2017,
  scandals2018_2019,
  scandals2020_2021,
  scandals2022_2023,
  scandals2024_2025
};