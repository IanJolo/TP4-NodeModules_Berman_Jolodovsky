const funcionAlumno = require("./src/modules/alumno");
//1
const saludo=require("./src/modules/saludar");
console.log(saludo.saludarConca);
console.log(saludo.saludarLiteral);
//2
const funcMate=require("./src/modules/matematica")
console.log(funcMate.sumarConPi(3))
console.log(funcMate.restar(250,187))
//3
console.log(funcionAlumno("Berman", 48521729));
console.log(funcionAlumno("Jolodovsky", 48520440));
//4
const fs=require("fs");
const contenido=fs.readFileSync("ej4.txt", "utf8")
console.log(`Contenido del archivo: ${contenido}`)
fs.writeFileSync("ej4V2.txt", contenido)
console.log(fs.readFileSync("ej4V2.txt", "utf8"))
//5 y 6
const urlJS=require("./src/modules/urlparse")
let objeto = urlJS("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo");
console.log(objeto);
//7
const obtenerMoneda =require("./src/modules/paisMoneda.js");
obtenerMoneda("AR");
