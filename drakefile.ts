Deno.env.set("SHELL", "/bin/sh");

import { desc, run, task, sh} from "mod";

// Tarea para verificar el código
desc("Verificar código");
task("check", [], function verificarCodigo() {
    sh("deno check lib/horario.ts");
});

// Tarea para ejecutar la aplicación
desc("Ejecutar la aplicación");
task("ejecutarAplicacion", [], function ejecutarAplicacion() {
    sh("deno run --allow-env --allow-net lib/horario.ts");
});

//Tarea para ejecutar los tests
desc("Ejecutar los tests");
task("test", [], function ejecutarTests() {
    sh("deno test test/horario_test.ts");
});

// Tarea por defecto
desc("Tarea por defecto");
task("default", ["check", "ejecutarAplicacion, testHorario"]);

// Ejecutar tareas al ejecutar el Drakefile
run();