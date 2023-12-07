import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Textfield from './Textfield';
import BasicButtons2 from './Button2';
import Alerts3 from './Alerts3';

function NuevoLibro() {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    async function getRegisterBook(libroNew){
        const response = await fetch("http://localhost:3100/api/student/getRegisterBook", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(libroNew),
        });
    }

    const [libroNuevo, setLibroNuevo] = useState({
        title: "",
        author: "",
        isbn13: "",
        editorial: "",
        photobook: "",
        availability: true,
        cont: 0,
        ReturnDate: "2023-12-02 07:19:49.451-05",
    });

    const handleGuardar = async () => {
        alert('Se ejecutó la función')
        await getRegisterBook(libroNuevo)        
        window.location.reload();
    }

    return (
        <Box sx={{ width: '100%', typography: 'body1', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <TabContext value={value}>
                <Box
                    sx={{
                        borderBottom: 1,
                        borderColor: 'divider',
                        backgroundColor: '#FEF7FF',
                        border: '1px solid #6750A4',
                        borderRadius: '12px',
                    }}
                >
                    <TabList
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                        indicatorColor="secondary"
                        sx={{
                            '& .MuiTabs-scroller': {
                                overflow: 'visible',
                            },
                            '& .MuiTab-root': {
                                backgroundColor: '#FEF7FF',
                                color: '#79747E',
                                border: '1px solid #FEF7FF',
                                margin: '0',
                                borderRadius: '14px',
                                textAlign: 'center',
                                fontFamily: 'Roboto',
                                fontSize: '12px',
                                fontWeight: 'bold',
                                '&.Mui-selected': {
                                    color: '#6750A4',
                                    fontFamily: 'Roboto',
                                },
                            },
                            '& .MuiTabs-flexContainer': {
                                gap: '120px',
                            },
                            '& .MuiTab-root:first-of-type': {
                                marginLeft: '280px',
                                marginRight: '280px',
                            },
                            '& .MuiTabs-indicator': {
                                backgroundColor: '#6750A4 !important',
                                height: '5px !important',
                                borderTopLeftRadius: '8px !important',
                                borderTopRightRadius: '8px !important',
                                width: '685px !important',
                                marginLeft: '-250px !important',
                            },                            
                        }}
                    >
                        <Tab label="INSERTAR NUEVO LIBRO" value="1" />
                    </TabList>
                </Box>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '16px' }}>
                    <TabPanel value="1" sx={{ width: '100%' }}>
                        <div
                            onChange={event => setLibroNuevo({...libroNuevo, title: event.target.value})}
                        >
                            <Textfield texto='Título' />
                        </div>
                        <div
                            onChange={event => setLibroNuevo({...libroNuevo, author: event.target.value})}
                        >
                            <Textfield texto='Autor, autores'/>
                        </div>
                        <div
                            onChange={event => setLibroNuevo({...libroNuevo, isbn13: event.target.value})}
                        >
                            <Textfield texto='ISBN' />
                        </div>
                        <div
                            onChange={event => setLibroNuevo({...libroNuevo, editorial: event.target.value})}
                        >
                            <Textfield texto='Editorial' />
                        </div>
                        <div
                            onChange={event => setLibroNuevo({...libroNuevo, photobook: event.target.value})}
                        >
                            <Textfield texto='Imagen (url)' />
                        </div>
                        <div 
                            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '16px' }}
                        >
                            <Alerts3 titulo='Registro completo' subtexto='La recurso ha sido grabado con éxito' 
                                estilo='outlined' accion1='Insertar' onEnviar={handleGuardar} />
                        </div>
                    </TabPanel>
                </div>
            </TabContext>
        </Box>
    );
}

export default NuevoLibro