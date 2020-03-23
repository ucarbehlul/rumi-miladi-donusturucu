#!/usr/bin/env node

/**
 * 1 ocak 1800'den sonrasi icin calisir. Gregoryenden 
 * julyene cevirme hesabi bunun oncesi icin simdilik 
 * calismiyor (1840 oncesi rumi takvim kullanılmıyordu).
 */
var moment = require('moment');

const verbose = process.argv.indexOf('--verbose') != -1;

const miladiTarih = moment(process.argv[2]);
const miladiBasSene = 1840;
const ayniGunOlmaTarihi = moment('1917-03-01');
const onUcGunOlmaTarihi = moment('1900-03-13');

//ayni gun olmalarindan onceyse 13 gun cikar
let adjustedMiladi = miladiTarih.clone();
if (miladiTarih.isBefore(onUcGunOlmaTarihi)) {
  adjustedMiladi.subtract(12, 'days');
} else if (miladiTarih.isBefore(ayniGunOlmaTarihi)) {
  adjustedMiladi.subtract(13, 'days');
}
if (verbose) {console.debug("adjusted miladi", adjustedMiladi.format());}

//tam on uc gun oldugu tarihte rumi takvim 29 subat oldu, onu ekle
let day = adjustedMiladi.date();
if (miladiTarih.isSame(onUcGunOlmaTarihi)) day++;

const month = adjustedMiladi.month()+1 // make it 1-indexed
const year = 1256 + (adjustedMiladi.year()-miladiBasSene) - (month < 3 ? 1 : 0)

console.log(`${year}-${month}-${day}`);
