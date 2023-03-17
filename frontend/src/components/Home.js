import { Card, CardContent, createTheme, Grid, TextField, Typography, CircularProgress, Autocomplete} from "@mui/material"
import { Stack, ThemeProvider } from "@mui/system";
import axios from "axios";

import React, { Component, useEffect, useState }  from 'react';
// import { useBuscarPerro } from "../Queries/QueriPerro";
// import Perro from "./Perro";

// import { LinearProgress } from "@mui/material";

const Home = () => {
    
    


    useEffect(() => {
        // cargarDispositivos();
        // cargarDispositivos({modelo_id :1, bodega_id: 1});
         cargarMarcas();
        // aumentar();
        
    }, []);

    const obtenerMarca = (itemExterno) => {
        axios.get("http://127.0.0.1:8000/api/marca/verMarca", {
            id: itemExterno.id  
            });
    };

    const [marcas, setmarcas] = useState([{id :'', nombre: ''}]); 
    const [contador, setContador] = useState(2);

    const cargarMarcas = () => {
        
        axios.get("http://127.0.0.1:8000/api/marca/listarMarcas").then(
            (response) => {
                // console.log(response.data.marcas);
                // setmarcas((marcas) => [response.data.marcas]);
                // marcas = response.data.marcas;
                // console.log(response.data.marcas);
                
                // setContador(65);
                response.data.marcas.forEach(element => {
                    // console.log(element);
                    const vara = {id :element.id, nombre: element.marca_nombre}
                    console.log(vara);
                    setmarcas((marcas) => [vara,...marcas]);
                    // setContador(5);
                    // aumentar();
                    console.log(contador);
                });

                console.log(marcas);
                
            });
    };
    const aumentar = () => {
        setContador(3);

        console.log(contador);
    };
    const [listadoMarcas, setListadoMarcas] = useState(); ;

    const cargarDispositivos = (itemExterno) => {
        // axios.get("http://127.0.0.1:8000/api/dispositivo/listarDispositivos?modelo_id=1&bodega_id=1").then(
            // console.log("http://127.0.0.1:8000/api/dispositivo/listarDispositivos?modelo_id="+itemExterno.modelo_id+
            // "&bodega_id="+itemExterno.bodega_id+"");
            axios.get("http://127.0.0.1:8000/api/dispositivo/listarDispositivos?modelo_id="+itemExterno.modelo_id+
            "&bodega_id="+itemExterno.bodega_id+"").then(
            (response) => {
                

                console.log(response.data.dispositivo);
                
            });
    };
    
    
    const [listado, setListado] = useState([]);
    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        
      ];

      const [value, setValue] = React.useState(top100Films[0]);
    

    return (
        <CardContent>
            <Card >
                <select>
                    {/* {marcas.map()} */}
                    {/* {marcas.map("hola")} */}
                </select>
                {/* {cargarMarcas()} */}
                <Autocomplete
                disablePortal
                value={value}
                onClick={() => console.log("alo")}

                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Movie" />}
                />
            </Card>
        </CardContent>
        
    
    );
}

export default Home;