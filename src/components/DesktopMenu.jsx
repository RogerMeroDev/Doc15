import React from 'react';
import { Button, Menu, MenuItem, Link } from '@mui/material';

const DesktopMenu = ({ anchorEl, isMenuOpen, handleClose }) => {
  return (
    <>
      <Button color="inherit" component={Link} to="/">Inicio</Button>
      <Button color="inherit" onClick={handleClose}>
        Submenú
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} component={Link} to="/sub1">Subitem 1</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/sub2">Subitem 2</MenuItem>
        {/* Más subítems según sea necesario */}
      </Menu>
      <Button color="inherit" component={Link} to="/about">Acerca de</Button>
      <Button color="inherit" component={Link} to="/contact">Contacto</Button>
    </>
  );
};

export default DesktopMenu;
