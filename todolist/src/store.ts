import {createStore } from 'redux'
import type { Todo } from './App';

export interface TodoState {
    todos: Todo[];
    editTodoId: number | null;
}

interface AddTodoAction {
    type: 'ADD_TODO';
    payload: Todo;
}

interface RemoveTodoAction {
    type: 'REMOVE_TODO';
    payload: number | null;
}

interface SetEditAction {
  type: "SET_EDIT_TODO";
  payload: number | null;
}

interface EditAction {
  type: "EDIT_TODO";
  payload: Todo;
}

interface CheckAction {
  type: "CHECK_TODO";
  payload: number | null;
}

type TodoAction = AddTodoAction | RemoveTodoAction | SetEditAction | EditAction | CheckAction;

const initialState: TodoState = {
    todos: [],
    editTodoId: null,
}

function todoReducer(state = initialState, action: TodoAction): TodoState {
    switch(action.type){
        case 'ADD_TODO':
            return{
                ...state,
                todos: [...state.todos, action.payload]
            }
        case 'REMOVE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        case "SET_EDIT_TODO":
            return { 
                ...state, 
                editTodoId: action.payload }
        case "EDIT_TODO":
            return { 
                ...state, 
                todos: state.todos.map(todo => 
                    todo.id === action.payload.id ? {...todo, description: action.payload.description, name:action.payload.name} : todo
                ) }
        case "CHECK_TODO":
            return { 
                ...state, 
                todos: state.todos.map(todo => 
                    todo.id === action.payload ? {...todo, checked:true} : {...todo, checked:false}
                ) }
        default:
            return state;
    }
}

export const store = createStore(todoReducer);
export type RootState = ReturnType<typeof todoReducer>;