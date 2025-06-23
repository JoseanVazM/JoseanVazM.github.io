const preguntas = [
    {
    pregunta: "En la alimentación del niño y la niña, ¿Cuál de las siguientes pautas no es correcta?",
    resp_correcta: "Presionar al niño o niña a la hora de comer.",
    resp_inco1: "Crear un clima agradable y relajado.",
    resp_inco2: "Ninguna de las anteriores."
    },
    {
    pregunta: "¿Qué no debe hacerse si queremos evitar una infección?",
    resp_correcta: "Usar algodón para su limpieza.",
    resp_inco1: "Lavar la herida con “agua a chorro”.",
    resp_inco2: "Cubrir la herida con un apósito estéril."
    },
    {
    pregunta: "Previo ingreso de los niños y niñas en la escuela infantil:",
    resp_correcta: "Es importante que las familias den a la escuela el máximo de información sobre su hijo-hija.",
    resp_inco1: "No es necesario conocer la opinión de las familias mientras el niño-niña esté en la escuela.",
    resp_inco2: "Es indiferente tener o no referencias previas porque se da una relación diaria muy directa."
    },
    {
    pregunta: "La función fundamental de la presencia de padres y madres en el aula durante el periodo de adaptación es:",
    resp_correcta: "Dar a la criatura seguridad para explorar el nuevo espacio, relacionarse con desconocidos, etc.",
    resp_inco1: "Conocer al resto de los niños del grupo.",
    resp_inco2: "Conocer el centro y a las educadoras."
    },
    {
    pregunta: "En relación a las directrices en la planificación de la dieta y la alimentación infantil no debería afirmarse que:",
    resp_correcta: "Debe suplementarse con preparados dietéticos y farmacológicos en periodos de menor apetencia.",
    resp_inco1: "Debe ajustarse a los requerimientos calóricos relacionados con la edad, actividad física y complexión corporal.",
    resp_inco2: "Debe valorarse la dieta en su conjunto."
    },
    {
    pregunta: "Con respecto a la comunicación cotidiana familia-escuela:",
    resp_correcta: "El personal educador será el encargado de informar a las familias del proceso educativo de sus criaturas.",
    resp_inco1: "El/la directora/a será el/la encargado/a de informar a las familias del proceso educativo de sus hijos e hijas.",
    resp_inco2: "Se llevará a cabo en las reuniones grupales que se convocará, por lo menos, una vez por trimestre."
    },
    {
    pregunta: "La función básica de las relaciones entre las familias y el centro de educación infantil es:",
    resp_correcta: "Intercambiar información acerca del niño-niña.",
    resp_inco1: "Establecer lazos de amistad.",
    resp_inco2: "Ninguna de las dos son correctas."
    },
    {
    pregunta: "Acerca del sueño y del descanso, señale la alternativa errónea:",
    resp_correcta: "Existe un centro del sueño situado en la base del cerebelo.",
    resp_inco1: "Una de las finalidades conocidas del sueño es la de permitir la restauración de las funciones vitales y energéticas.",
    resp_inco2: "Las teorías sobre el sueño son muy variadas: unos hacen del sueño una detención y otros, por lo tanto, una actividad."
    },
    {
    pregunta: "Señala el motivo por el que el niño-niña puede sentir dolor en la boca y se niegue a comer:",
    resp_correcta: "Aftas.",
    resp_inco1: "Lengua geográfica.",
    resp_inco2: "Las respuestas a) y b) son correctas."
    },
    {
    pregunta: "Las relaciones entre la familia y la escuela infantil se deben basar en:",
    resp_correcta: "Las respuestas a) y b) son correctas.",
    resp_inco1: "Respeto mutuo y confianza.",
    resp_inco2: "Aceptación de las peculiaridades de cada familia."
    },
    {
    pregunta: "¿Qué entendemos por “función socializadora de la familia”?",
    resp_correcta: "Que la familia es el lugar de las primeras relaciones interpersonales: la criatura comienza a conocer a los/as otros/as, sus relaciones y el papel particular de cada cual.",
    resp_inco1: "Que la familia está insertada en una sociedad con unos prototipos establecidos.",
    resp_inco2: "Que la familia le va explicando poco a poco al/la niño-niña las funciones en la sociedad."
    },
    {
    pregunta: "Bajos niveles de control, pero altos niveles en comunicación y afecto, es característico de:",
    resp_correcta: "Padres y madres permisivos/as.",
    resp_inco1: "Padres y madres autoritarios/as.",
    resp_inco2: "Ninguna de las anteriores es correcta."
    },
    {
    pregunta: "Todos los siguientes hábitos se pueden trabajar desde el comedor menos:",
    resp_correcta: "Hábitos culturales.",
    resp_inco1: "Hábitos sensoriales.",
    resp_inco2: "Hábitos motrices."
    },
    {
    pregunta: "El/La educador/a es un elemento clave en la educación de la alimentación: a este respecto, señale la que no corresponde con una función del mismo/a en este sentido.",
    resp_correcta: "Planificar los menús.",
    resp_inco1: "Reorientar los hábitos desviados.",
    resp_inco2: "Formar y orientar a las familias."
    },
    {
    pregunta: "El proyecto Educativo de la escuela infantil:",
    resp_correcta: "Es un documento abierto y susceptible de ser modificado en función del análisis y la reflexión de la práctica del equipo educativo.",
    resp_inco1: "Recoge cada una de las situaciones de aprendizaje que exige la LOMLOE.",
    resp_inco2: "Es elaborado por el personal educador para cada grupo/aula para dar respuesta real a las características de su grupo."
    },
    {
    pregunta: "Las escuelas infantiles:",
    resp_correcta: "Incluirán una propuesta pedagógica en su Proyecto educativo.",
    resp_inco1: "Incluirán un proyecto educativo en su propuesta pedagógica.",
    resp_inco2: "Las respuestas a) y b) son correctas."
    },
    {
    pregunta: "Conforme al art. 20 del Decreto Foral 28/2007, de 26 de marzo, por el que se regula el primer ciclo de Educación Infantil en la Comunidad Foral de Navarra y se establecen los requisitos que deben cumplir los centros que lo imparten, así como los contenidos educativos del mismo. El proyecto educativo de los centros deberá incluir:",
    resp_correcta: "Los principios, valores y prioridades de actuación, o el carácter propio del centro. Además de la propuesta pedagógica.",
    resp_inco1: "Los principios, valores y prioridades de actuación, o el carácter propio del centro.",
    resp_inco2: "La propuesta pedagógica."
    },
    {
    pregunta: "En relación con la Propuesta Pedagógica de primer ciclo de educación infantil:",
    resp_correcta: "Se elaborará a partir de lo que ya existe, de lo que se viene haciendo, para plantearse lo que se quiere hacer. Debe ser realista y evitar tanto planteamientos excesivamente formalistas y rígidos, como excesivamente idealistas o irrealizables.",
    resp_inco1: "En su elaboración el equipo parte de cero.",
    resp_inco2: "Se elaborará a partir de lo que se quiere conseguir. Debe ser realista y evitar tanto planteamientos excesivamente formalistas y rígidos, como excesivamente idealistas o irrealizables."
    },
    {
    pregunta: "La propuesta pedagógica: (Señala la respuesta correcta)",
    resp_correcta: "Recogerá el carácter educativo de ambos ciclos. Desarrollará y complementará el currículo establecido en los anexos del Decreto Foral 61/2022, de 1 de junio, adaptándolo a las características personales de cada niña o niño, así como a su realidad socioeducativa.",
    resp_inco1: "Recogerá el carácter educativo únicamente del primer ciclo de educación infantil. Desarrollará y complementará el currículo establecido en los anexos del Decreto Foral 61/2022, de 1 de junio, adaptándolo a las características personales de cada niña o niño, así como a su realidad socioeducativa.",
    resp_inco2: "Recogerá el carácter educativo de ambos ciclos. Desarrollará y complementará el currículo establecido en los anexos del Decreto Foral 61/2022, de 1 de junio, adaptándolo a las características del grupo, así como a su realidad socioeducativa."
    },
    {
    pregunta: "La propuesta pedagógica: (Señala la respuesta correcta)",
    resp_correcta: "Las respuestas a) y b) son correctas.",
    resp_inco1: "Contemplara como uno de sus apartados la atención a las diferencias individuales.",
    resp_inco2: "Contemplara como uno de sus apartados la Acción tutorial."
    },
    {
    pregunta: "La evaluación en esta etapa: (Señala la respuesta correcta)",
    resp_correcta: "Tomará como referencia las características individuales de cada niña y niño, el ritmo de aprendizaje, la forma particular de aprender, sus excelencias y sus aportaciones, considerando los diferentes caminos para llegar a un mismo aprendizaje.",
    resp_inco1: "Tomará como referencia las características individuales de cada niña y niño, el ritmo de aprendizaje, la forma particular de aprender, sus excelencias y sus aportaciones, considerando los diferentes caminos para llegar a distintos aprendizajes.",
    resp_inco2: "Tomará como referencia las características individuales del grupo, el ritmo de aprendizaje, la forma de aprender, sus excelencias y sus aportaciones, considerando los diferentes caminos para llegar a un mismo aprendizaje."
    },
    {
    pregunta: "Según el artículo 12 del Decreto Foral 61/2022, de 1 de junio, por el que se establece el currículo de las enseñanzas de la etapa de Educación Infantil en la Comunidad Foral de Navarra. ¿Cómo no será la evaluación en la educación infantil?",
    resp_correcta: "Se realizará de manera cuantitativa.",
    resp_inco1: "Se realizará en términos cualitativos.",
    resp_inco2: "Global, continua y formativa."
    },
    {
    pregunta: "Según el ANEXO III del por el que se establece el currículo de las enseñanzas de la etapa de Educación Infantil en la Comunidad Foral de Navarra, ¿Cómo se propone que sean las situaciones de aprendizaje?",
    resp_correcta: "Estimulantes, significativas e integradoras.",
    resp_inco1: "Simples e integradoras.",
    resp_inco2: "Simples y estimulantes."
    },
    {
    pregunta: "Según el artículo 3 del Decreto Foral 61/2022, de 1 de junio, por el que se establece el currículo de las enseñanzas de la etapa de Educación Infantil en la Comunidad Foral de Navarra ¿cuál de las siguientes afirmaciones se corresponde con la definición de métodos pedagógicos?",
    resp_correcta: "Conjunto de estrategias, procedimientos, técnicas y acciones organizadas y planificadas por el personal educativo, de manera consciente and reflexiva, que, coordinadas entre sí, tienen el fin de dirigir el aprendizaje del alumnado hacia la consecución de los objetivos y las competencias clave y específicas.",
    resp_inco1: "Situaciones y actividades que implican el despliegue por parte del alumnado de situaciones asociadas a competencias clave y competencias específicas, y que contribuyen a la adquisición y desarrollo de las mismas.",
    resp_inco2: "Conocimientos, destrezas y actitudes que constituyen los contenidos propios de un área y cuyo aprendizaje es necesario para la adquisición de competencias específicas."
    },
    {
    pregunta: "Según el artículo 8 del Decreto Foral 61/2022, de 1 de junio, por el que se establece el currículo de las enseñanzas de la etapa de Educación Infantil en la Comunidad Foral de Navarra, la educación infantil contribuirá a desarrollar en las niñas y niños las capacidades que les permitan: (Señale la respuesta correcta)",
    resp_correcta: "Desarrollar sus capacidades emocionales y afectivas, estableciendo vínculos seguros con las personas adultas y con otros niños y niñas.",
    resp_inco1: "Desarrollar habilidades comunicativas en el lenguaje expresivo.",
    resp_inco2: "Observar y explorar su entorno natural y económico, reconociendo en él algunas características propias de Navarra y desarrollando actitudes de respeto y cuidado hacia los seres vivos y el medio ambiente."
    },
    {
    pregunta: "Según el artículo 13 del Decreto Foral 61/2022, de 1 de junio, por el que se establece el currículo de las enseñanzas de la etapa de Educación Infantil en la Comunidad Foral de Navarra, ¿Qué contemplará la intervención educativa?",
    resp_correcta: "La diversidad del alumnado, adaptando la práctica educativa a las características personales, necesidades, intereses y estilo cognitivo de las niñas y los niños.",
    resp_inco1: "El coeficiente intelectual de los niños y las niñas.",
    resp_inco2: "Ni a) ni b) son correctas."
    },
    {
    pregunta: "Según el artículo 9 del Decreto Foral 61/2022, de 1 de junio, por el que se establece el currículo de las enseñanzas de la etapa de Educación Infantil en la Comunidad Foral de Navarra, ¿Cuáles son las tres áreas de la educación infantil?",
    resp_correcta: "Crecimiento en armonía, Descubrimiento y Exploración del entorno, y Comunicación y representación de la realidad.",
    resp_inco1: "Identidad y autonomía personal, Descubrimiento del medio físico y social, Comunicación y lenguaje.",
    resp_inco2: "Crecimiento y autonomía personal, el entorno y las relaciones sociales, el lenguaje oral y la expresión corporal."
    },
    {
    pregunta: "Según el artículo 10 del Decreto Foral 61/2022, de 1 de junio, por el que se establece el currículo de las enseñanzas de la etapa de Educación Infantil en la Comunidad Foral de Navarra, ¿Cuáles son las 8 competencias clave en la educación infantil?",
    resp_correcta: "Competencia en comunicación lingüística, competencia plurilingüe, competencia matemática y competencia en ciencia, tecnología e ingeniería, competencia digital, competencia personal, social y de aprender y aprender, competencia ciudadana, competencia emprendedora, competencia en conciencia y expresión culturales.",
    resp_inco1: "Competencia en comunicación lingüística, competencia plurilingüe, competencia matemática y competencia en ciencia, tecnología e ingeniería, competencia digital, competencia personal, social y de aprender y aprender, competencia ciudadana, competencia emprendedora, competencia musical.",
    resp_inco2: "Competencia en comunicación lingüística, competencia plurilingual, competencia matemática y competencia en ciencia, tecnología e ingeniería, competencia digital, competencia personal, social y de aprender y aprender, competencia teatral, competencia emprendedora, competencia en conciencia y expresión culturales."
    },
    {
    pregunta: "Según el artículo 3 del Decreto Foral 61/2022, de 1 de junio, por el que se establece el currículo de las enseñanzas de la etapa de Educación Infantil en la Comunidad Foral de Navarra ¿cuál de las siguientes afirmaciones se corresponde con la definición de objetivos?",
    resp_correcta: "Logros que se espera que el alumnado haya alcanzado al finalizar la etapa y cuya consecución está vinculada a la adquisición de las competencias clave.",
    resp_inco1: "Logros que se espera que el alumnado haya alcanzado al finalizar la etapa y cuya consecución está vinculada a la adquisición de las competencias específicas.",
    resp_inco2: "Logros que se espera que el alumnado haya alcanzado al finalizar el ciclo y cuya consecución está vinculada a la adquisición de las competencias clave y específicas."
    },
    {
    pregunta: "Según el artículo 3 del Decreto Foral 61/2022, de 1 de junio, por el que se establece el currículo de las enseñanzas de la etapa de Educación Infantil en la Comunidad Foral de Navarra ¿cuál de las siguientes afirmaciones se corresponde con la definición de métodos pedagógicos?",
    resp_correcta: "Conjunto de estrategias, procedimientos, técnicas, acciones organizadas y planificadas por el personal educativo, de manera consciente y reflexiva, que, coordinadas entre sí, tienen el fin de dirigir el aprendizaje del alumnado hacia la consecución de los objetivos y las competencias clave y específicas.",
    resp_inco1: "Situaciones y actividades que implican el despliegue por parte del alumnado en las situaciones o actividades a las que se refieren las competencias específicas de cada área en un momento determinado de su proceso de aprendizaje.",
    resp_inco2: "Las respuestas a) y b) son correctas."
    },
    {
    pregunta: "Según lo establecido en el artículo 18 del Decreto Foral 28/2007, de 26 de marzo, por el que se regula el primer ciclo de educación infantil de la Comunidad Foral de Navarra y se establecen los requisitos que deben cumplir los centros que lo comparten, así como los contenidos educativos del mismo, el número máximo de niños por unidad será: (Señale la respuesta correcta):",
    resp_correcta: "Unidades de 0 y 1 año: 8.",
    resp_inco1: "Unidades de 1 año: 8.",
    resp_inco2: "Unidades de 1 a 2 años: 14."
    },
    {
    pregunta: "Según el Decreto Foral 28/2007, de 26 de marzo, en el medio físico y social, la experimentación con objetos y materiales va a permitir básicamente dos tipos de conocimiento:",
    resp_correcta: "El conocimiento físico y el conocimiento lógico-matemático.",
    resp_inco1: "El conocimiento físico y el conocimiento psíquico.",
    resp_inco2: "El conocimiento personal y el conocimiento físico."
    },
    {
    pregunta: "Según el Decreto Foral 28/2007, de 26 de marzo, ¿Cuál de estos ámbitos que se detallan a continuación no obedecen a consideraciones de naturaleza psicoevolutiva y al análisis de las experiencias educativas, propias del primer ciclo de infantil?",
    resp_correcta: "Comunicación escrita.",
    resp_inco1: "Descubrimiento del medio físico y social.",
    resp_inco2: "Expresión corporal, musical y plástica."
    },
    {
    pregunta: "Según lo establecido en el Decreto Foral 28/2007, de 26 de marzo, por el que se regula el primer ciclo de educación infantil de la Comunidad Foral de Navarra y se establecen los requisitos que deben cumplir los centros que lo imparten, así como los contenidos educativos del mismo, el siguiente contenido “Acuerdos y normas para la convivencia” pertenece al ámbito de:",
    resp_correcta: "Afectos y relaciones sociales.",
    resp_inco1: "Descubrimiento del medio físico y social.",
    resp_inco2: "Comunicación y lenguaje."
    },
    {
    pregunta: "Según lo establecido en el Decreto Foral 28/2007, de 26 de marzo, por el que se regula el primer ciclo de educación infantil de la Comunidad Foral de Navarra y se establecen los requisitos que deben cumplir los centros que lo imparten, así como los contenidos educativos del mismo, cuál de estas respuestas no es un ámbito de desarrollo y experiencia:",
    resp_correcta: "Identidad y autonomía personal.",
    resp_inco1: "Expresión corporal, musical y plástica.",
    resp_inco2: "Ni a ni b, son ámbitos de experiencia."
    },
    {
    pregunta: "Conforme al art.20 del Decreto Foral 28/2007, de 26 de marzo, por el que se regula el primer ciclo de Educación Infantil en la Comunidad Foral de Navarra: El proyecto educativo de los centros deberá incluir:",
    resp_correcta: "Las respuestas a) y b) are correctas.",
    resp_inco1: "Los principios, valores, y prioridades de actuación, o el carácter propio del centro.",
    resp_inco2: "La propuesta pedagógica."
    },
    {
    pregunta: "Conforme al art.16 del Decreto Foral 28/2007, de 26 de marzo, por el que se regula el primer ciclo de Educación Infantil en la Comunidad Foral de Navarra y se establecen los requisitos que deben cumplir los centros que lo imparten, así como los contenidos educativos del mismo, los centros deberán contar, entre otros, con los siguientes espacios (Señale la incorrecta):",
    resp_correcta: "Una sala por unidad, que tendrá como mínimo 60 metros cuadrados. Las salas para más de una unidad tendrán una superficie mínima de 1,75 metros cuadrados por niño. Las salas para niños mayores de un año deberán disponer de áreas diferenciadas para el descanso.",
    resp_inco1: "Un dormitorio para niños menores de un año.",
    resp_inco2: "Una sala de usos múltiples de 30 metros cuadrados como mínimo, o 30 metros cuadrados distribuidos en dos o tres espacios. No será necesario cumplir este requisito en centros menores de tres unidades o en centros de 3 unidades sin servicio de comedor."
    },
    {
    pregunta: "En una sesión de juego Heurístico ¿Qué aspectos no se trabajan con el niño?:",
    resp_correcta: "Se trabajan aspectos relacionados tanto con el lenguaje como con la lógica-matemática.",
    resp_inco1: "El lenguaje.",
    resp_inco2: "La lógica-matemática."
    },
    {
    pregunta: "Mediante el juego, el niño y la niña exteriorizan simbólicamente su agresividad y sexualidad. Señala a qué área de desarrollo infantil corresponde:",
    resp_correcta: "Afectivo emocional.",
    resp_inco1: "Social.",
    resp_inco2: "Cognitivo."
    },
    {
    pregunta: "Al conjunto de conocimientos, destrezas, habilidades y aptitudes adquiridos a través de los procesos formativos o de la experiencia profesional, que permiten desempeñar y realizar los roles y situaciones de trabajo requeridos en el empleo se conoce como:",
    resp_correcta: "Competencia profesional.",
    resp_inco1: "Capacidad profesional.",
    resp_inco2: "Eficacia profesional."
    },
    {
    pregunta: "Cuando se habla de sensaciones exteroperceptivas, propioceptivas, interceptivas y visceroperceptivas nos estamos refiriendo a:",
    resp_correcta: "Al esquema corporal.",
    resp_inco1: "Imagen corporal.",
    resp_inco2: "Las respuestas a) y b) son correctas."
    },
    {
    pregunta: "Los primeros rasgos de socialización en el niño y niña se manifiestan:",
    resp_correcta: "Desde el nacimiento.",
    resp_inco1: "Cuando pronuncia sus primeros balbuceos.",
    resp_inco2: "Cuando tiene interés por los objetos."
    },
    {
    pregunta: "Cuál de las siguientes afirmaciones es correcta:",
    resp_correcta: "En la etapa infantil no interesa la enseñanza de la lengua, sino su utilización, el uso tanto referencial como contextual del lenguaje.",
    resp_inco1: "El buen desarrollo de la percepción visual es indispensable para facilitar el proceso de desarrollo lingüístico.",
    resp_inco2: "Con los bebés hay que utilizar un lenguaje verbal básico."
    },
    {
    pregunta: "Si un niño o niña no alcanza la marcha antes de los catorce meses:",
    resp_correcta: "No debemos preocuparnos.",
    resp_inco1: "Remitiremos el caso a especialistas.",
    resp_inco2: "Prepararemos un programa de estimulación motriz para corregir esta anomalía."
    },
    {
    pregunta: "La siguiente definición: “proceso por el cual el niño adquiere e interioriza los valores, normas, costumbres y conductas que son propias de la sociedad en la que vive “corresponde al concepto de:",
    resp_correcta: "Socialización.",
    resp_inco1: "Apego.",
    resp_inco2: "Comunicación social."
    },
    {
    pregunta: "¿Por qué no es positivo hacer preguntas a los niños y las niñas que todavía no hablan correctamente?",
    resp_correcta: "Hacer preguntas al niño o la niña no es negativo.",
    resp_inco1: "Porque les puede crear confusión e inseguridad.",
    resp_inco2: "Porque necesitan pensar que el adulto lo sabe todo."
    },
    {
    pregunta: "De los siguientes sistemas sensoriales, ¿cuál es el que no influye en el desarrollo cognitivo-motor?",
    resp_correcta: "Sistema ventricular.",
    resp_inco1: "Sistema visual.",
    resp_inco2: "Sistema auditivo."
    },
    {
    pregunta: "La mayoría de los niños/as adquieren la capacidad de reconocerse a sí mismos ante el espejo, dando muestras de ello a través de “la prueba de la mancha”:",
    resp_correcta: "Entre los 15 y los 24 meses.",
    resp_inco1: "Entre los 6 y 12 meses.",
    resp_inco2: "Entre los 3 y 9 meses."
    },
    {
    pregunta: "Durante los 12 primeros meses ocurre todo lo siguiente excepto:",
    resp_correcta: "El sueño se caracteriza por pasar de ser monofásico a polifásico.",
    resp_inco1: "Es el periodo de aprendizaje de los ritmos de sueño.",
    resp_inco2: "Hacia las 28 semanas, la mayoría de los niños duermen durante toda la noche."
    },
    {
    pregunta: "En relación a la adquisición del hábito de control de esfínteres no es cierto que:",
    resp_correcta: "Sobre los 3 años se inicia el control: primero de día, y algo más tarde de noche.",
    resp_inco1: "La edad de inicio de control esfínter vesical y anal varía de un niño a otro, pero en términos generales va desde los 18 a los 24 meses.",
    resp_inco2: "Favorecer un horario es una medida que ayuda al hábito."
    },
    {
    pregunta: "No es una función del lenguaje:",
    resp_correcta: "La función catártica.",
    resp_inco1: "La función reguladora.",
    resp_inco2: "La función heurística."
    },
    {
    pregunta: "Estas melodías pueden servir de punto de partida para, la libre expresión o para montar coreografías sencillas:",
    resp_correcta: "Las respuestas a) y b) son correctas.",
    resp_inco1: "Polkas: animan a dar saltos y provocan sentimiento de alegría.",
    resp_inco2: "Valses: estimulan al niño a realizar amplios movimientos del cuerpo y elevación de los brazos."
    },
    {
    pregunta: "¿Cuál de los siguientes ámbitos no se desarrollan de forma prioritaria a través de la expresión plástica?",
    resp_correcta: "Desarrollo sexual.",
    resp_inco1: "Desarrollo de la psicomotricidad.",
    resp_inco2: "Desarrollo perceptivo."
    },
    {
    pregunta: "Dentro de la etapa del garabato, se distinguen varios estadios, señala el incorrecto:",
    resp_correcta: "Garabato sin nombre.",
    resp_inco1: "Garabatos desordenados.",
    resp_inco2: "Garabato controlado."
    },
    {
    pregunta: "Beatriz Trueba clasifica las experiencias denominadas con el término de talleres en cuatro grandes grupos, señale el incorrecto:",
    resp_correcta: "Rincones de juego donde la actividad suele ser libre.",
    resp_inco1: "Distribución de talleres dentro del aula.",
    resp_inco2: "Utilización del mismo espacio como aula tradicional y como taller en distintos momentos."
    },
    {
    pregunta: "En relación a las canciones infantiles, es conveniente todo lo siguiente. Señala la incorrecta:",
    resp_correcta: "Es preferible que la melodía tenga muchos intervalos.",
    resp_inco1: "Deben tener texto y vocabulario adecuado.",
    resp_inco2: "Son aconsejables las notas blancas y negras para los tres años."
    },
    {
    pregunta: "¿Cuál de las siguientes afirmaciones en relación a la evolución de la expresión musical del niño es incorrecta?",
    resp_correcta: "A los cuatro años emplea su capacidad vocal en su totalidad y va ampliando en matices como la afinación.",
    resp_inco1: "Al año y medio utiliza todo su cuerpo para responder a la música de un modo rítmico.",
    resp_inco2: "A los tres años consigue retener estribillos and letras fáciles de interpretar."
    },
    {
    pregunta: "Dentro de las actividades de agua que pueden realizarse se incluyen:",
    resp_correcta: "Las respuestas a) y b) son correctas.",
    resp_inco1: "Impresión, manchado y soplado.",
    resp_inco2: "Lavado, Esgrafiado y clesografía."
    },
    {
    pregunta: "¿Qué tendencias psicológicas se apoyan en el empirismo?",
    resp_correcta: "Las ambientalistas.",
    resp_inco1: "Las innatistas.",
    resp_inco2: "Las asociacionistas."
    },
    {
    pregunta: "¿Qué significa el puerocentrismo?",
    resp_correcta: "La atención a la niña o al niño considerándole el principal protagonista de la educación de su personalidad.",
    resp_inco1: "La atención al niño o niña considerando a las familias los principales protagonistas de la educación de su personalidad.",
    resp_inco2: "Ninguna definición es correcta."
    },
    {
    pregunta: "¿Quien introdujo la corriente naturalista en la educación?",
    resp_correcta: "Rousseau.",
    resp_inco1: "Aristóteles.",
    resp_inco2: "Comenio."
    },
    {
    pregunta: "Indica que característica corresponde a la “teoría psicoanalítica”",
    resp_correcta: "El desarrollo de la personalidad de la niña o niño está ligado al desarrollo de la sexualidad.",
    resp_inco1: "La personalidad del niño o la niña se desarrolla mediante un proceso lineal acumulativo.",
    resp_inco2: "El autor de esta teoría es Piaget."
    },
    {
    pregunta: "¿Quién considera el principio de la libertad como base del desenvolvimiento humano?",
    resp_correcta: "María Montessori.",
    resp_inco1: "Juan Enrique Pestalozzi.",
    resp_inco2: "William Heard Kilpatrick."
    },
    {
    pregunta: "¿Como se llaman los movimientos que explican la construcción de los conocimientos según el constructivismo?",
    resp_correcta: "Las respuestas a) y b) son correctas.",
    resp_inco1: "Asimilación.",
    resp_inco2: "Acomodación."
    },
    {
    pregunta: "¿Cómo se llaman los jardines de infancia que creo Froebel?",
    resp_correcta: "Kindergarten.",
    resp_inco1: "Childschool.",
    resp_inco2: "Ecole enfant."
    },
    {
    pregunta: "¿A partir de que siglo se produce el inicio de la “escuela nueva”, época marcada por la percepción de la infancia como algo específico que requiere una atención especializada?",
    resp_correcta: "siglo XIX",
    resp_inco1: "siglo XVII",
    resp_inco2: "siglo XVIII"
    },
    {
    pregunta: "¿Cuál de los siguientes hitos en el desarrollo social no se corresponde con la edad a la que aparece emparejado?",
    resp_correcta: "2-3 años: no conocen la norma social o no la comprenden.",
    resp_inco1: "0-6 meses: reconocimiento de las personas y reacción consecuente con su presencia.",
    resp_inco2: "6-12 meses: discriminan y adoptan una posición de miedo o cautela ante los desconocidos."
    },
    {
    pregunta: "¿Cuál de las siguientes no es una modalidad de apego?",
    resp_correcta: "Apego ansioso-seguro.",
    resp_inco1: "Apego seguro.",
    resp_inco2: "Apego ansioso-evitante."
    },
    {
    pregunta: "El autoconcepto implica adquirir:",
    resp_correcta: "Las respuestas a) y b) son correctas.",
    resp_inco1: "Identidad corporal.",
    resp_inco2: "Identidad sexual."
    },
    {
    pregunta: "¿Cómo podemos prevenir la timidez?",
    resp_correcta: "Las respuestas a) y b) son correctas.",
    resp_inco1: "Enseñando hábitos sociales.",
    resp_inco2: "Ayudando a los niños a sentirse capaces."
    },
    {
    pregunta: "Entre los procesos fundamentales que intervienen en la adquisición y desarrollo del lenguaje no se encuentra:",
    resp_correcta: "Genética.",
    resp_inco1: "Imitación.",
    resp_inco2: "Condicionamiento."
    },
    {
    pregunta: "Uno de los siguientes emparejamientos acerca de la edad y la habilidad lingüística no es correcta. ¿sabe de cuál se trata?",
    resp_correcta: "6 meses: etapa del laleo.",
    resp_inco1: "4 meses: vocalización social.",
    resp_inco2: "9 meses: articula silabas como “ca”, “ba”, “de”."
    },
    {
    pregunta: "¿Cuá de las siguientes habilidades lingüísticas no es propia de los dos años y medio?",
    resp_correcta: "Vocabulario: entre 900 y 1200 palabras.",
    resp_inco1: "Dice su nombre completo.",
    resp_inco2: "Frases sin nexos: habla telegráfica."
    },
    {
    pregunta: "Atendiendo la secuencia del desarrollo del juego, el correspondiente a “los disfraces” pertenece a:",
    resp_correcta: "Juego simbólico.",
    resp_inco1: "Juego lógico.",
    resp_inco2: "Juego sensoriomotor."
    },
    {
    pregunta: "¿Cómo no debe ser el papel de la educadora en una sesión del Juego Heurístico?",
    resp_correcta: "Iniciador.",
    resp_inco1: "Organizador.",
    resp_inco2: "Facilitador."
    },
    {
    pregunta: "Otro de estos principios dice que se debe fomentar la diversión, el juego, lo placentero, potenciar la actividad lúdica como agente del proceso evolutivo de niños y niñas, esto implica:",
    resp_correcta: "Tener en cuenta la actividad lúdica del niño como marco básico para la construcción del conocimiento.",
    resp_inco1: "Priorizar la actividad lúdica con adultos, ya que el juego entre iguales no produce aprendizajes.",
    resp_inco2: "Las respuestas a) y b) son correctas."
    },
    {
    pregunta: "Con respecto al juego, tendremos en cuenta:",
    resp_correcta: "Que el juego es la actividad natural de la infancia y deberá tener una gran predominancia en el día a día de la escuela.",
    resp_inco1: "Que, aunque lo más importante en la escuela son las actividades dirigidas, para facilitar aprendizajes, deberemos dejar entre ellas periodos de juego libre.",
    resp_inco2: "Que al principio es muy importante para ellos/as enseñarles que función tiene cada juguete."
    },
    {
    pregunta: "Señala cuál de las siguientes opciones es una característica del juego:",
    resp_correcta: "Tiene una función catártica.",
    resp_inco1: "El juego no cambia con la edad.",
    resp_inco2: "El juego no tiene un fin en sí mismo."
    },
    {
    pregunta: "Señala cuál de las siguientes características no corresponde al juego de ejercicio:",
    resp_correcta: "Es el juego de hacer “como si …”",
    resp_inco1: "No existe dualidad entre el juego y vida corriente.",
    resp_inco2: "El niño se conduce por el placer funcional de ser causa de sus movimientos."
    },
    {
    pregunta: "El juego Heurístico ayuda a desarrollar:",
    resp_correcta: "Las respuestas a) y b) son correctas.",
    resp_inco1: "La atención y concentración.",
    resp_inco2: "La coordinación de movimientos."
    },{
    pregunta: "Cuál de las siguientes afirmaciones sobre el papel del/la Educador/a de Educación infantil es correcta:",
    resp_correcta: "Dicho papel está relacionado con programar, intervenir educativamente y evaluar programas de atención a la infancia, aplicando los métodos de enseñanza-aprendizaje que favorezcan el desarrollo autónomo de los niños y niñas de 0 a 3 años, organizando los recursos adecuados.",
    resp_inco1: "Dicho papel está relacionado con programar, intervenir educativamente y evaluar programas de atención al discapacitado, aplicando los métodos de diagnóstico psicológico que permitan saber el nivel de desarrollo de los niños de 0 a 3 años, organizando los recursos adecuados.",
    resp_inco2: "Dicho papel está relacionado con programar, intervenir educativamente y evaluar programas de atención a las familias con riesgo de exclusión social, aplicando los métodos de enseñanza-aprendizaje que favorezcan el desarrollo autónomo de los niños y niñas de 0 a 6 años, organizando los recursos adecuados."
    },
    {
    pregunta: "Cual de las afirmaciones siguientes pertenece a J. Bruner:",
    resp_correcta: "Sucede con frecuencia que las formas más complejas gramaticalmente y los usos pragmáticos más complicados aparecen en primer lugar en los contextos del juego.",
    resp_inco1: "Es conveniente que los padres y hermanos mayores insistan para que los niños y niñas digan correctamente una determinada expresión.",
    resp_inco2: "Los soliloquios no son un ejemplo de la capacidad conminatoria que los niños y niñas establecen con el lenguaje, sino una disfunción léxica."
    },
    {
    pregunta: "El precursor de la teoría del aprendizaje significativo fue:",
    resp_correcta: "Ausubel.",
    resp_inco1: "Piaget.",
    resp_inco2: "Bruner."
    },
    {
    pregunta: "¿Qué norma navarra tiene como objeto asegurar la atención integral a los niños, niñas y adolescentes en la Comunidad Foral de Navarra?",
    resp_correcta: "Ley Foral 12/2022, de 11 de mayo, de atención y protección a niños, niñas y adolescentes y de promoción de sus familias, derechos e igualdad.",
    resp_inco1: "Decreto Foral 28/2007, de 26 de marzo, por el que se regula el primer ciclo de Educación Infantil.",
    resp_inco2: "Ley Orgánica 2/2006, de 3 de mayo, de Educación."
    },
    {
    pregunta: "Según la Ley Foral 12/2022 de Navarra, ¿qué se entiende por primera infancia?",
    resp_correcta: "El periodo de vida comprendido entre el nacimiento y la edad de 3 años.",
    resp_inco1: "El periodo de vida comprendido entre la edad de 4 años y la edad de 12 años.",
    resp_inco2: "El periodo de vida comprendido entre la edad de 13 años y la mayoría de edad."
    },
    {
    pregunta: "¿Qué artículo de la Constitución Española reconoce el derecho a la educación y la libertad de enseñanza?",
    resp_correcta: "Artículo 27.",
    resp_inco1: "Artículo 14.",
    resp_inco2: "Artículo 35."
    },
    {
    pregunta: "Según la Constitución Española, ¿qué garantizan los poderes públicos respecto a la educación?",
    resp_correcta: "El derecho de todos a la educación, mediante una programación general de la enseñanza, con participación efectiva de todos los sectores afectados y la creación de centros docentes.",
    resp_inco1: "La obligación de matricular a todos los niños en centros públicos.",
    resp_inco2: "La formación exclusivamente religiosa en los centros educativos."
    },
    {
    pregunta: "¿Qué principios deben guiar la educación según la Constitución Española?",
    resp_correcta: "El pleno desarrollo de la personalidad humana en el respeto a los principios democráticos de convivencia y a los derechos y libertades fundamentales.",
    resp_inco1: "La formación exclusivamente técnica y profesional.",
    resp_inco2: "La educación basada únicamente en la disciplina."
    },
    {
    pregunta: "¿Qué competencia tiene la Comunidad Foral de Navarra en materia de educación infantil?",
    resp_correcta: "Establecer el currículo de las enseñanzas de la etapa de Educación Infantil en su ámbito territorial.",
    resp_inco1: "Regular exclusivamente la educación universitaria.",
    resp_inco2: "Determinar los contenidos de la educación secundaria."
    },
    {
    pregunta: "¿Qué obligación tiene la Administración de la Comunidad Foral de Navarra respecto a las plazas escolares?",
    resp_correcta: "Garantizar la existencia de un número de plazas adecuadas y suficientes que aseguren la atención escolar de las personas menores.",
    resp_inco1: "Limitar el acceso a la educación infantil a determinados colectivos.",
    resp_inco2: "No intervenir en la gestión de plazas escolares."
    },
    {
    pregunta: "¿Qué valores debe fomentar la educación infantil en Navarra según la normativa vigente?",
    resp_correcta: "Tolerancia, solidaridad, libertad y no discriminación.",
    resp_inco1: "Competitividad y exclusión social.",
    resp_inco2: "Uniformidad cultural y lingüística."
    },{
    pregunta: "¿Cuál de las siguientes características corresponde al currículo?",
    resp_correcta: "Conjunto de objetivos, competencias básicas, contenidos, métodos pedagógicos y criterios de evaluación.",
    resp_inco1: "Norma estatal de carácter obligatorio que establece los aspectos básicos del currículo que constituyen las enseñanzas mínimas para toda la población escolar.",
    resp_inco2: "Los centros docentes desarrollarán y completarán el currículo de las diferentes etapas y ciclos en el uso de su autonomía."
    },
    {
    pregunta: "¿Qué tres áreas se modifican a medida que el menor adquiere el hábito?",
    resp_correcta: "Conductual, fisiológica y cognitiva.",
    resp_inco1: "Conductual, psicológica y fisiológica.",
    resp_inco2: "Psicológica, ambiental y cognitiva."
    },
    {
    pregunta: "La organización del espacio, del tiempo y de los materiales se denomina...",
    resp_correcta: "Ambiente de aprendizaje.",
    resp_inco1: "Organización del aprendizaje.",
    resp_inco2: "Organización espacio-temporal."
    },
    {
    pregunta: "¿Quién delimita los objetivos, saberes básicos y criterios de evaluación en el primer ciclo de Educación Infantil?",
    resp_correcta: "La administración educativa de la Comunidad Foral.",
    resp_inco1: "El equipo docente de cada centro.",
    resp_inco2: "El personal educador de cada aula."
    },
    {
    pregunta: "¿Qué es la Ley Foral 12/2022?",
    resp_correcta: "La norma navarra que asegura la atención integral y la protección a niños, niñas y adolescentes, y promueve sus derechos y la igualdad.",
    resp_inco1: "La ley que regula exclusivamente la educación primaria en Navarra.",
    resp_inco2: "La ley que establece los requisitos mínimos para la construcción de centros educativos."
    },
    {
    pregunta: "¿Qué artículo de la Constitución Española reconoce el derecho a la educación?",
    resp_correcta: "Artículo 27.",
    resp_inco1: "Artículo 14.",
    resp_inco2: "Artículo 35."
    },
    {
    pregunta: "¿Qué valores debe fomentar la educación infantil?",
    resp_correcta: "Tolerancia, solidaridad, libertad y no discriminación.",
    resp_inco1: "Competitividad y exclusión social.",
    resp_inco2: "Uniformidad cultural y lingüística."
    },
    {
    pregunta: "Según la LOE/LOMLOE, ¿cómo se define la Educación Infantil?",
    resp_correcta: "Una etapa educativa de carácter voluntario que atiende a los niños desde el nacimiento hasta los seis años.",
    resp_inco1: "Una etapa obligatoria que comprende desde los 3 hasta los 6 años.",
    resp_inco2: "Una etapa que solo atiende a niños con necesidades educativas especiales."
    },
    {
    pregunta: "¿Cuáles son las megatendencias marcadas por la UNESCO en relación con la educación?",
    resp_correcta: "Aprender a aprender, a hacer y a ser.",
    resp_inco1: "Aprender a leer, escribir y sumar.",
    resp_inco2: "Aprender a cantar, bailar y pintar."
    },
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
    pregunta: "Señala cuál de las siguientes afirmaciones es la correcta:",
    resp_correcta: "El juego funcional es cronológicamente anterior al juego simbólico.",
    resp_inco1: "El juego simbólico comienza una vez finalizada la etapa de juego simbólico.",
    resp_inco2: "El juego deja de existir en la etapa de Educación infantil."
    },
    {
    pregunta: "El papel del educador durante el periodo de adaptación será:",
    resp_correcta: "Respetuoso con los sentimientos del niño and tranquilizador.",
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
    pregunta: "Generalmente, la primera forma de desplazamiento que suele aparecer en el desarrollo motor infantil es:",
    resp_correcta: "Reptando.",
    resp_inco1: "Gateando.",
    resp_inco2: "Desplazarse rodando."
    },
    {
    pregunta: "En la relación educador/a-niño/a:",
    resp_correcta: "Es importante crear una relación basada en la confianza y el respeto mutuo.",
    resp_inco1: "Es importante saber suplantar a la familia, mientras el niño o la niña está en la escuela.",
    resp_inco2: "A y B son correctas."
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
    resp_inco1: "De 12 to 18 meses.",
    resp_inco2: "De 24 a 36 meses."
    },
    {
    pregunta: "¿Qué es la salud según la Organización Mundial de la Salud?",
    resp_correcta: "Un completo estado de bienestar físico, mental y social.",
    resp_inco1: "Ausencia de la enfermedad.",
    resp_inco2: "Un estado de ánimo positivo."
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
    pregunta: "Con respecto a la educación del niño de 0 to 3 años, ¿cuál de estos autores define Taller como 'un lugar para investigar'?",
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
    resp_correcta: "a) y b) are correctas.",
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
    resp_correcta: "Atención, memoria and pensamiento.",
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
    resp_inco1: "Es el estrato más primitivo and sencillo; en su origen es involuntario, pero paulatinamente se hace consciente. El niño/a señala o indica aquello que quiere coger o nombrar.",
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
    }
];
