import { DateTime } from 'luxon';

export const getTodayName = () => {
  const ZoneBA = 'America/Buenos_Aires';
  return DateTime.now().setZone(ZoneBA).toFormat('cccc').toLowerCase();
};

export const formatTime = (time) => {
  return DateTime.fromISO(time).toFormat('T');
};
