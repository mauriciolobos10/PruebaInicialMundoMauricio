import { Card, CardContent, createTheme, Grid, TextField, Typography, CircularProgress, Autocomplete} from "@mui/material"
import { Stack, ThemeProvider } from "@mui/system";
import axios from "axios";

import React, { Component, useEffect, useState }  from 'react';
// import { useBuscarPerro } from "../Queries/QueriPerro";
// import Perro from "./Perro";

// import { LinearProgress } from "@mui/material";

const Home = () => {
    
    


    useEffect(() => {
        // cargarMarcas();

        axios.get("http://127.0.0.1:8000/api/marca/verMarca?id=1").then(
            (response) => {
                //setAceptados(response.data.perros);
                console.log(response.data.marca);
                // setCancelados(response.data.perros);
            },
            (error) => {
                console.log(error);
            }
        );

       
        

    }, []);

    const obtenerMarca = (itemExterno) => {
        axios.get("http://127.0.0.1:8000/api/marca/verMarca", {
            id: itemExterno.id  
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
            <Card sx={{backgroundImage: 'url(https://wallpaperaccess.com/full/1314846.jpg)'}}>
                <Autocomplete
                disablePortal
                value={value}
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