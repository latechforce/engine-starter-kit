import { describe, it, expect } from "bun:test";
import { MockedApp, config, request } from "../helpers";

describe("call API", () => {
  it('should return a "Hello World!" message', async () => {
    // GIVEN
    const { url } = await new MockedApp().start(config);

    // WHEN
    const response = await request(`${url}/api/automation/hello-world`);

    // THEN
    expect(response.message).toBe("Hello world!");
  });
});
