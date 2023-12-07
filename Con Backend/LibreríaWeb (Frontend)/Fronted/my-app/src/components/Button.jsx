import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styles from './Button.module.css'

function BasicButtons({texto, style, funcion}) {
    return (
    <Stack spacing={2} direction="row">
        <Button 
            className={styles.estilo}
            style={style}
            variant="contained"
            sx={{
                '&:hover' : {
                    backgroundColor: "#caaafc"
                }
            }}
            >{texto}</Button>
    </Stack>
    );
}

export default BasicButtons
