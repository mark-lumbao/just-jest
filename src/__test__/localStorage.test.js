const web = require("../modules/web");

let mockStorage = {};

beforeAll(() => {
  global.Storage.prototype.setItem = jest.fn(
    (key, value) => (mockStorage[key] = value),
  );
  global.Storage.prototype.getItem = jest.fn((key) => mockStorage[key]);
});

afterEach(() => {
  global.Storage.prototype.setItem.mockReset();
  global.Storage.prototype.getItem.mockReset();
});

it("should work with localStorage", () => {
  web.setKey();
  web.getKey();

  expect(global.Storage.prototype.setItem).toHaveBeenCalled();
  expect(global.Storage.prototype.getItem).toHaveBeenCalledWith("key");
});

it("should persist in localStorage", () => {
  expect(mockStorage["key"]).toBe("value");
});
