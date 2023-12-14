# Selección de herramientas para tests

## Criterios de selección

Al ser un proyecto pequeño y sencillo, lo que busco principalmente es la
simplicidad, es decir, herramientas que no necesiten otros softwares
externos.
También es una cualidad a tener en cuenta la asiduidad de mantenimiento,
entre otras.

## Aserciones

Deno ofrece su propio módulo de aserciones en la librería estándar [Deno_std](https://docs.deno.com/runtime/manual/basics/testing/assertions),
pero también pueden usarse la librería [Chai](https://deno.land/x/chai@v5.0.0-rc.0), o [EXPECTO!](https://deno.land/x/expecto@v0.1.3),
pensada exclusivamente para Deno.

Chai es una buena opción que incluye una amplia funcionalidad y
proporciona una sintaxis muy expresiva, pero al estar trabajando,
en un proyecto pequeño probablemente no use la mayoría.

EXPECTO! es una librería de aserciones para Deno inspirada en Chai,
con la finalidad de hacerlo más intuitivo.
Su versión más reciente se lanzó el 12 de diciembre de 2023, y se
actualiza aproximadamente cada tres meses.

Usaré la opción ofrecida por la librería estándar de Deno porque es
muy probable que no necesite usar la mayoría de las funcionalidades
de las otras dos alternativas, que tratan de ampliar a la misma.

## Test runner o framework

He descartado herramientas en una etapa primaria de desarrollo, para
evitar generar una mayor deuda técnica.

Hay pocos test runners que sean actualizados constantemente, entre los
que han sido actualizados en el último año he considerado:

* [Bdd.ts](https://deno.land/std@0.208.0/testing/bdd.ts) es un módulo incluido en
   la librería estándar de Deno. Sigue el estilo BDD. 

* [DenoMocha](https://deno.land/x/deno_mocha@0.3.1), trata de incluir y expandir
   las funcionalidades de Bdd.ts, pero aún no las incluye todas, además de que
   se actualiza con poca frecuencia (la última actualización fue hace 6 meses).

Finalmente, he elegido Bdd.ts, porque no se necesita de una herramienta
externa, sino que la propia librería estándar de Deno lo ofrece.

## CLI

Deno tiene su propia herramienta, así que no será necesario usar una
externa, bastará con el uso de la orden test.