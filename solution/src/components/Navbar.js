import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import {AuthContext} from '../contexts/AuthContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../helpers/firebase';
import Button from '@mui/material/Button'
import { cyan, lime, teal } from '@mui/material/colors';



export default function MenuAppBar() {
  const primary = lime[700];
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const {currentUser} = useContext(AuthContext);
 

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      
      <AppBar position="static" color= "primary">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Perfect Blog
          </Typography>
          {currentUser ? (
            <>
               <h5 className="mb-0 text-capitalize">
                {currentUser?.displayName}
              </h5>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
               
                <MenuItem onClick={() => navigate('/profile')}>Profile</MenuItem>
                <MenuItem onClick={() => navigate('/new-blog')}>New Post</MenuItem>
                
              </Menu>
            </>
          ):(
            <div >
            <Button size = "small" color='success' variant="contained" style={{marginRight: 15}} onClick={() => navigate('/login')}>Login</Button>
            <Button size = "small" color="warning" variant="contained" onClick={() => navigate('/register')}>Register</Button>
            </div>
          )}

          {currentUser ? (
            <div>
              <Button size = "small" variant="contained" color= "error" onClick={() => logOut()}>Log Out</Button>
            
            </div>
          ) : (
            <div>
            
            </div>)}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
