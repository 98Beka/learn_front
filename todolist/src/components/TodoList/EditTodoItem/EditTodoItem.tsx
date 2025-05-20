import { Button, Paper, TextField } from "@mui/material";
import type { Todo } from "../../../App";
import { useState, type ChangeEvent } from "react";
import Save from "@mui/icons-material/Save";

interface EditTodoItemProps {
    todo: Todo;
    onChangeTodo: ({ name, description }: Omit<Todo, 'id' | 'checked'>) => void;
}

export const EditTodoItem: React.FC<EditTodoItemProps> = ({ todo, onChangeTodo }) => {

    const [todoEdit, setTodo] = useState({ name: todo.name, description: todo.description })

    const onEdit = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        setTodo({ ...todo, [name]: value })
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
