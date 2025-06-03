import { Add } from "@mui/icons-material";
import { Button, Paper, TextField } from "@mui/material";
import { useState } from "react";
import type { Todo } from "../../App";
import { useDispatch } from "react-redux";

const DEFAULT_TODO:Todo = {
  id: 0,
  name: "",
  description: "",
  checked: false,
};

export const Panel = () => {
    const [todo, setTodo] = useState(DEFAULT_TODO);
    const dispatch = useDispatch();
    
    const onClick = () => {
        if (!todo.name.trim()) return;

        const newTodo = {
            ...todo,
            id: Date.now(),
        };

        dispatch({ type: "ADD_TODO", payload: newTodo });
        setTodo(DEFAULT_TODO)
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name} = event.target
        setTodo({...todo, [name]: value})
        dispatch({ type: "EDIT_TODO", payload: todo });
    }

    return <Paper
        elevation={6}
        sx={{
            width:"100%",
            padding: '25px 20px',
            borderRadius: 2,
            background: 'lightgray',
            display: 'flex',
            justifyContent: 'space-between',
            alignContent: 'center',
            gap: 2
        }}
    >
        <TextField label="name" name="name" variant="outlined" value={todo.name} onChange={onChange} fullWidth />
        <TextField label="description" name="description" variant="outlined" value={todo.description} onChange={onChange} fullWidth />
        <Button startIcon={<Add />} onClick={onClick} variant="outlined">Add</Button>
    </Paper>
}