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
la mayoría de imágenes de DockerHub. 

Entre las ventajas de este sistema operativo se
puede destacar que, en comparativa a otros, es de 
menor tamaño, cuenta con menos herramientas
preinstaladas y es más veloz.

## Sistema operativo + Deno

Por las razones expuestas antes, Alpine es el
mejor SO a considerar.

[Alpine](https://hub.docker.com/_/alpine) es una imagen muy pequeña, de
solo 5MB, por lo que es una buena opción, a la
que habría que instalarle Deno.

## Conclusión

Finalmente, me he decantado por elegir Alpine e
instalarle Deno, para profundizar en el aprendizaje
y discernir de las elecciones de mis compañeros.

Resulta que al querer instalar Deno en mi imagen,
tengo que usar Alpine con glibc, así que instalaré
concretamente la versión que incluye [glibc](https://github.com/Docker-Hub-frolvlad/docker-alpine-glibc).