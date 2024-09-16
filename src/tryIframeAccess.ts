import { isOuterSrcFrameError } from "./isOuterSrcFrameError";

export function tryIframeAccess<T>(callback: () => T): T | undefined;
export function tryIframeAccess<T>(
  callback: () => T,
  fallbackReturnValue: T
): T;
export function tryIframeAccess<T>(callback: () => T, fallbackReturnValue?: T) {
  try {
    return callback();
  } catch (e) {
    if (!isOuterSrcFrameError(e)) {
      throw e;
    }
    return fallbackReturnValue;
  }
}
