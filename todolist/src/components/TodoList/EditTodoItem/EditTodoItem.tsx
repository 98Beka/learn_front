import { Button, Paper, TextField } from "@mui/material";
import type { Todo } from "../../../App";
import { useContext, useState, type ChangeEvent } from "react";
import Save from "@mui/icons-material/Save";
import { TodoContext } from "../../../TodoContext";

interface EditTodoItemProps {
    todo: Todo;
}

export const EditTodoItem: React.FC<EditTodoItemProps> = ({ todo}) => {
    const [todoEdit, setTodo] = useState({ name: todo.name, description: todo.description })
    const context = useContext(TodoContext)
    if(!context)
        throw new Error('Todolist must be used within a TodoContext.Provider')
    const {onChangeTodo} = context
    const onEdit = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        setTodo({ ...todoEdit, [name]: value })
    }

    return (
        <Paper
            elevation={2}
            sx={{
                marginTop: '10px',
                width: '100%',
                padding: '25px 30px',
                borderRadius: 2,
                display: 'flex',
                justifyContent: 'space-between',
                alignContent: 'center',
                gap: 2,
                background: 'lightgray'
            }}
        >
            <TextField label="name" name="name" variant="outlined" value={todoEdit.name} onChange={onEdit} fullWidth />
            <TextField label="description" name="description" variant="outlined" value={todoEdit.description} onChange={onEdit} fullWidth />
            <Button startIcon={<Save />} onClick={() => onChangeTodo(todoEdit)} variant="outlined">Save</Button>
        </Paper>
    )
}
