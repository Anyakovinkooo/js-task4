import { calc } from "./calculator.js";

it("should get + num", () => {
  const result = calc("1 + 2");
  expect(result).toEqual("1 + 2 = 3");
});
it("should get - num", () => {
  const result = calc("2 - 2");
  expect(result).toEqual("2 - 2 = 0");
});
it("should get * num  ", () => {
  const result = calc("3 * 3");
  expect(result).toEqual("3 * 3 = 9");
});
it("should get / num", () => {
  const result = calc("4 / 2");
  expect(result).toEqual("4 / 2 = 2");
});
it("should get null", () => {
  const result = calc(4 / 2);
  expect(result).toEqual(null);
});
