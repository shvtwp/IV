
interface IntervaloHorario {
   fechaInicio : Date;
   fechaFin : Date;
}

export class PersonaCuidadora{
   
   readonly id: number;
   readonly horarioDisponible: Array<IntervaloHorario>;
   readonly esJoven : boolean;

   constructor(id: number, horarioDisponible: Array<IntervaloHorario>, esJoven: boolean){
      this.id = id;
      this.horarioDisponible = horarioDisponible;
      this.esJoven = esJoven;
   }
}

