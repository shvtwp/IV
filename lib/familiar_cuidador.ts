import { TurnoCuidado } from "./turno_cuidado";

const LIMITE_HORAS_SEGUIDAS_POR_TURNO_PERSONA_ADULTA = 4;

export class FamiliarCuidador{
   
   constructor(
      private id: number,
      private turnosDisponibles: Array<TurnoCuidado>,
      private esJoven : boolean
   ){}
}

