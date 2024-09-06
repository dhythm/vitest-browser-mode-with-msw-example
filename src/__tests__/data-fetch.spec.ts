test("fetch data from external api", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  expect(data).toEqual({
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  });
});
