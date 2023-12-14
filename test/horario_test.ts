import * as mod from "https://deno.land/std@0.208.0/testing/bdd.ts";
import { Horario } from "../lib/horario.ts";
import { TipoPersona, Cuidador } from "../lib/cuidador.ts";
import { assertEquals } from "https://deno.land/std@0.208.0/assert/assert_equals.ts";
import { todasLasHorasAsignadas } from "./test_aux.ts";


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
});