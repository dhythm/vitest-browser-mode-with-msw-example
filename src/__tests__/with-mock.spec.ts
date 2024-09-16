import { Mock } from "vitest";
import { isOk } from "../isOk";

vi.mock("../isOk", async (importActual) => {
  const actual = await importActual<typeof import("../isOk")>();
  return {
    ...actual,
    isOk: vi.fn(() => true),
    // isOk: vi.fn().mockImplementation(() => true),
  };
});

vi.mock("../tryIframeAccess", async (importActual) => {
  const actual = await importActual<typeof import("../tryIframeAccess")>();
  return {
    ...actual,
    tryIframeAccess: vi.fn(actual.tryIframeAccess),
  };
});

test("isOk returns true", () => {
  expect(isOk()).toBe(true);
});

test("isOk returns false", () => {
  (isOk as Mock).mockImplementation(() => false);
  expect(isOk()).toBe(false);
});
