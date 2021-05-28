const { DateTime } = require('luxon');

const fecha = '00:00:00-03:00';

const parsea = DateTime.fromISO(fecha);

console.log(parsea);
