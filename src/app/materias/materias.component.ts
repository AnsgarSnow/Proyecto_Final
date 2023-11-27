import { Component,OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.scss']
})
export class MateriasComponent implements OnInit{
irTemas1(i: number|undefined, x:number|undefined) {
  this.router.navigate([`/Temas/${i}/${x}`]);
}
id: number =1 ;
materia?: string;
descripcion?: string;
cantidadTemas?: number;
divsContenido: any[] = [
  { temaid: 1,tema: 'Tema 1', contenido: 'El tema uno trata acerca de...' },
  { temaid: 2,tema: 'Tema 2', contenido: 'El tema dos se enfoca en...' },
  { temaid: 3,tema: 'Tema 3', contenido: 'El tema tres aborda el concepto de...' },
  { temaid: 4,tema: 'Tema 4', contenido: 'El tema cuatro se enfoca en...' },
  { temaid: 5,tema: 'Tema 5', contenido: 'El tema cinco aborda el concepto de...' },
  { temaid: 6,tema: 'Tema 6', contenido: 'El tema seis se enfoca en...' },
  { temaid: 7,tema: 'Tema 7', contenido: 'El tema siete aborda el concepto de...' },
];
constructor(private route:ActivatedRoute,private router:Router){}


ngOnInit() {
  this.id = +this.route.snapshot.paramMap.get('id')!;
  if (this.id == 1){
    this.materia = 'Programación 1';
    this.descripcion = 'La materia de Programación 1 es un curso fundamental que introduce a los estudiantes en los conceptos básicos de la programación de computadoras. Durante el curso, los estudiantes adquieren conocimientos esenciales sobre la lógica de programación, estructuras de datos, algoritmos y la sintaxis de un lenguaje de programación específico. El objetivo principal es proporcionar una base sólida para el desarrollo de habilidades de resolución de problemas y programación.';
    this.divsContenido=[
      { 
        temaid: 1,
        tema: 'Tema 1: Historia de la Programación',
        contenido: 'El tema uno trata acerca de la historia de la programación, explorando la evolución y desarrollo de la programación de computadoras a lo largo del tiempo. Aprenderás sobre los hitos importantes, los lenguajes de programación pioneros y cómo la programación ha influido en la tecnología moderna.' 
      },
      { 
        temaid: 2,
        tema: 'Tema 2: Conceptos Basicos',
        contenido: 'El tema dos se enfoca en Conceptos Basicos, que son secuencias de pasos o reglas definidas para realizar una tarea o resolver un problema. Aprenderás sobre la importancia de los algoritmos en la programación, cómo diseñar y analizar algoritmos eficientes.' 
      },
      { 
        temaid: 3,
        tema: 'Tema 3: Algoritmos',
        contenido: 'El tema tres aborda el concepto de algoritmos, profundizando en su aplicación en diferentes contextos. Explorarás la resolución de problemas mediante algoritmos y cómo estos son fundamentales para la programación y la computación.' 
      },
      { 
        temaid: 4,
        tema: 'Tema 4: Representación de un Algoritmo',
        contenido: 'El tema cuatro se enfoca en la representación de un algoritmo. Aprenderás cómo expresar un algoritmo de manera clara y precisa, utilizando herramientas y notaciones específicas para describir los pasos y la lógica del algoritmo.' 
      },
      { 
        temaid: 5,
        tema: 'Tema 5: Variables y Constantes',
        contenido: 'El tema cinco aborda el concepto de variables y constantes en programación. Aprenderás sobre la declaración, asignación y manipulación de variables, así como la importancia de las constantes en la escritura de código.' 
      },
      { 
        temaid: 6,
        tema: 'Tema 6: Estructuras de Control',
        contenido: 'El tema seis se enfoca en las estructuras de control en programación. Explorarás cómo las estructuras de control, como condicionales y bucles, permiten controlar el flujo de ejecución de un programa y tomar decisiones basadas en ciertas condiciones.' 
      }
    ];
    this.cantidadTemas = 6;
  }
  if (this.id == 2){
    this.materia = 'Programación web 1';
    this.descripcion = 'La materia de Programación Web 1 es un curso que proporciona una introducción fundamental a los conceptos y tecnologías esenciales para el desarrollo de aplicaciones web. Este curso generalmente se imparte en programas académicos relacionados con la informática, la ingeniería de software o campos afines';
    this.divsContenido=[
      { 
        temaid: 1,
        tema: 'Tema 1: Linux',
        contenido: 'El tema uno trata acerca de Linux, un sistema operativo de código abierto ampliamente utilizado. Explorarás la historia de Linux, su arquitectura, el uso de la línea de comandos y cómo administrar sistemas basados en Linux.' 
      },
      { 
        temaid: 2,
        tema: 'Tema 2: HTML + CSS',
        contenido: 'El tema dos se enfoca en HTML y CSS, los lenguajes fundamentales para la creación y diseño de páginas web. Aprenderás sobre la estructura de las páginas HTML, la presentación y estilo utilizando CSS, y cómo crear contenido web interactivo y atractivo.' 
      },
      { 
        temaid: 3,
        tema: 'Tema 3: JavaScript',
        contenido: 'El tema tres aborda el concepto de JavaScript, un lenguaje de programación del lado del cliente ampliamente utilizado en desarrollo web. Explorarás la sintaxis de JavaScript, el manejo de eventos, la manipulación del DOM y cómo utilizarlo para crear aplicaciones web dinámicas e interactivas.' 
      }];
    this.cantidadTemas = 3;
  }
  if (this.id == 3){
    this.materia = 'Fundamentos Digitales';
    this.descripcion = '"Fundamentos Digitales" es una materia que aborda los conceptos fundamentales relacionados con la electrónica digital y los sistemas digitales. En este contexto, "digital" se refiere a la representación de información utilizando dígitos binarios (0 y 1), en contraste con la representación analógica que utiliza señales continuas. Esta materia sienta las bases teóricas y prácticas para comprender y diseñar sistemas digitales, que son omnipresentes en la tecnología moderna.';
    this.divsContenido=[
      { temaid: 1,tema: 'Tema 1: Representación de datos',contenido: 'El tema uno trata acerca de la representación de datos, explorando cómo la información se almacena y manipula en sistemas informáticos. Aprenderás sobre diferentes formas de representar datos y cómo estas representaciones impactan en el procesamiento de la información.'       },
      { temaid: 2,tema: 'Tema 2: Diseño lógico básico',contenido: 'El tema dos se enfoca en el diseño lógico básico de sistemas informáticos. Aprenderás sobre la lógica digital, compuertas lógicas y cómo diseñar circuitos lógicos que forman la base de la arquitectura de computadoras.'       },
      { temaid: 3,tema: 'Tema 3: Arquitectura de computadoras',contenido: 'El tema tres aborda el concepto de arquitectura de computadoras, explorando la estructura y organización de los sistemas informáticos. Aprenderás sobre la jerarquía de memoria, la unidad central de procesamiento (CPU) y otros aspectos clave de la arquitectura de computadoras.'       }];
    this.cantidadTemas = 3;
  }
  if (this.id == 4){
    this.materia = 'Algebra 1';
    this.descripcion = 'El álgebra es una rama fundamental de las matemáticas que se centra en el estudio de las relaciones y las operaciones entre los números y las cantidades desconocidas. En Algebra 1, los estudiantes exploran conceptos esenciales como ecuaciones lineales, sistemas de ecuaciones, y manipulación de expresiones algebraicas. A través de la resolución de problemas y la aplicación de reglas algebraicas, los estudiantes desarrollan habilidades cruciales para el razonamiento lógico y la resolución de situaciones del mundo real. Esta materia sienta las bases para conceptos más avanzados en álgebra y otras disciplinas matemáticas, proporcionando una comprensión sólida y aplicable de las estructuras algebraicas.';
    this.divsContenido=[
      { temaid: 1,tema: 'Tema 1: Lógica Matemática',contenido: 'El tema uno trata acerca de la lógica matemática, que es una rama de las matemáticas que se centra en el estudio de los principios del razonamiento válido. Explora cómo utilizar el razonamiento lógico para llegar a conclusiones y resolver problemas matemáticos.' },
      { temaid: 2,tema: 'Tema 2: Conjuntos',contenido: 'El tema dos se enfoca en los conjuntos, que son colecciones de objetos bien definidas. Aprenderás sobre las operaciones de conjuntos, la teoría de conjuntos y cómo aplicar estas ideas en diferentes contextos matemáticos.'},
      { temaid: 3,tema: 'Tema 3: Relaciones y funciones',contenido: 'El tema tres aborda el concepto de relaciones y funciones. Explorarás cómo los elementos de un conjunto se relacionan entre sí y cómo representar estas relaciones. También estudiarás funciones y su importancia en matemáticas y otras disciplinas.' },
      { temaid: 4,tema: 'Tema 4: Números Naturales y Enteros',contenido: 'El tema cuatro se enfoca en los números naturales y enteros. Aprenderás sobre las propiedades de estos conjuntos numéricos, sus operaciones y cómo utilizarlos para resolver problemas matemáticos en diversos contextos.' },
      { temaid: 5,tema: 'Tema 5: Estructuras Algebraicas',contenido: 'El tema cinco aborda el concepto de estructuras algebraicas, que incluyen grupos, anillos y campos. Explorarás cómo estas estructuras proporcionan un marco para comprender y analizar propiedades algebraicas fundamentales en matemáticas avanzadas.' }
    ];
    this.cantidadTemas = 5;
  }
  if (this.id == 5){
    this.materia = 'Fisica 1';
    this.descripcion = 'La Física 1 es la rama fundamental de la física que introduce a los estudiantes a los principios básicos que rigen el comportamiento de la materia y la energía en el universo. En este curso, los estudiantes exploran conceptos fundamentales como la cinemática, que estudia el movimiento de los objetos, la dinámica, que se enfoca en las fuerzas que actúan sobre ellos, y la energía, una propiedad esencial que impulsa los cambios en el sistema. A través de la aplicación de las leyes del movimiento de Newton, la ley de conservación de la energía, y otros principios clave, los estudiantes desarrollan una comprensión profunda de los fenómenos físicos que dan forma a nuestro mundo. La Física 1 sienta las bases para la comprensión de disciplinas más avanzadas y proporciona herramientas analíticas esenciales para abordar una amplia variedad de problemas en el ámbito científico y tecnológico.';
    this.divsContenido=[
      { temaid: 1,tema: 'Tema 1: Vectores', contenido: 'El primer tema, "Vectores", se adentra en el estudio de magnitudes vectoriales, que tienen tanto magnitud como dirección. Se exploran conceptos como la suma y resta de vectores, productos vectoriales y aplicaciones en diversas áreas de la física y la ingeniería.' },
      { temaid: 2,tema: 'Tema 2: Movimiento en Dos Dimensiones', contenido: 'El segundo tema, "Movimiento en Dos Dimensiones", se enfoca en el análisis del movimiento de objetos en un plano bidimensional. Se estudian conceptos como velocidad, aceleración, y trayectorias en dos dimensiones, aplicando principios fundamentales de la cinemática.' },
      { temaid: 3,tema: 'Tema 3: Las Leyes del Movimiento', contenido: 'El tercer tema, "Las Leyes del Movimiento", aborda los principios fundamentales de las leyes de Newton, que describen la relación entre la fuerza y el movimiento de un objeto. Se exploran las tres leyes de Newton y sus aplicaciones en el análisis de sistemas físicos.' },
      { temaid: 4,tema: 'Tema 4: Movimiento Circular y Otras Aplicaciones de las Leyes de Newton', contenido: 'El cuarto tema, "Movimiento Circular y Otras Aplicaciones de las Leyes de Newton", se centra en el estudio de movimientos circulares y cómo las leyes de Newton se aplican a situaciones más complejas. Se exploran fenómenos como la fuerza centrípeta y las fuerzas ficticias.' },
      { temaid: 5,tema: 'Tema 5: Energía de un Sistema', contenido: 'El quinto tema, "Energía de un Sistema", aborda el concepto de energía y cómo se relaciona con el movimiento de objetos. Se estudian formas de energía como la cinética y la potencial, así como el teorema del trabajo y la energía.' },
      { temaid: 6,tema: 'Tema 6: Conservación de la Energía', contenido: 'El sexto tema, "Conservación de la Energía", profundiza en el principio de conservación de la energía. Se exploran situaciones donde la energía total de un sistema se mantiene constante, lo que permite analizar y predecir comportamientos específicos en diversos contextos físicos.' }
    ];
    this.cantidadTemas = 6;
  }
  if (this.id == 6){
    this.materia = 'Calculo 1';
    this.descripcion = 'El cálculo 1 es una rama fundamental de las matemáticas que introduce a los estudiantes a conceptos esenciales relacionados con el cambio y la continuidad. En esta disciplina, se exploran temas como límites, derivadas e integrales, que son fundamentales para comprender el comportamiento de funciones matemáticas y modelar fenómenos en diversas áreas como física, ingeniería, economía y ciencias computacionales. El cálculo 1 proporciona la base para el estudio de conceptos más avanzados y establece las herramientas matemáticas esenciales para analizar y resolver problemas del mundo real. A medida que los estudiantes avanzan en esta materia, desarrollan habilidades críticas para el razonamiento matemático y adquieren una comprensión más profunda de la relación entre las variables y sus tasas de cambio.';
    this.divsContenido=[
      { temaid: 1,tema: 'Tema 1: Funciones y Modelos', contenido: 'El primer tema, "Funciones y Modelos", se centra en el estudio de funciones matemáticas y su aplicación en la modelización de fenómenos del mundo real. Se exploran conceptos como dominio, rango, gráficos de funciones, y cómo estas herramientas matemáticas pueden representar y predecir diversos comportamientos y situaciones.' },
      { temaid: 2,tema: 'Tema 2: Límites y Derivadas', contenido: 'En el segundo tema, "Límites y Derivadas", se abordan los conceptos fundamentales del cálculo diferencial. Los límites proporcionan la base para entender el cambio continuo, mientras que las derivadas describen las tasas de cambio instantáneo. Este tema es esencial para comprender cómo las funciones varían y cómo se relaciona con la velocidad de cambio.' },
      { temaid: 3,tema: 'Tema 3: Reglas de Derivación', contenido: 'El tercer tema, "Reglas de Derivación", se sumerge en las técnicas y reglas para encontrar derivadas de funciones más complejas. Se exploran reglas como la regla del producto, regla del cociente y regla de la cadena. Estas reglas son cruciales para la resolución eficiente de problemas relacionados con la tasa de cambio y la pendiente de una función.' },
      { temaid: 4,tema: 'Tema 4: Integrales', contenido: 'El cuarto tema, "Integrales", introduce el cálculo integral, que es la inversa de la derivada. Se exploran conceptos como la integral definida e indefinida, y cómo estas herramientas se utilizan para calcular áreas bajo curvas y resolver problemas de acumulación. Las integrales son fundamentales para entender el concepto de cambio acumulado.' },
      { temaid: 5,tema: 'Tema 5: Técnicas de Integración', contenido: 'En el quinto tema, "Técnicas de Integración", se presentan métodos específicos para evaluar integrales más complejas. Se exploran técnicas como integración por partes, sustitución trigonométrica y descomposición en fracciones parciales. Estas estrategias son esenciales para abordar una variedad de problemas en el cálculo integral de manera efectiva.' }
    ];
    this.cantidadTemas = 5;
  }
}
redirectToYoutube(x:number) {
  if(x == 1){
    window.location.href = 'https://www.youtube.com/playlist?list=PLPmRzmMDGerWEzjT0Vqy8D-IixKMY_6N6'
  }
  if(x == 2){
    window.location.href = 'https://www.youtube.com/playlist?list=PLE8uP447fYpis_9iiaT1GrdOLmg85pAJB'
  }
  if(x == 3){
    window.location.href = 'https://www.youtube.com/playlist?list=PLuyqRxNKadzntrdSlwOkLYkP1H3FwDYna'
  }
  if(x == 4){
    window.location.href = 'https://www.youtube.com/playlist?list=PL3v2dgnQ47vzhSdS5oEaGqBnCA-8gADBf'
  }
  if(x == 5){
    window.location.href = 'https://www.youtube.com/playlist?list=PLmGNSxrYSXDLhINoFWHpiPmVTvAK3yQ8o'
  }
  if(x == 6){
    window.location.href = 'https://www.youtube.com/playlist?list=PL34PZAXdQqX5Gh4sIMLPwBpvtNrpARaU8'
  }
}
irPrincipal() {
  this.router.navigate(['/Principal']);
}
irTutores(x: number) {
  this.router.navigate([`/Tutores/${x}`]);
}
irforms(x:number){
  if(x == 1){
    window.location.href ='https://forms.gle/PFfwJHUWjEmWdRvy9';
  }
  if(x == 2){
    window.location.href = 'https://forms.gle/sCqF62d52imhTsKJ7'
  }
  if(x == 3){
    window.location.href = 'https://forms.gle/xmoE5QCyMK3ezSV87'
  }
  if(x == 4){
    window.location.href = 'https://forms.gle/s3pRDufTsLU2JSdS6'
  }
  if(x == 5){
    window.location.href = 'https://forms.gle/efRjvaEbKYRK9EHh8'
  }
  if(x == 6){
    window.location.href = 'https://forms.gle/cinh74gyTuQjZScW9'
  }
}


}
