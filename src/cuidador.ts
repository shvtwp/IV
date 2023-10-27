

enum Condicion {
   ESTUDIANTE,
   TRABAJADOR,
   NO_TRABAJADOR
}

export class Cuidador{
   
   readonly id: number;
   readonly horarioNoDisponible: Array<IntervaloHorario>;
   readonly condicion : Condicion;

   constructor(id: number, horarioNoDisponible: Array<IntervaloHorario>, condicion: Condicion){
      this.id = id;
      this.horarioNoDisponible = horarioNoDisponible;
      this.condicion = condicion;
   }
}

