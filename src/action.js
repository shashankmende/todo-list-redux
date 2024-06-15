
export function addTodo(todo){
    return {type:'ADD_TODO',payload:todo}
}

export function deleteTodo(todo){
    return {type:"DELETE_TODO",payload:todo}
}

export function updateTodo(todo){
    return {type:"UPDATE_TODO",payload:todo}
}



export function editTodoBool(todo){
    return { type: 'EDIT_TODO_BOOL', payload: todo.id }  // Only send todo.id
}
