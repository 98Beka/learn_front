import {createStore } from 'redux'

export interface TodoState {
    todos: string[];
}

interface AddTodoAction {
    type: 'ADD_TODO';
    payload: string;
}

interface RemoveTodoAction {
    type: 'REMOVE_TODO';
    payload: number;
}

type TodoAction = AddTodoAction | RemoveTodoAction;

const initialState: TodoState = {
    todos: []
}

function todoReducer(state = initialState, action: TodoAction): TodoState {
    switch(action.type){
        case 'ADD_TODO':
            return{
                todos: [...state.todos, action.payload]
            }
        case 'REMOVE_TODO':
            return {
                todos: state.todos.filter((_, idx) => idx !== action.payload)
            };
        default:
            return state;
    }
}

export const store = createStore(todoReducer);