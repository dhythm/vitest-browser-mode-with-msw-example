import { http, HttpResponse } from "msw";

export const baseUri = "http://localhost:8080/";

export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/todos/:id", () => {
    return HttpResponse.json({
      userId: 1,
      id: 1,
      title: "title",
      completed: false,
    });
  }),
  http.get(`${baseUri}*`, ({ request }) => {
    const url = new URL(request.url);
    const count = url.searchParams.get("count");
    return HttpResponse.text(
      count === "3"
        ? "<html><body><div data-testid='target'></div></body></html>"
        : `<html><body><iframe src='${baseUri}?count=${
            parseInt(count || "0", 10) + 1
          }></iframe></body></html>`,
      {
        status: 200,
        headers: {
          "Content-Type": "text/html",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }),
];
