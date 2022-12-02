import * as React from 'react';
import Box from '@mui/material/Box';
import Evento from './Evento';
import Grid from '@mui/material/Unstable_Grid2';
import axios from 'axios';

import { useState, useEffect } from 'react'


const Eventos=()=> {
  
  const [eventos, setEventos] = useState([])

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/events")
      const {data}= response
      setEventos(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (

    <Box sx={{ flexGrow: 1, m: 15 }}>
      <Grid container spacing={1}>

        {eventos.map((item, index) => <Evento key={index} data={item} />)}



      </Grid>
    </Box>


  );
}

export default Eventos