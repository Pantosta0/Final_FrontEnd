import * as React from 'react';
import Box from '@mui/material/Box';
import Evento from './Evento';
import Grid from '@mui/material/Unstable_Grid2';


export default function Eventos() {
  const data = {
    nombre:"Kings of Convenience",
    fecha:"1/12/2022",
    imglink:"https://tuboleta.com/imagenes/62cc801d74bc7.png",
    desc:" Después de doce años de silencio el dúo noruego regresó con el celebrado disco Peace or Love y Bogotá será testigo de este reencuentro el 1ro de diciembre en el Teatro Jorge Eliécer Gaitán para una velada acústica y desprendida de uno de los corazones originales del indie folk como Kings of Convenience.",
    precio:"199900",
    lugar:"Teatro Jorge Eliécer Gaitán",
    ciudad:"Bogotá",
    hora:"9:30pm"
  };
    return (
    
        <Box sx={{ flexGrow: 1 , m: 15}}>
      <Grid container spacing={1}>
        <Grid xs={12} sm={6} md={4} lg={3}>
            <Evento data={data} ></Evento>
          </Grid>
          <Grid xs={12} sm={6} md={4} lg={3}>
          <Evento data={data} ></Evento>
          </Grid>
          <Grid xs={12} sm={6} md={4} lg={3}>
          <Evento data={data} ></Evento>
          </Grid>
          <Grid xs={12} sm={6} md={4} lg={3}>
          <Evento data={data} ></Evento>
          </Grid>
          <Grid xs={12} sm={6} md={4} lg={3}>
          <Evento data={data} ></Evento>
          </Grid>
      </Grid>
    </Box>
    
    
  );
}