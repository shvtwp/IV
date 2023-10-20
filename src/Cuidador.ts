
interface IntervaloHorario {
   fechaInicio : Date;
   fechaFin : Date;
}

enum Preferencia {
   ESTUDIANTE,
   TRABAJADOR,
   NO_TRABAJADOR
}

export class Cuidador{
   
   readonly id: number;
   readonly horarioNoDisponible: Array<IntervaloHorario>;
   readonly preferencia : Preferencia;

   constructor(id: number, horarioNoDisponible: Array<IntervaloHorario>, preferencia: Preferencia){
      this.id = id;
      this.horarioNoDisponible = horarioNoDisponible;
      this.preferencia = preferencia;
   }
}

