import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Textfield from './Textfield';
import BasicButtons2 from './Button2';

function ConfAlumn() {


    
    useEffect(() => {
        let oldindex = window.localStorage.getItem("UsuarioActual");
        let newIndex = JSON.parse(oldindex);
        if (newIndex && newIndex.Id) {
            setIndex(newIndex.Id);
        } else {
            console.log("No existe el index del alumno");
        }
    }, [])
    const actualizarDatosPersonales = async () => {
        try {
          const response = await fetch("http://localhost:3100/api/student/getUpdateStudent/", {
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

    const [nombres, setNombre] = useState();
    const [apellidos, setApellidos] = useState();
    const [nroDocumento, setNroDocumento] = useState();
    const [correo, setCorreo] = useState();
    const [contraseña, setContraseña] = useState();
    
    //Obtener el index del usuario actual
    const [index, setIndex] = useState(9999);
    useEffect(() =>{
        let oldindex = window.localStorage.getItem("UsuarioActual");
        let newIndex = JSON.parse(oldindex);
        if (newIndex && newIndex.Id) {
            setIndex(newIndex.Id);
        } else {
            console.log("No existe el index del alumno");
        }
    },[])
    useEffect(() => { 
        fetch("http://localhost:3100//api/student/getVisualiseStudent/:id")
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
           
        
    },[] )
    //Obtener la lista de usuario
    const [usuariosCapturados, setUsuariosCapturados] = useState([]);
    useEffect(()=>{
        let usuarios = JSON.parse(localStorage.getItem("usuarios"))
        setUsuariosCapturados(usuarios);
        console.log("Se cargaron a los usuarios");
        if (!usuarios)
            console.log("No existen usuarios");
    }, [])
    
    const guardar1 = () => {
        console.log("Se activó el botón 1")
        //Usuario actual
        let actual = window.localStorage.getItem("UsuarioActual");
        let newActual = JSON.parse(actual);
        //Lista de usuarios
        for(var i=0; i < usuariosCapturados.length; i++){
            if(usuariosCapturados[i].Id == index){
                if(nombres !== undefined){
                    newActual.Nombre = nombres;
                    usuariosCapturados[i].Nombre = nombres;
                }
                if(apellidos !== undefined){
                    newActual.Appelido = apellidos;
                    usuariosCapturados[i].Appelido = apellidos;
                }
                if(nroDocumento !== undefined){
                    newActual.NroDoc = nroDocumento;
                    usuariosCapturados[i].NroDoc = nroDocumento;
                }
                window.localStorage.setItem("UsuarioActual", JSON.stringify(newActual));     
                window.localStorage.setItem("usuarios",JSON.stringify(usuariosCapturados))
                window.location.reload();
            }
        }
    }

    const guardar2 = () => {
        console.log("Se activó el botón 2")
        //Usuario actual
        let actual = window.localStorage.getItem("UsuarioActual");
        let newActual = JSON.parse(actual);
        //Lista de usuarios
        for(var i=0; i < usuariosCapturados.length; i++){
            if(usuariosCapturados[i].Id == index){
                if(correo !== undefined){
                    console.log("El valor capturado fue: " + correo);
                    newActual.Correo = correo;
                    usuariosCapturados[i].Correo = correo;
                }
                if(contraseña !== undefined){
                    console.log("El valor capturado fue: " + contraseña);
                    newActual.Contraseña = contraseña;
                    usuariosCapturados[i].Contraseña = contraseña;
                }
                window.localStorage.setItem("UsuarioActual", JSON.stringify(newActual));     
                window.localStorage.setItem("usuarios",JSON.stringify(usuariosCapturados))
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
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '16px' }}
                    onClick={actualizarDatosPersonales}> 
                    <TabPanel value="1" sx={{ width: '100%' }}>
                        <div 
                            onChange={event => setNombre(event.target.value)}
                        >
                            <Textfield id="fnombre" texto='Nombres'
                            />
                        </div>
                        <div 
                            onChange={event => setApellidos(event.target.value)}
                        >
                            <Textfield texto='Apellidos' />
                        </div>
                        <div 
                            onChange={event => setNroDocumento(event.target.value)}
                        >
                            <Textfield texto='Nro de Documento'/>
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