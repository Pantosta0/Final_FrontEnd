import { React, useState, useEffect } from 'react'
import { Container } from '@mui/system'
import { Box, TextField, Typography } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';

const initialFValues = {
    nombre: "",
    fecha: "",
    imglink: "",
    desc: "",
    precio: "",
    lugar: "",
    ciudad: "",
    hora: ""
}



const AddEvent = () => {
    const [values, setValues] = useState(initialFValues)

    const handleInputChange=(event)=>{
        const {name,value}= event.target
        setValues({
            ...values,
            [name]:value
        })

    }

    return (

        <Container maxWidth="sm">
            <Typography variant="h3"
                sx={{
                    marginBottom: "20px",
                    marginTop: "150px"
                }}
            >Crear evento nuevo</Typography>
            <Box component="form" sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                marginTop: "20px"
            }}>
                <TextField 
                    required label="Nombre del Evento"
                    name='nombre' 
                    variant="standard"
                    value={values.nombre}
                    onChange={handleInputChange}
                    />
                <TextField
                    variant='standard'
                    label="Fecha"
                    type="date"
                    name='fecha'
                    value={values.fecha}
                    sx={{ width: 220 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={handleInputChange}
                />
                <TextField
                    variant='standard'
                    label="Hora"
                    type="time"
                    name='hora'
                    value={values.hora}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{
                        step: 300, // 5 min
                    }}
                    sx={{ width: 150 }}
                    onChange={handleInputChange}
                />
                <TextField 
                    required 
                    label="Url de la imagen" 
                    variant='standard'
                    name='imglink'
                    value={values.imglink}
                    onChange={handleInputChange}
                 />
                <TextField 
                    required label="Precio por boleta" 
                    variant='standard'
                    name='precio' 
                    InputProps={{
                        startAdornment: <InputAdornment 
                        position="start">$</InputAdornment>,}}
                    value={values.precio}
                    onChange={handleInputChange}
                    />
                <TextField 
                    required label="Lugar" 
                    name='lugar'
                    variant='standard'
                    value={values.lugar}
                    onChange={handleInputChange}
                    />
                <TextField 
                    required label="Ciudad" 
                    variant='standard'
                    value={values.ciudad}
                    name="ciudad"
                    onChange={handleInputChange}
                    />
                <TextField
                    label="Descripción"
                    multiline
                    name='desc'
                    maxRows={4}
                    variant='standard'
                    value={values.desc}
                    onChange={handleInputChange}
                />
                <Box align="center"sx={{
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
