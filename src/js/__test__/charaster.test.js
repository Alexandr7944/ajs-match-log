import Character from '../Charaster';

test('Character type test', () => {
  const obj = new Character('name', 'parent', 15, 20);
  expect(obj.name).toBe('name');
});

test('Character test this.stoned()', () => {
  const obj = new Character('name', 'parent', 15, 20);
  obj.stoned = 6;
  expect(obj.stoned).toBe(7.5);
});
