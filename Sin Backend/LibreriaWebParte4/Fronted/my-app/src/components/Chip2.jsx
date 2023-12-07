import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function Chip3({texto}) {
    return (
        <Stack direction="row" spacing={1}>
            <Chip 
                label={texto}
                variant="outlined"
                sx={{
                    fontFamily: 'Roboto, sans-serif', // Cambia la fuente según tus preferencias
                    fontSize: '14px', // Ajusta el tamaño de la fuente según tus necesidades
                    borderColor: '#79747E', // Cambia el color del borde según tus preferencias
                    borderWidth: '1px', // Ajusta el ancho del borde según tus necesidades
                    borderRadius: '8px', // Ajusta el radio de borde según tus necesidades
                    color: '#49454F',
                }}
            />
        </Stack>
    );
}

export default Chip3
