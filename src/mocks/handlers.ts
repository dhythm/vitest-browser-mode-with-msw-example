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
];
