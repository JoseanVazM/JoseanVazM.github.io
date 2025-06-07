const preguntas = [
    {
        pregunta: "¿Qué criterios de elección de materiales te parecen los más acertados?",
        resp_correcta: "Que propicie que el niño ponga en juego sus posibilidades de acción.",
        resp_inco1: "Que provoque al máximo todos sus estímulos.",
        resp_inco2: "Todo sirve con tal de estar bien elaborado."
    },
    {
        pregunta: "La distancia existente entre lo que el niño o la niña es capaz de hacer por sí mismo y lo que puede hacer con la ayuda de una persona más capaz, según Vigotsky, se llama:",
        resp_correcta: "Nivel de desarrollo próximo.",
        resp_inco1: "Nivel real de desarrollo.",
        resp_inco2: "Nivel de desarrollo potencial."
    },
    {
        pregunta: "La Pareja Educativa:",
        resp_correcta: "Las dos son correctas.",
        resp_inco1: "Se reparte la misma responsabilidad con los niños y niñas, con las familias y tienen el mismo poder de decisión.",
        resp_inco2: "Aporta mayor riqueza y complejidad al grupo: más modelos, más ideas..."
    },
    {
        pregunta: "En la alimentación del niño y niña ¿Cuál de las siguientes pautas no es correcta?",
        resp_correcta: "Presionar al niño o niña a la hora de la comida.",
        resp_inco1: "Crear un clima agradable y relajado.",
        resp_inco2: "Ninguna de las anteriores."
    },
    {
        pregunta: "¿Con quién relacionarías la pedagogía del asombro?",
        resp_correcta: "Loris Malaguzzi.",
        resp_inco1: "María Montessori.",
        resp_inco2: "Vigotsky."
    },
    {
        pregunta: "¿Cuál de las siguientes acepciones sobre el taller es más cercana a la pedagogía de L. Malaguzzi?",
        resp_correcta: "a y b son correctas.",
        resp_inco1: "El taller ofrece posibilidades combinatorias y creativas entre los lenguajes y las inteligencias no verbales de los niños y niñas.",
        resp_inco2: "El taller como lugar impertinente."
    },
    {
        pregunta: "En la intervención en un aula de niños de 4 a 12 meses es importante que la educadora infantil:",
        resp_correcta: "Respete el ritmo individual de cada niño sin forzarlo a adoptar posiciones o realizar movimientos que el niño no realiza espontáneamente.",
        resp_inco1: "Tenga como objetivo que los bebés gateen.",
        resp_inco2: "Cree momentos especiales, al margen de las rutinas diarias de alimentación, higiene o sueño, para trabajar la motricidad."
    },
    {
        pregunta: "El Proyecto Educativo de los centros, según el D.F 28/07 no debería incluir:",
        resp_correcta: "El Proyecto de Gestión.",
        resp_inco1: "Los principios, valores y prioridades de actuación, o el carácter propio del centro.",
        resp_inco2: "La Propuesta Pedagógica."
    },
    {
        pregunta: "Todos los contenidos siguientes se pueden trabajar en los juegos psicomotrices excepto:",
        resp_correcta: "Conocimiento del entorno.",
        resp_inco1: "Conocimiento del cuerpo.",
        resp_inco2: "Expresión corporal libre."
    },
    {
        pregunta: "Un/a educador/a de una Escuela Infantil en el trabajo directo con los niños y las niñas tiene que tener la capacidad de:",
        resp_correcta: "Observación.",
        resp_inco1: "Síntesis.",
        resp_inco2: "Extroversión."
    },
    {
        pregunta: "¿Cómo debe ser el papel del/la educador/a en una sesión de Juego Heurístico?",
        resp_correcta: "Facilitador.",
        resp_inco1: "Organizador.",
        resp_inco2: "Iniciador."
    },
    {
        pregunta: "¿Cuál de los siguientes perfiles del educador infantil es un perfil directivo?",
        resp_correcta: "Dice al niño lo que hay que hacer, explica, ayuda o corrige al niño siempre según su criterio. Su lenguaje es más imperativo y en general se dirige al grupo.",
        resp_inco1: "Cuida el protagonismo de cada niño, escucha, respeta, tiene un nivel alto de empatía, entiende al niño, siente con él.",
        resp_inco2: "Dice sí a todas las demandas que le hace el niño, haciendo valoraciones siempre positivas, evitando cualquier crítica o exigencia."
    },
    {
        pregunta: "Entre las medidas específicas de atención a la diversidad, expresadas en una propuesta pedagógica, no se encuentra:",
        resp_correcta: "Tutorías: organización y funcionamiento.",
        resp_inco1: "Adaptaciones para alumnos con necesidades educativas especiales.",
        resp_inco2: "Todas forman parte de la atención a la diversidad."
    },
    {
        pregunta: "¿Qué debe hacerse si queremos evitar una infección?",
        resp_correcta: "Cubrir la herida con un apósito estéril.",
        resp_inco1: "Usar algodón para una limpieza.",
        resp_inco2: "Lavar la herida con agua 'a chorro'."
    },
    {
        pregunta: "El significado de la escucha:",
        resp_correcta: "Escucha como emoción, influenciada por las emociones de los niños y a su vez estimulando más emociones.",
        resp_inco1: "Como observación de las primeras palabras que producen los niños.",
        resp_inco2: "Los niños a esta edad no suelen escuchar lo que se les dice."
    },
    {
        pregunta: "¿Cuál es el eje o ser vertebrador de la programación de aula en el 0-3?",
        resp_correcta: "Las actividades de la vida cotidiana.",
        resp_inco1: "Las unidades didácticas.",
        resp_inco2: "Los talleres."
    },
    {
        pregunta: "Un educador cuando está preparando una propuesta de algún taller, tendrá en cuenta:",
        resp_correcta: "Ambas, porque las propuestas las prepara el tallerista.",
        resp_inco1: "Si personalmente está seguro y la propuesta estética y motivadora.",
        resp_inco2: "Nada, porque las propuestas las prepara el tallerista."
    },
    {
        pregunta: "Los niños:",
        resp_correcta: "Siempre tienen un objetivo.",
        resp_inco1: "Son herramientas de reorganización.",
        resp_inco2: "No tienen un objetivo."
    },
    {
        pregunta: "Son características de los talleres:",
        resp_correcta: "Atienden a la globalidad.",
        resp_inco1: "No propician el modelo constructivista.",
        resp_inco2: "Son actividades aisladas."
    },
    {
        pregunta: "Indica cuáles son los elementos principales del Proyecto Educativo de Centro:",
        resp_correcta: "Los fines educativos y el planteamiento ideológico o principios de identidad.",
        resp_inco1: "Los contenidos pedagógicos y modelo organizativo-estructural.",
        resp_inco2: "Solo los objetivos generales."
    },
    {
        pregunta: "Señala cuál de las siguientes afirmaciones es la correcta:",
        resp_correcta: "El juego funcional es cronológicamente anterior al juego simbólico.",
        resp_inco1: "El juego simbólico comienza una vez finalizada la etapa de juego simbólico.",
        resp_inco2: "El juego deja de existir en la etapa de Educación infantil."
    },
    {
        pregunta: "El papel del educador durante el periodo de adaptación será:",
        resp_correcta: "Respetuoso con los sentimientos del niño y tranquilizador.",
        resp_inco1: "Forzar al niño al grupo lo antes posible.",
        resp_inco2: "Acercarse frecuentemente al niño, esperando el momento en el que esté preparado para aceptarlo."
    },
    {
        pregunta: "Es un ejemplo de documentación del trabajo en la Escuela Infantil:",
        resp_correcta: "Panel fotográfico.",
        resp_inco1: "Boletín de calificaciones.",
        resp_inco2: "Informe de incidencias."
    },
    {
        pregunta: "Para desarrollar correctamente el trabajo del educador/a, es imprescindible:",
        resp_correcta: "Tener acceso a una adecuada formación continua.",
        resp_inco1: "Poseer habilidades para el trabajo en equipo.",
        resp_inco2: "a) y b) son correctas."
    },
    {
        pregunta: "La tendencia que tiene el niño o la niña en la etapa pre-conceptual a creer que todo tiene vida y sentimientos recibe el nombre de:",
        resp_correcta: "Animismo.",
        resp_inco1: "Artificialismo.",
        resp_inco2: "Fenomenismo."
    },
    {
        pregunta: "El papel del educador en el periodo de adaptación es:",
        resp_correcta: "Debe observar qué conductas inadaptadas tiene el niño y reforzarlas.",
        resp_inco1: "Respetuoso con los sentimientos del niño y tranquilizador.",
        resp_inco2: "No intervenir en ningún caso."
    },
    {
        pregunta: "Según Loris Malaguzzi, ¿cuál de las siguientes afirmaciones es correcta respecto a la escucha?",
        resp_correcta: "a) y b) son correctas.",
        resp_inco1: "Escuchar es un arte para entender la cultura infantil: su forma de pensar, hacer, preguntar, teorizar...",
        resp_inco2: "Escuchar significa desconfiar de lo que ven nuestros ojos y nuestros oídos."
    },
    {
        pregunta: "Define qué es una programación:",
        resp_correcta: "Planificación ordenada de los elementos que intervienen en la actividad educativa, los objetivos que se han de conseguir y los medios que permiten su consecución.",
        resp_inco1: "Conjunto de decisiones asumidas por todos los miembros de la comunidad escolar respecto a las opciones educativas básicas y la organización general del aula.",
        resp_inco2: "Ninguna de las anteriores."
    },
    {
        pregunta: "Los distintos profesionales que trabajan en educación infantil de 0 a 3 años:",
        resp_correcta: "Deben poseer formación necesaria para coparticipar con familias, equipos y otros profesionales en el desarrollo de los niños de 0 a 3 años.",
        resp_inco1: "No deben reflexionar sobre su intervención educativa, ni reformular su actividad, limitándose en todo momento a actuar como indiquen sus superiores.",
        resp_inco2: "Todas son correctas."
    },
    {
        pregunta: "Señala la respuesta correcta según el Decreto Foral 28/2007, de 26 de marzo, por el que se regula el primer ciclo de la educación infantil de la Comunidad Foral de Navarra:",
        resp_correcta: "El Proyecto pedagógico del centro deberá incluir la Propuesta pedagógica.",
        resp_inco1: "El Proyecto educativo del centro deberá incluir el Proyecto educativo.",
        resp_inco2: "Ninguna de las respuestas anteriores es correcta."
    },
    {
        pregunta: "Generalmente, la primera forma de desplazamiento que suele aparecer en el desarrollo motor infantil es:",
        resp_correcta: "Reptando.",
        resp_inco1: "Gateando.",
        resp_inco2: "Desplazarse rodando."
    },
    {
        pregunta: "Previo al ingreso de los niños y niñas en la escuela infantil:",
        resp_correcta: "Es importante que las familias den a la escuela el máximo de información sobre su hijo e hija.",
        resp_inco1: "No es necesario conocer la opinión de las familias porque la escuela y la familia son contextos diferentes.",
        resp_inco2: "Es indiferente tener o no referencias previas porque se da una relación diaria muy directa."
    },
    {
        pregunta: "En la relación educador/a-niño/a:",
        resp_correcta: "Es importante crear una relación basada en la confianza y el respeto mutuo.",
        resp_inco1: "Es importante saber suplantar a la familia, mientras el niño o la niña está en la escuela.",
        resp_inco2: "A y B son correctas."
    },
    {
        pregunta: "Los primeros rasgos de socialización en el niño y niña se manifiestan:",
        resp_correcta: "Cuando pronuncia sus primeros balbuceos.",
        resp_inco1: "Desde el nacimiento.",
        resp_inco2: "Cuando tiene interés por los objetos."
    },
    {
        pregunta: "¿Cuál de los siguientes elementos no forma parte de la programación de aula?",
        resp_correcta: "Coordinación con las familias.",
        resp_inco1: "Objetivos.",
        resp_inco2: "Estrategias metodológicas."
    },
    {
        pregunta: "Facilitar vínculos de apego estables e incondicionales:",
        resp_correcta: "Estimula y favorece la seguridad emocional y la autoestima.",
        resp_inco1: "Hacen al niño dependiente del educador.",
        resp_inco2: "Dificulta la relación entre padres y educadores."
    },
    {
        pregunta: "La función fundamental de la presencia de los padres/madres en el aula durante el periodo de Adaptación es:",
        resp_correcta: "Dar al niño o niña seguridad para explorar el nuevo espacio, relacionarse con desconocidos, etc.",
        resp_inco1: "Conocer al resto de los niños del grupo.",
        resp_inco2: "Conocer el Centro y a las educadoras."
    },
    {
        pregunta: "Si un niño o una niña no alcanza la marcha antes de los 14 meses:",
        resp_correcta: "Remitiremos el caso a especialistas.",
        resp_inco1: "No debemos preocuparnos.",
        resp_inco2: "Prepararemos un programa de estimulación motriz para corregir esta anomalía."
    },
    {
        pregunta: "En relación a las directrices en la planificación de la dieta y la alimentación infantil no debería afirmarse que:",
        resp_correcta: "Debe suplementarse con preparados dietéticos y farmacológicos en periodos de menor apetencia.",
        resp_inco1: "Debe ajustarse a los requerimientos calóricos relacionados con la edad, actividad física y complexión corporal.",
        resp_inco2: "Debe valorarse la dieta en su conjunto."
    },
    {
        pregunta: "Con respecto a la comunicación cotidiana familia-escuela:",
        resp_correcta: "El personal educador será el encargado de informar a las familias del proceso educativo de sus hijos.",
        resp_inco1: "Ella directora/a será el encargado/a de informar a las familias del proceso educativo de sus hijos.",
        resp_inco2: "Debe llevarse a cabo en las reuniones grupales que se convocarán, por lo menos, una vez por trimestre."
    },
    {
        pregunta: "La metodología basada en la observación y la experimentación en educación infantil, tiene su fundamento en que:",
        resp_correcta: "El educador facilitará y documentará todo lo que ocurre en el aula para poder observarlo mejor y con más calma.",
        resp_inco1: "El niño siente curiosidad por fenómenos cercanos a él, y por lo tanto, su deseo de encontrar respuestas, le llevará a investigar.",
        resp_inco2: "El personal educador, para mejorar su práctica diaria, debe desarrollar trabajos de investigación en el aula basados en la observación."
    },
    {
        pregunta: "¿A qué se denomina 'escucha interna'?",
        resp_correcta: "Cuando se mantienen en silencio escuchando los sonidos de su cuerpo.",
        resp_inco1: "Cuando los niños comunican sus imágenes mentales o sus teorías a otros, también así se las representan a él mismo, desarrollando aún más consciencia.",
        resp_inco2: "Cuando se es capaz de hacer un razonamiento previo en la mente antes de expresarlo."
    },
    {
        pregunta: "El 'cómo enseñar' de una propuesta pedagógica se refiere a todo lo siguiente excepto:",
        resp_correcta: "Cuestiones sobre elección de responsables, comisiones y delegados.",
        resp_inco1: "Criterios y opciones básicas de metodología didáctica.",
        resp_inco2: "Elección de materiales curriculares didácticos."
    },
    {
        pregunta: "¿A qué edad comienza la etapa del juego simbólico?",
        resp_correcta: "De 18 a 24 meses.",
        resp_inco1: "De 12 a 18 meses.",
        resp_inco2: "De 24 a 36 meses."
    },
    {
        pregunta: "¿Qué es la salud según la Organización Mundial de la Salud?",
        resp_correcta: "Un completo estado de bienestar físico, mental y social.",
        resp_inco1: "Ausencia de la enfermedad.",
        resp_inco2: "Un estado de ánimo positivo."
    },
    {
        pregunta: "La función básica de las relaciones entre los padres y el Centro de Educación Infantil es:",
        resp_correcta: "Ambas son correctas.",
        resp_inco1: "Establecer lazos de amistad.",
        resp_inco2: "Intercambiar información acerca del niño o niña."
    },
    {
        pregunta: "Un centro de educación infantil debe tener un ambiente cálido, acogedor y seguro para:",
        resp_correcta: "Ambas son correctas.",
        resp_inco1: "Estimular las relaciones interpersonales y contribuir a la construcción de una auto-imagen ajustada y positiva.",
        resp_inco2: "Afrontar los pequeños y grandes retos que les plantea el conocimiento progresivo del medio."
    },
    {
        pregunta: "¿Qué tipo de apego es correcto?",
        resp_correcta: "El apego seguro.",
        resp_inco1: "El apego con evitación.",
        resp_inco2: "Ambos son correctos."
    },
    {
        pregunta: "A la hora de distribuir un aula del primer ciclo de educación infantil y centrándonos en el momento de desarrollo motor del grupo, tendremos en cuenta:",
        resp_correcta: "Distribuir el mobiliario de manera que quede un espacio central amplio para que los niños puedan moverse.",
        resp_inco1: "Distribuir el mobiliario de manera que se creen recorridos 'laberínticos' que creen retos motores y favorezcan diferentes movimientos corporales.",
        resp_inco2: "Distribuir el mobiliario de manera que queden bien definidos los rincones de actividad."
    },
    {
        pregunta: "Con respecto a la educación del niño de 0 a 3 años, ¿cuál de estos autores define Taller como 'un lugar para investigar'?",
        resp_correcta: "Loris Malaguzzi.",
        resp_inco1: "Emmi Pikler.",
        resp_inco2: "Sigmund Freud."
    },
    {
        pregunta: "¿Cuál de estas afirmaciones es falsa respecto a El significado de la escucha en Reggio Emilia?",
        resp_correcta: "El niño debe escuchar al adulto para aprender.",
        resp_inco1: "Es necesario escuchar con todos los sentidos, no solo con los oídos.",
        resp_inco2: "La escucha debería reconocer los múltiples lenguajes, símbolos y códigos que usamos para comunicarnos."
    },
    {
        pregunta: "¿A quién pertenece la teoría del 'Aprendizaje por descubrimiento'?",
        resp_correcta: "J. Bruner.",
        resp_inco1: "Ausubel.",
        resp_inco2: "Vygotsky."
    },
    {
        pregunta: "En el taller de Loris Malaguzzi se debe:",
        resp_correcta: "Observar detenidamente la técnica artística que utilizan los niños en cada momento.",
        resp_inco1: "Definir claramente los objetivos de cada taller según los intereses de los educadores.",
        resp_inco2: "Respetar la pluralidad y conexiones de las distintas lenguas."
    },
    {
        pregunta: "¿Cómo organizaremos los materiales?",
        resp_correcta: "Si es posible, pondremos los que están relacionados en el mismo sitio.",
        resp_inco1: "Como el desarrollo es completo, no tiene importancia.",
        resp_inco2: "Las dos anteriores."
    },
    {
        pregunta: "En 1907 se fundó la primera escuela denominada 'La casa dei Bambini', ¿quién la fundó?",
        resp_correcta: "Maria Montessori.",
        resp_inco1: "Rousseau.",
        resp_inco2: "Rosa y Carolina Agazzi."
    },
    {
        pregunta: "Respecto al cesto de los tesoros es cierto que:",
        resp_correcta: "Es una actividad especialmente adecuada para los niños y niñas que todavía no se sientan por sí mismos ni han adquirido la marcha.",
        resp_inco1: "Es una actividad especialmente adecuada para hacer con todo el grupo de lactantes.",
        resp_inco2: "Es una actividad que favorece la investigación, el descubrimiento y la concentración de los niños y niñas más pequeños."
    },
    {
        pregunta: "¿De qué autor es el siguiente principio: 'el factor sencillo más importante que influencia el aprendizaje es lo que ya sabe el que aprende'?",
        resp_correcta: "Ausubel.",
        resp_inco1: "Bruner.",
        resp_inco2: "Piaget."
    },
    {
        pregunta: "Para delimitar el perfil profesional del/la Educador/a de Educación Infantil, debemos considerar entre otros el siguiente factor:",
        resp_correcta: "Todas son correctas.",
        resp_inco1: "Incluir capacidades que se refieran a las diferentes dimensiones de la profesionalidad técnica de organización, de cooperación y de respuesta a las contingencias.",
        resp_inco2: "Concretar una cierta especialización para asegurar el desempeño competente del puesto de trabajo."
    },
    {
        pregunta: "El elemento primordial de la pedagogía de Decroly es:",
        resp_correcta: "El andamiaje.",
        resp_inco1: "Los centros de interés.",
        resp_inco2: "El aprendizaje significativo."
    },
    {
        pregunta: "Según Emmi Pikler, autonomía supone que el bebé durante su actividad espontánea:",
        resp_correcta: "Es capaz de actuar a partir de su propia iniciativa.",
        resp_inco1: "No manifiesta una actitud de cuestionamiento y de sorpresa ante el descubrimiento.",
        resp_inco2: "Da las respuestas son concretas respecto a la pregunta."
    },
    {
        pregunta: "La importancia de la figura 'pareja educativa' en la Escuela infantil viene dada por:",
        resp_correcta: "Todas las respuestas anteriores son correctas.",
        resp_inco1: "La posibilidad de estar en contacto con dos modelos de adultos diferentes.",
        resp_inco2: "La existencia de dos puntos de vista sobre un mismo hecho."
    },
    {
        pregunta: "Emmi Pikler defendía en sus teorías:",
        resp_correcta: "La libertad de movimiento.",
        resp_inco1: "La estimulación motriz.",
        resp_inco2: "La socialización temprana."
    },
    {
        pregunta: "Cuando hablamos de competencia, hablamos de inteligencia en el sentido más amplio; de inteligencia operatoria, de 'saber cómo' y no sólo de 'saber qué'. ¿A cuál de los siguientes autores atribuirías esta afirmación?",
        resp_correcta: "Piaget.",
        resp_inco1: "Bruner.",
        resp_inco2: "Ausubel."
    },
    {
        pregunta: "Señala el motivo por el que el niño puede sentir dolor en la boca y se niegue a comer:",
        resp_correcta: "Las respuestas a) y b) son correctas.",
        resp_inco1: "Lengua geográfica.",
        resp_inco2: "Aftas."
    },
    {
        pregunta: "La metodología de Reggio Emilia tiene como características:",
        resp_correcta: "Las dos son correctas.",
        resp_inco1: "El niño es el principal protagonista de su educación.",
        resp_inco2: "Importancia de la pareja educativa."
    },
    {
        pregunta: "La creatividad de los niños 'se hace más visible si los adultos tratan de estar más atentos a los procesos que a los resultados'. ¿A quién pertenece esa frase?",
        resp_correcta: "Loris Malaguzzi.",
        resp_inco1: "Rosa y Carolina Agazzi.",
        resp_inco2: "Emmi Pikler."
    },
    {
        pregunta: "La pedagogía por talleres conlleva una serie de implicaciones positivas, en los procesos de enseñanza-aprendizaje como son:",
        resp_correcta: "a) y b) son correctas.",
        resp_inco1: "Favorece las creaciones de los niños/as.",
        resp_inco2: "Estimula la creatividad e investigación."
    },
    {
        pregunta: "La principal finalidad del juego heurístico es:",
        resp_correcta: "Investigar y descubrir.",
        resp_inco1: "Memorizar y organizar.",
        resp_inco2: "Sistematizar y ejecutar."
    },
    {
        pregunta: "Entre las funciones del educador infantil están las siguientes:",
        resp_correcta: "Aplicar los métodos de enseñanza-aprendizaje que favorezcan el desarrollo autónomo de los niños y niñas.",
        resp_inco1: "Programar, intervenir educativamente y evaluar.",
        resp_inco2: "Las dos son correctas."
    },
    {
        pregunta: "Acerca del sueño y descanso, señale la alternativa errónea:",
        resp_correcta: "Existe un centro del sueño, situado en la base del cerebelo.",
        resp_inco1: "Una de las finalidades conocidas del sueño es la de permitir la restauración de las funciones vitales y energéticas.",
        resp_inco2: "Las funciones del sueño son muy variadas. Unos hacen del sueño una detención y otros por lo tanto una actividad."
    },
    {
        pregunta: "La aceptación de las personas con su deficiencia dentro de la sociedad normal, con los mismos derechos, responsabilidades y oportunidades, se conoce con el nombre de:",
        resp_correcta: "Inclusión.",
        resp_inco1: "Integración.",
        resp_inco2: "Socialización."
    },
    {
        pregunta: "Dentro de los objetivos de la educación infantil se encuentra uno de los siguientes:",
        resp_correcta: "Contribuir a desarrollar en las niñas y niños las capacidades que les permitan adquirir progresivamente autonomía en sus actividades habituales.",
        resp_inco1: "Conocer y utilizar de manera apropiada la lengua castellana y desarrollar hábitos de lectura.",
        resp_inco2: "Conocer y valorar los animales más próximos al ser humano y adoptar modos de comportamiento que favorezcan su cuidado."
    },
    {
        pregunta: "La prevención de los accidentes escolares pasa por:",
        resp_correcta: "Todas las anteriores son correctas.",
        resp_inco1: "Diseñar entornos físicos que cumplan las normativas de seguridad vigentes.",
        resp_inco2: "Formar al personal del centro escolar en las pautas a seguir para que la escuela sea un entorno seguro."
    },
    {
        pregunta: "No es un trastorno del control de esfínteres:",
        resp_correcta: "Hiperactividad.",
        resp_inco1: "Enuresis.",
        resp_inco2: "Encopresis."
    },
    {
        pregunta: "El gateo y reptación son actividades de:",
        resp_correcta: "Psicomotricidad gruesa.",
        resp_inco1: "Psicomotricidad fina.",
        resp_inco2: "Elaboración del esquema corporal."
    },
    {
        pregunta: "La capacidad que tiene el individuo para controlar y coordinar los movimientos del cuerpo corresponde según Howard Gardner a:",
        resp_correcta: "La inteligencia Corporal Cinestésica.",
        resp_inco1: "La inteligencia Interpersonal.",
        resp_inco2: "La inteligencia Espacial."
    },
    {
        pregunta: "Para notificar un posible caso de maltrato infantil a los servicios de Protección de Menores, la escuela infantil debe tener:",
        resp_correcta: "Una sospecha razonable de que existe una situación de maltrato.",
        resp_inco1: "La certeza absoluta de que existe una situación de maltrato.",
        resp_inco2: "Pruebas tangibles de que existe una situación de maltrato."
    },
    {
        pregunta: "Toda evaluación debe contemplar:",
        resp_correcta: "Todas son correctas.",
        resp_inco1: "El contenido y el propósito.",
        resp_inco2: "Las características de los niños y la temporalidad."
    },
    {
        pregunta: "¿Son funciones cognitivas del niño/a?",
        resp_correcta: "Atención, memoria y pensamiento.",
        resp_inco1: "Lenguaje y motricidad bucofacial.",
        resp_inco2: "Coordinación oculomanual."
    },
    {
        pregunta: "El desarrollo tiene unos patrones similares en todos los individuos. Se produce de acuerdo a unas fases predecibles.",
        resp_correcta: "Todas las anteriores son correctas.",
        resp_inco1: "El desarrollo sigue fases predecibles.",
        resp_inco2: "Los patrones de desarrollo son similares en todos los individuos."
    },
    {
        pregunta: "¿Qué significa que el Técnico en Educación Infantil es un comunicador?",
        resp_correcta: "Que mediante su relación ayuda al niño a contactar con el mundo con todas sus fuerzas, posibilidades y lenguajes.",
        resp_inco1: "Que enseña a contemplar el mundo.",
        resp_inco2: "Que no enseña nada."
    },
    {
        pregunta: "El juego infantil durante los cuatro primeros meses se caracteriza porque:",
        resp_correcta: "Es principalmente espontáneo.",
        resp_inco1: "Juega más con los adultos que en solitario.",
        resp_inco2: "El interés se centra en los objetos."
    },
    {
        pregunta: "La figura del Técnico Superior en Educación Infantil, a priori está capacitada para intervenir: (marcar la opción incorrecta)",
        resp_correcta: "En programas de ámbito no formal y actividades de ocio para niños/as entre 6-12 años.",
        resp_inco1: "En guarderías, jardines de infancia y otros centros educativos infantiles de titularidad privada.",
        resp_inco2: "En instituciones o programas específicos de atención a menores de 6 años en situación de riesgo social."
    },
    {
        pregunta: "En el lenguaje gestual se pueden identificar varios periodos siendo uno de ellos el gesto representativo, que se define como:",
        resp_correcta: "Surge de la capacidad imitativa del niño/a. Todo niño/a representa gestos que observa en los mayores: andar, acariciar, golpear,…",
        resp_inco1: "Es el estrato más primitivo y sencillo; en su origen es involuntario, pero paulatinamente se hace consciente. El niño/a señala o indica aquello que quiere coger o nombrar.",
        resp_inco2: "Se utiliza para representar las ideas por asociación: gestos como el saludo, la despedida, la afirmación, la negación, etc."
    },
    {
        pregunta: "En el niño de 0 a 3 años:",
        resp_correcta: "La vida afectiva domina sobre los procesos de razonamiento.",
        resp_inco1: "La afectividad es similar a la del adulto.",
        resp_inco2: "Las relaciones afectivas se establecen a partir del primer año."
    },
    {
        pregunta: "Entre los dos y los tres años aproximadamente:",
        resp_correcta: "Aparece el juego simbólico.",
        resp_inco1: "Predomina el juego compartido.",
        resp_inco2: "Se abandona definitivamente el juego en paralelo."
    },
    {
        pregunta: "El niño es capaz de seguir un objeto con la vista, desde:",
        resp_correcta: "El segundo mes.",
        resp_inco1: "El primer mes.",
        resp_inco2: "El cuarto mes."
    },
    {
        pregunta: "La psicomotricidad fina:",
        resp_correcta: "Establece la coordinación óculo-manual.",
        resp_inco1: "Establece el control psicomotor de las grandes masas musculares.",
        resp_inco2: "Establece el control psicomotor de los músculos faciales."
    },
    {
        pregunta: "A los 2 años el niño es capaz de realizar:",
        resp_correcta: "Prensión fina (radio-digital) tomando objetos pequeños en pinza entre el pulgar y el índice.",
        resp_inco1: "Carrera, controlando la partida, la parada y los cambios de dirección.",
        resp_inco2: "Caminar sobre líneas curvas marcadas en el suelo alternando los pasos."
    },
    {
        pregunta: "Las necesidades educativas especiales pueden ser debidas a:",
        resp_correcta: "Todas las respuestas anteriores son correctas.",
        resp_inco1: "Necesidades especiales asociadas a su historia educativa y escolar.",
        resp_inco2: "Condiciones personales de sobredotación."
    },
    {
        pregunta: "Los rincones de juego son necesarios para:",
        resp_correcta: "Las opciones a) y b) son correctas.",
        resp_inco1: "Desarrollar la autonomía.",
        resp_inco2: "Desarrollar el gusto por aprender."
    },
    {
        pregunta: "Establecer rutinas en la organización del tiempo en el ciclo de 0 a 3 años, es necesario porque:",
        resp_correcta: "Proporcionan seguridad y autonomía en los niños/as.",
        resp_inco1: "Así los educadores/as tienen menos trabajo.",
        resp_inco2: "No se deben establecer nunca rutinas."
    }
];
