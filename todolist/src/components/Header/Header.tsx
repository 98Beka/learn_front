import {Box, Typography} from '@mui/material';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';

export const Header = () => {
    const todosCount = useSelector((state:RootState) => state.todos.length);
    return <Box textAlign={"left"}>
        <Typography sx={{fontSize: 35}} variant="h1" component="h1">
            Todo list count: {todosCount}
        </Typography>
    </Box>
}