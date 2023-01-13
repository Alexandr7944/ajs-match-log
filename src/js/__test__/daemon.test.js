import Daemon from '../Daemon';

test('Daemon type test', () => {
  const obj = new Daemon('name');
  expect(obj.name).toBe('name');
});

test('Daemon test this.stoned()', () => {
  const obj = new Daemon('name');
  obj.stoned = 6;
  expect(obj.stoned).toBe(20);
});

test('Daemon test this.actualAttack()', () => {
  const obj = new Daemon('name');
  obj.actualAttack = 2;
  expect(obj.actualAttack).toBe(31);
});
