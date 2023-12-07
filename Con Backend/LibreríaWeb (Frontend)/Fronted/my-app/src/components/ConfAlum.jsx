import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Textfield from './Textfield';
import BasicButtons2 from './Button2';

function ConfAlumn() {

    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };   
    const getUpdateStudentService = async (updateParams) =>{
        try {
            const response = await fetch(`http://localhost:3100/api/student/getUpdateStudent`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateParams),
            });
        
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Error Update Student');
            }  
            } catch (e) {
            console.error("Error while Update Student:", e);
        
        }
    };
    const [nombre, setNombre] = useState();
    const [apellido, setApellido] = useState();
    const [nroDocumento, setNroDocumento] = useState();
    const [correo, setCorreo] = useState();
    const [constraseña, setContraseña] = useState();
    const [prefijo, setPrefijo] = useState();
    const [oldImagen, setOldImagen] = useState();
    
    const guardar1 = async () => {        
        const StudentId = localStorage.getItem("idActual");

        const updateParams = {
            id: StudentId,
            name: nombre,
            lastName: apellido,
            identityDoc: nroDocumento,
            photo: oldImagen,
        };
        
        const filteredUpdateParams = Object.fromEntries(
            Object.entries(updateParams).filter(([_, value]) => value !== null && value !== undefined && value !== "")
        );
    
        await getUpdateStudentService(filteredUpdateParams);
        localStorage.setItem('nombreActual', nombre);
        window.location.reload();
    }

    const guardar2 = async () => {
        const StudentId = localStorage.getItem("idActual");
    
        const updateParams = {
            id: StudentId,
            email: correo,
            password: constraseña,
        };
    
        const filteredUpdateParams = Object.fromEntries(
            Object.entries(updateParams).filter(([_, value]) => value !== null && value !== undefined && value !== "")
        );
    
        await getUpdateStudentService(filteredUpdateParams);
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
                                gap: '180px',
                                marginRight: '120px',
                                
                            },
                            '& .MuiTab-root:first-of-type': {
                                marginLeft: '160px',
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
                    </TabList>
                </Box>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '16px' }}> 
                    <TabPanel value="1" sx={{ width: '100%' }}>
                        <div 
                            onChange={event => setNombre(event.target.value)}
                        >
                            <Textfield id='Nombres'/>
                        </div>
                        <div 
                            onChange={event => setApellido(event.target.value)}
                        >
                            <Textfield texto='Apellidos' />
                        </div>
                        <div 
                            onChange={event => setNroDocumento(event.target.value)}
                        >
                            <Textfield texto='Nro de Documento'/>
                        </div>
                        <div 
                            onChange={event => setOldImagen(event.target.value)}
                        >
                            <Textfield texto='Foto (URL)'/>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '16px' }}
                            onClick={guardar1}
                        >
                            <BasicButtons2 texto='Guardar' ancho='260'/>
                        </div>
                    </TabPanel>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '16px' }}>
                    <TabPanel value="2" sx={{ width: '100%' }}>
                        <div 
                            onChange={event => setCorreo(event.target.value)}
                        >
                            <Textfield texto='Correo'/>
                        </div>
                        <div 
                            onChange={event => setContraseña(event.target.value)}
                        >
                            <Textfield texto='Contraseña'/>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '16px' }}
                            onClick={guardar2}
                        >
                            <BasicButtons2 texto='Guardar' ancho='260'/>
                        </div>
                    </TabPanel>
                </div>
            </TabContext>
        </Box>
    );
}

export default ConfAlumn