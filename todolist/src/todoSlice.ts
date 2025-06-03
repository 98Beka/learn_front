import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { EditTodo, Todo } from './types';

export interface TodoState {
    todos: Todo[];
    editTodoId: number | null;
}

const initialState: TodoState = {
    todos: [],
    editTodoId: null,
}

const todosSlice  = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.todos.push(action.payload)
        },
        removeToDo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        setEditTodo: (state, action: PayloadAction<number|null>) => {
            state.editTodoId = action.payload
        },
        checkToDo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.map(todo => todo.id === action.payload ? {...todo, checked: true} : {...todo, checked: false})
        },
        editTodo: (state, action: PayloadAction<EditTodo>) => {
            state.todos = state.todos.map(todo => todo.id === action.payload.id 
                ? {...todo, description:action.payload.description, name: action.payload.name} 
                : todo)
            state.editTodoId = 0
        }
    }
})

export const {addTodo, removeToDo, setEditTodo, checkToDo, editTodo } = todosSlice.actions;
export default todosSlice.reducer