import * as React from 'react';
import { Link } from 'react-router-dom';
import "./header.css";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';


const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact','Metas','friendList'];

function HeaderComponent(props) {
  const { window, darkMode, handleToggleDarkMode } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 , height: '10px' }}>
      <img src="/logo.png" alt="Logo" style={{  width: '50px',    height: '50px'   }} />
        ELO VIVO
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className='header'>
        <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar component="nav" className="custom-appbar">
            <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
            >
                <MenuIcon />
            </IconButton>
            <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block'} }}
            >
               <img src="/logo.png" alt="Logo" style={{ 
                    width: 'auto', 
                    height: '100px',                  
                }} 
                />
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {navItems.map((item) => (
                <Button key={item} sx={{ color: '#fff' }}>
                     {item === 'Home' ? <Link to="/">{item}</Link> : <Link to={`/${item.toLowerCase()}`}>{item}</Link>}

                </Button>
                ))}
            </Box>
            <Switch
              checked={darkMode}
              onChange={handleToggleDarkMode}
              inputProps={{ 'aria-label': 'dark mode toggle' }}
              sx={{ ml: 2 }}
            /> {/* alternar o dark mode */}
             <Typography variant="body2" sx={{ color: '#fff', ml: 1 }}>
              {darkMode ? "Modo Escuro" : "Modo Claro"}
            </Typography>
            </Toolbar>
        </AppBar>
        <nav>
            <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            >
            {drawer}
            </Drawer>
        </nav>
        <Box component="main" sx={{ p: 3 }}>
            <Toolbar/>
            <Typography>
            
            </Typography>
        </Box>
        </Box>
    </div>
  );
}

HeaderComponent.propTypes = {
  window: PropTypes.func,
  darkMode: PropTypes.bool.isRequired,
  handleToggleDarkMode: PropTypes.func.isRequired,
};

export default  HeaderComponent;