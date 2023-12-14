import { Cuidador } from "./cuidador.ts";

const HORAS_SEMANALES = 168;
const LIMITE_HORAS_POR_SEMANA_EMPLEADO = 30, LIMITE_HORAS_POR_SEMANA_DESEMPLEADO = 40,
      LIMITE_HORAS_POR_SEMANA_PERSONA_JOVEN = 6;

export class Horario{

   constructor(
      public cuidadoresDisponibles: Array<Cuidador>,
      public turnos: Map<number, Cuidador>
   ){}

}

