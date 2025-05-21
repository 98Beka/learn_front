import { Box } from "@mui/material"
import { TodoItem } from "./TodoItem/TodoItem"
import { EditTodoItem } from "./EditTodoItem/EditTodoItem";
import { useContext } from "react";
import { TodoContext } from "../../TodoContext";



export const TodoList = () => {
    const context = useContext(TodoContext)
    if(!context)
        throw new Error('Todolist must be used within a TodoContext.Provider')
    const {todoList, editTodoId} = context
    return <Box>
        {
            todoList.map(todo => {
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