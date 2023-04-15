import { localStorageMock } from "./test/mock.js";
import { logout } from "./logout.js";
import { load, save } from "../../storage/index.js";

global.localStorage = new localStorageMock();

describe("Logout function", () => {
  it("removes the token from browser storage", () => {
    const key = "token";
    const value = "userTestAccessTokenScript";
    save(key, value);
    expect(load(key)).toEqual(value);
    logout();
    expect(load(key)).toEqual(null);
  });
});
