
import { PersonaCuidadora } from './persona_cuidadora';

const LIMITE_HORAS_POR_DIA_PERSONA_JOVEN = 2;
const LIMITE_HORAS_POR_DIA_PERSONA_ADULTA = 4;

class Horario{

   private idPersonaAtendida: number;
   private personasCuidadorasDisponibles: Array<PersonaCuidadora>;

   private getNumeroHorasLibres(personaCuidadora: PersonaCuidadora): number{
      // TO DO
      return 0;
   }

   public elegirPersonaCuidadora(personasCuidadoras: Array<PersonaCuidadora>): PersonaCuidadora{
      // TO DO
      return null;
   }

}

