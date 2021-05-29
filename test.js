const { DateTime } = require('luxon');

const fecha = '00:00:00-03:00';
const zone = 'America/Buenos_Aires';

const parsea = DateTime.fromISO(fecha).toFormat('T');

const diaHoy = DateTime.now().setZone(zone).toFormat('cccc').toLowerCase();
/* const dia = DateTime.fromISO(now).toFormat('cccc');
 */

console.log(diaHoy);
