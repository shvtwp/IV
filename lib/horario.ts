import { Cuidador } from "./cuidador.ts";

const HORAS_SEMANALES = 168;
const LIMITE_HORAS_POR_SEMANA_EMPLEADO = 30, LIMITE_HORAS_POR_SEMANA_DESEMPLEADO = 40,
      LIMITE_HORAS_POR_SEMANA_PERSONA_JOVEN = 6;

export class Horario{

   constructor(
      public cuidadoresDisponibles: Array<Cuidador>,
      public turnos: Map<number, Cuidador>
   ){}

   public asignarTurnos(){
      
   }

   public setHorasOcupadas(hora: number, duracion: number, cuidador: Cuidador){
      if (hora + duracion > HORAS_SEMANALES){
         throw new Error("El horario sobrepasa las 168 horas semanales");
      }
      for (let i = hora; i < hora + duracion; i++){
         cuidador.horasOcupadas[i] = true;
      }
   }
}

