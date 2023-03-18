1. Clonar el repositorio
2. Acceder a consola y navegar a carpeta "backend"
3. Ejecutar en consola composer install 
4. Configurar .env e indicar el nombre de una base de datos creada en mysql (crearla en caso de no haber)
5. En consola ejecutar: "php artisan migrate", para migrar la base de datos.
6. Ejecutar: "php artisan migrate db:seed", para agregar registros de ejemplo a base de datos para pruebas.
7. Ejecutar: "php artisan serve", para arrancar servidor backend.
8. Abrir otra consola y navegar a "frontend".
9. Ejecutar: "npm install".
10. Ejecutar: "npm start", para iniciar programa en REACTJS.
11. Probar funcionalidades

IMPORTANTE: Los combobox Bodega y Marcas se mostraran al comienzo, si se selecciona una bodega se mostrara la grilla,
si se selecciona una marca tambien se mostrara el combobox de Modelos que tenga esa marca,
si se selecciona un modelo, se mostraran los dispositivos de ese modelo. 
Puede darse que no existan datos relacionados a esa marca-modelo por lo que no se mostraran los combobox.
Si quiere probar con mas datos, puede ejecutar el comando "php artisan migrate db:seed" cuantas veces quiera para seguir poblando la base de datos.