import { login } from "./login.js";
import { localStorageMock } from "./test/mock.js";
import { load } from "../../storage/load.js";

global.localStorage = new localStorageMock();

function mockUnsuccessful() {
  return Promise.resolve({
    ok: false,
    status: 401,
    statusText: "Invalid credentials",
  });
}

function mockSuccessful() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () =>
      Promise.resolve({
        email: "gronnfrosk@gmail.com",
        password: "12345678",
        token: "accessToken",
        value: "accessTokenMockValueScript",
      }),
  });
}

describe("Login function", () => {
  it("fetches and stores token key", async () => {
    global.fetch = jest.fn(() => mockSuccessful());
    const data = await login();
    expect(load(data.token)).toBeDefined();
  });

  it("removes the token value", async () => {
    global.fetch = jest.fn(() => mockSuccessful());
    const data = await login();
    expect(load(data.token)).toEqual(null);
  });

  it("gives error on invalid credentials", async () => {
    global.fetch = jest.fn(() => mockUnsuccessful());
    await expect(login("gronnfrosk@gmail.com", "12345678")).rejects.toThrow(
      "Invalid credentials"
    );
  });
});
