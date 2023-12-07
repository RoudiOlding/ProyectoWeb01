import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Textfield from './Textfield';
import BasicButtons2 from './Button2';

function ConfAdm() {
    
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const getUpdateAdministratorService = async (updateParams) => {
        try {
            const response = await fetch(`http://localhost:3100/api/student/getUpdateAdministrator`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updateParams),
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Error updating Administrator');
            }
    
            } catch (e) {
            console.error("Error while updating Administrator:", e);
        }
    };

    const [nombre, setNombre] = useState();
    const [apellido, setApellido] = useState();
    const [nroDocumento, setNroDocumento] = useState();
    const [correo, setCorreo] = useState();
    const [constraseña, setContraseña] = useState();
    const [idioma, setIdioma] = useState();
    const [prefijo, setPrefijo] = useState();
    const [colorFavorito, setColorFavorito] = useState();
    const [oldImagen, setOldImagen] = useState();

    const boton1 = async () => {        
        const administratorId = localStorage.getItem("idActual");

        const updateParams = {
            id: administratorId,
            name: nombre,
            lastName: apellido,
            identityDoc: nroDocumento,
            photo: oldImagen,
        };

        const filteredUpdateParams = Object.fromEntries(
            Object.entries(updateParams).filter(([_, value]) => value !== null && value !== undefined && value !== "")
        );
    
        await getUpdateAdministratorService(filteredUpdateParams);
        localStorage.setItem('nombreActual', nombre);
        window.location.reload();
    }

    const boton2 = async () => {
        const administratorId = localStorage.getItem("idActual");
    
        const updateParams = {
            id: administratorId,
            email: correo,
            password: constraseña,
        };
    
        const filteredUpdateParams = Object.fromEntries(
            Object.entries(updateParams).filter(([_, value]) => value !== null && value !== undefined && value !== "")
        );
    
        await getUpdateAdministratorService(filteredUpdateParams);
        window.location.reload();
    }

    const boton3 = async () => {
        const administratorId = localStorage.getItem("idActual");
    
        const updateParams = {
            id: administratorId,
            language: idioma,
            prefix: prefijo,
            colorfavorite: colorFavorito,
        };
    
        const filteredUpdateParams = Object.fromEntries(
            Object.entries(updateParams).filter(([_, value]) => value !== null && value !== undefined && value !== "")
        );
    
        await getUpdateAdministratorService(filteredUpdateParams);
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
                        width: '100%',
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
                                marginLeft: '60px',
                            },
                            '& .MuiTab-root:last-of-type': {
                                marginRight: '60px',
                            },
                            '& .MuiTabs-indicator': {
                                backgroundColor: '#6750A4',
                                height: '5px',
                                borderTopLeftRadius: '8px',
                                borderTopRightRadius: '8px',
                            },
                        }}
                    >
                        <Tab label="Datos Personales" value="1" />
                        <Tab label="Cuenta" value="2" />
                        <Tab label="Preferencias" value="3" />
                    </TabList>
                </Box>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '16px' }}>                                     
                    <TabPanel value="1" sx={{ width: '100%' }}>
                        <div
                            onChange={event => setNombre(event.target.value)}
                        >
                            <Textfield texto='Nombres' />
                        </div>
                        <div
                            onChange={event => setApellido(event.target.value)}
                        >
                            <Textfield texto='Apellidos' />
                        </div>
                        <div
                            onChange={event => setNroDocumento(event.target.value)}
                        >
                            <Textfield texto='Nro de Documento' />
                        </div>
                        <div
                            onChange={event => setOldImagen(event.target.value)}
                        >
                            <Textfield texto='Imagen de perfíl (URL)' />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '16px' }}
                            onClick={boton1}
                        >
                            <BasicButtons2 texto='Guardar' />
                        </div>
                    </TabPanel>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '16px' }}>
                    <TabPanel value="2" sx={{ width: '100%' }}>
                        <div
                            onChange={event => setCorreo(event.target.value)}
                        >
                            <Textfield texto='Correo' />
                        </div>
                        <div
                            onChange={event => setContraseña(event.target.value)}
                        >
                            <Textfield texto='Contraseña' />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '16px' }}
                            onClick={boton2}
                        >
                            <BasicButtons2 texto='Guardar' />
                        </div>
                    </TabPanel>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '16px' }}>
                    <TabPanel value="3" sx={{ width: '100%' }}>
                        <div
                            onChange={event => setIdioma(event.target.value)}
                        >
                            <Textfield texto='Idioma' />
                        </div>
                        <div
                            onChange={event => setPrefijo(event.target.value)}
                        >
                            <Textfield texto='Prefijo' />
                        </div>
                        <div
                            onChange={event => setColorFavorito(event.target.value)}
                        >
                            <Textfield texto='Color Favorito' />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '16px' }}
                            onClick={boton3}
                        >
                            <BasicButtons2 texto='Guardar' />
                        </div>
                    </TabPanel>
                </div>
            </TabContext>
        </Box>
    );
                


}

export default ConfAdm