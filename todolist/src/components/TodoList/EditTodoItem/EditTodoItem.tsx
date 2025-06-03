import { Button, Paper, TextField } from "@mui/material";
import type { Todo } from "../../../App";
import {useState, type ChangeEvent } from "react";
import Save from "@mui/icons-material/Save";
import { useDispatch } from "react-redux";

interface EditTodoItemProps {
    todo: Todo;
}

export const EditTodoItem: React.FC<EditTodoItemProps> = ({ todo}) => {
    const [todoEdit, setTodo] = useState({id:todo.id, name: todo.name, description: todo.description })
    const dispatch = useDispatch();
    const onEdit = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        setTodo({ ...todoEdit, [name]: value })
    }
    const onChangeTodo =() => {
        dispatch({type:'EDIT_TODO', payload: todoEdit})
        dispatch({type:'SET_EDIT_TODO', payload: 0})
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
            <Button startIcon={<Save />} onClick={() => onChangeTodo()} variant="outlined">Save</Button>
        </Paper>
    )
}
