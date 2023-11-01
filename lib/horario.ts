import { FamiliarCuidador } from "./familiar_cuidador";
import { Fecha, TurnoCuidado } from "./turno_cuidado";

const LIMITE_HORAS_POR_SEMANA_PERSONA_JOVEN = 4;

class Horario{

   constructor(
      private idPersonaAtendida: number,
      private familiaresCuidadoresDisponibles: Array<FamiliarCuidador>,
      private asignacionFamiliarATurno: Map<number, TurnoCuidado>,
      private horasAsignadasAProfesional: Array<TurnoCuidado>
   ){}

}

