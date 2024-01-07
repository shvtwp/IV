# Selección de imagen base para contenedor de pruebas

Entre los criterios de selección deseables a la
hora de elegir una imagen base podemos destacar:
- Tamaño: es preferible que la imagen sea pequeña,
ya que la usaremos para arrancar el Docker. No es
necesario que la imagen cuente con herramientas
que no van a resultar útiles.
- Mantenimiento recurrente.
- Velocidad.
- Deno preinstalado.

## Opciones

Entre las alternativas disponibles, podemos hacer
distinciones según si son imágenes oficiales de
DockerHub, que sería la buena práctica por lo
general, oficiales del lenguaje, de vendors oficiales,
de creadores independientes, o imágenes basadas en
un SO a la que se le instala Deno (en esta alternativa
no viene instalado por defecto).

Entre estas opciones, lo más sencillo sería elegir
una imagen oficial, pero también es prudente considerar
alternativas de otros creadores, aunque no sean oficiales.

## Imagen con Deno preinstalado

La única opción lo suficientemente desarrollada y
actualizada con frecuencia que tiene Deno preinstalado
es [Deno](https://hub.docker.com/r/denoland/deno), la cual tiene de base
el sistema operativo Alpine, que es con el que cuentan
la mayoría de imágenes de DockerHub. Esta pesa 151MB.

## Sistema operativo + Deno

[Alpine](https://hub.docker.com/_/alpine) es una imagen muy pequeña, de
solo 5MB, por lo que es una buena opción, a la
que habría que instalarle Deno. Entre las ventajas
de este sistema operativo se puede destacar
que, en comparativa a otros, es de menor tamaño,
cuenta con menos herramientas preinstaladas y es 
más veloz. Sin embargo, he comprobado que no es
posible instalar Deno en la imagen oficial, por
lo que la alternativa sería usar la imagen
[Alpine con glibc preinstalado](https://hub.docker.com/r/frolvlad/alpine-glibc), lo que también puede resultar problemático al
tratarse de una versión muy específica.

[Debian](https://hub.docker.com/_/debian) el principal problema
de esta imagen oficial es que es pesada (117MB),
por lo que no tiene mucho sentido usarla cuando 
precisamente es lo que estamos queriendo evitar.
Tiene una versión ligera llamada slim, la cual
pesa 74.8MB, a la que habría que instalarle los
comandos curl y unzip previos a la instalación
de Deno. Se quedaría en 246MB.

[Ubuntu](https://hub.docker.com/_/ubuntu): esta imagen,
pese no a ser óptima por lo que pesa (77.9MB),
es mejor que la opción mencionada anteriormente,
ya que es aproximadamente un 33.4% más ligera.
Añadiendo la instalación de Deno, el peso final
de la imagen sería 269MB.
Si además usamos una estrategia de construcción
multicapa, podemos reducir el tamaño a 215MB.
Según he [leído](https://canonical.com/blog/minimal-ubuntu-released), la imagen oficial de Ubuntu ya
es la minimal.

## Conclusión

Para discernir de la elección de mis compañeros,
que han usado la imagen oficial de Deno, siendo
congruentes con los criterios establecidos y 
tratando de seguir al máximo las buenas prácticas,
la mejor alternativa es usar la imagen oficial de
Debian ligera, e instalarle Deno.
No realizaré la construcción en dos capas, 
priorizando simplicidad a eficiencia.