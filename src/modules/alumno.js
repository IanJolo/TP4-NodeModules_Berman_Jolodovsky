class Alumno{
    constructor(username,DNI){
        this.username=username;
        this.DNI=DNI;
    }
    
}
const funcion=(username,DNI)=>{
    return new Alumno(username,DNI);
}

module.exports=funcion;
