import Magi from '../Magi';

test('Magi type test', () => {
  const obj = new Magi('name', 'parent', 15, 20);
  expect(obj.name).toBe('name');
});

test('Magi test this.stoned()', () => {
  const obj = new Magi('name', 'parent', 15, 20);
  obj.stoned = 6;
  expect(obj.stoned).toBe(7.5);
});

test('Magi test this.actualAttack()', () => {
  const obj = new Magi('name', 'parent', 100, 20);
  obj.actualAttack = 2;
  expect(obj.actualAttack).toBe(85);
});
