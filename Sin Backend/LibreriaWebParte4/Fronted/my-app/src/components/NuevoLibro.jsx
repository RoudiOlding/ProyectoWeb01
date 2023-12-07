import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Textfield from './Textfield';
import BasicButtons2 from './Button2';
import Alerts from './Alerts';

function NuevoLibro() {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [libros, setLibros] = useState([]);

    useEffect(() => {
        let newLibros = JSON.parse(localStorage.getItem("libros"));
        setLibros(newLibros)
    }, [])

    const libro = {
        titulo: "",
        autor: "",
        ISBN13: "",
        editorial: "",
        FotoLibro: "",
        disponibilidad: true,
        pedidos: 0,
        id: libros.length
    }

    const [libroNuevo, setNuevoLibro] = useState(libro);

    const handleGuardar = () => {
        //Guardar el libro en el local storage
        const nuevoId = libros.length + 1;
        const nuevoLibroConId = { ...libroNuevo, id: nuevoId };
        setLibros([...libros, nuevoLibroConId])
        window.location.reload();
    };

    useEffect(() => {
        localStorage.setItem("libros", JSON.stringify(libros));
    }, [libros])

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
                            onChange={event => setNuevoLibro({...libroNuevo, titulo: event.target.value})}
                            value={libroNuevo.titulo}
                        >
                            <Textfield texto='Título' />
                        </div>
                        <div
                            onChange={event => setNuevoLibro({...libroNuevo, autor: event.target.value})}
                            value={libroNuevo.autor}
                        >
                            <Textfield texto='Autor, autores' />
                        </div>
                        <div
                            onChange={event => setNuevoLibro({...libroNuevo, ISBN13: event.target.value})}
                            value={libroNuevo.ISBN13}
                        >
                            <Textfield texto='ISBN' />
                        </div>
                        <div
                            onChange={event => setNuevoLibro({...libroNuevo, editorial: event.target.value})}
                            value={libroNuevo.editorial}
                        >
                            <Textfield texto='Editorial' />
                        </div>
                        <div
                            onChange={event => setNuevoLibro({...libroNuevo, FotoLibro: event.target.value})}
                            value={libroNuevo.FotoLibro}
                        >
                            <Textfield texto='Imagen (url)' />
                        </div>
                        <div 
                            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '16px' }}
                        >
                            <Alerts titulo='Registro completo' subtexto='La recurso ha sido grabado con éxito' 
                                estilo='outlined' accion1='Insertar' onEnviar={handleGuardar} />
                        </div>
                    </TabPanel>
                </div>
            </TabContext>
        </Box>
    );
}

export default NuevoLibro