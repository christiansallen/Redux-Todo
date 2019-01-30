export const NEW_TODO = "NEW_TODO";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
export const DELETE_TODO = "DELETE_TODO";

export function newTodo(newTodo) {
  return {
    type: NEW_TODO,
    payload: newTodo
  };
}

export function toggleComplete(index) {
  return {
    type: TOGGLE_COMPLETE,
    payload: index
  };
}

export function deleteTodo(index) {
  return {
    type: DELETE_TODO,
    payload: index
  };
}
