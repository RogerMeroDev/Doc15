import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  Stack,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import AppsIcon from "@mui/icons-material/Apps";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import CustomDrawerContent from "./CustomDrawerContent"; // Asume que este componente solo tiene contenido del drawer
import Popover from "@mui/material/Popover";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#4b6934",
       // Cambia este valor por el color que prefieras
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            color:"#000",            
            '&:hover': {
              backgroundColor: '#ce980f', 
            },
          },
        },
      },
    },
    // Puedes definir otros colores aquí si es necesario
  },
});
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null); // Estado para el submenú desplegable
  const [appsAnchorEl, setAppsAnchorEl] = useState(null); // Estado para el Popover de AppsIcon
  const open = Boolean(anchorEl);
  
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAppsIconClick = (event) => {
    // Esta función se usa para el Popover de AppsIcon
    setAppsAnchorEl(event.currentTarget);
  };

  const handleAppsPopoverClose = () => {
    setAppsAnchorEl(null);
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = () => {
    setSubmenuOpen(false); // Cierra el submenú
    setMobileOpen(false); // Cierra el Drawer
  };

  const isAppsPopoverOpen = Boolean(appsAnchorEl);

  const desktopMenu = (
    <>
      <Button color="inherit" component={Link} to="/">
        Inicio
      </Button>
      <Button color="inherit" onClick={handleMenu}>
        Submenú
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose} component={Link} to="/sub1">
          Subitem 1
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/sub2">
          Subitem 2
        </MenuItem>
        {/* Más subítems según sea necesario */}
      </Menu>
      <Button color="inherit" component={Link} to="/about">
        Acerca de
      </Button>
      <Button color="inherit" component={Link} to="/contact">
        Contacto
      </Button>
    </>
  );

  const mobileDrawer = (
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
            <ListItemButton
              sx={{ pl: 4 }}
              component={Link}
              to="/sub1"
              onClick={handleMenuItemClick}
            >
              <ListItemText primary="Subitem 1" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              component={Link}
              to="/sub2"
              onClick={handleMenuItemClick}
            >
              <ListItemText primary="Subitem 2" />
            </ListItemButton>
            {/* Más subítems según sea necesario */}
          </List>
        </Collapse>
        <ListItemButton
          component={Link}
          to="/about"
          onClick={handleMenuItemClick}
        >
          <ListItemText primary="Acerca de" />
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/contact"
          onClick={handleMenuItemClick}
        >
          <ListItemText primary="Contacto" />
        </ListItemButton>
      </List>
    </Stack>
  );

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDrawerToggle}
            size="large"
          >
            <img src={Logo} alt="Logo" style={{ maxHeight: 40 }} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* Cooperativa15deABRIL */}
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={mobileOpen}
                onClose={handleDrawerToggle}
              >
                {mobileDrawer}
              </Drawer>
            </>
          ) : (
            <>
              {desktopMenu}
              <IconButton
                color="inherit"
                sx={{ marginLeft: "auto", marginRight: 2 }}
                onClick={handleAppsIconClick}
              >
                <AppsIcon />
              </IconButton>
              <Popover
                id="apps-menu-popover"
                open={isAppsPopoverOpen}
                anchorEl={appsAnchorEl}
                onClose={handleAppsPopoverClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <CustomDrawerContent />
              </Popover>
            </>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
