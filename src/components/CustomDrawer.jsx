import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Typography, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import EventIcon from '@mui/icons-material/Event';
import PeopleIcon from '@mui/icons-material/People';
import GroupIcon from '@mui/icons-material/Group';
import FeedIcon from '@mui/icons-material/DynamicFeed';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import InfoIcon from '@mui/icons-material/Info';
// Importa más íconos según sea necesario

const CustomDrawer = ({ open, handleDrawerToggle }) => {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={handleDrawerToggle}
      PaperProps={{
        sx: { width: 320 } // Ajusta el ancho del Drawer según tus necesidades
      }}
    >
      <Typography variant="h5" sx={{ p: 2 }}>
        Menú
      </Typography>
      <Divider />
      <InputBase
        startAdornment={<SearchIcon />}
        placeholder="Busca en el menú"
        sx={{ padding: '2px 8px', width: '100%', margin: '8px 0' }}
      />
      <Divider />
      <List>
        {/* Lista de opciones del menú */}
        <ListItem button>
          <ListItemIcon><EventIcon /></ListItemIcon>
          <ListItemText primary="Eventos" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><PeopleIcon /></ListItemIcon>
          <ListItemText primary="Amigos" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><GroupIcon /></ListItemIcon>
          <ListItemText primary="Grupos" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><FeedIcon /></ListItemIcon>
          <ListItemText primary="Feeds" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><ImportContactsIcon /></ListItemIcon>
          <ListItemText primary="Noticias" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><InfoIcon /></ListItemIcon>
          <ListItemText primary="Páginas" />
        </ListItem>
        {/* Continúa agregando elementos a la lista como sea necesario */}
      </List>
    </Drawer>
  );
};

export default CustomDrawer;
