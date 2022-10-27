import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, 
  Container, 
  Toolbar, 
  Typography, 
  Box,
  Tabs, Tab,
  IconButton,
  Drawer, 
  List, ListItem, ListItemText,
  ListItemIcon, ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import DnsIcon from '@mui/icons-material/Dns';
import { pages, ROUTE_PATHS } from '../data/types';

export default function Navbar() {

  const [value, setValue] = useState('0');
  const [open, setOpen] = useState(false);

  const toggleDrawer = (val) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(val);
  }

  function list() {
    return(
      <Box
        sx={{width: 'auto'}}
        role='presentation'
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          <ListItem key='Search' disablePadding>
            <ListItemButton component='a' href={ROUTE_PATHS.home}>
              <ListItemIcon>
                <ManageSearchIcon/>
                <ListItemText primary='Search'/>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>

          <ListItem key='Directory' disablePadding>
            <ListItemButton component='a' href={ROUTE_PATHS.directory}>
              <DnsIcon/>
              <ListItemText primary='Directory'/>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    )
  }
  return (
    <AppBar sx={{background: '#212121', position: 'sticky', padding: '0px' }}>
      <Container sx={{padding: '0px'}}>
        <Toolbar>

          <Box  sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center' }}>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '0 rem',
                color: 'inherit',
                textDecoration: 'none',
              }}>
              Nihon Go!
            </Typography>
            <Tabs
              textColor='inherit'
              value={value}
              onChange={(e, value) => setValue(value)}
              indicatorColor='secondary'>
              {pages.map((p, i) => (
                <Tab LinkComponent={Link} to={(i === 0) ? '/' : pages[i]} label={p} key={i} value={i.toString()}/>
              ))}
            </Tabs>
          </Box>

          <Box  sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer((open)? false : true)}
            >
              <MenuIcon />
            </IconButton>
            
            <Typography
              variant="h6"
              component="div"
              sx={{
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
              }}>
              Nihon Go!
            </Typography>

            <Drawer
              anchor={'top'}
              open={open}
              onClose={toggleDrawer(false)}
              >
                {list()}
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>     
  )
}