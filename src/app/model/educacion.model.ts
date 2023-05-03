export class educacion{
    id?: number;
    nombre: String;
    descripcion: String;
    img: String;
    anio: String;
    habilidades: String;

    constructor(nombre: String,descripcion: String,img: String, anio: String,habilidades: String) {
        this.nombre = nombre;
        this.descripcion =descripcion;
        this.img = img;
        this.anio = anio;
        this.habilidades =habilidades;
    }
}