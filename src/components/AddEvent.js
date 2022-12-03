import { React } from 'react'
import { Container } from '@mui/system'
import { Box, TextField, Typography } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import IdGen from './IdGen';
import axios from 'axios';




const handleSubmit =async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    var object = {};
    data.forEach(function (value, key) {
        object[key] = value;
    });
    console.log(object);
    let id = IdGen()
    object.id=id
    axios.post("http://localhost:3000/events", object)
}




const AddEvent = () => {


    return (

        <Container maxWidth="sm">
            <Typography variant="h3"
                sx={{
                    marginBottom: "20px",
                    marginTop: "150px"
                }}

            >Crear evento nuevo</Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                marginTop: "20px"
            }}>
                <TextField
                    required label="Nombre del Evento"
                    name='nombre'
                    variant="standard"
                />
                <TextField
                    variant='standard'
                    label="Fecha"
                    type="date"
                    name='fecha'
                    sx={{ width: 220 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    variant='standard'
                    label="Hora"
                    type="time"
                    name='hora'
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{
                        step: 300, // 5 min
                    }}
                    sx={{ width: 150 }}
                />
                <TextField
                    required
                    label="Url de la imagen"
                    variant='standard'
                    name='imglink'
                />
                <TextField
                    required label="Precio por boleta"
                    variant='standard'
                    name='precio'
                    InputProps={{
                        startAdornment: <InputAdornment
                            position="start">$</InputAdornment>,
                    }}
                />
                <TextField
                    required label="Lugar"
                    name='lugar'
                    variant='standard'
                />
                <TextField
                    required label="Ciudad"
                    variant='standard'
                    name="ciudad"
                />
                <TextField
                    label="Descripción"
                    multiline
                    name='desc'
                    maxRows={4}
                    variant='standard'
                />
                <Box align="center" sx={{
                    marginTop: "20px"
                }}>
                    <Button
                        variant="contained"
                        type='submit'
                    >Crear</Button>
                </Box>
            </Box>
        </Container>

    )
}

export default AddEvent
