import { Box } from "@mui/material"
import { TodoItem } from "./TodoItem/TodoItem"
import type { Todo } from "../../App";
import { EditTodoItem } from "./EditTodoItem/EditTodoItem";

interface TodoListProps {
    editTodoId: Todo['id'] | null
    todoList: Todo[]
    onDeleteTodo: (id: Todo['id']) => void
    onEditTodo: (id: Todo['id']) => void
    onChangeTodo: ({ name, description }: Omit<Todo, 'id' | 'checked'>) => void;
    onChecked: (id: Todo['id']) => void
}

export const TodoList: React.FC<TodoListProps> = ({
    todoList,
    onDeleteTodo,
    onChecked,
    onEditTodo,
    editTodoId,
    onChangeTodo
}) => <Box>
        {
            todoList.map(todo => {
                if (todo.id === editTodoId){
                    return <EditTodoItem key={todo.id} onChangeTodo={(todo) => onChangeTodo(todo)} todo={todo}/>
                }
                else {
                    return <TodoItem
                        key={todo.id}
                        todo={todo}
                        onDeleteTodo={onDeleteTodo}
                        onChecked={onChecked}
                        onEditTodo={onEditTodo} />
                }
            })
        }
    </Box>