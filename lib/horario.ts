import { FamiliarCuidador } from "./familiar_cuidador";
import { TurnoCuidado } from "./turno_cuidado";

class Horario{

   constructor(
      private idPersonaAtendida: number,
      private familiaresCuidadoresDisponibles: Array<FamiliarCuidador>,
      private asignacionFamiliarATurno: Map<number, TurnoCuidado>,
      private horasAsignadasAProfesional: Array<TurnoCuidado>
   ){}

   private getFamiliarAAsignarConMasHorasDisponibles(): FamiliarCuidador{
      // TO DO
      return null;
   }

}

