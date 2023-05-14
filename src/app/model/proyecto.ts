export class Proyecto {
    id?: number;
    habilidades: string;
    anio: string;
    nombre: string;
    descripcion: string;
    img: string;

    constructor(nombre: string, descripcion: string, img: string, anio: string,habilidades: string) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.img = img;
        this.anio = anio;
        this.habilidades =habilidades;
    }
}
