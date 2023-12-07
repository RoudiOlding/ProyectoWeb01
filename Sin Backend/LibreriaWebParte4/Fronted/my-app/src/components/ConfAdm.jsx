import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Textfield from './Textfield';
import BasicButtons2 from './Button2';

function ConfAdm() {
    
    const actualizarDatosPersonales = async () => {
        try {
          const response = await fetch("http://localhost:3100/api/student/getUpdateAdministrator/", {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id: actual.Id,
              name: nombre,
              lastName: apellido,
              identityDoc: nroDocumento,
            }),
          });
      
          if (!response.ok) {
            throw new Error('Error en la actualización');
          }
      
          
          console.log("Datos personales actualizados con éxito");
        } 
        catch (error) {
          console.error('Error en la actualización:', error);
          
        }
    }
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [nombre, setNombre] = useState();
    const [apellido, setApellido] = useState();
    const [nroDocumento, setNroDocumento] = useState();
    const [correo, setCorreo] = useState();
    const [constraseña, setContraseña] = useState();
    const [idioma, setIdioma] = useState();
    const [prefijo, setPrefijo] = useState();
    const [colorFavorito, setColorFavorito] = useState();

    const [usuarios, setUsuarios] = useState([]);
    const [actual, setActual] = useState();

    useEffect(() => { 
        fetch("http://localhost:3100/api/student/getVisualiseAdministrator/:id")
            .then(response=>response.json())
            .then(data=>{
                if(data.result){
                    if(data.result){
                        setNombre(data.result.name || '');
                        setApellido(data.result.lastName || '');
                        setCorreo(data.result.email || '');
                        setContraseña(data.result.password || '');
                        setNroDocumento(data.result.identityDoc || '');
                    }
                }                               
            })
            .catch(error => {
                // Manejar errores de la petición fetch
                console.error('Error fetching data:', error);
                // Aquí puedes establecer valores predeterminados o manejar el error de otra manera
            });
        let newUsuarios = JSON.parse(localStorage.getItem("usuarios"));
        let newActual = JSON.parse(localStorage.getItem("UsuarioActual"))
        setUsuarios(newUsuarios)
        setActual(newActual)
        
    },[] )
    

    const boton1 = async () => {        
        for(var i = 0; i < usuarios.length; i++){
            if(usuarios[i].Id == actual.Id){
                if(nombre != undefined){
                    actual.Nombre = nombre;
                    usuarios[i].Nombre = nombre;
                }
                if(apellido != undefined){
                    actual.Appelido = apellido;
                    usuarios[i].Appelido = apellido;
                }
                if(nroDocumento != undefined){
                        actual.NroDoc = nroDocumento;
                        usuarios[i].NroDoc = nroDocumento;
                }
                window.localStorage.setItem("UsuarioActual", JSON.stringify(actual));
                window.localStorage.setItem("usuarios", JSON.stringify(usuarios));
                window.location.reload();
            }
        }
    }

    const boton2 = () => {
        for(var i = 0; i < usuarios.length; i++){
            if(usuarios[i].Id == actual.Id){
                if(correo != undefined){
                    actual.Correo = correo;
                    usuarios[i].Correo = correo;
                }
                if(constraseña != undefined){
                    actual.Contraseña = constraseña;
                    usuarios[i].Contraseña = constraseña;
                }
                window.localStorage.setItem("UsuarioActual", JSON.stringify(actual));
                window.localStorage.setItem("usuarios", JSON.stringify(usuarios));
                window.location.reload();
            }
            
        }
    }

    const boton3 = () => {
        for(var i = 0; i < usuarios.length; i++){
            if(usuarios[i].Id == actual.Id){
                if(idioma != undefined){
                    actual.Idioma = idioma;
                    usuarios[i].Idioma = idioma;
                }
                if(prefijo != undefined){
                    actual.Prefijo = prefijo;
                    usuarios[i].Prefijo = prefijo;
                }
                if(colorFavorito != undefined){
                    actual.ColorFavorito = colorFavorito;
                    usuarios[i].ColorFavorito = colorFavorito;
                }
                window.localStorage.setItem("UsuarioActual", JSON.stringify(actual));
                window.localStorage.setItem("usuarios", JSON.stringify(usuarios));
                window.location.reload();
            }
        }
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
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '16px' }}
                    onClick={actualizarDatosPersonales}>                                     
                    <TabPanel value="1" sx={{ width: '100%' }}>
                        <div
                           onChange={event => setNombre(event.target.value)}
                        >
                            <Textfield texto='Nombres'  onChange={(e) => setNombre(e.target.value)} />
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