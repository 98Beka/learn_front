import { createContext } from "react"
import type { Todo } from "./App"

type TodoContextType = {
    todoList: Todo[]
    editTodoId: number | null
    onAddTodo: (todo: Todo) => void
    onDeleteTodo: (id: number) => void
    onChecked: (id: number) => void
    onEditTodo: (id: number) => void
    onChangeTodo: (data: Omit<Todo, 'id' | 'checked'>) => void
}

export const TodoContext = createContext<TodoContextType | undefined>(undefined)