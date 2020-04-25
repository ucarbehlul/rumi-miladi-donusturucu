const rumi2Miladi = require('./rumi2miladi.js');

test('şubatın 29 çektiği bir sene 12 gun fark olan', () => {
  expect(rumi2Miladi('1311-02-18')).toBe('1896-03-01');
});

test('şubatın 28 çektiği bir sene 12 gun fark olan', () => {
  expect(rumi2Miladi('1312-02-18')).toBe('1897-03-02');
});

test('şubatın 29 çektiği bir sene 13 gun fark olan', () => {
  expect(rumi2Miladi('1323-02-18')).toBe('1908-03-02');
});

test('şubatın 28 çektiği bir sene 13 gun fark olan', () => {
  expect(rumi2Miladi('1322-02-18')).toBe('1907-03-03');
});

test('13 gun fark temmuz ayi', () => {
  expect(rumi2Miladi('1322-07-18')).toBe('1906-07-31');
});

test('12 gun fark temmuz ayi', () => {
  expect(rumi2Miladi('1302-07-18')).toBe('1886-07-30');
});

test('13 gun fark ocak ayi', () => {
  expect(rumi2Miladi('1322-01-18')).toBe('1907-01-31');
});

test('12 gun fark ocak ayi', () => {
  expect(rumi2Miladi('1302-01-18')).toBe('1887-01-30');
});

test('13 gun fark aralik basi', () => {
  expect(rumi2Miladi('1322-12-13')).toBe('1906-12-26');
});

test('12 gun fark aralik basi', () => {
  expect(rumi2Miladi('1302-12-13')).toBe('1886-12-25');
});

test('13 gun fark aralik sonu', () => {
  expect(rumi2Miladi('1322-12-25')).toBe('1907-01-07');
});

test('12 gun fark aralik sonu', () => {
  expect(rumi2Miladi('1302-12-25')).toBe('1887-01-06');
});

test('13 gun oldugu sene 1316 subatin son gunleri', () => {
  expect(rumi2Miladi('1316-02-20')).toBe('1901-03-05');
});

test('13 gun oldugu sene 1316 subatin ilk gunleri', () => {
  expect(rumi2Miladi('1316-02-02')).toBe('1901-02-15');
});

test('13 gun oldugu sene 1316 temmuz', () => {
  expect(rumi2Miladi('1316-07-02')).toBe('1900-07-15');
});

test('13 gun oldugu sene oncesi 1315 subat', () => {
  expect(rumi2Miladi('1315-02-05')).toBe('1900-02-17');
});

test('ayni gun oldugu sene 1333 mart 01', () => {
  expect(rumi2Miladi('1333-03-01')).toBe('1917-03-01');
});

test('ayni gun oldugu sene oncesi 1332 mart 01', () => {
  expect(rumi2Miladi('1332-03-01')).toBe('1916-03-14');
});

test('ayni gun oldugu sene oncesi 1332 subat 01', () => {
  expect(rumi2Miladi('1332-02-01')).toBe('1917-02-14');
});
