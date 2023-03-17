import { Card, CardContent, createTheme, Grid, TextField, Typography, CircularProgress, Autocomplete} from "@mui/material"
import { Stack, ThemeProvider } from "@mui/system";
import axios from "axios";

import React, { Component, useEffect, useState }  from 'react';
import AutocompleteComponent from "./AutocompleteComponent";
// import { useBuscarPerro } from "../Queries/QueriPerro";
// import Perro from "./Perro";

// import { LinearProgress } from "@mui/material";

const Home = () => {
    
    


    // useEffect(() => {
    //     // // cargarDispositivos();
    //     // // cargarDispositivos({modelo_id :1, bodega_id: 1});
    //     //  cargarMarcas();
    //     // // aumentar();
        
    // }, []);

    // const obtenerMarca = (itemExterno) => {
    //     axios.get("http://127.0.0.1:8000/api/marca/verMarca", {
    //         id: itemExterno.id  
    //         });


    // };

    // const [marcas, setMarcas] = useState([{id :'', nombre: ''}]); 
    const [marcas, setMarcas] = useState([]); 
    const [contador, setContador] = useState(2);

    const cargarMarcas = async () => {
        
        const data = await axios.get("http://127.0.0.1:8000/api/marca/listarMarcas");
        

        let datos = data?.data?.marcas.map((item) => {
            return { label: item.marca_nombre, value: item.id.toString() };
        });
    
        setMarcas(datos);


        // axios.get("http://127.0.0.1:8000/api/marca/listarMarcas").then(
        //     (response) => {
        //         setMarcas(response?.data?.marcas);

                



        //         // response.data.marcas.forEach(element => {
        //         //     const vara = {id :element.id, nombre: element.marca_nombre}
        //         //     // console.log(vara);
        //         //     setmarcas((marcas) => [vara,...marcas]);
        //         //     // setContador(5);
        //         //     // aumentar();
        //         //     console.log(contador);
        //         // });

                
        //     });
        
        // setTotal(data.data.total);
      };

    useEffect(() => {
        cargarMarcas();
        // console.log('marcas', marcas);
        // console.log(contador);
        // setContador(5);
        // console.log('cambiado',contador);
        
    }, []);
    useEffect(() => {
        console.log('marcas2', marcas);
        // cargarModelos(marcas.id)
        
    }, [marcas]);

    const [count, setCount] = useState(0);

    // const cargarMarcas = () => {
        
    //     axios.get("http://127.0.0.1:8000/api/marca/listarMarcas").then(
    //         (response) => {
                
    //             console.log(response.data.marcas);
    //             setContador(4);
    //             console.log(contador);
    //             // setContador(65);
    //             response.data.marcas.forEach(element => {
    //                 // console.log(element);
    //                 const vara = {id :element.id, nombre: element.marca_nombre}
    //                 // console.log(vara);
    //                 setmarcas((marcas) => [vara,...marcas]);
    //                 // setContador(5);
    //                 // aumentar();
    //                 console.log(contador);
    //             });

    //             console.log(marcas);
                
    //         });
    // };
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

    const [flag, setFlag] = useState(true);
    

    return (
        
        <CardContent>
            <Card >
                <AutocompleteComponent opciones = {marcas}/> 

                {modelos?.length > 0 && (
                    <Autocomplete
                    options={modelos}
                    
                    />
                )}
            </Card>
        </CardContent>
        
    
    );
}

export default Home;