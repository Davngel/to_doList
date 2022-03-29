

export class Todo{

    constructor( tarea ) {

        
        this.tarea = tarea;

        this.id = new Date().getTime();  // recibo estos números 121324354563
        this.completado = false;
        this.creado = new Date();
    }
}