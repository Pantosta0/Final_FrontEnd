import React from 'react'
import { Container } from '@mui/system'
import { Box, TextField, Typography } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';

const AddEvent = () => {
    return (

        <Container maxWidth="sm">
            <Typography variant="h3"
            sx={{
                marginBottom:"20px",
                marginTop:"150px"
            }}
            >Crear evento nuevo</Typography>
            <Box component="form" sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' }
            }}>
                <TextField required label="Nombre del Evento" variant="standard" />
                <TextField
                    variant='standard'
                    label="Fecha"
                    type="date"
                    defaultValue="2017-05-24"
                    sx={{ width: 220 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    variant='standard'
                    label="Hora"
                    type="time"
                    defaultValue="07:30"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{
                        step: 300, // 5 min
                    }}
                    sx={{ width: 150 }}
                />
                <TextField required label="Url de la imagen" variant='standard' />
                <TextField required label="Precio por boleta" variant='standard' InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }} />
                <TextField required label="Lugar" variant='standard' />
                <TextField required label="Ciudad" variant='standard' />
                <TextField
                    id="outlined-multiline-flexible"
                    label="Descripción"
                    multiline
                    maxRows={4}
                    variant='standard'
                />
                <Box>
                    <Button variant="contained">Crear</Button>
                </Box>
            </Box>
        </Container>

    )
}

export default AddEvent
