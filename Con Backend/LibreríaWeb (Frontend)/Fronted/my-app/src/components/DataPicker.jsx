import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat'; // Importa el plugin necesario
import DialogContent from '@mui/material/DialogContent';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import DialogActions from '@mui/material/DialogActions';
import Alerts2 from './Alerts2';

// Agrega el plugin a dayjs
dayjs.extend(customParseFormat);

function DataPickerAlone({ fastLib, setFecha }) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [selectedDate, handleDateChange] = React.useState(null);

    const handleDateSelection = (date) => {
        const jsDate = date.toDate();
        handleDateChange(date);
        const formattedDate = jsDate.toLocaleDateString('en-US', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric',
        });
        setFecha(formattedDate);
    };

    return (
        <React.Fragment>
            <Button
                variant="contained"
                onClick={handleClickOpen}
                sx={{
                    color: 'white',
                    borderColor: '#6750A4',
                    backgroundColor: '#6750A4',
                    width: '130px',
                    borderRadius: '20px',
                    '&:hover': {
                        backgroundColor: '#6750A4',
                    },
                }}
            >
                Reservar
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={{
                    '& .MuiPaper-root': {
                        backgroundColor: '#ECE6F0',
                        borderRadius: '10px',
                    },
                }}
            >
                <DialogContent>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateCalendar 
                            onChange={handleDateSelection}
                        />
                    </LocalizationProvider>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleClose}
                        autoFocus
                        sx={{
                            color: '#6750A4',
                            fontWeight: '20px',
                        }}
                    >
                        Cancel
                    </Button>
                    <Alerts2
                        accion1='Ok'
                        ancho='100'
                        autoFocus
                        titulo='Reserva completada'
                        subtexto={`La reserva del curso se ha realizado con éxito. Este debe ser devuelto hasta el día ${dayjs(selectedDate).format('DD/MM/YYYY')}`}
                        preClose={handleClose}
                        fastLib={fastLib}
                    />
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default DataPickerAlone;