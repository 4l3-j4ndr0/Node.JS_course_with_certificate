const path = require('path')

// Nos muestra la ruta completa desde el inicio incluido nombre y extencion del archivo en el que se ejecuta
console.log(__filename) 

// Nos muestra solo el nombre y extencion del archivo en el que se ejecuta
// Base file name
console.log(path.basename(__filename))

// Nos muestra la ruta completa desde el inicio excluyedo el nombre y extencion del archivo en el que se ejecuta
// Directory name
console.log(path.dirname(__filename))

// Nos muestra solo la extencion del archivo
// File extension
console.log(path.extname(__filename))

// Nos muestra un objeto con diferentes path del archivo
// Create path object 
console.log(path.parse(__filename)) 
// resultado : 
//           {
//              root: 'D:\\',
//              dir: 'D:\\folder1\\folder2\\folder3',
//              base: 'path_demo.js',
//              ext: '.js',
//              name: 'path_demo'
//           }
//
// Al ser un objeto podemos acceder directamente a cada uno de sus valores por separado usando :
// console.log(path.parse(__filename).root || dir || base || ext || ext || name) 
// ejemplo para devolver solo el nombre y extencion del archivo :
console.log(path.parse(__filename).base)

// podemos unir rutas usando el join , se le puede pasar una ruta manual o usando el path , unir una ruta manual no es recomendable porque 
// puede traer problemas con los separadores , en algunos sistemas puede usarse / , en otros // , etc . En caso de quereer hacerlo manual 
// seria asi :
console.log(path.join(__filename, 'ruta_manual')) // D:\folder1\folder2\folder3\path_demo.js\ruta_manual
// usando el join y el path asi :
console.log(path.join(__filename,path.parse(__filename).base )) // // D:\folder1\folder2\folder3\path_demo.js\segundo_path

