import {Box, Typography} from '@mui/material';

export const Header = () => (
    <Box textAlign={"left"}>
        <Typography sx={{fontSize: 35}} variant="h1" component="h1">
            Todo list
        </Typography>
    </Box>
)