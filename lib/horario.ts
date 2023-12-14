import { Cuidador } from "./cuidador.ts";
import { TipoPersona } from "./cuidador.ts";

const HORAS_SEMANALES = 168;
const LIMITE_HORAS_POR_SEMANA_EMPLEADO = 30, LIMITE_HORAS_POR_SEMANA_DESEMPLEADO = 40,
      LIMITE_HORAS_POR_SEMANA_PERSONA_JOVEN = 6;

export class Horario{

   constructor(
      public cuidadoresDisponibles: Array<Cuidador>,
      public turnos: Map<number, Cuidador>
   ){}

   public asignarTurnos(){
      for (let i = 0; i < HORAS_SEMANALES; i++){
         for(let j = 0; j < this.cuidadoresDisponibles.length; j++){
            this.cuidadoresDisponibles.sort(this.compararPorPrioridad);
            let cuidador = this.cuidadoresDisponibles[i];
            if (cuidador && cuidador.horasOcupadas && cuidador.horasOcupadas[i] === false) {
               switch(true){
                  case (cuidador.tipo == TipoPersona.DESEMPLEADO)
                       && (cuidador.horasCuidado < LIMITE_HORAS_POR_SEMANA_DESEMPLEADO):
                     this.turnos.set(i, cuidador);
                     ++cuidador.horasCuidado;
                     break;
                  case (cuidador.tipo == TipoPersona.EMPLEADO) 
                       && (cuidador.horasCuidado < LIMITE_HORAS_POR_SEMANA_EMPLEADO):
                     this.turnos.set(i, cuidador);
                     ++cuidador.horasCuidado;
                     break;
                  case (cuidador.tipo == TipoPersona.JOVEN) 
                       && (cuidador.horasCuidado < LIMITE_HORAS_POR_SEMANA_PERSONA_JOVEN):
                     this.turnos.set(i, cuidador);
                     ++cuidador.horasCuidado;
                     break;
               }
            }  
         }
      }
   }

   private compararPorPrioridad(a: Cuidador, b: Cuidador): number {
      const prioridades = {
         [TipoPersona.DESEMPLEADO]: 0,
         [TipoPersona.EMPLEADO]: 1,
         [TipoPersona.JOVEN]: 2
      }
 
      return prioridades[a.tipo] - prioridades[b.tipo];
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

