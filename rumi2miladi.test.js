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


