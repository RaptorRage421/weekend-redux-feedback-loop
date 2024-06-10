import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import ReviewsIcon from '@mui/icons-material/Reviews';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const pages = [
    { name: 'Feeling', destination: '/' },
    { name: 'Understanding', destination: '/understanding' },
    { name: 'Support', destination: '/support' },
    { name: 'Comments', destination: '/comments' },
    { name: 'ADMIN', destination: '/admin' }
];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleMenuItemClick = (destination) => {
        switch (destination) {
            case '/':
                dispatch({ type: 'CLEAR_FEELING' });
                break;
            case '/understanding':
                dispatch({ type: 'CLEAR_UNDERSTANDING' });
                break;
            case '/support':
                dispatch({ type: 'CLEAR_SUPPORT' });
                break;
            case '/comments':
                dispatch({ type: 'CLEAR_COMMENTS' });
                break;
            default:
                break;
        }
        history.push(destination); 
    };


    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1 }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                    <Typography onClick={() => handleMenuItemClick(page.destination)} textAlign="center" href={`/#${page.destination}`}>{page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                   
                        <ReviewsIcon sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{
                                display: { xs: 'flex', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 900,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            FEEDBACK
                        </Typography>
                    

                    <Box sx={{ flexGrow: 1 }} />

                    <ReviewsIcon sx={{ display: { xs: 'none', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        sx={{
                            display: { xs: 'none', md: 'none' },
                            fontFamily: 'monospace',
                            fontWeight: 900,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        FEEDBACK
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;
