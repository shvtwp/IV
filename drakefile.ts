import { desc, run, task, sh} from "https://deno.land/x/drake@v1.6.0/mod.ts";

// Tarea para verificar el código
desc("Verificar código");
task("check", [], function verificarCodigo() {
    sh("deno check lib/horario.ts");
});

// Tarea para ejecutar la aplicación
desc("Ejecutardeno la aplicación");
task("ejecutarAplicacion", [], function ejecutarAplicacion() {
    sh("deno run --allow-env --allow-net lib/horario.ts");
});

// Tarea por defecto
desc("Tarea por defecto");
task("default", ["check", "ejecutarAplicacion"]);

// Ejecutar tareas al ejecutar el Drakefile
run();