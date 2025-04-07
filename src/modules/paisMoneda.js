const countryToCurrency=require("country-to-currency")
function obtenerMoneda(tag){
let pais= countryToCurrency[ tag ]; 
console.log(pais)
}
module.exports=obtenerMoneda