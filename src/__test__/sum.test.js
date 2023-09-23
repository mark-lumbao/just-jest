const sum = require("../modules/module");

const staticValue = 4;

jest.mock("../modules/module", () => () => staticValue);

it("should work", () => {
  const array = [1, 2];
  const res = sum(array);
  expect(res).not.toBe(array.reduce((p, c) => c + p));
  expect(res).toBe(staticValue);
});
