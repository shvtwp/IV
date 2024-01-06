import * as mod from "BDD";
import { Horario } from "../lib/horario.ts";
import { TipoPersona, Cuidador } from "../lib/cuidador.ts";
import { assertEquals } from "asserts";
import { todasLasHorasAsignadas, turnoSobrepasado, incompatibilidadHoraria } from "./test_aux.ts";


mod.describe ("Horario - Asignación de turnos", () => {
    mod.it("Asignar todos los turnos posibles", () => {
        const horario = new Horario(new Array<Cuidador>(), new Map<number, Cuidador>());

        const Ruslana = new Cuidador([], TipoPersona.DESEMPLEADO,0);
        const Bea = new Cuidador([], TipoPersona.EMPLEADO, 0);
        const Naiara = new Cuidador([], TipoPersona.JOVEN, 0);
        
        horario.setHorasOcupadas(1, 8, Ruslana);
        horario.setHorasOcupadas(10, 8,Ruslana);
        horario.setHorasOcupadas(10, 8, Bea);
        horario.setHorasOcupadas(20, 4, Bea);
        horario.setHorasOcupadas(10, 8, Naiara);
        horario.setHorasOcupadas(6, 12, Naiara);

        horario.cuidadoresDisponibles.push(Ruslana);
        horario.cuidadoresDisponibles.push(Bea);
        horario.cuidadoresDisponibles.push(Naiara);

        horario.asignarTurnos();

        assertEquals(todasLasHorasAsignadas(horario), true, "No se han asignado todos los turnos posibles");
    });

    mod.it("No agotar el cupo de horas de un cuidador", () => {
        const horario = new Horario(new Array<Cuidador>(), new Map<number, Cuidador>());
        
        const Suzette = new Cuidador([], TipoPersona.DESEMPLEADO, 0);
        const Paul = new Cuidador([], TipoPersona.EMPLEADO, 0);
        const Chiara = new Cuidador([], TipoPersona.JOVEN, 0);

        horario.setHorasOcupadas(1, 8, Suzette);
        horario.setHorasOcupadas(10, 8, Paul);
        horario.setHorasOcupadas(10, 8, Chiara);
        horario.setHorasOcupadas(20, 4, Chiara);

        horario.cuidadoresDisponibles.push(Suzette);
        horario.cuidadoresDisponibles.push(Paul);
        horario.cuidadoresDisponibles.push(Chiara);

        horario.asignarTurnos();

        assertEquals(turnoSobrepasado(horario), false, "Hay un cuidador que sobrepasa el cupo de horas");
    });

    mod.it("No asignar turnos a personas que no están disponibles", () => {
        const horario = new Horario(new Array<Cuidador>(), new Map<number, Cuidador>());

        const Violeta = new Cuidador([], TipoPersona.DESEMPLEADO, 0);
        const Cris = new Cuidador([], TipoPersona.JOVEN, 0);
        const Juanjo = new Cuidador([], TipoPersona.EMPLEADO, 0);
        
        horario.setHorasOcupadas(1, 8, Violeta);
        horario.setHorasOcupadas(10, 8, Cris);
        horario.setHorasOcupadas(10, 8, Juanjo);
        horario.setHorasOcupadas(20, 4, Juanjo);
        horario.setHorasOcupadas(30, 4, Juanjo);
        
        horario.cuidadoresDisponibles.push(Violeta);
        horario.cuidadoresDisponibles.push(Cris);
        horario.cuidadoresDisponibles.push(Juanjo);

        horario.asignarTurnos();
        
        assertEquals(incompatibilidadHoraria(horario), false, "Se ha asignado un turno a una persona ocupada");
    });
});