import { TurnoCuidado } from "./turno_cuidado.ts";

const LIMITE_HORAS_SEGUIDAS_POR_TURNO_PERSONA_ADULTA = 4;

export class FamiliarCuidador{
   
   constructor(
      private turnosDisponibles: Array<TurnoCuidado>,
      private esJoven : boolean
   ){}
}

