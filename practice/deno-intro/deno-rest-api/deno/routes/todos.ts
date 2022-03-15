l.est.body({ type: 'json' });
  const { text } = await value;
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: text,
  };
  console.log(text);
  todos.push(newTodo);

  ctx.response.body = { message: 'new  todo Created!', todo: newTodo };
 
});

router.put('/todos/:todoId', async (ctx) => {
  const tid = ctx.params.todoId;
  const data = await ctx.request.body();
  const todoIndex = todos.findIndex((todo) => {
    return todo.id === tid;
  });
  todos[todoIndex] = { id: todos[todoIndex].id, text: data.value };
  ctx.response.body = { message: 'Updated a todo' };
});

router.delete('/todos/:todoId', (ctx) => {
  const tid = ctx.params.todoId;
  todos = todos.filter((todo) => todo.id !== tid);
  ctx.response.body = { message: 'Deleted todo!!!' };
});

export default router;
