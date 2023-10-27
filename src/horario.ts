
import { PersonaCuidadora } from './cuidador';

class Horario{

   private idPersonaAtendida: number;
   private personasCuidadorasDisponibles: Array<PersonaCuidadora>;

   constructor(idPersonaAtendida: number){
      this.idPersonaAtendida = idPersonaAtendida;
      this.personasCuidadorasDisponibles = [];
   }

   private getNumeroHorasLibres(personaCuidadora: PersonaCuidadora): number{
      // TO DO
      return 0;
   }

   public elegirPersonaCuidadora(personasCuidadoras: Array<PersonaCuidadora>): PersonaCuidadora{
      // TO DO
      return null;
   }

}

