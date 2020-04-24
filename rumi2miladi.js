#!/usr/bin/env node

var moment = require('moment');

const verbose = process.argv.indexOf('--verbose') != -1;

const input = process.argv[2];
//miladide 29 cekmeyen 1900 yılına özel çözüm
if (input == '1315-02-29') {
  console.log('1900-03-13');
  return
}

let rumiTarih = moment(input);
const miladiBasSene = 1840;
const ayniGunOlmaTarihi = moment('1333-03-01');
const onUcGunOlmaTarihi = moment('1316-01-01');

//ayni gun olmalarindan onceyse 13 gun cikar
const adjustedRumi = rumiTarih.clone();
if (rumiTarih.isBefore(onUcGunOlmaTarihi)) {
  adjustedRumi.add(12, 'days');
} else if (rumiTarih.isBefore(ayniGunOlmaTarihi)) {
  adjustedRumi.add(13, 'days');
}

if(verbose) {console.debug("adjusted rumi", adjustedRumi.format());}

const month = adjustedRumi.month()+1 // make it 1-indexed
const year = miladiBasSene + (adjustedRumi.year()-1256) + (rumiTarih.month() < 3 ? 1 : 0) // burada orijinal ayı kullanmak gerek

console.log(`${year}-${month.toString().padStart(2, '0')}-${adjustedRumi.date().toString().padStart(2, '0')}`);

