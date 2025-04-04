import React from 'react';
import { AppBar, Toolbar, Box } from '@mui/material'; // Импорт MUI-компонентов
import logo from '../assets/logo.png';

const AuthLayouts = ({ children }) => {
  return (
    <>
      {/* Навбар с использованием MUI */}
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Box
            component="img"
            src={logo}
            alt="logo"
            sx={{ width: 150, height: 140 }} // Используем MUI-стилизацию
          />
        </Toolbar>
      </AppBar>

      {/* Контент страницы */}
      <Box sx={{ padding: 2 }}>{children}</Box>
    </>
  );
};

export default AuthLayouts;
