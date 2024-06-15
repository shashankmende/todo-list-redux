import { createStore } from "redux";
import { v4 as uuidv4 } from 'uuid';

// Initial state with some dummy data
const initialState = {
    todos: [
        { id: uuidv4(), title: "Redux", edit: false }
    ]
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const newTodo = {
                id: uuidv4(),
                title: action.payload.title,
                edit: false
            };
            return {
                ...state,
                todos: [...state.todos, newTodo]
            };

        case "EDIT_TODO":
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload.id ? { ...todo, title: action.payload.title } : todo
                )
            };

        case "DELETE_TODO":
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload.id)
            };

        case 'EDIT_TODO_BOOL':
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload ? { ...todo, edit: !todo.edit } : todo
                )
            };

        case 'UPDATE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload.id ? { ...todo, title: action.payload.title } : todo
                )
            };

        default:
            return state;
    }
};

const store = createStore(todoReducer);

export default store;
