# Criterios para la selección

Lo ideal es tomar una decisión en función de los estándares, las recomendaciones
y las mejores prácticas del lenguaje seleccionado, en este caso TypeScript.
Al ser un proyecto pequeño y sencillo, lo que busco principalmente es la
simplicidad, pero también son cualidades a tener en cuenta la eficiencia y la
asiduidad de mantenimiento, entre otras.
Entiendo como simplicidad la facilidad para aprender a usar y comprender la
herramienta seleccionada.

# Justificación de la elección

Deno (el runtime elegido) cuenta con su propio gestor de dependencias basado en
URLs, por lo que no es necesario usar un gestor de tareas externo. Además,
esta decisión es coherente con el criterio fundamental que he establecido,
pues es más simple si las funcionalidades vienen integradas y no se necesita
otro software.

Igualmente, consideré Dep, un gestor de dependencias para Deno, pero lo
descarté rápidamente porque lleva 3 años sin ser actualizado.
