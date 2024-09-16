// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isOuterSrcFrameError = (error: any) => {
  return error instanceof DOMException;
};
