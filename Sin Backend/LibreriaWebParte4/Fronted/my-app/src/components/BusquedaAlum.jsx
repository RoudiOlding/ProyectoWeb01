import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

function BusquedaAlum({titulo, ancho, setClave}) {

    const handleInputChange = (event) => {
        if (typeof setClave === 'function') {
            setClave(event.target.value);
        }
    };

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
                label={titulo}
                variant="outlined"
                color='secondary'
                onChange={handleInputChange}
                InputProps={{
                    startAdornment: (
                        <SearchIcon sx={{ color: '#6750A4', mr: 1 }} /> // Ajusta el color y el espacio según tus necesidades
                    ),
                }}
                sx={{
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                            width: `${ancho}px`,
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

export default BusquedaAlum;