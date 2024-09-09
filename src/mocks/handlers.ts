import { http, HttpResponse } from "msw";
export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/todos/:id", () => {
    return HttpResponse.json({
      userId: 1,
      id: 1,
      title: "title",
      completed: false,
    });
  }),
  http.get("/", ({ request }) => {
    const url = new URL(request.url);
    const count = url.searchParams.get("count");
    return HttpResponse.text(
      count === "3"
        ? "<html><body><div data-testid='target'></div></body></html>"
        : `<html><body><iframe src='/?count=${
            parseInt(count || "0", 10) + 1
          }></iframe></body></html>`,
      { status: 200 }
    );
  }),
];
