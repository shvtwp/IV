# Selección de herramientas para tests

## Criterios de selección

Al ser un proyecto pequeño y sencillo, lo que busco principalmente es la
simplicidad, es decir, herramientas que no necesiten otros softwares
externos.
También son cualidades a tener en cuenta la eficiencia y la asiduidad de
mantenimiento, entre otras.

## Aserciones

Deno ofrece su propio módulo de aserciones en la librería estándar [Deno_std](https://docs.deno.com/runtime/manual/basics/testing/assertions),
pero también puede usarse la librería [Chai](https://deno.land/x/chai@v5.0.0-rc.0), pensada
exclusivamente para Deno.

Usaré la opción ofrecida por la librería estándar de Deno para no tener
que usar herramientas externas.

## Test runner o framework

He descartado herramientas en una etapa primaria de desarrollo, para
evitar generar una mayor deuda técnica.

Hay pocos test runners que sean actualizados constantemente, entre los
que han sido actualizados en el último año he considerado:

* [Bdd.ts](https://deno.land/std@0.208.0/testing/bdd.ts) es un módulo incluido en
   la librería estándar de Deno. Sigue el estilo BDD. 

* [DenoMocha](https://deno.land/x/deno_mocha@0.3.1), trata de incluir y expandir
   las funcionalidades de Bdd.ts, pero sigue aún en desarrollo.

Finalmente, he elegido Bdd.ts, porque no se necesita de una herramienta
externa, sino que la propia librería estándar de Deno lo ofrece.

## CLI

Deno tiene su propia herramienta, así que no será necesario usar una
externa, basta con la orden test.