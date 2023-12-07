import * as React from 'react';
import Button from '@mui/material/Button';

function BasicButtons2({ texto, ancho }) {
    return (
        <Button variant="outlined" 
            sx={{ 
                width: `${ancho}px`,
                border: '0.5px solid #79747E',
                borderRadius: '25px',
                color: '#6750A4',
                fontFamily: 'Roboto',
                fontSize: '14px',
                '&:hover': {
                    backgroundColor: '#6750A4',
                    color: '#ffffff',
                    border: '2px solid #79747E',
                },
                '&:active': {
                    backgroundColor: '#6750A4', // Cambia al color deseado cuando el botón está presionado
                    color: '#ffffff',
                    border: '2px solid #6750A4', // Puedes ajustar el color del borde cuando el botón está presionado
                },
            }}>
            {texto}
        </Button>
    );
}

export default BasicButtons2;
