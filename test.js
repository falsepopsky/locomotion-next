const { DateTime } = require('luxon');

const fecha = '00:00:00-03:00';
const zone = 'America/Buenos_Aires';

const parsea = DateTime.fromISO(fecha).toString();
const now = DateTime.now().setZone(zone).toString(); /* .toString();
const dia = DateTime.fromISO(now).toFormat('cccc');
 */

console.log(parsea);

console.log(now);
