import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';



export default function Navbar() {
    return (
    <Box sx={{ flexGrow: 1, marginBottom: '7rem'}}>
      <AppBar position="fixed">
        <Toolbar>
            <IconButton color= 'primary' href= '/'>
            <img src="https://tuboleta.com/img/ic_logotuboleta.svg" alt='Logo Tuboleta'></img>
            </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
          <IconButton href='/login'>
            <img src='https://tuboleta.com/img/ic_m_user.svg'alt='Icono usuario'></img>
            <Typography color="white" fontWeight="bolder">
              Ingresa  
            </Typography>          
          </IconButton>

          <IconButton aria-label='Mostrar carrito'>
            
            <Badge badgeContent={2} color= 'secondary'>
            <ShoppingCartIcon fontSize='large' style={{ color: 'white'}}></ShoppingCartIcon>
            </Badge>

          </IconButton>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}