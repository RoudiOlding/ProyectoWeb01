import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

function BusquedaAdmin({onBuscarCargado}) {
    const handleBuscarCargado = (event) => {
        const buscarItem = event.target.value;
        onBuscarCargado(buscarItem);
    }

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '300px' }, // Ajusta la anchura según tus necesidades
            }}
            noValidate
            autoComplete="off"
        >
            <TextField 
                id="outlined-basic"
                label="Ingresa la palabra clave"
                variant="outlined"
                color='secondary'
                onChange={handleBuscarCargado}
                InputProps={{
                    startAdornment: (
                        <SearchIcon sx={{ color: '#6750A4', mr: 1 }} /> // Ajusta el color y el espacio según tus necesidades
                    ),
                }}
                sx={{
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                            width: '460px',
                            border: "2px solid #6750A4",
                            borderColor: "#6750A4",
                            color: "#6750A4",
                        }  
                    },
                }}
            />
        </Box>
    );
}

export default BusquedaAdmin;