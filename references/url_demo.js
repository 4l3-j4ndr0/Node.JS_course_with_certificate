const { query } = require('express')
const url = require('url')

const myUrl = new URL('http://mywebsite.com:3000/hello.html?id=100&status=active')

// serialized url (ambos te devuelven lo mismo, la url completa)
console.log(myUrl.href)
console.log(myUrl.toString())

// host (root domain)
console.log(myUrl.host)
console.log(myUrl.hostname) // no incluye el puerto

// path name  te da la ruta real de la pagina y excluye la de internet 
console.log(myUrl.pathname) // devuelve /hello.html

// serialized query te devuelve todos los parametros 
console.log(myUrl.search) // devuelve ?id=100&status=active

// params object (te da un objeto con todos los parametros de la url)
console.log(myUrl.searchParams)

// agregar parametros a la url 
myUrl.searchParams.append('clave_nueva','valor_nuevo')
console.log(myUrl.search)
console.log(myUrl.searchParams)