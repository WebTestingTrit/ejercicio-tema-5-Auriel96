import { Stack } from './stack';

describe('GIVEN a Stack class', () => {
  test('WHEN I add an element and remove it THEN it should have a size 0 and return me the inserted element', () => {
    const stackSut = new Stack();
    const input = { just: 'just', a: 'a', test: 'test', input: 'input' };
    stackSut.push(input);
    const actual = stackSut.pop();
    expect(actual).toEqual(input);
    const actualSize = stackSut.size();
    const expectedSize = 0;
    expect(actualSize).toEqual(expectedSize);
  });
  test('WHEN I try to pop from an empty stack THEN it should return nothing', () => {
    const stackSut = new Stack();
    const actual = stackSut.pop();
    const expected = undefined;
    expect(actual).toEqual(expected);
  });
});
