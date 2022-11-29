import { DateTime } from 'luxon';

/**
 * Returns the name of the current day in the selected zone
 */
export const getTodayName = () => {
  const ZoneBA = 'America/Buenos_Aires';
  return DateTime.now().setZone(ZoneBA).toFormat('cccc').toLowerCase();
};
