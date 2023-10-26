
import { Cuidador } from './Cuidador';

class Horario{

   private idPersonaAtendida: number;

   private cuidadoresDisponibles: Array<Cuidador>;

   constructor(idPersonaAtendida: number){
      this.idPersonaAtendida = idPersonaAtendida;
      this.cuidadoresDisponibles = [];
   }

}

