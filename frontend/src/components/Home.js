import { Card, CardContent, createTheme, Grid, TextField, Typography, CircularProgress, Autocomplete} from "@mui/material"
import { Stack, ThemeProvider } from "@mui/system";
import axios from "axios";

import React, { Component, useEffect, useState }  from 'react';
import AutocompleteComponent from "./AutocompleteComponent";
// import { useBuscarPerro } from "../Queries/QueriPerro";
// import Perro from "./Perro";

// import { LinearProgress } from "@mui/material";

const Home = () => {
    
    

    const [marcas, setMarcas] = useState([]); 
    const [modelos, setModelos] = useState([]); 
    const [bodegas, setBodegas] = useState([]); 
    const [dispositivos, setDispositivos] = useState([]); 

    useEffect(() => {
        cargarMarcas();
        cargarBodegas();
        
    }, []);
    useEffect(() => {
        console.log('marcas2', marcas);
        // cargarModelos(marcas.id)
        
    }, [marcas]);
    

    const cargarMarcas = async () => {
        
        const data = await axios.get("http://127.0.0.1:8000/api/marca/listarMarcas");
        

        let datos = data?.data?.marcas.map((item) => {
            return { label: item.id , value: item.marca_nombre.toString()};
        });
    
        setMarcas(datos);


      };
      const cargarBodegas = async () => {
        const data = await axios.get("http://127.0.0.1:8000/api/bodega/listarBodegas");
        console.log('bodegas', data)

        let datos = data?.data?.bodegas.map((item) => {
            return { label: item.id , value: item.bodega_nombre.toString()};
        });
    
        setBodegas(datos);


      };
    const cargarModelos = async (itemExterno) => {
        setModelos(null)
        const data = await axios.get("http://127.0.0.1:8000/api/modelo/listarModelos?marca_id="+itemExterno,{
            marca_id: itemExterno
        });
        
        let datos = data?.data?.modelos.map((item) => {
            return { value: item.modelo_nombre.toString(), label: item.id };
        });
    
        setModelos(datos);

      };

      const cargarDispositivos = async (itemExternoBodega,itemExternoModelo) => {
        setDispositivos(null)
        const data = await axios.get("http://127.0.0.1:8000/api/dispositivo/listarDispositivos?modelo_id="+itemExternoModelo+
        "&bodega_id="+itemExternoBodega+"");
        console.log('dispo',data.data.dispositivo)
        
        let datos = data?.data?.dispositivo.map((item) => {
            return { value: item.dispositivo_nombre.toString(), label: item.id };
        });
    
        setDispositivos(datos);

      };
      


    // const cargarDispositivos = (itemExternoBodega,itemExternoModelo) => {
    //     // axios.get("http://127.0.0.1:8000/api/dispositivo/listarDispositivos?modelo_id=1&bodega_id=1").then(
    //         // console.log("http://127.0.0.1:8000/api/dispositivo/listarDispositivos?modelo_id="+itemExterno.modelo_id+
    //         // "&bodega_id="+itemExterno.bodega_id+"");

            
    //         axios.get("http://127.0.0.1:8000/api/dispositivo/listarDispositivos?modelo_id="+itemExternoModelo+
    //         "&bodega_id="+itemExternoBodega+"").then(
    //         (response) => {
                

    //             console.log(response.data.dispositivo);
                
    //         });
    // };
    
    

    // const [selectedOptionId, setSelectedOptionId] = useState(null);

    const handleOptionSelectedMarcas = (id) => {
        // setSelectedOptionId(id);
        cargarModelos(id)
        console.log('alo',id)
    };
    const handleOptionSelectedModelos = (id) => {
        // setSelectedOptionId(id);
        // cargarModelos(id)
        console.log('seleccione este modelo',id)
        setIdModelo(id)
    };
    const handleOptionSelectedBodega= (id) => {
        console.log('seleccione este bodega',id)
        setIdBodega(id)
    };
    const handleOptionSelectedDispositivos= (id) => {
        console.log('seleccione este dispositivo',id)
    };
    
    const [idBodega, setIdBodega] = useState(null);
    const [idModelo, setIdModelo] = useState(null);

    useEffect(() => {
        if (idModelo !== null && idBodega !== null) {

            console.log('se selecciono modelo y bodega', idModelo, idBodega);
            cargarDispositivos(idBodega, idModelo)
          }
        // cargarModelos(marcas.id)
        
    }, [idModelo, idBodega]);


    return (
        
            <Card style={{ marginTop: '20px' }}>
                

                <Typography variant="h5" color="primary" align="left">
                    Bodegas
                </Typography>

                <AutocompleteComponent opciones = {bodegas} onOptionSelected={handleOptionSelectedBodega}/> 
                

                

                    <Typography variant="h5" color="primary" align="left">
                    Marcas
                    </Typography>
                    
                    <AutocompleteComponent opciones = {marcas} onOptionSelected={handleOptionSelectedMarcas}/> 
                

                {modelos?.length > 0 && (
                    // console.log('hay modelos', modelos)
                    <Grid spacing={3}>
                        <Typography variant="h5" color="primary" align="left">
                        Modelos
                        </Typography>
                        <AutocompleteComponent opciones = {modelos} onOptionSelected={handleOptionSelectedModelos}/> 
                    </Grid>
                    
                )}
                {dispositivos?.length > 0 && (
                    // console.log('hay modelos', modelos)
                    <Grid spacing={3}>
                        <Typography variant="h5" color="primary" align="left">
                        Dispositivos
                        </Typography>
                        <AutocompleteComponent opciones = {dispositivos} onOptionSelected={handleOptionSelectedDispositivos}/> 
                    </Grid>
                    
                )}
            </Card>
        
    
    );
}

export default Home;