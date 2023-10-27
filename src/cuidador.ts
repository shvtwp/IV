
interface IntervaloHorario {
   fechaInicio : Date;
   fechaFin : Date;
}

export enum Condicion {
   PERSONA_JOVEN,
   TRABAJADOR,
   NO_TRABAJADOR
}

export class PersonaCuidadora{
   
   readonly id: number;
   readonly horarioNoDisponible: Array<IntervaloHorario>;
   readonly condicion : Condicion;

   constructor(id: number, horarioNoDisponible: Array<IntervaloHorario>, condicion: Condicion){
      this.id = id;
      this.horarioNoDisponible = horarioNoDisponible;
      this.condicion = condicion;
   }
}

