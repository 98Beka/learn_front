import { Box } from "@mui/material"
import { TodoItem } from "./TodoItem/TodoItem"
import { EditTodoItem } from "./EditTodoItem/EditTodoItem";
import { useSelector } from "react-redux";
import type { Todo } from "../../App"
import type { RootState } from "../../store";

export const TodoList = () => {
    const todoList = useSelector((state: RootState) => state.todos)
    const editTodoId = useSelector((state: RootState) => state.editTodoId);
    return <Box>
        {
            todoList.map((todo:Todo) => {
                if (todo.id === editTodoId){
                    return <EditTodoItem key={todo.id} todo={todo}/>
                }
                else {
                    return <TodoItem
                    key={todo.id}
                    todo={todo} />
                }
            })
        }
    </Box>
}