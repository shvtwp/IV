import { Horario } from "../lib/horario.ts";
import { TipoPersona, Cuidador } from "../lib/cuidador.ts";


const HORAS_SEMANALES = 168;
const LIMITE_HORAS_POR_SEMANA_EMPLEADO = 30, LIMITE_HORAS_POR_SEMANA_DESEMPLEADO = 40,
      LIMITE_HORAS_POR_SEMANA_PERSONA_JOVEN = 6;

export function todasLasHorasAsignadas(horario: Horario): boolean {
    let todasAsignadas = true;
    for (let i = 0; i < HORAS_SEMANALES; i++) {
        if (!horaAsignada(horario, i) && alguienLibre(horario, i)){
            todasAsignadas = false;
        }
    }
    return todasAsignadas;
}

function alguienLibre(horario: Horario, hora: number): boolean {
    let alguienLibre = false;
    for (let i = 0; i < horario.cuidadoresDisponibles.length; i++){
        if (horario.cuidadoresDisponibles[i].horasOcupadas[hora] === false && !cupoAgotado(horario.cuidadoresDisponibles[i])){
            alguienLibre = true;
            break;
        }
    }
    return alguienLibre;
}

function cupoAgotado (cuidador: Cuidador): boolean {
    let agotado = false;
    switch(true){
            case cuidador.tipo === TipoPersona.EMPLEADO && cuidador.horasCuidado === LIMITE_HORAS_POR_SEMANA_EMPLEADO:
               agotado = true;
               break;
            case cuidador.tipo === TipoPersona.DESEMPLEADO && cuidador.horasCuidado === LIMITE_HORAS_POR_SEMANA_DESEMPLEADO:
               agotado = true;
               break;
            case cuidador.tipo === TipoPersona.JOVEN && cuidador.horasCuidado === LIMITE_HORAS_POR_SEMANA_PERSONA_JOVEN:
               agotado = true;
               break;
    }
    return agotado;
}

function horaAsignada(horario: Horario, hora: number): boolean {
    return horario.turnos.get(hora) !== undefined;
}