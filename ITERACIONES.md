# Registro de iteraciones de UNAHUR QUEST

El contador visible del juego refleja las iteraciones de implementación
registradas en este archivo. Se incrementa cuando se incorpora una nueva tanda
de cambios al proyecto.

## Iteración 01 — Primera versión jugable

- **Solicitud:** implementar la pantalla principal con menú, selección de
  dificultad, protagonista universitario en pixel art, movimiento en cuatro
  direcciones, campus explorable con cámara y colisiones, y entrada interactiva
  al edificio Justicia Social.
- **Alcance:** primera versión jugable; todavía no incluye gimnasios ni medallas.
- **Registro:** solicitud inicial de implementación en Codex.

## Iteración 02 — Campus UNAHUR e interacción en Justicia Social

- **Solicitud:** acercar el mapa a la distribución del plano de la UNAHUR y
  agregar una actividad jugable dentro del edificio, ya que entrar no ofrecía
  ninguna acción.
- **Cambios:** edificios identificados por nombre y número, hall central,
  buffet, calles perimetrales y accesos; misión de bienvenida con diálogo,
  cartelera y credencial interactiva en Justicia Social.
- **Alcance:** el edificio Justicia Social tiene la misión inicial. Los otros
  edificios se muestran en el mapa, pero sus aventuras todavía no están
  implementadas.

## Iteración 03 — Mejoras de legibilidad

- **Solicitud:** mejorar la resolución visual porque las palabras del juego no
  se alcanzaban a leer.
- **Cambios:** canvas más grande y responsivo, texto suavizado al escalar e
  indicaciones principales con tipografía más grande.

## Iteración 04 — Selección visible de dificultad

- **Solicitud:** permitir elegir la dificultad de forma clara desde el menú.
- **Cambios:** botones visibles para Fácil y Normal, con la selección marcada;
  la dificultad elegida cambia la velocidad de movimiento del personaje.

## Iteración 05 — Menú principal y guardado

- **Solicitud:** usar como referencia el menú compartido, con Nueva partida,
  Continuar, Cómo jugar y Opciones; se confirmó agregar guardado local para
  Continuar.
- **Cambios:** menú navegable con teclado y mouse, instrucciones desde el menú,
  pantalla de opciones y guardado local de posición, dificultad y misión.

## Iteración 06 — Música retro original

- **Solicitud:** agregar música de fondo con aire de RPG portátil clásico.
- **Cambios:** melodía chiptune original sintetizada con p5.sound, con bajo
  acompañante; el control Audio existente silencia música y efectos juntos.

## Iteración 07 — Rediseño visual del menú

- **Solicitud:** acercar el menú y la estética del juego a la referencia visual
  compartida.
- **Cambios:** portada original dibujada con p5.js: cielo, campus, camino,
  vegetación, estudiante con mochila, título en formato de cartel y panel de
  opciones con iconos; mantiene navegación, guardado y controles existentes.

## Iteración 08 — Desafíos y medallas del primer cuatrimestre

- **Solicitud:** usar el plan de estudios compartido para que cada materia
  otorgue una medalla necesaria para completar la carrera; avanzar primero con
  las cuatro materias del primer cuatrimestre.
- **Cambios:** cuatro cuestionarios de tres preguntas dentro de Justicia Social;
  se aprueba con al menos dos respuestas correctas y se obtiene una medalla por
  materia. Se agregó el Analítico para consultar el progreso y se guarda el
  avance, conservando partidas de versiones anteriores.
- **Alcance:** el Analítico muestra por ahora las cuatro materias del primer
  cuatrimestre. Los otros quince desafíos y sus correlatividades quedan para
  próximas iteraciones.

## Iteración 09 — Portada con ilustración del campus

- **Solicitud:** usar la imagen compartida como menú, retirando los elementos
  que no correspondan al proyecto.
- **Cambios:** se incorporó el campus y el personaje de la imagen como fondo
  local; se reemplazaron la marca y los símbolos de Pokémon por un cartel
  original de UNAHUR QUEST con el subtítulo «Liga Tecnicatura», y se
  superpuso el menú interactivo propio con un panel visual más claro. Se
  restauró la silueta de la cabeza del estudiante que quedaba tapada por el
  retoque del fondo.
- **Alcance:** la ilustración se procesa para no incluir la marca ni los
  símbolos de Pokémon. Se mantienen las opciones, la navegación y el guardado.

## Iteración 10 — Emblema académico original

- **Solicitud:** reemplazar el encabezado del menú por un logo destacado con el
  subtítulo «Liga Tecnicatura».
- **Cambios:** se diseñó un emblema original dibujado con p5.js: birrete,
  libro, laureles, título UNAHUR QUEST y cinta de Liga Tecnicatura. Se conserva
  el fondo del campus y el panel interactivo.
- **Alcance:** se usaron elementos académicos genéricos, sin reproducir marcas
  ni símbolos de franquicias.

## Iteración 11 — Menú como imagen completa

- **Solicitud:** usar `assets/menu-principal.png` como menú completo, sin
  redibujar el logo, el escenario ni los botones, y conservar las cuatro
  opciones interactivas con mouse y teclado.
- **Cambios:** se carga la imagen con p5.js y se muestra completa conservando
  sus proporciones. Se eliminaron los dibujos superpuestos del menú y se
  agregaron zonas de clic transparentes sobre las cuatro opciones.
- **Alcance:** la selección por teclado mantiene el comportamiento existente;
  el indicador dibujado en la imagen permanece estático para no superponer otro.

## Iteración 12 — Animación de las opciones del menú

- **Solicitud:** agregar movimiento al menú, que estaba estático.
- **Cambios:** al pasar el mouse sobre una opción, aparece un contorno pixelado
  con un pulso suave. La imagen base y sus textos permanecen intactos.

## Iteración 13 — Nuevo menú animado

- **Solicitud:** reemplazar las opciones estáticas de la imagen por un menú
  nuevo con las cuatro opciones animadas.
- **Cambios:** se cubrió el menú impreso en la ilustración con un panel propio,
  con opciones visibles, iconos y un selector animado. La selección responde
  al hover, clic, flechas y Enter; las acciones existentes se conservan.

## Iteración 14 — Cinco cuatrimestres y jefe final

- **Solicitud:** completar los cinco cuatrimestres de la Tecnicatura en
  Programación, sumar el enfrentamiento final contra Hernán Coniglio y llamar
  «Analítico» a la consulta del progreso.
- **Cambios:** se verificó el plan de estudios y las correlatividades en el
  programa UNAHUR 2022 aportado. Se implementaron las 19 materias con desafíos
  y medallas, cinco edificios progresivamente desbloqueables y navegación del
  Analítico por cuatrimestre. Malvinas Argentinas cierra la carrera con un
  duelo de cinco preguntas contra Hernán Coniglio; se gana con cuatro aciertos.
- **Interfaz:** se distribuyeron los tutores para evitar superposiciones en las
  aulas con más materias y se despejó el espacio del jefe final.
- **Correlatividades:** se codificaron las indicadas por el programa. Los
  contenidos de las materias electivas son preguntas ilustrativas, ya que el
  documento aclara que su oferta puede actualizarse cada ciclo lectivo.
- **Guardado:** se amplió el formato para registrar el edificio actual y el
  resultado final, manteniendo compatibilidad con partidas anteriores.
