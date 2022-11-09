import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar, IconButton, Menu, MenuItem, Tooltip } from '@mui/material';

import { selectIsAuth, selectUserName } from 'redux/auth/selectors.auth';
import { logOutThunk } from 'redux/auth/thunks.auth';
import { HeaderLogo } from './Header.styled';
import HeaderLink from 'components/HeaderLink';
import UserMenu from 'components/UserMenu';

const settings = ['Logout'];
const pages = ['Login', 'Register'];

export default function Header() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const userName = useSelector(selectUserName);

  const handleLogOut = () => {
    dispatch(logOutThunk());
  };
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <HeaderLogo>Phonebook</HeaderLogo>
          </Typography>
          {isAuth ? (
            <>
              <UserMenu />
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={userName} src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map(setting => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography onClick={handleLogOut} textAlign="center">
                        {setting}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </>
          ) : (
            <>
              {pages.map(page => (
                <HeaderLink key={page} to={page.toLowerCase()}>
                  <MenuItem>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                </HeaderLink>
              ))}
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
