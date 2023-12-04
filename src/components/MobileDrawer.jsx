import React from 'react';
import { Stack, List, ListItemButton, ListItemText, Collapse, Link } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const MobileDrawer = ({ submenuOpen, toggleSubmenu, handleMenuItemClick }) => {
  return (
    <Stack sx={{ width: 250, padding: 2 }} role="presentation">
      <List>
        <ListItemButton component={Link} to="/" onClick={handleMenuItemClick}>
          <ListItemText primary="Inicio" />
        </ListItemButton>
        <ListItemButton onClick={toggleSubmenu}>
          <ListItemText primary="Submenú" />
          {submenuOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={submenuOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="/sub1" onClick={handleMenuItemClick}>
              <ListItemText primary="Subitem 1" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="/sub2" onClick={handleMenuItemClick}>
              <ListItemText primary="Subitem 2" />
            </ListItemButton>
            {/* Más subítems según sea necesario */}
          </List>
        </Collapse>
        <ListItemButton component={Link} to="/about" onClick={handleMenuItemClick}>
          <ListItemText primary="Acerca de" />
        </ListItemButton>
        <ListItemButton component={Link} to="/contact" onClick={handleMenuItemClick}>
          <ListItemText primary="Contacto" />
        </ListItemButton>
      </List>
    </Stack>
  );
};

export default MobileDrawer;
