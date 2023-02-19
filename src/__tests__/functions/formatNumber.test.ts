import formatNumber from "../../helpers/formatNumber";


describe('formatNumber', () => {
  test('formats a small number with two decimal places', () => {
    expect(formatNumber(0.123)).toEqual('0.12');
  });

  test('formats a number with no suffix', () => {
    expect(formatNumber(123)).toEqual('123.00');
  });

  test('formats a number with a "K" suffix', () => {
    expect(formatNumber(1234)).toEqual('1.23K');
  });

  test('formats a number with an "M" suffix', () => {
    expect(formatNumber(1234567)).toEqual('1.23M');
  });

  test('formats a number with a "B" suffix', () => {
    expect(formatNumber(1234567890)).toEqual('1.23B');
  });

  test('formats a number with a "T" suffix', () => {
    expect(formatNumber(1234567890123)).toEqual('1.23T');
  });
});
