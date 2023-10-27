
import { Cuidador } from './Cuidador';

class Horario{

   readonly PORCENTAJE_DE_PREFERENCIA_ESTUDIANTE = 0.5;
   readonly PORCENTAJE_DE_PREFERENCIA_TRABAJADOR = 0.75;
   readonly PORCENTAJE_DE_PREFERENCIA_NO_TRABAJADOR = 0.85;

   private idPersonaAtendida: number;

   private cuidadoresDisponibles: Array<Cuidador>;

   constructor(idPersonaAtendida: number){
      this.idPersonaAtendida = idPersonaAtendida;
      this.cuidadoresDisponibles = [];
   }

}

