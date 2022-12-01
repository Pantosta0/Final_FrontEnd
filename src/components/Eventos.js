import * as React from 'react';
import Box from '@mui/material/Box';
import Evento from './Evento';
import Grid from '@mui/material/Unstable_Grid2';


export default function Eventos() {
    return (
    
        <Box sx={{ flexGrow: 1 , m: 15}}>
      <Grid container spacing={1}>
        <Grid xs={12} sm={6} md={4} lg={3}>
            <Evento></Evento>
          </Grid>
          <Grid xs={12} sm={6} md={4} lg={3}>
            <Evento></Evento>
          </Grid>
          <Grid xs={12} sm={6} md={4} lg={3}>
            <Evento></Evento>
          </Grid>
          <Grid xs={12} sm={6} md={4} lg={3}>
            <Evento></Evento>
          </Grid>
          <Grid xs={12} sm={6} md={4} lg={3}>
            <Evento></Evento>
          </Grid>
      </Grid>
    </Box>
    
    
  );
}