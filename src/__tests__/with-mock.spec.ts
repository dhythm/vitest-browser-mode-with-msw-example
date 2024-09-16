import { Mock } from "vitest";
import { isOk } from "../utils";

vi.mock("../utils", async (importActual) => {
  const actual = await importActual<typeof import("../utils")>();
  return {
    ...actual,
    isOk: vi.fn(() => true),
    // isOk: vi.fn().mockImplementation(() => true),
  };
});

test("isOk returns true", () => {
  expect(isOk()).toBe(true);
});

test("isOk returns false", () => {
  (isOk as Mock).mockImplementation(() => false);
  expect(isOk()).toBe(false);
});
