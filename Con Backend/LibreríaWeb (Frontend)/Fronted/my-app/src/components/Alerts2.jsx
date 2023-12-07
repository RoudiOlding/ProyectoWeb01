import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Alerts2({titulo, subtexto, estilo, accion1, ancho, onEnviar, reservarLibro, preClose, fastLib}) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
    setOpen(true);
    };

    const handleClose = () => {
        preClose(false);
        fastLib();
    };

    return (
        <React.Fragment>
            <Button
                variant={estilo}
                onClick={handleClickOpen}
                sx={{
                    color: estilo === 'contained' ? 'white' : '#6750A4',
                    backgroundColor: estilo === 'contained' ? '#6750A4' : 'transparent',
                    borderColor: '#6750A4',
                    width: `${ancho}px`,
                    borderRadius: '20px',
                    '&:hover': {
                    backgroundColor: estilo === 'contained' ? '#6750A4' : 'transparent',
                    },
                }}
            >
                {accion1}
            </Button>
            <Dialog
            open={open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            sx={{
                '& .MuiPaper-root': {
                    backgroundColor: '#ECE6F0',
                    borderRadius: '10px',
                },
            }}
            >
            <DialogTitle 
                id="alert-dialog-title" 
                sx={{ 
                    marginTop: '5px',
                    fontSize: '23px',
                    fontStyle: 'Roboto',
                }}
            >
                {titulo}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                {subtexto}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button 
                    autoFocus
                    sx={{
                        color: '#6750A4', // Color del texto
                        fontWeight: '20px',
                    }}
                >
                <div
                    onClick={handleClose}    
                >
                    Ok
                </div>
                </Button>
            </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default Alerts2