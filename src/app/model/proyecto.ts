export class Proyecto {
    id?: number;
    habilidades: string;
    anio: string;
    nombre: string;
    descripcion: string;
    img: string;
    url: string;

    constructor(nombre: string, descripcion: string, img: string, anio: string,habilidades: string, url: string) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.img = img;
        this.anio = anio;
        this.habilidades =habilidades;
        this.url = url;
    }
}
