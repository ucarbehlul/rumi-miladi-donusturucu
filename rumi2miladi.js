#!/usr/bin/env node
var moment = require('moment');


function rumi2Miladi(rumiTarihStr) {
  const verbose = process.argv.indexOf('--verbose') != -1;
  
  //miladide 29 cekmeyen 1900 yılına özel çözüm
  if (rumiTarihStr == '1315-02-29') {
    return '1900-03-13';
  }

  let rumiTarih = moment(rumiTarihStr);
  const miladiBasSene = 1840;
  const ayniGunOlmaTarihi = moment('1333-03-01');
  const onUcGunOlmaTarihi = moment('1316-01-01');

  //ayni gun olmalarindan onceyse 13 gun cikar
  let ekGun = 0
  if (rumiTarih.isBefore(onUcGunOlmaTarihi)) {
    ekGun = 12
  } else if (rumiTarih.isBefore(ayniGunOlmaTarihi)) {
    ekGun = 13;
  }
  const adjustedRumi = rumiTarih.clone();
  if(verbose) {console.debug("adjusted rumi yil eklemeden", adjustedRumi.format());}
  adjustedRumi.add((miladiBasSene-1256), 'years');
  const ekSene =  + ((rumiTarih.month()+1) < 3 ? 1 : 0) // burada orijinal ayı kullanmak gerek
  adjustedRumi.add((ekSene), 'years');
  //ek günü ekle
  adjustedRumi.add(ekGun, 'days');

  if(verbose) {console.debug("adjusted rumi", adjustedRumi.format());}

  const month = adjustedRumi.month()+1 // make it 1-indexed
  return `${adjustedRumi.year()}-${month.toString().padStart(2, '0')}-${adjustedRumi.date().toString().padStart(2, '0')}`;
}

if (require.main === module) {
  const input = process.argv[2];
  console.log(rumi2Miladi(input)); 
}

module.exports = rumi2Miladi;
