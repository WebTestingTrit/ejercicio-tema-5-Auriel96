import { Stack } from './stack';
describe(`GIVEN a Stack class`, () => {
  test('THEN I should be able to instanciate it', () => {
    const stackSut = new Stack();
    expect(stackSut).toBeInstanceOf(Stack);
  });
  test('THEN any new Stack should be empty', () => {
    const stackSut = new Stack();
    const actual = stackSut.size();
    const expected = 0;
    expect(actual).toEqual(expected);
  });
});
