import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function ChipFiltro({texto, borrar}) {
    const handleDelete = () => {
        borrar('')
    };

    return (
        <Stack direction="row" spacing={1}>
            <Chip label={texto} variant="outlined" onDelete={handleDelete} />
        </Stack>
    );
}
export default ChipFiltro