
export interface IntervaloHorario {
   fechaInicio : Date;
   fechaFin : Date;
}

export class PersonaCuidadora{
   
   constructor(
      readonly id: number,
      readonly horarioDisponible: Array<IntervaloHorario>,
      readonly esJoven : boolean
   ){}
}

