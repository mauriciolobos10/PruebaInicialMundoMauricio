import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const TablaProductos = ({productos}) => {
    console.log('prod', productos)
    return (
        
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Marca</TableCell>
              <TableCell>Modelo</TableCell>
              <TableCell>Bodega</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productos.map((producto) => (
              <TableRow key={producto.label}>
                <TableCell>{producto.label}</TableCell>
                <TableCell>{producto.dispositivo_nombre}</TableCell>
                <TableCell>{producto.marca_nombre}</TableCell>
                <TableCell>{producto.modelo_nombre}</TableCell>
                <TableCell>{producto.bodega_nombre}</TableCell>
                {/* <TableCell>
                  <Grid container spacing={2}>
                    <Grid item>
                      <Edit />
                    </Grid>
                    <Grid item>
                      <Delete />
                    </Grid>
                  </Grid>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  export default TablaProductos;
  