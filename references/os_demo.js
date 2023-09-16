const os = require('os')

// Plataform
console.log(os.platform())

// CPU arch
console.log(os.arch())

// CPU core information
console.log(os.cpus())

// Free memory
console.log(os.freemem())

// Free memory
console.log(os.totalmem())

// Home Dir
console.log(os.homedir())

// UpTime (cantidad de segundos que ha estado activo el ssitema operativo)
console.log(os.uptime())