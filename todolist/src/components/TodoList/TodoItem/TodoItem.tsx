import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import type { Todo } from "../../../App";
import { useContext } from "react";
import { TodoContext } from "../../../TodoContext";

interface TodoItemProps {
    todo: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo}) => {
    const context = useContext(TodoContext)
    if (!context)
        throw new Error('Todolist must be used within a TodoContext.Provider')
    const { onChecked, onEditTodo, onDeleteTodo } = context

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
                background: 'lightgray',
                opacity: todo.checked ? 0.5 : 1
            }}
        >
            <Box textAlign='left'>
                <Typography
                    sx={{ cursor: 'pointer', textDecorationLine: todo.checked ? 'line-through' : 'none' }}
                    onClick={() => onChecked(todo.id)}
                    variant="h5"
                    component="h5"
                    gutterBottom>
                    {todo.name}
                </Typography>
                <Typography variant="subtitle1" component="div" gutterBottom>
                    {todo.description}
                </Typography>
            </Box>
            <Box>
                <IconButton onClick={() => onEditTodo(todo.id)} color="warning" aria-label='edit'>
                    <EditOutlined />
                </IconButton>
                <IconButton onClick={() => onDeleteTodo(todo.id)} color="error" aria-label='delete'>
                    <DeleteOutline />
                </IconButton>
            </Box>
        </Paper>
    )
}
