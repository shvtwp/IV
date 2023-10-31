
import { IntervaloHorario, PersonaCuidadora } from './persona_cuidadora';

const LIMITE_HORAS_POR_DIA_PERSONA_JOVEN = 2;
const LIMITE_HORAS_POR_DIA_PERSONA_ADULTA = 4;

class Horario{

   constructor(
      private idPersonaAtendida: number,
      private personasCuidadorasDisponibles: Array<PersonaCuidadora>
   ){}

   public asignarIntervaloHorarioAProfesional(){
      // TO DO
   }

   public elegirPersonaCuidadora(personasCuidadoras: Array<PersonaCuidadora>): PersonaCuidadora{
      // TO DO
      return null;
   }

}

