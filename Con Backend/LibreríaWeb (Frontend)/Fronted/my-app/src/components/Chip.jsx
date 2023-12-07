import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function Chip2({texto}) {
return (
    <Stack direction="row" spacing={1}>
        <Chip 
            label={texto}
            sx={{
                backgroundColor: '#E8DEF8',
                color: '#1D192B',
                fontFamily: 'Robot',
            }}
        />
    </Stack>
);
}

export default Chip2