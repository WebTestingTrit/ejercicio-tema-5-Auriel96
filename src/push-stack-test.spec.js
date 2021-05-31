import { Stack } from './stack';
describe(`GIVEN a fresh instanciated Stack`, () => {
  test('THEN I should be able to push an element into the stack', () => {
    const stackSut = new Stack();
    const input = { test: 'test', anotherField: 'test2' };
    const actual = stackSut.push(input);
    const expected = 1;
    expect(actual).toEqual(expected);
  });
  test('THEN I should be able to push different elements into the stack', () => {
    const stackSut = new Stack();
    const input1 = { test: 'test', anotherField: 'test2' };
    const input2 = 'This is just a string';
    stackSut.push(input1);
    const actual = stackSut.push(input2);
    const expected = 2;
    expect(actual).toEqual(expected);
  });
});
