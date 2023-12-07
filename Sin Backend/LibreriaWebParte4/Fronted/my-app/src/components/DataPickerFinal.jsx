import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function DataPickerFinal({setFecha}) {

    const [selectedDate, handleDateChange] = React.useState(null);

    const handleDateSelection = (date) => {
        console.log('Fecha seleccionada:', date);
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
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                label="Ingresar fecha límite"
                onChange={handleDateSelection}
                slotProps={{
                textField: {
                    helperText: 'MM/DD/YYYY',
                },
                }}
            />
        </LocalizationProvider>
    );
}

export default DataPickerFinal
