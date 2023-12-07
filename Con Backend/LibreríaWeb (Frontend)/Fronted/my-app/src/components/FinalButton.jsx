import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function FinalButton({texto}) {
    return (
            <Button 
                variant="contained" 
                disabled
                sx={{
                    borderRadius: '14px',
                    width: '120px',
                    backgroundColor: '#1D1B201F',
                    borderColor: '#1D1B201F'
                }}
            >
            {texto}
            </Button>
    );
}

export default FinalButton;