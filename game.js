const TILE_SIZE = 32;
const MAP_COLUMNS = 42;
const MAP_ROWS = 24;
const VIEW_WIDTH = 560;
const VIEW_HEIGHT = 320;
const SAVE_KEY = "unahur-quest-save-v1";
const MENU_OPTIONS = ["NUEVA PARTIDA", "CONTINUAR", "CÓMO JUGAR", "OPCIONES"];
const MENU_OPTION_ROWS = [
  [434, 482],
  [496, 544],
  [558, 606],
  [620, 668],
];
const MUSIC_NOTES = [
  67, 74, 76, 79, 76, 74, null, 71,
  69, 76, 79, 81, 79, 76, null, 74,
  71, 74, 79, 83, 81, 79, 76, null,
  74, 76, 79, 76, 74, 71, 69, null,
];
const MUSIC_BASS_NOTES = [43, 50, 47, 55, 45, 52, 43, 50];
const FIRST_SEMESTER_COURSES = [
  {
    id: 1,
    name: "Matemática para informática I",
    shortName: "MATEMÁTICA I",
    x: 132,
    y: 183,
    questions: [
      { text: "¿Cuánto es 8 + 7?", options: ["13", "15", "16"], correct: 1 },
      { text: "¿Cuánto es 3 × 4?", options: ["7", "10", "12"], correct: 2 },
      { text: "Si x = 5, ¿cuánto vale 2x + 1?", options: ["11", "10", "12"], correct: 0 },
    ],
  },
  {
    id: 2,
    name: "Introducción a lógica y problemas computacionales",
    shortName: "INTRO. A LA LÓGICA",
    x: 198,
    y: 119,
    questions: [
      { text: "¿Qué operador lógico es verdadero solo si ambas partes lo son?", options: ["OR (o)", "AND (y)", "NOT (no)"], correct: 1 },
      { text: "Si P es falsa, ¿qué valor tiene NOT P?", options: ["Verdadero", "Falso", "Depende de Q"], correct: 0 },
      { text: "Si P es verdadera y Q es falsa, ¿cuánto da P AND Q?", options: ["Verdadero", "Falso", "No se puede saber"], correct: 1 },
    ],
  },
  {
    id: 3,
    name: "Organización de computadoras I",
    shortName: "COMPUTADORAS I",
    x: 351,
    y: 177,
    questions: [
      { text: "¿Qué número decimal representa 1010 en binario?", options: ["8", "10", "12"], correct: 1 },
      { text: "¿Qué componente ejecuta instrucciones de los programas?", options: ["CPU", "Monitor", "Teclado"], correct: 0 },
      { text: "¿Qué característica tiene la memoria RAM?", options: ["Conserva datos sin energía", "Es de solo lectura", "Es volátil"], correct: 2 },
    ],
  },
  {
    id: 4,
    name: "Nuevos entornos y lenguajes",
    shortName: "ENTORNOS Y LENGUAJES",
    x: 351,
    y: 232,
    questions: [
      { text: "¿Para qué se usa principalmente HTML?", options: ["Dar estructura al contenido", "Crear consultas SQL", "Editar imágenes"], correct: 0 },
      { text: "¿Qué lenguaje se usa principalmente para dar estilos a una página?", options: ["CSS", "Java", "Bash"], correct: 0 },
      { text: "¿Qué permite JavaScript en una página web?", options: ["Definir el cableado", "Agregar comportamiento interactivo", "Reemplazar el navegador"], correct: 1 },
    ],
  },
];
const MEDAL_PASSING_SCORE = 2;
const SEMESTER_COURSE_POSITIONS = {
  2: [{ x: 132, y: 130 }, { x: 351, y: 130 }, { x: 132, y: 222 }, { x: 351, y: 222 }],
  3: [{ x: 132, y: 183 }, { x: 351, y: 177 }, { x: 351, y: 232 }],
  4: [{ x: 132, y: 118 }, { x: 214, y: 118 }, { x: 350, y: 118 }, { x: 132, y: 222 }, { x: 350, y: 222 }],
  5: [{ x: 132, y: 130 }, { x: 351, y: 130 }, { x: 132, y: 222 }],
};
const ADDITIONAL_COURSES = [
  {
    id: 5, semester: 2, name: "Taller de lenguajes de marcado y tecnologías web", shortName: "WEB Y MARCADO", prerequisites: [2],
    questions: [
      { text: "¿Qué etiqueta HTML crea un enlace?", options: ["<a>", "<p>", "<img>"], correct: 0 },
      { text: "¿Qué propiedad CSS cambia el color del texto?", options: ["font-size", "color", "padding"], correct: 1 },
      { text: "¿Qué método HTTP suele enviar datos para crear un recurso?", options: ["POST", "GET", "HEAD"], correct: 0 },
    ],
  },
  {
    id: 6, semester: 2, name: "Programación estructurada", shortName: "PROGRAMACIÓN ESTRUCT.", prerequisites: [2],
    questions: [
      { text: "¿Qué estructura repite instrucciones mientras una condición se cumple?", options: ["if", "while", "return"], correct: 1 },
      { text: "¿Qué estructura permite elegir entre dos caminos?", options: ["if / else", "for", "function"], correct: 0 },
      { text: "¿Para qué se usa una función?", options: ["Reutilizar un bloque de instrucciones", "Borrar la memoria", "Cambiar el sistema operativo"], correct: 0 },
    ],
  },
  {
    id: 7, semester: 2, name: "Matemática para informática II", shortName: "MATEMÁTICA II", prerequisites: [1],
    questions: [
      { text: "¿Cuál es la derivada de x²?", options: ["x", "2x", "x³"], correct: 1 },
      { text: "¿Cuánto vale log₂(8)?", options: ["2", "3", "4"], correct: 1 },
      { text: "¿Cuánto es 25 % de 80?", options: ["15", "20", "25"], correct: 1 },
    ],
  },
  {
    id: 8, semester: 2, name: "Inglés I", shortName: "INGLÉS I", prerequisites: [],
    questions: [
      { text: "En programación, ¿qué significa 'array'?", options: ["Arreglo", "Archivo", "Alerta"], correct: 0 },
      { text: "¿Qué significa 'save the file'?", options: ["Cerrar la ventana", "Guardar el archivo", "Borrar el archivo"], correct: 1 },
      { text: "¿Cuál es el plural de 'mouse' en el contexto informático?", options: ["Mouses", "Mice", "Mousees"], correct: 1 },
    ],
  },
  {
    id: 9, semester: 3, name: "Bases de Datos", shortName: "BASES DE DATOS", prerequisites: [7],
    questions: [
      { text: "¿Qué lenguaje se usa habitualmente para consultar bases relacionales?", options: ["SQL", "CSS", "HTML"], correct: 0 },
      { text: "¿Qué identifica de forma única cada fila de una tabla?", options: ["Clave primaria", "Clave duplicada", "Índice visual"], correct: 0 },
      { text: "¿Qué instrucción SQL obtiene registros?", options: ["SELECT", "DELETE", "DROP"], correct: 0 },
    ],
  },
  {
    id: 10, semester: 3, name: "Programación de objetos I", shortName: "OBJETOS I", prerequisites: [6],
    questions: [
      { text: "¿Qué describe una clase?", options: ["Un molde para crear objetos", "Un tipo de bucle", "Una tabla SQL"], correct: 0 },
      { text: "¿Qué es una instancia?", options: ["Un objeto creado a partir de una clase", "Un error de sintaxis", "Un comentario"], correct: 0 },
      { text: "¿Qué principio agrupa datos y operaciones dentro de un objeto?", options: ["Encapsulamiento", "Compilación", "Iteración"], correct: 0 },
    ],
  },
  {
    id: 11, semester: 3, name: "Estructuras de datos", shortName: "ESTRUCTURAS DE DATOS", prerequisites: [6],
    questions: [
      { text: "¿Qué estructura sigue el principio último en entrar, primero en salir?", options: ["Cola", "Pila", "Árbol"], correct: 1 },
      { text: "¿Qué estructura atiende primero al elemento que llegó antes?", options: ["Cola", "Pila", "Grafo"], correct: 0 },
      { text: "¿Qué estructura conecta nodos mediante relaciones?", options: ["Grafo", "Variable", "Cadena"], correct: 0 },
    ],
  },
  {
    id: 12, semester: 4, name: "Materia UNAHUR", shortName: "MATERIA UNAHUR", prerequisites: [],
    questions: [
      { text: "¿Qué promueve la universidad pública?", options: ["Acceso a la educación superior", "El acceso solo por invitación", "La enseñanza sin comunidad"], correct: 0 },
      { text: "¿Qué valor fortalece el trabajo en equipo universitario?", options: ["Cooperación", "Competencia sin acuerdos", "Aislamiento"], correct: 0 },
      { text: "¿Qué vínculo busca construir la universidad con su territorio?", options: ["Compromiso y participación", "Desconexión", "Exclusividad"], correct: 0 },
    ],
  },
  {
    id: 13, semester: 4, name: "Programación de objetos II", shortName: "OBJETOS II", prerequisites: [10],
    questions: [
      { text: "¿Qué permite la herencia en programación orientada a objetos?", options: ["Reutilizar y extender comportamiento", "Evitar crear objetos", "Convertir código en SQL"], correct: 0 },
      { text: "¿Qué permite el polimorfismo?", options: ["Una interfaz con distintas implementaciones", "Que una variable no cambie nunca", "Eliminar métodos"], correct: 0 },
      { text: "¿Qué es una interfaz en programación?", options: ["Un contrato de operaciones", "Una instancia de base de datos", "Un ciclo repetitivo"], correct: 0 },
    ],
  },
  {
    id: 14, semester: 4, name: "Electiva I", shortName: "ELECTIVA I", prerequisites: [6, 11],
    questions: [
      { text: "¿Qué caracteriza a la programación funcional?", options: ["Composición de funciones", "Uso exclusivo de tablas", "Ausencia de expresiones"], correct: 0 },
      { text: "¿Qué permite ejecutar tareas concurrentes?", options: ["Avanzar en tareas independientes de forma solapada", "Ejecutar siempre una sola tarea", "Eliminar la sincronización"], correct: 0 },
      { text: "¿Qué es una función pura?", options: ["Devuelve el mismo resultado para la misma entrada sin efectos secundarios", "Modifica cualquier estado global", "Solo funciona una vez"], correct: 0 },
    ],
  },
  {
    id: 15, semester: 4, name: "Electiva II", shortName: "ELECTIVA II", prerequisites: [3],
    questions: [
      { text: "¿Qué permite una red de computadoras?", options: ["Intercambiar datos entre dispositivos", "Aumentar el tamaño de la pantalla", "Reemplazar las aplicaciones"], correct: 0 },
      { text: "¿Qué administra un sistema operativo?", options: ["Recursos del equipo y procesos", "Solo el diseño de páginas", "Únicamente las contraseñas"], correct: 0 },
      { text: "¿Qué componente coordina la comunicación entre redes?", options: ["Router", "Teclado", "Compilador"], correct: 0 },
    ],
  },
  {
    id: 16, semester: 4, name: "Inglés II", shortName: "INGLÉS II", prerequisites: [8],
    questions: [
      { text: "¿Qué significa 'debug the application'?", options: ["Depurar la aplicación", "Publicar la aplicación", "Diseñar una tabla"], correct: 0 },
      { text: "En documentación, ¿qué significa 'requirements'?", options: ["Requisitos", "Resultados", "Recursos gráficos"], correct: 0 },
      { text: "¿Qué expresa 'the user has submitted the form'?", options: ["El usuario envió el formulario", "El usuario borró la pantalla", "El formulario no existe"], correct: 0 },
    ],
  },
  {
    id: 17, semester: 5, name: "Construcción de interfaces de usuario", shortName: "INTERFACES DE USUARIO", prerequisites: [13],
    questions: [
      { text: "¿Qué principio ayuda a que una interfaz sea accesible?", options: ["Contraste y navegación clara", "Texto diminuto", "Acciones sin etiquetas"], correct: 0 },
      { text: "¿Qué debería comunicar un mensaje de error útil?", options: ["Qué pasó y cómo corregirlo", "Solo un código sin contexto", "Un mensaje de éxito"], correct: 0 },
      { text: "¿Qué es un prototipo de interfaz?", options: ["Una representación para probar una propuesta", "La base de datos final", "Un sistema operativo"], correct: 0 },
    ],
  },
  {
    id: 18, semester: 5, name: "Estrategias de persistencia", shortName: "PERSISTENCIA", prerequisites: [13, 9],
    questions: [
      { text: "¿Qué significa persistir datos?", options: ["Conservarlos para usarlos más adelante", "Mostrar los datos una sola vez", "Eliminar los datos al cerrar"], correct: 0 },
      { text: "¿Qué ventaja ofrece una transacción de base de datos?", options: ["Agrupar operaciones con reglas de consistencia", "Cambiar el color de la interfaz", "Evitar toda validación"], correct: 0 },
      { text: "¿Qué es una migración de base de datos?", options: ["Un cambio controlado en su estructura", "Una copia de pantalla", "Un tipo de variable"], correct: 0 },
    ],
  },
  {
    id: 19, semester: 5, name: "Elementos de ingeniería de software", shortName: "INGENIERÍA DE SOFTWARE", prerequisites: [13],
    questions: [
      { text: "¿Para qué sirve el control de versiones?", options: ["Registrar y gestionar cambios del código", "Ejecutar consultas SQL", "Diseñar íconos automáticamente"], correct: 0 },
      { text: "¿Qué ayuda a detectar defectos antes de entregar software?", options: ["Pruebas", "Cambiar el nombre del proyecto", "Eliminar documentación"], correct: 0 },
      { text: "¿Qué describe un requisito de software?", options: ["Una necesidad o condición del sistema", "Un píxel de la interfaz", "Una instrucción del compilador"], correct: 0 },
    ],
  },
];
const COURSE_CATALOG = [
  ...FIRST_SEMESTER_COURSES.map((course) => ({
    ...course,
    semester: 1,
    prerequisites: [],
  })),
  ...ADDITIONAL_COURSES.map((course) => {
    const position = SEMESTER_COURSE_POSITIONS[course.semester][
      ADDITIONAL_COURSES.filter(
        (previous) => previous.semester === course.semester && previous.id < course.id,
      ).length
    ];
    return { ...course, ...position };
  }),
];
const SEMESTERS = [
  { id: 1, name: "PRIMER CUATRIMESTRE", buildingKey: "j" },
  { id: 2, name: "SEGUNDO CUATRIMESTRE", buildingKey: "p" },
  { id: 3, name: "TERCER CUATRIMESTRE", buildingKey: "u" },
  { id: 4, name: "CUARTO CUATRIMESTRE", buildingKey: "t" },
  { id: 5, name: "QUINTO CUATRIMESTRE", buildingKey: "m" },
];
const BOSS_QUESTIONS = [
  { text: "Hernán: ¿Qué condición debe cumplir una clave primaria?", options: ["Identificar cada fila de forma única", "Repetirse en todas las filas", "Guardar únicamente texto"], correct: 0 },
  { text: "Hernán: ¿Qué estructura resulta adecuada para atender tareas por orden de llegada?", options: ["Pila", "Cola", "Árbol binario"], correct: 1 },
  { text: "Hernán: ¿Qué principio ayuda a mantener un módulo enfocado en una responsabilidad?", options: ["Alta cohesión", "Duplicación", "Acoplamiento máximo"], correct: 0 },
  { text: "Hernán: ¿Qué práctica permite comprobar automáticamente el comportamiento del código?", options: ["Pruebas", "Borrar el historial", "Desactivar validaciones"], correct: 0 },
  { text: "Hernán: ¿Qué propiedad describe que una transacción se completa por entero o no se aplica?", options: ["Atomicidad", "Herencia", "Polimorfismo"], correct: 0 },
];

const CAMPUS_BUILDINGS = {
  m: { x: 32, y: 14, w: 7, h: 6, door: { x: 31, y: 17 }, number: "5", name: "MALVINAS ARGENTINAS", color: "#76a9ce", semester: 5 },
  t: { x: 17, y: 16, w: 10, h: 6, door: { x: 21, y: 15 }, number: "4", name: "TRABAJO ARGENTINO", color: "#b4c781", semester: 4 },
  u: { x: 14, y: 3, w: 9, h: 7, door: { x: 18, y: 10 }, number: "3", name: "GRATUIDAD UNIVERSITARIA", color: "#e6816d", semester: 3 },
  j: { x: 27, y: 3, w: 10, h: 7, door: { x: 31, y: 10 }, number: "1", name: "JUSTICIA SOCIAL", color: "#d3c48e", semester: 1 },
  p: { x: 3, y: 14, w: 7, h: 6, door: { x: 10, y: 17 }, number: "2", name: "LA PATRIA", color: "#c58c72", semester: 2 },
};

let campusMap = [];
let player = { x: 21 * TILE_SIZE + 16, y: 14 * TILE_SIZE + 16 };
let cameraX = 0;
let cameraY = 0;
let gameScreen = "menu";
let menuSelection = 0;
let menuIndicatorY = null;
let difficulty = "Normal";
let isMoving = false;
let credentialFound = false;
let campusMissionComplete = false;
let currentBuildingKey = "j";
let earnedMedals = [];
let bossDefeated = false;
let activeQuiz = null;
let analiticoOpen = false;
let analiticoSemester = 1;
let dialogueMessage = "";
let dialogueSpeaker = "";
let menuMessage = "";
let savedProgress = null;
let saveErrorMessage = "";
let lastSaveAt = 0;
let musicLead;
let musicBass;
let musicLeadEnvelope;
let musicBassEnvelope;
let musicStep = 0;
let nextMusicStepAt = 0;
let soundMuted = false;
let osc;
let env;

function setup() {
  const canvas = createCanvas(VIEW_WIDTH, VIEW_HEIGHT);
  canvas.parent("game-container");
  noSmooth();
  textFont("Courier New");
  buildCampusMap();
  loadSavedProgress();

  osc = new p5.Oscillator("square");
  env = new p5.Envelope();
  env.setADSR(0.01, 0.08, 0.1, 0.05);
  env.setRange(0.12, 0);
  osc.start();
  osc.amp(0);

  musicLead = new p5.Oscillator("square");
  musicLeadEnvelope = new p5.Envelope();
  musicLeadEnvelope.setADSR(0.01, 0.07, 0.02, 0.05);
  musicLeadEnvelope.setRange(0.045, 0);
  musicLead.start();
  musicLead.amp(0);

  musicBass = new p5.Oscillator("triangle");
  musicBassEnvelope = new p5.Envelope();
  musicBassEnvelope.setADSR(0.01, 0.12, 0.08, 0.1);
  musicBassEnvelope.setRange(0.035, 0);
  musicBass.start();
  musicBass.amp(0);
}

function buildCampusMap() {
  campusMap = Array.from({ length: MAP_ROWS }, () =>
    Array(MAP_COLUMNS).fill("G"),
  );

  for (let x = 0; x < MAP_COLUMNS; x++) {
    campusMap[0][x] = "R";
    campusMap[1][x] = "P";
    campusMap[MAP_ROWS - 2][x] = "P";
    campusMap[MAP_ROWS - 1][x] = "R";
  }
  for (let y = 0; y < MAP_ROWS; y++) {
    campusMap[y][0] = "R";
    campusMap[y][1] = "P";
    campusMap[y][MAP_COLUMNS - 2] = "P";
    campusMap[y][MAP_COLUMNS - 1] = "R";
  }

  for (let x = 2; x < MAP_COLUMNS - 2; x++) campusMap[14][x] = "P";
  for (let y = 2; y < MAP_ROWS - 2; y++) campusMap[y][21] = "P";
  for (let x = 11; x <= 38; x++) campusMap[10][x] = "P";
  for (let y = 10; y <= 14; y++) {
    for (let x = 11; x <= 31; x++) campusMap[y][x] = "P";
  }
  for (let x = 10; x <= 13; x++) campusMap[17][x] = "P";
  for (let y = 15; y <= 17; y++) campusMap[y][13] = "P";
  for (let x = 21; x <= 26; x++) campusMap[15][x] = "P";
  for (let y = 14; y <= 17; y++) campusMap[y][31] = "P";
  for (let x = 27; x <= 31; x++) campusMap[17][x] = "P";

  Object.entries(CAMPUS_BUILDINGS).forEach(([tile, building]) => {
    for (let y = building.y; y < building.y + building.h; y++) {
      for (let x = building.x; x < building.x + building.w; x++) {
        campusMap[y][x] = tile;
      }
    }
    campusMap[building.door.y][building.door.x] = "D";
  });

  [
    [5, 5], [8, 4], [25, 5], [39, 6], [5, 11], [10, 12], [38, 13],
    [31, 16], [11, 19], [15, 22], [29, 22], [35, 19], [3, 9], [39, 17],
  ].forEach(([x, y]) => {
    campusMap[y][x] = "T";
  });

  [[17, 13], [29, 12], [12, 16], [28, 18], [7, 21]].forEach(([x, y]) => {
    campusMap[y][x] = "B";
  });
}

function draw() {
  updateMenuControls();
  updateBackgroundMusic();

  if (gameScreen === "menu") {
    drawMainMenu();
  } else if (gameScreen === "options") {
    drawOptionsScreen();
  } else if (gameScreen === "victory") {
    drawVictoryScreen();
  } else if (gameScreen === "campus") {
    if (!dialogueMessage && !analiticoOpen) updatePlayer();
    drawCampus();
  } else {
    if (!dialogueMessage && !activeQuiz && !analiticoOpen) updatePlayer();
    drawBuildingInterior();
  }
}

function drawMainMenu() {
  background("#67b8ed");
  const bounds = getMenuImageBounds();
  image(menuPrincipalImage, bounds.x, bounds.y, bounds.width, bounds.height);
  const hoveredOption = getMenuOptionAt(mouseX, mouseY);
  if (hoveredOption >= 0) menuSelection = hoveredOption;
  drawAnimatedMenuPanel(bounds);
  cursor(hoveredOption >= 0 ? HAND : ARROW);
}

function drawAnimatedMenuPanel(bounds) {
  const imageScale = bounds.width / menuPrincipalImage.width;
  const rowHeight = 48;
  const targetY = (MENU_OPTION_ROWS[menuSelection][0] + MENU_OPTION_ROWS[menuSelection][1]) / 2;
  menuIndicatorY =
    menuIndicatorY === null ? targetY : lerp(menuIndicatorY, targetY, 0.24);

  push();
  translate(bounds.x, bounds.y);
  scale(imageScale);
  noStroke();
  fill(15, 33, 57, 230);
  rect(505, 385, 530, 305, 22);
  fill("#f5f2e8");
  rect(500, 380, 530, 305, 22);
  stroke("#203d5d");
  strokeWeight(8);
  noFill();
  rect(500, 380, 530, 305, 22);
  stroke("#96aabe");
  strokeWeight(3);
  rect(510, 390, 510, 285, 17);

  noStroke();
  fill("#203d5d");
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textSize(22);
  text("MENÚ PRINCIPAL", 765, 410);
  stroke("#bbc8c7");
  strokeWeight(2);
  line(550, 425, 980, 425);

  for (let index = 0; index < MENU_OPTIONS.length; index++) {
    const [rowTop, rowBottom] = MENU_OPTION_ROWS[index];
    const rowY = (rowTop + rowBottom) / 2;
    const selected = index === menuSelection;
    const unavailable = index === 1 && !savedProgress;
    const pulse = (Math.sin(frameCount * 0.13) + 1) / 2;

    noStroke();
    fill(
      selected
        ? color(105, 196, 91, 190 + pulse * 65)
        : color(222, 232, 229, 215),
    );
    rect(555, rowY - rowHeight / 2, 445, rowHeight, 12);
    if (selected) {
      noFill();
      stroke(255, 245, 176, 150 + pulse * 105);
      strokeWeight(4);
      rect(555, rowY - rowHeight / 2, 445, rowHeight, 12);
    }

    drawAnimatedMenuIcon(index, 594, rowY);
    noStroke();
    fill(unavailable ? "#687783" : "#182a3d");
    textAlign(LEFT, CENTER);
    textStyle(BOLD);
    textSize(28);
    text(
      ["Nueva partida", "Continuar", "Cómo jugar", "Opciones"][index],
      630,
      rowY,
    );
  }

  const arrowOffset = Math.sin(frameCount * 0.18) * 5;
  noStroke();
  fill("#152e46");
  triangle(
    532 + arrowOffset,
    menuIndicatorY - 16,
    532 + arrowOffset,
    menuIndicatorY + 16,
    550 + arrowOffset,
    menuIndicatorY,
  );
  fill("#8fe15f");
  triangle(
    536 + arrowOffset,
    menuIndicatorY - 11,
    536 + arrowOffset,
    menuIndicatorY + 11,
    548 + arrowOffset,
    menuIndicatorY,
  );

  if (menuMessage) {
    fill("#8b3333");
    textAlign(CENTER, CENTER);
    textStyle(NORMAL);
    textSize(18);
    text(menuMessage, 765, 673);
  }
  pop();
}

function drawAnimatedMenuIcon(index, x, y) {
  push();
  translate(x, y);
  rectMode(CENTER);
  noStroke();

  if (index === 0) {
    fill("#a96d2f");
    triangle(-19, -7, 19, -7, 0, -21);
    fill("#dfaa53");
    rect(0, 6, 35, 29, 3);
    fill("#f7e9c7");
    rect(-9, 2, 5, 8);
    rect(0, 2, 5, 8);
    rect(9, 2, 5, 8);
    fill("#76503a");
    rect(0, 14, 8, 13);
  } else if (index === 1) {
    fill("#c77f22");
    rect(0, 6, 40, 26, 4);
    fill("#f2bd3d");
    rect(0, 3, 40, 25, 4);
    fill("#fff0aa");
    rect(-10, -11, 17, 7, 2);
  } else if (index === 2) {
    fill("#456f9c");
    rect(0, 0, 38, 35, 3);
    fill("#fffdf2");
    rect(-9, 0, 14, 28);
    rect(9, 0, 14, 28);
    fill("#78acd0");
    rect(0, 0, 3, 30);
    stroke("#7896b2");
    strokeWeight(2);
    line(-13, -8, -5, -8);
    line(5, -8, 13, -8);
  } else {
    fill("#60798d");
    for (let tooth = 0; tooth < 8; tooth++) {
      push();
      rotate((TWO_PI * tooth) / 8);
      rect(0, -17, 9, 12, 2);
      pop();
    }
    ellipse(0, 0, 34, 34);
    fill("#eef2ec");
    ellipse(0, 0, 15, 15);
    fill("#60798d");
    ellipse(0, 0, 7, 7);
  }
  pop();
}

function getMenuOptionRows() {
  return MENU_OPTION_ROWS;
}

function getMenuImageBounds() {
  const scaleFactor = Math.min(
    width / menuPrincipalImage.width,
    height / menuPrincipalImage.height,
  );
  const imageWidth = menuPrincipalImage.width * scaleFactor;
  const imageHeight = menuPrincipalImage.height * scaleFactor;
  return {
    x: (width - imageWidth) / 2,
    y: (height - imageHeight) / 2,
    width: imageWidth,
    height: imageHeight,
  };
}

function getMenuOptionAt(x, y) {
  const bounds = getMenuImageBounds();
  const imageX = ((x - bounds.x) / bounds.width) * menuPrincipalImage.width;
  const imageY = ((y - bounds.y) / bounds.height) * menuPrincipalImage.height;
  if (imageX < 500 || imageX > 1035 || imageY < 425 || imageY > 675) return -1;

  return getMenuOptionRows().findIndex(
    ([top, bottom]) => imageY >= top && imageY < bottom,
  );
}

function drawOptionsScreen() {
  background("#102b35");
  drawMenuScenery();
  noStroke();
  fill(7, 18, 26, 235);
  rect(38, 8, 484, 304);
  stroke("#65e6be");
  noFill();
  rect(38, 8, 484, 304);
  noStroke();
  fill("#ffe08a");
  textAlign(CENTER, CENTER);
  textSize(21);
  text("OPCIONES", width / 2, 59);
  fill("#e1f5e8");
  textSize(12);
  text(`Dificultad seleccionada: ${difficulty}`, width / 2, 113);
  text("Elegí Fácil o Normal debajo del juego.", width / 2, 144);
  text("La música retro y los efectos se controlan con Audio.", width / 2, 173);
  fill("#98bdb5");
  textSize(10);
  text("ESC o VOLVER AL MENÚ para regresar", width / 2, 274);
  fill("#ffe08a");
  textSize(8);
  text("ITERACIÓN CODEX: 11", width / 2, 297);
}

function updateMenuControls() {
  const showOptions = gameScreen === "options";
  document.getElementById("difficulty-controls").hidden = !showOptions;
  document.getElementById("options-controls").hidden = !showOptions;
}

function drawMenuScenery() {
  noStroke();
  fill("#62b9ef");
  rect(0, 0, width, height);
  fill("#b7e4fa");
  drawMenuCloud(252, 25);
  drawMenuCloud(488, 48);
  drawMenuCloud(342, 75);

  fill("#6fbd45");
  rect(0, 153, width, 167);
  fill("#91d44e");
  rect(0, 208, width, 112);
  drawMenuTree(30, 122, "#ee8fb8");
  drawMenuTree(263, 149, "#55a845");
  drawMenuTree(548, 110, "#5aa942");
  drawMenuTree(470, 168, "#438f42");
  drawCampusFacade();

  fill("#d9c8b0");
  quad(206, 171, 329, 171, 560, 320, 91, 320);
  fill("#f3d9b2");
  quad(214, 177, 320, 177, 526, 320, 123, 320);
  stroke("#c59f86");
  strokeWeight(1);
  for (let row = 0; row < 5; row++) {
    const y = 194 + row * 28;
    line(202 - row * 17, y, 340 + row * 28, y);
  }
  for (let column = 0; column < 10; column++) {
    line(212 + column * 37, 177, 92 + column * 50, 320);
  }

  drawMenuShrub(354, 187);
  drawMenuShrub(210, 190);
  drawMenuShrub(532, 204);
  drawMenuStudent();
}

function drawMenuCloud(x, y) {
  noStroke();
  fill(255, 255, 255, 230);
  rect(x, y + 7, 54, 11, 5);
  rect(x + 9, y, 22, 17, 7);
  rect(x + 28, y + 3, 20, 14, 6);
  fill("#d9f0ff");
  rect(x + 10, y + 15, 34, 3);
}

function drawMenuTree(x, y, crownColor) {
  noStroke();
  fill("#70462e");
  rect(x + 16, y + 30, 12, 35);
  fill("#397743");
  rect(x + 4, y + 22, 37, 12, 5);
  fill(crownColor);
  rect(x, y + 9, 20, 22, 5);
  rect(x + 17, y, 25, 26, 6);
  rect(x + 7, y + 27, 28, 14, 4);
  fill(255, 255, 255, 110);
  rect(x + 6, y + 11, 8, 6, 2);
  rect(x + 23, y + 4, 9, 6, 2);
  if (crownColor === "#ee8fb8") {
    fill("#ffe1ef");
    rect(x + 4, y + 19, 4, 4);
    rect(x + 29, y + 13, 4, 4);
    rect(x + 20, y + 29, 4, 4);
  }
}

function drawMenuShrub(x, y) {
  noStroke();
  fill("#318147");
  rect(x, y + 8, 32, 10, 4);
  fill("#78c840");
  rect(x + 3, y, 11, 12, 4);
  rect(x + 13, y - 4, 12, 16, 5);
  rect(x + 23, y + 1, 9, 11, 4);
  fill("#c2e85a");
  rect(x + 7, y + 3, 3, 3);
  rect(x + 18, y, 3, 3);
}

function drawCampusFacade() {
  noStroke();
  fill("#be8165");
  rect(323, 83, 190, 104);
  fill("#f2d7b2");
  rect(335, 75, 165, 111);
  fill("#f9e7ca");
  rect(345, 92, 145, 94);
  fill("#6799ac");
  rect(357, 112, 28, 35);
  rect(396, 112, 28, 35);
  rect(435, 112, 28, 35);
  fill("#d5eff0");
  rect(361, 116, 20, 27);
  rect(400, 116, 20, 27);
  rect(439, 116, 20, 27);
  fill("#3e8f54");
  rect(414, 88, 9, 12);
  rect(425, 88, 9, 12);
  rect(414, 102, 9, 10);
  rect(425, 102, 9, 10);
  fill("#274563");
  textAlign(CENTER, CENTER);
  textSize(8);
  text("UNAHUR", 423, 121);
  fill("#9a624d");
  rect(393, 158, 34, 28);
  fill("#f4d7ad");
  rect(398, 160, 24, 26);
}

function drawMenuStudent() {
  push();
  noStroke();
  fill(18, 39, 54, 75);
  ellipse(97, 307, 132, 22);
  fill("#d99563");
  rect(72, 201, 49, 66, 12);
  fill("#f1bf91");
  rect(79, 190, 36, 33, 10);
  fill("#513b32");
  rect(75, 186, 43, 13, 7);
  rect(72, 192, 10, 12, 4);
  rect(111, 190, 10, 10, 4);
  fill("#25815f");
  rect(65, 222, 64, 66, 12);
  fill("#1b564b");
  rect(61, 227, 66, 13, 6);
  fill("#f1bf91");
  rect(113, 239, 15, 39, 5);
  fill("#203953");
  rect(72, 277, 24, 33, 5);
  rect(101, 277, 24, 33, 5);
  fill("#3f3c51");
  rect(49, 235, 34, 58, 9);
  fill("#877b99");
  rect(54, 239, 27, 49, 7);
  fill("#5bbd77");
  rect(61, 249, 13, 20, 2);
  fill("#e7eddc");
  rect(63, 251, 3, 6);
  rect(68, 251, 3, 6);
  rect(63, 260, 3, 6);
  rect(68, 260, 3, 6);
}

function drawPixelBuilding(x, y, w, h) {
  noStroke();
  fill("#384756");
  rect(x, y, w, h);
  fill("#dbb977");
  rect(x - 5, y - 8, w + 10, 12);
  fill("#8bc8a4");
  for (let windowX = x + 10; windowX < x + w - 4; windowX += 20) {
    rect(windowX, y + 13, 10, 15);
  }
  fill("#5c4034");
  rect(x + w / 2 - 7, y + h - 19, 14, 19);
}

function updatePlayer() {
  let moveX = 0;
  let moveY = 0;
  if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) moveX--;
  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) moveX++;
  if (keyIsDown(UP_ARROW) || keyIsDown(87)) moveY--;
  if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) moveY++;

  isMoving = moveX !== 0 || moveY !== 0;
  if (!isMoving) return;

  const speed = difficulty === "Fácil" ? 2.5 : 3.5;
  if (moveX !== 0 && moveY !== 0) {
    moveX *= Math.SQRT1_2;
    moveY *= Math.SQRT1_2;
  }
  movePlayerAxis(moveX * speed, 0);
  movePlayerAxis(0, moveY * speed);
  if (millis() - lastSaveAt >= 750) saveGameProgress();
}

function loadSavedProgress() {
  let rawSave;
  try {
    rawSave = localStorage.getItem(SAVE_KEY);
  } catch (error) {
    saveErrorMessage = "No se pudo leer el guardado del navegador.";
    return;
  }
  if (!rawSave) return;

  let parsedSave;
  try {
    parsedSave = JSON.parse(rawSave);
  } catch (error) {
    saveErrorMessage = "El guardado está dañado y no se puede continuar.";
    return;
  }
  if (!isValidSave(parsedSave)) {
    saveErrorMessage = "El guardado no tiene un formato válido.";
    return;
  }
  savedProgress = parsedSave;
  difficulty = parsedSave.difficulty;
  earnedMedals = parsedSave.earnedMedals || [];
  currentBuildingKey = parsedSave.buildingKey || "j";
  bossDefeated = parsedSave.bossDefeated || false;
  syncDifficultyButtons();
}

function isValidSave(save) {
  return (
    save &&
    (save.version === 1 || save.version === 2 || save.version === 3) &&
    (save.screen === "campus" || save.screen === "building" || save.screen === "victory") &&
    Number.isFinite(save.x) &&
    Number.isFinite(save.y) &&
    save.x >= 0 &&
    save.x <= MAP_COLUMNS * TILE_SIZE &&
    save.y >= 0 &&
    save.y <= MAP_ROWS * TILE_SIZE &&
    (save.difficulty === "Fácil" || save.difficulty === "Normal") &&
    typeof save.credentialFound === "boolean" &&
    typeof save.campusMissionComplete === "boolean" &&
    (save.version === 1 ||
      (Array.isArray(save.earnedMedals) &&
        save.earnedMedals.every((id) =>
          COURSE_CATALOG.some((course) => course.id === id),
        ) &&
        new Set(save.earnedMedals).size === save.earnedMedals.length)) &&
    (save.version < 3 ||
      (Object.prototype.hasOwnProperty.call(CAMPUS_BUILDINGS, save.buildingKey) &&
        typeof save.bossDefeated === "boolean"))
  );
}

function saveGameProgress() {
  let progress;
  if   (gameScreen === "campus" || gameScreen === "building" || gameScreen === "victory") {
    progress = {
      version: 3,
      screen: gameScreen,
      x: player.x,
      y: player.y,
      difficulty,
      credentialFound,
      campusMissionComplete,
      earnedMedals,
      buildingKey: currentBuildingKey,
      bossDefeated,
    };
  } else if (gameScreen === "options" && savedProgress) {
    progress = { ...savedProgress, difficulty };
  } else {
    return;
  }

  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(progress));
    savedProgress = progress;
    saveErrorMessage = "";
    lastSaveAt = millis();
  } catch (error) {
    saveErrorMessage = "No se pudo guardar. Revisá el almacenamiento del navegador.";
  }
}

function continueGame() {
  if (!savedProgress) {
    menuMessage = "Todavía no hay una partida guardada.";
    return;
  }
  player.x = savedProgress.x;
  player.y = savedProgress.y;
  difficulty = savedProgress.difficulty;
  credentialFound = savedProgress.credentialFound;
  campusMissionComplete = savedProgress.campusMissionComplete;
  earnedMedals = savedProgress.earnedMedals || [];
  currentBuildingKey = savedProgress.buildingKey || "j";
  bossDefeated = savedProgress.bossDefeated || false;
  activeQuiz = null;
  analiticoOpen = false;
  gameScreen = savedProgress.screen;
  dialogueMessage = "";
  menuMessage = "";
  syncDifficultyButtons();
}

function syncDifficultyButtons() {
  document.querySelectorAll(".difficulty-option").forEach((button) => {
    button.setAttribute(
      "aria-pressed",
      String(button.textContent.trim() === difficulty),
    );
  });
}

function movePlayerAxis(dx, dy) {
  const nextX = player.x + dx;
  const nextY = player.y + dy;
  const radius = 9;
  const points = [
    [nextX - radius, nextY - radius],
    [nextX + radius, nextY - radius],
    [nextX - radius, nextY + radius],
    [nextX + radius, nextY + radius],
  ];
  if (points.every(([x, y]) => !isSolidAt(x, y))) {
    player.x = nextX;
    player.y = nextY;
  }
}

function isSolidAt(x, y) {
  if (gameScreen === "building") {
    if (x < 76 || x > 484 || y < 55 || y > 278) return true;
    if (
      currentBuildingKey === "j" &&
      x > 254 &&
      x < 306 &&
      y > 164 &&
      y < 188
    ) return true;
    if (
      (currentBuildingKey === "j" || currentBuildingKey === "m") &&
      dist(x, y, 420, 112) < 17
    ) return true;
    return false;
  }

  const column = Math.floor(x / TILE_SIZE);
  const row = Math.floor(y / TILE_SIZE);
  if (row < 0 || row >= MAP_ROWS || column < 0 || column >= MAP_COLUMNS) {
    return true;
  }
  const tile = campusMap[row][column];
  return tile === "T" || tile === "B" || Boolean(CAMPUS_BUILDINGS[tile]);
}

function drawCampus() {
  background("#254c3d");
  const targetCameraX = constrain(player.x - width / 2, 0, MAP_COLUMNS * TILE_SIZE - width);
  const targetCameraY = constrain(player.y - height / 2, 0, MAP_ROWS * TILE_SIZE - height);
  cameraX = lerp(cameraX, targetCameraX, 0.16);
  cameraY = lerp(cameraY, targetCameraY, 0.16);

  push();
  translate(-Math.floor(cameraX), -Math.floor(cameraY));
  drawCampusMap();
  drawStudentPixel(player.x - 16, player.y - 22, isMoving);
  pop();

  noStroke();
  fill(5, 20, 25, 215);
  rect(8, 8, 244, 76);
  fill("#ffe08a");
  textAlign(LEFT, TOP);
  textSize(12);
  text("CAMPUS UNAHUR  ·  " + difficulty.toUpperCase(), 17, 14);
  fill("#e1f5e8");
  text(campusMissionComplete ? "Misión: bienvenida completada. ¡Buen comienzo!" : "Justicia Social: buscá su entrada", 17, 29);
  fill("#ffe08a");
  text("FLECHAS/WASD: MOVER  ·  E: INTERACTUAR", 17, 44);
  text(`MEDALLAS DE CARRERA: ${earnedMedals.length}/${COURSE_CATALOG.length}`, 17, 57);
  text("I: ANALÍTICO  ·  ITERACIÓN 14", 17, 70);

  const nearbyBuilding = getNearbyBuildingDoor();
  if (nearbyBuilding) {
    fill(5, 20, 25, 220);
    rect(100, height - 39, 360, 26);
    fill("#ffe08a");
    textAlign(CENTER, CENTER);
    text(`PULSÁ E PARA ENTRAR A ${nearbyBuilding.name}`, width / 2, height - 26);
  }

  if (dialogueMessage) {
    drawDialogueBox(dialogueSpeaker, dialogueMessage);
  }
  if (analiticoOpen) drawAnalitico();
  if (saveErrorMessage) drawSaveWarning();
}

function drawCampusMap() {
  for (let row = 0; row < MAP_ROWS; row++) {
    for (let column = 0; column < MAP_COLUMNS; column++) {
      const x = column * TILE_SIZE;
      const y = row * TILE_SIZE;
      const tile = campusMap[row][column];
      if (tile === "G") {
        fill((row + column) % 3 === 0 ? "#34734f" : "#306c4b");
        noStroke();
        rect(x, y, TILE_SIZE, TILE_SIZE);
        fill("#44845a");
        rect(x + ((row * 7 + column * 11) % 24), y + ((row * 13 + column * 3) % 24), 2, 2);
      } else if (tile === "P") {
        fill("#b99c69");
        noStroke();
        rect(x, y, TILE_SIZE, TILE_SIZE);
        fill("#c9ad78");
        rect(x + 4, y + 5, 3, 2);
        rect(x + 22, y + 22, 4, 2);
      } else if (tile === "T") {
        drawTree(x, y);
      } else if (tile === "B") {
        drawBench(x, y);
      } else if (CAMPUS_BUILDINGS[tile]) {
        drawBuildingTile(x, y, row, column, tile);
      } else if (tile === "D") {
        fill("#886447");
        noStroke();
        rect(x + 7, y + 2, 18, 29);
        fill("#edcf87");
        rect(x + 10, y + 4, 12, 25);
        fill("#62462f");
        rect(x + 19, y + 16, 2, 2);
      } else if (tile === "R") {
        fill("#777873");
        noStroke();
        rect(x, y, TILE_SIZE, TILE_SIZE);
        fill("#cfbd84");
        if ((row === 0 || row === MAP_ROWS - 1) && column % 2 === 0) {
          rect(x + 5, y + 15, 16, 2);
        }
      }
    }
  }

  drawCampusLabels();
}

function drawCampusLabels() {
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(9);
  Object.values(CAMPUS_BUILDINGS).forEach((building) => {
    fill("#15242a");
    rect(
      building.x * TILE_SIZE + 4,
      building.y * TILE_SIZE + building.h * TILE_SIZE / 2 - 11,
      building.w * TILE_SIZE - 8,
      23,
    );
    fill("#fff2cf");
    text(`EDIFICIO ${building.number}`, (building.x + building.w / 2) * TILE_SIZE, (building.y + building.h / 2) * TILE_SIZE - 4);
    text(building.name, (building.x + building.w / 2) * TILE_SIZE, (building.y + building.h / 2) * TILE_SIZE + 5);
  });

  fill("#f4e6bd");
  textSize(11);
  text("HALL CENTRAL", 21 * TILE_SIZE, 12 * TILE_SIZE);
  textSize(10);
  text("BUFFET", 14 * TILE_SIZE, 12.5 * TILE_SIZE);

  fill("#eee7d8");
  textSize(10);
  text("CALLE DEL SOCORRO", 23 * TILE_SIZE, 0.5 * TILE_SIZE);
  text("CALLE TTE. ORIGONE", 23 * TILE_SIZE, (MAP_ROWS - 0.5) * TILE_SIZE);
  push();
  translate(0.5 * TILE_SIZE, 12 * TILE_SIZE);
  rotate(-HALF_PI);
  text("CALLE CHIQUISACA", 0, 0);
  pop();
  push();
  translate((MAP_COLUMNS - 0.5) * TILE_SIZE, 12 * TILE_SIZE);
  rotate(HALF_PI);
  text("CALLE MAZZARELLO", 0, 0);
  pop();
}

function drawTree(x, y) {
  noStroke();
  fill("#24543d");
  rect(x + 5, y + 19, 23, 11);
  fill("#4d392d");
  rect(x + 13, y + 16, 7, 15);
  fill("#1e603e");
  rect(x + 5, y + 4, 22, 18);
  fill("#39814d");
  rect(x + 9, y, 15, 18);
  fill("#62a45c");
  rect(x + 13, y + 4, 7, 5);
}

function drawBench(x, y) {
  noStroke();
  fill("#523f30");
  rect(x + 5, y + 11, 22, 5);
  rect(x + 8, y + 17, 4, 9);
  rect(x + 21, y + 17, 4, 9);
  fill("#a67a47");
  rect(x + 5, y + 8, 22, 5);
}

function drawBuildingTile(x, y, row, column, type) {
  const building = CAMPUS_BUILDINGS[type];
  const palette = {
    base: building.color,
    alternate: lerpColor(color(building.color), color("#ffffff"), 0.13),
    border: lerpColor(color(building.color), color("#26313d"), 0.42),
  };
  noStroke();
  fill(palette.border);
  rect(x, y, TILE_SIZE, TILE_SIZE);
  fill((row + column) % 2 === 0 ? palette.base : palette.alternate);
  rect(x + 2, y + 2, TILE_SIZE - 4, TILE_SIZE - 4);

  if (row === building.y) {
    fill(palette.border);
    rect(x, y, TILE_SIZE, 5);
  } else if (column === building.x || column === building.x + building.w - 1) {
    fill(palette.border);
    rect(column === building.x ? x : x + TILE_SIZE - 5, y, 5, TILE_SIZE);
  } else {
    fill("#d7ead5");
    rect(x + 10, y + 10, 12, 11);
    fill("#54676a");
    rect(x + 15, y + 10, 2, 11);
    rect(x + 10, y + 15, 12, 2);
  }
}

function getNearbyBuildingDoor() {
  return Object.values(CAMPUS_BUILDINGS).find((building) => {
    const doorX = (building.door.x + 0.5) * TILE_SIZE;
    const doorY = (building.door.y + 0.5) * TILE_SIZE;
    return dist(player.x, player.y, doorX, doorY) < 40;
  });
}

function drawBuildingInterior() {
  const building = CAMPUS_BUILDINGS[currentBuildingKey];
  const semester = getSemesterCourses(building.semester);
  background("#233d35");
  noStroke();
  fill("#59483a");
  rect(44, 20, 472, 284);
  fill("#c5ad7d");
  rect(56, 32, 448, 260);
  fill("#ddc99b");
  rect(64, 40, 432, 244);

  fill("#7f6550");
  rect(64, 62, 432, 22);
  fill("#fff1ca");
  textAlign(CENTER, CENTER);
  textSize(10);
  text(`${building.name}  ·  ${SEMESTERS[building.semester - 1].name}`, width / 2, 73);

  if (building.semester === 1) {
    drawInteriorNoticeboard();
    drawReceptionDesk();
    drawPreceptor();
  } else {
    drawInteriorNoticeboard();
    fill("#4d4836");
    rect(350, 91, 120, 37);
    fill("#fff1ca");
    textSize(7);
    text("AULA DE CURSADA", 410, 101);
    text(`${semester.length} MATERIAS · ${getSemesterMedalCount(building.semester)}/${semester.length} MEDALLAS`, 410, 114);
  }
  semester.forEach(drawCourseTutor);
  if (building.semester === 5) drawFinalBoss();
  drawStudentPixel(player.x - 16, player.y - 22, isMoving);

  fill("#603f2f");
  rect(254, 270, 52, 14);
  fill("#f1daa0");
  textSize(9);
  text("SALIDA", width / 2, 277);

  fill(5, 20, 25, 220);
  rect(9, 8, 248, 46);
  textAlign(LEFT, TOP);
  textSize(12);
  fill("#ffe08a");
  text(`CUATRIMESTRE ${building.semester}`, 17, 14);
  fill("#f4e7c5");
  const objective = building.semester === 1
    ? campusMissionComplete
      ? "Bienvenida completada. ¡A conseguir medallas!"
      : credentialFound
        ? "Volvé a hablar con el preceptor."
        : "Hablá con preceptoría y buscá tu credencial."
    : building.semester === 5 && earnedMedals.length === COURSE_CATALOG.length
      ? bossDefeated
        ? "¡Hernán Coniglio ya fue derrotado!"
        : "Todas las materias aprobadas. ¡Buscá al jefe final!"
      : "Acercate a cada docente para rendir.";
  text(objective, 17, 30, 230, 28);
  textAlign(RIGHT, TOP);
  fill("#fff1ca");
  textSize(9);
  text(`MEDALLAS ${getSemesterMedalCount(building.semester)}/${semester.length}`, 491, 52);

  const prompt = getInteriorPrompt();
  if (activeQuiz) {
    drawQuizOverlay();
  } else if (dialogueMessage) {
    drawDialogueBox(dialogueSpeaker, dialogueMessage);
  } else if (prompt) {
    drawInteractionPrompt(prompt);
  }
  if (analiticoOpen && !activeQuiz) drawAnalitico();
  if (saveErrorMessage) drawSaveWarning();
}

function drawSaveWarning() {
  fill(65, 24, 20, 235);
  noStroke();
  rect(14, height - 26, width - 28, 18);
  fill("#ffe8d1");
  textAlign(CENTER, CENTER);
  textSize(8);
  text(saveErrorMessage, width / 2, height - 17);
}

function drawInteriorNoticeboard() {
  noStroke();
  fill("#55433a");
  rect(91, 85, 62, 43);
  fill("#e4d5ac");
  rect(96, 89, 52, 34);
  stroke("#937d57");
  strokeWeight(1);
  line(101, 99, 142, 99);
  line(101, 106, 137, 106);
  line(101, 113, 132, 113);
  noStroke();
  fill("#4c4334");
  textAlign(CENTER, CENTER);
  textSize(7);
  text("CARTELERA", 122, 133);
}

function drawReceptionDesk() {
  noStroke();
  fill("#694830");
  rect(235, 164, 90, 28);
  fill("#a8794e");
  rect(239, 160, 82, 12);
  fill("#e9d9b2");
  rect(274, 154, 12, 10);
  fill("#f1d27d");
  rect(278, 156, 4, 6);
  fill("#513c31");
  textAlign(CENTER, CENTER);
  textSize(7);
  text("MOSTRADOR", 280, 199);
}

function drawPreceptor() {
  drawStudentPixel(404, 91, false);
  noStroke();
  fill("#f0e7d2");
  rect(416, 111, 7, 14);
  rect(429, 111, 7, 14);
  fill("#9e5748");
  rect(424, 114, 3, 8);
  fill("#ffe08a");
  triangle(428, 83, 423, 77, 433, 77);
  fill("#293e3b");
  rect(390, 140, 68, 12);
  fill("#f2e4c4");
  textAlign(CENTER, CENTER);
  textSize(7);
  text("PRECEPTOR/A", 424, 146);
}

function drawFinalBoss() {
  drawStudentPixel(404, 91, false);
  noStroke();
  fill("#e7ddcb");
  rect(416, 111, 7, 14);
  rect(429, 111, 7, 14);
  fill("#6c2833");
  rect(424, 114, 3, 8);
  fill("#e8c34d");
  triangle(428, 83, 423, 77, 433, 77);
  fill("#542c31");
  rect(381, 140, 86, 12);
  fill("#fff1ca");
  textAlign(CENTER, CENTER);
  textSize(7);
  text("HERNÁN CONIGLIO", 424, 146);
}

function drawCourseTutor(course) {
  noStroke();
  fill("#76513b");
  rect(course.x - 22, course.y + 3, 44, 8);
  fill("#bd8b58");
  rect(course.x - 19, course.y, 38, 6);
  drawStudentPixel(course.x - 16, course.y - 22, false);

  fill(28, 48, 44, 235);
  rect(course.x - 50, course.y + 13, 100, 14, 2);
  fill("#fff1ca");
  textAlign(CENTER, CENTER);
  textSize(6);
  text(`MATERIA ${String(course.id).padStart(2, "0")} · ${course.shortName}`, course.x, course.y + 20);
  if (earnedMedals.includes(course.id)) {
    fill("#f4c84f");
    ellipse(course.x + 14, course.y - 16, 10, 10);
    fill("#fff2ab");
    ellipse(course.x + 14, course.y - 16, 4, 4);
  }
}

function getSemesterCourses(semester) {
  return COURSE_CATALOG.filter((course) => course.semester === semester);
}

function getSemesterMedalCount(semester) {
  return getSemesterCourses(semester).filter((course) =>
    earnedMedals.includes(course.id),
  ).length;
}

function isSemesterUnlocked(semester) {
  if (semester <= 1) return true;
  return getSemesterCourses(semester - 1).every((course) =>
    earnedMedals.includes(course.id),
  );
}

function canTakeCourse(course) {
  return (
    (course.semester !== 1 || campusMissionComplete) &&
    isSemesterUnlocked(course.semester) &&
    course.prerequisites.every((id) => earnedMedals.includes(id))
  );
}

function getCourseLockMessage(course) {
  if (course.semester === 1 && !campusMissionComplete) {
    return "Completá primero la misión de bienvenida en preceptoría para poder rendir.";
  }
  const missing = course.prerequisites
    .filter((id) => !earnedMedals.includes(id))
    .map((id) => COURSE_CATALOG.find((entry) => entry.id === id).name);
  if (missing.length) {
    return `Correlatividades pendientes: ${missing.join(" y ")}. Aprobá esas materias para desbloquear esta.`;
  }
  return "Completá todas las materias del cuatrimestre anterior para avanzar.";
}

function getInteriorPrompt() {
  const nearbyCourse = getNearbyCourseGym();
  if (nearbyCourse) {
    return earnedMedals.includes(nearbyCourse.id)
      ? `E: REPASAR ${nearbyCourse.shortName}`
      : canTakeCourse(nearbyCourse)
        ? `E: RENDIR ${nearbyCourse.shortName}`
        : `E: VER CORRELATIVIDADES · ${nearbyCourse.shortName}`;
  }
  if (currentBuildingKey === "m" && dist(player.x, player.y, 420, 112) < 50) {
    return bossDefeated
      ? "HERNÁN CONIGLIO: ¡LA LIGA YA TIENE CAMPEÓN!"
      : earnedMedals.length === COURSE_CATALOG.length
        ? "E: ENFRENTAR A HERNÁN CONIGLIO"
        : "HERNÁN CONIGLIO: COMPLETÁ LAS 19 MATERIAS";
  }
  if (
    currentBuildingKey === "j" &&
    !credentialFound &&
    dist(player.x, player.y, 420, 112) < 50
  ) {
    return "E: HABLAR CON PRECEPTOR/A";
  }
  if (
    currentBuildingKey === "j" &&
    credentialFound &&
    !campusMissionComplete &&
    dist(player.x, player.y, 420, 112) < 50
  ) {
    return "E: ENTREGAR CREDENCIAL";
  }
  if (
    currentBuildingKey === "j" &&
    !credentialFound &&
    dist(player.x, player.y, 280, 160) < 56
  ) {
    return "E: RECOGER CREDENCIAL";
  }
  if (currentBuildingKey === "j" && dist(player.x, player.y, 122, 107) < 48) {
    return "E: LEER CARTELERA";
  }
  if (dist(player.x, player.y, 280, 277) < 34) {
    return "E: SALIR AL CAMPUS";
  }
  return "";
}

function getNearbyCourseGym() {
  return getSemesterCourses(CAMPUS_BUILDINGS[currentBuildingKey].semester).find(
    (course) => dist(player.x, player.y, course.x, course.y) < 47,
  );
}

function interactInsideBuilding() {
  const nearbyCourse = getNearbyCourseGym();
  if (nearbyCourse) {
    if (canTakeCourse(nearbyCourse)) {
      startCourseQuiz(nearbyCourse);
    } else {
      dialogueSpeaker = "DOCENTE";
      dialogueMessage = getCourseLockMessage(nearbyCourse);
    }
  } else if (
    currentBuildingKey === "m" &&
    dist(player.x, player.y, 420, 112) < 50
  ) {
    if (bossDefeated) {
      dialogueSpeaker = "HERNÁN CONIGLIO";
      dialogueMessage = "La Liga ya tiene campeón. ¡Disfrutá el título, estudiante!";
    } else if (earnedMedals.length === COURSE_CATALOG.length) {
      startBossChallenge();
    } else {
      dialogueSpeaker = "HERNÁN CONIGLIO";
      dialogueMessage = `Primero aprobá las 19 materias. Te faltan ${COURSE_CATALOG.length - earnedMedals.length} medallas.`;
    }
  } else if (
    currentBuildingKey === "j" &&
    dist(player.x, player.y, 420, 112) < 50
  ) {
    if (!credentialFound) {
      dialogueSpeaker = "PRECEPTOR/A";
      dialogueMessage = "¡Bienvenido/a! Primer trámite de la vida universitaria: buscá tu credencial sobre el mostrador. No, no sirve una SUBE vencida.";
    } else if (!campusMissionComplete) {
      campusMissionComplete = true;
      dialogueSpeaker = "PRECEPTOR/A";
      dialogueMessage = "¡Credencial en mano! Ya podés rendir las cuatro materias del primer cuatrimestre. Cada aprobación te da una medalla.";
      playGameBlip(740);
    } else {
      dialogueSpeaker = "PRECEPTOR/A";
      dialogueMessage = "¡Buenísimo! Ya completaste la bienvenida. Cuando quieras, seguí explorando el campus.";
    }
  } else if (
    currentBuildingKey === "j" &&
    !credentialFound &&
    dist(player.x, player.y, 280, 160) < 56
  ) {
    credentialFound = true;
    dialogueSpeaker = "MOSTRADOR";
    dialogueMessage = "Encontraste tu credencial de estudiante. Ahora volvé con el preceptor/a.";
    playGameBlip(880);
  } else if (
    currentBuildingKey === "j" &&
    dist(player.x, player.y, 122, 107) < 48
  ) {
    dialogueSpeaker = "CARTELERA";
    dialogueMessage = "Aviso: se busca estudiante que entienda el campus sin mirar el mapa. Se ofrece mate y créditos morales.";
  } else if (dist(player.x, player.y, 280, 277) < 34) {
    leaveBuilding();
  }
  saveGameProgress();
}

function startCourseQuiz(course) {
  activeQuiz = {
    courseId: course.id,
    questionIndex: 0,
    correctAnswers: 0,
    selectedOption: 0,
    state: "question",
    feedbackMessage: "",
    passed: false,
    medalAwarded: false,
    isBoss: false,
  };
  dialogueMessage = "";
  saveGameProgress();
  playGameBlip(620);
}

function startBossChallenge() {
  activeQuiz = {
    courseId: null,
    questionIndex: 0,
    correctAnswers: 0,
    selectedOption: 0,
    state: "question",
    feedbackMessage: "",
    passed: false,
    medalAwarded: false,
    isBoss: true,
  };
  dialogueMessage = "";
  saveGameProgress();
  playGameBlip(520);
}

function getActiveQuizQuestions() {
  if (activeQuiz.isBoss) return BOSS_QUESTIONS;
  return COURSE_CATALOG.find((course) => course.id === activeQuiz.courseId).questions;
}

function answerCourseQuestion(optionIndex) {
  const question = getActiveQuizQuestions()[activeQuiz.questionIndex];
  const correct = optionIndex === question.correct;
  if (correct) activeQuiz.correctAnswers++;
  activeQuiz.feedbackMessage = correct
    ? "¡Correcto!"
    : `La respuesta correcta era: ${question.options[question.correct]}.`;
  activeQuiz.state = "feedback";
  playGameBlip(correct ? 880 : 330);
}

function advanceCourseQuiz() {
  const questions = getActiveQuizQuestions();
  if (activeQuiz.questionIndex < questions.length - 1) {
    activeQuiz.questionIndex++;
    activeQuiz.selectedOption = 0;
    activeQuiz.state = "question";
    return;
  }

  activeQuiz.passed = activeQuiz.correctAnswers >=
    (activeQuiz.isBoss ? 4 : MEDAL_PASSING_SCORE);
  activeQuiz.state = "result";
  if (activeQuiz.isBoss && activeQuiz.passed) {
    bossDefeated = true;
    saveGameProgress();
    playGameBlip(990);
  } else if (
    activeQuiz.passed &&
    !earnedMedals.includes(activeQuiz.courseId)
  ) {
    const course = COURSE_CATALOG.find(
      (entry) => entry.id === activeQuiz.courseId,
    );
    earnedMedals.push(course.id);
    activeQuiz.medalAwarded = true;
    saveGameProgress();
    playGameBlip(990);
  }
}

function resolveCourseQuiz() {
  if (!activeQuiz.passed) {
    activeQuiz.questionIndex = 0;
    activeQuiz.correctAnswers = 0;
    activeQuiz.selectedOption = 0;
    activeQuiz.state = "question";
    activeQuiz.feedbackMessage = "";
    return;
  }
  if (activeQuiz.isBoss) {
    activeQuiz = null;
    gameScreen = "victory";
    saveGameProgress();
    return;
  }
  activeQuiz = null;
}

function drawQuizOverlay() {
  const course = activeQuiz.isBoss
    ? null
    : COURSE_CATALOG.find((entry) => entry.id === activeQuiz.courseId);
  const questions = getActiveQuizQuestions();
  const passingScore = activeQuiz.isBoss ? 4 : MEDAL_PASSING_SCORE;
  fill(5, 12, 20, 235);
  noStroke();
  rect(0, 0, width, height);
  fill("#172e38");
  rect(32, 19, 496, 282, 8);
  stroke("#f2d27a");
  strokeWeight(2);
  noFill();
  rect(32, 19, 496, 282, 8);
  noStroke();
  fill("#ffe08a");
  textAlign(CENTER, CENTER);
  textSize(activeQuiz.isBoss ? 13 : 10);
  text(
    activeQuiz.isBoss
      ? "JEFE FINAL · HERNÁN CONIGLIO"
      : `MATERIA ${String(course.id).padStart(2, "0")} · ${course.name}`,
    width / 2,
    43,
  );
  fill("#d5e8db");
  textSize(9);
  text(
    activeQuiz.isBoss
      ? "CONTESTÁ 4 DE 5 PARA GANAR LA LIGA"
      : `MEDALLAS DE CARRERA: ${earnedMedals.length}/${COURSE_CATALOG.length}`,
    width / 2,
    64,
  );

  if (activeQuiz.state === "question") {
    const question = questions[activeQuiz.questionIndex];
    fill("#fff1ca");
    textSize(9);
    text(`PREGUNTA ${activeQuiz.questionIndex + 1}/${questions.length} · ACIERTOS: ${activeQuiz.correctAnswers}`, width / 2, 83);
    textSize(12);
    text(question.text, 54, 94, 452, 38);
    question.options.forEach((option, index) => {
      const optionY = 142 + index * 40;
      fill(index === activeQuiz.selectedOption ? "#81d36c" : "#29434b");
      rect(56, optionY, 448, 33, 4);
      fill("#fff1ca");
      textAlign(LEFT, CENTER);
      textSize(11);
      text(`${index + 1}.  ${option}`, 70, optionY + 16);
    });
    fill("#c0d8ce");
    textAlign(CENTER, CENTER);
    textSize(8);
    text("FLECHAS + ENTER, TECLAS 1–3 O CLIC PARA RESPONDER · ESC CANCELA", width / 2, 276);
  } else if (activeQuiz.state === "feedback") {
    fill("#fff1ca");
    textSize(16);
    text(activeQuiz.feedbackMessage, width / 2, 133);
    fill("#d5e8db");
    textSize(11);
    text(`Aciertos hasta ahora: ${activeQuiz.correctAnswers}`, width / 2, 174);
    text("PULSÁ E O ENTER PARA SEGUIR", width / 2, 253);
  } else {
    fill(activeQuiz.passed ? "#9be28a" : "#ffbf8b");
    textSize(16);
    text(activeQuiz.passed ? "¡DESAFÍO APROBADO!" : "TODAVÍA NO ALCANZA", width / 2, 126);
    fill("#fff1ca");
    textSize(11);
    text(
      `${activeQuiz.correctAnswers}/${questions.length} respuestas correctas · necesitás ${passingScore}`,
      width / 2,
      158,
    );
    if (activeQuiz.passed) {
      if (activeQuiz.isBoss) {
        text("¡VENCISTE A HERNÁN Y GANASTE LA LIGA!", width / 2, 187);
        text("La Tecnicatura en Programación está completa.", width / 2, 211);
      } else {
        text(activeQuiz.medalAwarded ? `¡Medalla ${course.id} conseguida!` : "¡Ya tenías esta medalla!", width / 2, 187);
        text(
          `Progreso del cuatrimestre: ${getSemesterMedalCount(course.semester)}/${getSemesterCourses(course.semester).length}`,
          width / 2,
          211,
        );
      }
      text("PULSÁ E O ENTER PARA CONTINUAR", width / 2, 263);
    } else {
      text("Podés volver a intentarlo. ¡A estudiar con mate!", width / 2, 196);
      text("PULSÁ E O ENTER PARA REINTENTAR · ESC PARA SALIR", width / 2, 263);
    }
  }
}

function drawAnalitico() {
  fill(5, 12, 20, 225);
  noStroke();
  rect(0, 0, width, height);
  fill("#172e38");
  rect(54, 26, 452, 268, 8);
  stroke("#65e6be");
  strokeWeight(2);
  noFill();
  rect(54, 26, 452, 268, 8);
  noStroke();
  fill("#ffe08a");
  textAlign(CENTER, CENTER);
  textSize(16);
  text("ANALÍTICO", width / 2, 53);
  fill("#d5e8db");
  textSize(11);
  const courses = getSemesterCourses(analiticoSemester);
  text(
    `CUATRIMESTRE ${analiticoSemester} · ${getSemesterMedalCount(analiticoSemester)}/${courses.length} MEDALLAS`,
    width / 2,
    78,
  );

  courses.forEach((course, index) => {
    const rowY = 100 + index * 31;
    const hasMedal = earnedMedals.includes(course.id);
    fill(hasMedal ? "#31583e" : "#29434b");
    rect(76, rowY, 408, 26, 4);
    fill(hasMedal ? "#f4c84f" : "#97a8a5");
    ellipse(94, rowY + 13, 13, 13);
    fill("#172e38");
    textSize(8);
    text(hasMedal ? "★" : "·", 94, rowY + 13);
    fill("#fff1ca");
    textAlign(LEFT, CENTER);
    textSize(9);
    text(`${course.id}. ${course.name}`, 111, rowY + 13);
    textAlign(RIGHT, CENTER);
    fill(hasMedal ? "#c4efae" : "#bacbc3");
    text(hasMedal ? "APROBADA" : "PENDIENTE", 474, rowY + 13);
  });
  textAlign(LEFT, CENTER);
  fill("#b9c8c2");
  textSize(7);
  const semester = SEMESTERS[analiticoSemester - 1];
  text(
    `${semester.name} · ${CAMPUS_BUILDINGS[semester.buildingKey].name}`,
    76,
    266,
  );
  fill("#c0d8ce");
  textAlign(CENTER, CENTER);
  textSize(8);
  text("← / →: CUATRIMESTRE  ·  I O ESC: VOLVER", width / 2, 282);
}

function drawVictoryScreen() {
  background("#153c39");
  noStroke();
  fill("#275c48");
  rect(0, 0, width, 104);
  fill("#f5d978");
  textAlign(CENTER, CENTER);
  textSize(23);
  text("¡CAMPEÓN/A DE LA LIGA!", width / 2, 68);
  drawStudentPixel(width / 2 - 16, 118, false);
  fill("#fff1ca");
  textSize(15);
  text("Derrotaste a Hernán Coniglio", width / 2, 193);
  textSize(11);
  text(`Completaste las 19 materias y conseguiste ${earnedMedals.length} medallas.`, width / 2, 220);
  fill("#c0d8ce");
  textSize(9);
  text("ENTER O ESC: VOLVER AL MENÚ", width / 2, 279);
}

function drawInteractionPrompt(prompt) {
  fill(5, 20, 25, 225);
  rect(74, height - 42, width - 148, 31);
  fill("#ffe08a");
  textAlign(CENTER, CENTER);
  textSize(12);
  text(prompt, width / 2, height - 26);
}

function drawDialogueBox(speaker, message) {
  fill(5, 15, 22, 242);
  stroke("#ffe08a");
  strokeWeight(1);
  rect(23, height - 105, width - 46, 93);
  noStroke();
  textAlign(LEFT, TOP);
  textSize(12);
  fill("#ffe08a");
  text(speaker, 37, height - 94);
  fill("#f4e7c5");
  text(message, 37, height - 75, width - 74, 53);
  textAlign(RIGHT, BOTTOM);
  fill("#9abdb5");
  textSize(11);
  text("PULSÁ E PARA CONTINUAR", width - 37, height - 18);
}

function leaveBuilding() {
  gameScreen = "campus";
  dialogueMessage = "";
  const building = CAMPUS_BUILDINGS[currentBuildingKey];
  const { door } = building;
  if (door.x < building.x) {
    player.x = (door.x - 0.5) * TILE_SIZE;
    player.y = (door.y + 0.5) * TILE_SIZE;
  } else if (door.x >= building.x + building.w) {
    player.x = (door.x + 1.5) * TILE_SIZE;
    player.y = (door.y + 0.5) * TILE_SIZE;
  } else if (door.y < building.y) {
    player.x = (door.x + 0.5) * TILE_SIZE;
    player.y = (door.y - 0.5) * TILE_SIZE;
  } else {
    player.x = (door.x + 0.5) * TILE_SIZE;
    player.y = (door.y + 1.5) * TILE_SIZE;
  }
  saveGameProgress();
}

function keyPressed() {
  resumeGameAudio();

  if (activeQuiz) {
    if (keyCode === ESCAPE) {
      activeQuiz = null;
      return false;
    }
    if (activeQuiz.state === "question") {
      if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) {
        activeQuiz.selectedOption =
          (activeQuiz.selectedOption + (keyCode === DOWN_ARROW ? 1 : 2)) % 3;
      } else if ([49, 50, 51].includes(keyCode)) {
        answerCourseQuestion(keyCode - 49);
      } else if (keyCode === ENTER || keyCode === RETURN || key === "e" || key === "E") {
        answerCourseQuestion(activeQuiz.selectedOption);
      }
      return false;
    }
    if (keyCode === ENTER || keyCode === RETURN || key === "e" || key === "E") {
      if (activeQuiz.state === "feedback") {
        advanceCourseQuiz();
      } else {
        resolveCourseQuiz();
      }
    }
    return false;
  }

  if (
    (gameScreen === "campus" || gameScreen === "building") &&
    (key === "i" || key === "I")
  ) {
    analiticoOpen = !analiticoOpen;
    analiticoSemester = 1;
    return false;
  }
  if (analiticoOpen) {
    if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
      analiticoSemester = (analiticoSemester + (keyCode === RIGHT_ARROW ? 0 : 3)) % 5 + 1;
    } else if (keyCode === ESCAPE || key === "i" || key === "I") {
      analiticoOpen = false;
    }
    return false;
  }

  if (gameScreen === "victory") {
    if (keyCode === ENTER || keyCode === RETURN || keyCode === ESCAPE) {
      returnToMenu();
    }
    return false;
  }

  if (gameScreen === "menu") {
    if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) {
      moveMenuSelection(keyCode === DOWN_ARROW ? 1 : -1);
      return false;
    }
    if (keyCode === ENTER || keyCode === RETURN) {
      activateMenuSelection();
    }
    if ([LEFT_ARROW, RIGHT_ARROW, UP_ARROW, DOWN_ARROW, 32].includes(keyCode)) {
      return false;
    }
    return;
  }

  if (gameScreen === "options" && keyCode === ESCAPE) {
    returnToMenu();
    return false;
  }

  if ([LEFT_ARROW, RIGHT_ARROW, UP_ARROW, DOWN_ARROW, 32].includes(keyCode)) {
    return false;
  }

  if (key === "e" || key === "E") {
    if (dialogueMessage) {
      dialogueMessage = "";
      return;
    }
    if (gameScreen === "campus") {
      const building = getNearbyBuildingDoor();
      if (building && isSemesterUnlocked(building.semester)) {
        currentBuildingKey = Object.keys(CAMPUS_BUILDINGS).find(
          (key) => CAMPUS_BUILDINGS[key] === building,
        );
        gameScreen = "building";
        player.x = 280;
        player.y = 228;
        saveGameProgress();
        playGameBlip(520);
      } else if (building) {
        dialogueSpeaker = "CAMPUS";
        dialogueMessage = `El Edificio ${building.number}: ${building.name} todavía está cerrado. Completá las materias del cuatrimestre anterior.`;
      }
    } else if (gameScreen === "building") {
      interactInsideBuilding();
    }
  } else if (gameScreen === "building" && keyCode === ESCAPE) {
    leaveBuilding();
    return false;
  }
}

function keyReleased() {
  if (gameScreen === "campus" || gameScreen === "building") saveGameProgress();
}

function activateMenuSelection() {
  menuMessage = "";
  if (menuSelection === 0) {
    startNewGame();
  } else if (menuSelection === 1) {
    continueGame();
  } else if (menuSelection === 2) {
    toggleModal(true);
  } else if (menuSelection === 3) {
    gameScreen = "options";
  }
}

function moveMenuSelection(direction) {
  for (let attempts = 0; attempts < MENU_OPTIONS.length; attempts++) {
    menuSelection = (menuSelection + direction + MENU_OPTIONS.length) % MENU_OPTIONS.length;
    if (menuSelection !== 1 || savedProgress) return;
  }
}

function startNewGame() {
  credentialFound = false;
  campusMissionComplete = false;
  currentBuildingKey = "j";
  earnedMedals = [];
  bossDefeated = false;
  activeQuiz = null;
  analiticoOpen = false;
  dialogueMessage = "";
  dialogueSpeaker = "";
  player.x = 24 * TILE_SIZE + 16;
  player.y = 14 * TILE_SIZE + 16;
  gameScreen = "campus";
  saveGameProgress();
  playGameBlip(660);
}

function returnToMenu() {
  gameScreen = "menu";
  menuMessage = "";
}

function selectDifficulty(selectedDifficulty) {
  difficulty = selectedDifficulty;
  syncDifficultyButtons();
  saveGameProgress();
}

function mousePressed() {
  resumeGameAudio();

  if (activeQuiz) {
    if (activeQuiz.state === "question") {
      const optionIndex = Math.floor((mouseY - 142) / 40);
      if (
        mouseX >= 56 &&
        mouseX <= 504 &&
        optionIndex >= 0 &&
        optionIndex < 3
      ) {
        answerCourseQuestion(optionIndex);
      }
    } else if (activeQuiz.state === "feedback") {
      advanceCourseQuiz();
    } else {
      resolveCourseQuiz();
    }
    return;
  }

  if (analiticoOpen) {
    analiticoOpen = false;
    return;
  }

  if (gameScreen === "menu") {
    const menuOption = getMenuOptionAt(mouseX, mouseY);
    if (menuOption >= 0) {
      if (menuOption === 1 && !savedProgress) {
        menuSelection = menuOption;
        menuMessage = "Todavía no hay una partida guardada.";
      } else {
        menuSelection = menuOption;
        activateMenuSelection();
      }
    }
  }
}

function playGameBlip(frequency) {
  if (soundMuted || !env || !osc) return;
  osc.freq(frequency);
  env.play(osc);
}

function resumeGameAudio() {
  if (soundMuted) return;
  const audioContext = getAudioContext();
  if (audioContext.state !== "running") audioContext.resume();
}

function updateBackgroundMusic() {
  if (soundMuted || !musicLead || getAudioContext().state !== "running") return;
  const now = millis();
  if (now < nextMusicStepAt) return;
  nextMusicStepAt = now + 205;

  const note = MUSIC_NOTES[musicStep];
  if (note !== null) {
    musicLead.freq(midiToFreq(note));
    musicLeadEnvelope.play(musicLead);
  }
  if (musicStep % 4 === 0) {
    const bassNote = MUSIC_BASS_NOTES[Math.floor(musicStep / 4)];
    musicBass.freq(midiToFreq(bassNote));
    musicBassEnvelope.play(musicBass);
  }
  musicStep = (musicStep + 1) % MUSIC_NOTES.length;
}

function toggleAudio() {
  soundMuted = !soundMuted;
  const button = document.getElementById("btn-sound");
  button.innerText = soundMuted ? "🔇 Audio: OFF" : "🔊 Audio: ON";
  if (!soundMuted) resumeGameAudio();
}
