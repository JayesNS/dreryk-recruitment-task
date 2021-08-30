import { sortBy } from './sortBy';

const mockData = [
  {boo: 3, foo: 'g'},
  {boo: 3, foo: 'z'},
  {boo: 1, foo: 'f'},
  {boo: 1, foo: 'aa'},
  {boo: 1, foo: 'a'},
];

describe('sortBy', () => {
  test('should sort objects by single field of string type', () => {
    const expectedArray = [
      {boo: 1, foo: 'a'},
      {boo: 1, foo: 'aa'},
      {boo: 1, foo: 'f'},
      {boo: 3, foo: 'g'},
      {boo: 3, foo: 'z'}
    ];

    expect(sortBy(mockData, ['foo'])).toEqual(expectedArray);
  });

  test('should sort objects by single field of number type', () => {
    const expectedArray = [
      {boo: 1, foo: 'f'},
      {boo: 1, foo: 'aa'},
      {boo: 1, foo: 'a'},
      {boo: 3, foo: 'g'},
      {boo: 3, foo: 'z'}
    ];

    expect(sortBy(mockData, ['boo'])).toEqual(expectedArray);
  });

  test('should sort objects by multiple fields', () => {
    const expectedArray = [
      {boo: 1, foo: 'a'},
      {boo: 1, foo: 'aa'},
      {boo: 1, foo: 'f'},
      {boo: 3, foo: 'g'},
      {boo: 3, foo: 'z'}
    ];

    expect(sortBy(mockData, ['boo', 'foo'])).toEqual(expectedArray);
  });

  test('should handle duplicated sortByFields', () => {
    const expectedArray = [
      {boo: 1, foo: 'a'},
      {boo: 1, foo: 'aa'},
      {boo: 1, foo: 'f'},
      {boo: 3, foo: 'g'},
      {boo: 3, foo: 'z'}
    ];

    expect(sortBy(mockData, ['foo', 'foo', 'foo'])).toEqual(expectedArray);
  });

  test('should return array intact when sortByFields is empty', () => {
    expect(sortBy(mockData, [])).toEqual(mockData);
  });

  test('should return array intact when array is empty', () => {
    expect(sortBy([], [])).toEqual([]);
  });
});
