# Criterios para la selección

Lo ideal es tomar una decisión en función de los estándares, las recomendaciones
y las mejores prácticas del lenguaje seleccionado, en este caso TypeScript.
Al ser un proyecto pequeño y sencillo, lo que busco principalmente es la
simplicidad, pero también son cualidades a tener en cuenta la eficiencia y la
asiduidad de mantenimiento, entre otras.
Entiendo como simplicidad la facilidad para aprender a usar y comprender la
herramienta seleccionada.

# Runtimes considerados

## Node.js

Es el runtime más utilizado actualmente, lo que permite una mayor interaccción
con la comunidad, lo que se puede traducir en mayor facilidad para solucionar
errores, por ejemplo, ya que estos probablemente ya habrán sido solucionados
con anterioridad. Esto hace que también sea sencillo de aprender.

La primera versión fue lanzada el 27 de mayo de 2009, y ha seguido teniendo
un mantenimiento frecuente hasta día de hoy.

## Deno

Este runtime está creado por el mismo creador de Node.js como una mejora de
este último, que se refleja sobretodo en la seguridad; Deno permite una
configuración de acceso más precisa. La primera versión se lanzó en mayo de
2020, por lo que es muy joven en comparación a Node.js, lanzada en 2009,
cosa que no es tan favorable en referencia a lo mencionado en el apartado
anterior. 

Además, Deno tiene tanto gestor de dependencias como gestor de tareas propio,
y ofrece una compatibilidad más completa para TypeScript.

La última versión fue lanzada el 17 de noviembre de 2023, y suelen actualizarlo
aproximadamente cada mes.

## Bun

La gran ventaja de Bun es que es mucho más rápido que sus compañeros. Su primera
versión fue lanzada el 8 de septiembre de 2023, es muy joven y esto me resulta
muy limitante porque hace más pronunciada la curva de aprendizaje, y dificulta
la solución de los posibles errores. 

# Elección final

Finalmente, he elegido Deno porque es en sí una mejora de Node.js, pese a tener
una comunidad no tan amplia como este. También es interesante que soporte
TypeScript de manera nativa.

Bun lo descarto porque va directamente en contra de mi criterio de selección
primordial que es la simplicidad. Además, no me resulta tan interesante la
velocidad que aporta, que es lo único me parece que podría hacer que fuese una
opción preferible ante las otras dos.
