import { Card, CardContent, createTheme, Grid, TextField, Typography, CircularProgress, Autocomplete} from "@mui/material"
import { Stack, ThemeProvider } from "@mui/system";
import axios from "axios";

import React, { Component, useEffect, useState }  from 'react';
import AutocompleteComponent from "./AutocompleteComponent";
import TablaProductos from "./TablaProductos";
// import { useBuscarPerro } from "../Queries/QueriPerro";
// import Perro from "./Perro";

// import { LinearProgress } from "@mui/material";

const Home = () => {
    
    

    const [marcas, setMarcas] = useState([]); 
    const [modelos, setModelos] = useState([]); 
    const [bodegas, setBodegas] = useState([]); 
    const [dispositivos, setDispositivos] = useState([]); 
    const [grilla, setGrilla] = useState([]); 
    

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

      const cargarGrillaBodega = async (itemExternoBodega) => {
        setGrilla(null)
        const data = await axios.get("http://127.0.0.1:8000/api/bodega/listarDatosBodega?id="+itemExternoBodega);
        console.log('dispo',data.data.bodegas)
        
        let datos = data?.data?.bodegas.map((item) => {
            return { label: item.id, dispositivo_nombre: item.dispositivo_nombre.toString(), modelo_nombre: item.modelo_nombre.toString()
                , marca_nombre: item.marca_nombre.toString(), bodega_nombre: item.bodega_nombre.toString()};
        });
    
        setGrilla(datos);

      };
      


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

    useEffect(() => {
        

        console.log('se selecciono bodega', idBodega);
            cargarGrillaBodega(idBodega)
        
        
    }, [idBodega]);


    return (
        <Card style={{ margin: '20px', padding: '20px' }}>
  <Typography variant="h4" color="primary" align="center">
    Selecciona tus opciones
  </Typography>
  <Grid container spacing={3} justify="center" alignItems="center">
    <Grid item xs={12}>
      <Card style={{ padding: '20px' }}>
        <Typography variant="h5" color="primary" align="left">
          Bodegas
        </Typography>
        <AutocompleteComponent opciones={bodegas} onOptionSelected={handleOptionSelectedBodega}/>
      </Card>
    </Grid>
    <Grid item xs={12}>
      <Card style={{ padding: '20px' }}>
        <Typography variant="h5" color="primary" align="left">
          Marcas
        </Typography>
        <AutocompleteComponent opciones={marcas} onOptionSelected={handleOptionSelectedMarcas}/>
      </Card>
    </Grid>
    {modelos?.length > 0 && (
      <Grid item xs={12}>
        <Card style={{ padding: '20px' }}>
          <Typography variant="h5" color="primary" align="left">
            Modelos
          </Typography>
          <AutocompleteComponent opciones={modelos} onOptionSelected={handleOptionSelectedModelos}/>
        </Card>
      </Grid>
    )}
    {dispositivos?.length > 0 && (
      <Grid item xs={12}>
        <Card style={{ padding: '20px' }}>
          <Typography variant="h5" color="primary" align="left">
            Dispositivos
          </Typography>
          <AutocompleteComponent opciones={dispositivos} onOptionSelected={handleOptionSelectedDispositivos}/>
        </Card>
      </Grid>
    )}

    {grilla?.length > 0 && (
        <Grid item xs={12}>
            <Card style={{ padding: '20px' }}>
            <Typography variant="h5" color="primary" align="left">
                Grilla
            </Typography>
                <TablaProductos productos={grilla}></TablaProductos>
            </Card>
        </Grid>
    
    )}

  </Grid>
</Card>
      
    );
}

export default Home;