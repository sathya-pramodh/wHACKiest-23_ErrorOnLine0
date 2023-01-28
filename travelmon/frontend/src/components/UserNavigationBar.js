import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { CssBaseline } from '@mui/material';

export default function NavigationBar() {
    return (
        <CssBaseline>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" >
                    <Toolbar >
                        <Button type="submit" href='/user/home' sx={{ flexGrow: 1 }} color="inherit" >Home</Button>
                        <Button type="submit" href="/" sx={{ flexGrow: 1 }} color="inherit">Logout</Button>
                    </Toolbar>
                </AppBar>
            </Box >
        </CssBaseline>
    );
}
