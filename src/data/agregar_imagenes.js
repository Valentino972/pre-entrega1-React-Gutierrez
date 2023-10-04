// const fs = require('fs');

// // Ruta de la carpeta de imágenes
// const carpetaImagenes = './imagenes';

// // Lee el archivo JSON
// const archivoJSON = fs.readFileSync('./data.json', 'utf8');
// const productos = JSON.parse(archivoJSON);

// // Lista de nombres de imágenes en el mismo orden que tus productos
// const nombresDeImagenes = [
//     'botines-adidas-naranja',
//     'botines-adidas-negro',
//     'botines-adidas-negro2',
//     'botines-adidas-verde',
//     'botines-nike-celeste',
//     'botines-nike-gris',
//     'botines-nike-multi',
//     'botines-nike-rosa',
//     'botines-puma-blanco',
//     'botines-puma-naranja',
//     'botines-puma-negro',
//     'botines-puma-verde',
//   // Agrega el nombre de cada imagen aquí en el orden correspondiente
// ];

// // Verifica que haya la misma cantidad de productos e imágenes
// if (productos.length !== nombresDeImagenes.length) {
//     console.error('La cantidad de productos no coincide con la cantidad de imágenes.');
//     } else {
//     // Asigna las rutas de las imágenes a los productos
//     for (let i = 0; i < productos.length; i++) {
//     const rutaImagen = `${carpetaImagenes}/${nombresDeImagenes[i]}`;
//     productos[i].imagen = rutaImagen;
//     }

//     // Convierte de nuevo el objeto productos a formato JSON
//     const nuevoJSON = JSON.stringify(productos, null, 2);

//     // Guarda el JSON actualizado de vuelta en el archivo
//     fs.writeFileSync('data.json', nuevoJSON, 'utf8');

//     console.log('Imágenes agregadas a los productos.');
// }