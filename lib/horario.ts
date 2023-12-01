import { FamiliarCuidador } from "./familiar_cuidador.ts";
import { TurnoCuidado } from "./turno_cuidado.ts";

const LIMITE_HORAS_POR_SEMANA_PERSONA_JOVEN = 4;

class Horario{

   constructor(
      private idPersonaAtendida: number,
      private familiaresCuidadoresDisponibles: Array<FamiliarCuidador>,
      private asignacionFamiliarATurno: Map<number, TurnoCuidado>,
      private horasAsignadasAProfesional: Array<TurnoCuidado>
   ){}

   /*private getFamiliarAAsignarConMasHorasDisponibles(): FamiliarCuidador{
      // TO DO
      return null;
   }*/

}

