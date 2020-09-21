export function findTodoItem(todos, id) {
  if(!Array.isArray(todos)) {
    throw new TypeError('Wrong list type')
  }
  return todos.find((todo) => todo.id === id)
}

