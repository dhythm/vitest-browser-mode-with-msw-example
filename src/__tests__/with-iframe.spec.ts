import invariant from "tiny-invariant";

beforeAll(async () => {
  document.body.innerHTML = "<iframe src='/?count=1'></iframe>";
  const iframe = document.querySelector("iframe");
  invariant(iframe, "iframe must be defined.");
  await new Promise((resolve) => iframe.addEventListener("load", resolve));
});

test("nested iframe should be loaded", () => {
  const iframe0 = document.querySelector("iframe");
  invariant(iframe0, "iframe0 must exist");
  const iframe1 = iframe0.contentDocument?.querySelector("iframe");
  invariant(iframe1, "iframe1 must exist");
  const iframe2 = iframe1.contentDocument?.querySelector("iframe");
  invariant(iframe2, "iframe2 must exist");
  const target = iframe2.contentDocument?.querySelector("[data-testid=target]");
  invariant(target, "target must exist");
});
