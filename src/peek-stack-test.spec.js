import { Stack } from './stack';

describe('GIVEN a Stack class', () => {
  test('WHEN I insert an element on it THEN the peeked element should be equal to the inserted one', () => {
    const stackSut = new Stack();
    const input = {
      This: 'This',
      a: 'a',
      test: 'test'
    };
    stackSut.push(input);
    const actual = stackSut.peek();
    expect(actual).toEqual(input);
  });
  test('WHEN I try to peek on an empty Stack THEN nothing should be returned', () => {
    const stackSut = new Stack();
    const actual = stackSut.peek();
    const expected = undefined;
    expect(actual).toEqual(expected);
  });
});
