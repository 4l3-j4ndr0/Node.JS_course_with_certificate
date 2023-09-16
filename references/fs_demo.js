const fs = require('fs')
const path = require('path')

// create folder in current directory
fs.mkdir(path.join(__dirname, 'carpeta creada con FS'), {} , err => {
    if (err) throw err
    console.log('Folder created')
})
// se sigue esta sintaxis : 
//      fs.mkdir(path.join(__dirname, 'carpeta creada con FS'), {} , err => {
//          if (err) throw err
//          console.log('Folder created')
//      })
// porque basada en la documentacion oficial es : fs.mkdir(path[, options], callback) que significa : 
//          path <string> | <Buffer> | <URL>
//          options <Object> | <integer>
//              recursive <boolean> Default: false
//              mode <string> | <integer> Not supported on Windows. Default: 0o777.
//          callback <Function>
//              err <Error>
//              path <string> | <undefined> Present only if a directory is created with recursive set to true.

// create file in current directory
fs.writeFile(path.join(__dirname, 'carpeta creada con FS', 'hello.txt') , 'hello word! ', err => {
    if (err) throw err
    console.log('file created')
})
// fs.writeFile buscara el archivo , si no lo encuentra lo crea y escribe lo que se le indique , pero si ya existe , sobrescribira
// lo que tiene escrito por lo que se le esta indicando que escriba . Para mantener lo que ya esta escrito y simplemente agregar 
// algo nuevo usamos fs.appendFile y quedaria asi :
fs.appendFile(path.join(__dirname, 'carpeta creada con FS', 'hello.txt') , 'I loved Node.JS', err => {
    if (err) throw err
    console.log('file edited')
})

//Read file
fs.readFile(path.join(__dirname, 'carpeta creada con FS', 'hello.txt') , 'utf8', (err,data) => {
    if (err) throw err
    console.log(data)
})

//Rename file
fs.rename(
    path.join(__dirname, 'carpeta creada con FS', 'hello.txt') , 
    path.join(__dirname, 'carpeta creada con FS', 'hello renamed.txt'), (err) => {
    if (err) throw err
    console.log('File renamed')
})
