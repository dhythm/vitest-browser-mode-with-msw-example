import invariant from "tiny-invariant";
import { worker } from "../mocks/browser";

beforeAll(async () => {
  await worker.start();
});

// [CAVEAT]
// MSW does not support nested iframes.
// See: https://github.com/mswjs/msw/discussions/952
test("nested iframe should be loaded", async () => {
  //   document.body.innerHTML = `<iframe src='${baseUri}?count=1'></iframe>`;
  document.body.innerHTML = `<iframe src='http://localhost:8080/hello/1'></iframe>`;
  const iframe = document.querySelector("iframe");
  invariant(iframe, "iframe must be defined.");
  await new Promise((resolve) => {
    iframe.addEventListener("load", resolve);
  });

  const iframe0 = document.querySelector("iframe");
  invariant(iframe0, "iframe0 must exist");
  //   const iframe1 = iframe0.contentDocument?.querySelector("iframe");
  const iframe1 = iframe0.contentWindow?.document.querySelector("iframe");
  invariant(iframe1, "iframe1 must exist");
  //   const iframe2 = iframe1.contentDocument?.querySelector("iframe");
  const iframe2 = iframe1.contentWindow?.document.querySelector("iframe");
  invariant(iframe2, "iframe2 must exist");
  const target = iframe2.contentDocument?.querySelector("[data-testid=target]");
  invariant(target, "target must exist");
});
