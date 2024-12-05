    /*iniciamos generando los arrays con las preguntas, respuestas correctas y otros 2 con respuestas incorrectas, 
    todas con la misma posición que las prguntas correspondientes*/

    const preguntas = [
        {
            pregunta: "¿Cuál es la capa externa de la piel? Indique la respuesta correcta:",
            resp_correcta: "Epidermis",
            resp_inco1: "Hipodermis",
            resp_inco2: "Tejido subcutáneo",
            resp_inco3: "Dermis"
        },
        {
            pregunta: "En relación con el proceso del aseo de un paciente encamado, indique la respuesta correcta:",
            resp_correcta: "Lo último que se lavará será la región perineal",
            resp_inco1: "La cara y ojos se lavarán con agua y jabón",
            resp_inco2: "Se comenzará por el abdomen y tórax",
            resp_inco3: "Lo primero que se lavará será la región perineal"
        },
        {
            pregunta: "Indique la respuesta correcta: En el aislamiento respiratorio, es obligatorio el uso de:",
            resp_correcta: "Mascarilla",
            resp_inco1: "Bata",
            resp_inco2: "Gorro",
            resp_inco3: "Guantes"
        },
        {
            pregunta: "Al Instituto Navarro para la Igualdad le corresponde el ejercicio de estas funciones, indique la respuesta correcta:",
            resp_correcta: "Todas son correctas",
            resp_inco1: "Impulsar la formación en Igualdad del personal de las administraciones públicas de Navarra",
            resp_inco2: "Coordinar a las unidades de Igualdad de los departamentos del Gobierno de Navarra",
            resp_inco3: "Elaborar el informe anual sobre la Igualdad entre hombres y mujeres en Navarra"
        },
        {
            pregunta: "La Ley Foral de Igualdad entre hombres y mujeres es la:",
            resp_correcta: "Ley Foral 7/2019, de 4 de abril",
            resp_inco1: "Ley Foral 17/2019, de 4 de abril",
            resp_inco2: "Ley Foral 7/2021, de 7 de julio",
            resp_inco3: "Ley Foral 8/2012, de 20 de agosto"
        },
        {
            pregunta: "Indique la respuesta correcta: La contención mecánica se realiza:",
            resp_correcta: "Solo y exclusivamente como medida extrema para evitar daños al propio paciente, a otras personas y al entorno físico que le rodea",
            resp_inco1: "Solo y exclusivamente como medida extrema para evitar daños al propio paciente",
            resp_inco2: "Solo y exclusivamente como medida extrema para evitar daños al personal de enfermería",
            resp_inco3: "Solo y exclusivamente como medida extrema para evitar daños al personal de enfermería y al entorno físico que le rodea"
        },
        {
            pregunta: "El protocolo de actuación ante agresiones externas del Servicio Navarro de Salud-Osasunbidea, describe las acciones a seguir en caso de que el personal adscrito al Servicio Navarro de Salud-Osasunbidea sea objeto de:",
            resp_correcta: "Todas las respuestas anteriores son correctas",
            resp_inco1: "Agresión externa durante el desempeño de su trabajo o como consecuencia directa del mismo, por parte de pacientes",
            resp_inco2: "Agresión externa durante el desempeño de su trabajo o como consecuencia directa del mismo, por parte de usuarios",
            resp_inco3: "Agresión externa durante el desempeño de su trabajo o como consecuencia directa del mismo, por parte de familiares"
        },
        {
            pregunta: "De los diferentes tipos de contención aplicables al enfermo mental, señale cual debemos de utilizar como último recurso:",
            resp_correcta: "Contención mecánica",
            resp_inco1: "Contención verbal",
            resp_inco2: "Contención ambiental",
            resp_inco3: "Contención farmacológica"
        },
        {
            pregunta: "¿Qué se entiende por una enfermedad nosocomial? Indique la respuesta correcta:",
            resp_correcta: "Es relativa al hospital o se origina en él",
            resp_inco1: "Es endémica en una zona del país",
            resp_inco2: "Es estacional",
            resp_inco3: "Aparece solo en los niños"
        },
        {
            pregunta: "Indique la respuesta correcta: Llamamos fómites a:",
            resp_correcta: "Los objetos contaminados por microorganismos que transmiten enfermedades",
            resp_inco1: "Los parásitos contaminantes",
            resp_inco2: "Los animales susceptibles de transmisión",
            resp_inco3: "Las personas infectadas susceptibles de transmisión"
        },
        {
            pregunta: "¿Qué proceso requiere el aislamiento respiratorio? Indique la respuesta correcta:",
            resp_correcta: "Tuberculosis",
            resp_inco1: "Hepatitis vírica tipo A",
            resp_inco2: "Salmonelosis",
            resp_inco3: "Rotavirus"
        },
        {
            pregunta: "¿Qué maniobra es válida en caso de un atragantamiento total en un adulto consciente? Indique la respuesta correcta:",
            resp_correcta: "Heimlich",
            resp_inco1: "RCP",
            resp_inco2: "Wallace",
            resp_inco3: "Frente-mentón"
        },
        {
            pregunta: "En la RCP de adultos, la secuencia correcta es, indique la respuesta correcta:",
            resp_correcta: "30 compresiones/2 ventilaciones",
            resp_inco1: "15 compresiones/2 ventilaciones",
            resp_inco2: "30 compresiones/4 ventilaciones",
            resp_inco3: "10 compresiones/1 ventilación"
        },
        {
            pregunta: "Indique la respuesta correcta: Ante la sospecha de atragantamiento parcial en una persona consciente:",
            resp_correcta: "Animar a que tosa",
            resp_inco1: "Realizar la maniobra frente mentón",
            resp_inco2: "Iniciar maniobras de RCP",
            resp_inco3: "Dar insuflaciones de rescate"
        },
        {
            pregunta: "Indique la respuesta correcta: En los lactantes realizaremos el masaje cardiaco:",
            resp_correcta: "Con dos dedos",
            resp_inco1: "Con las dos manos",
            resp_inco2: "Con una sola mano",
            resp_inco3: "Todas son incorrectas"
        },
        {
            pregunta: "La hemorragia procedente del aparato respiratorio se denomina, indique la respuesta correcta:",
            resp_correcta: "Hemoptisis",
            resp_inco1: "Hematemesis",
            resp_inco2: "Rectorragia",
            resp_inco3: "Otorragia"
        },
        {
            pregunta: "¿Qué es un ambu? Indique la respuesta correcta:",
            resp_correcta: "Un aparato para realizar la respiración artificial",
            resp_inco1: "Un aparato para cortar las hemorragias",
            resp_inco2: "Un aparato para medir la presión arterial",
            resp_inco3: "Un aparato de medición de la presión venosa central"
        },
        {
            pregunta: "Indique la respuesta correcta: Las fracturas en las que el hueso se rompe en diversos fragmentos se denominan:",
            resp_correcta: "Fracturas conminutas",
            resp_inco1: "Fracturas oblicuas",
            resp_inco2: "Fracturas en espiral",
            resp_inco3: "Fracturas en tallo verde"
        },
        {
            pregunta: "Según la regla de Wallace: Un paciente que presenta quemaduras en cabeza y cuello, ¿Qué porcentaje de la superficie corporal tiene afectada?.",
            resp_correcta: "9",
            resp_inco1: "11",
            resp_inco2: "18",
            resp_inco3: "4,5"
        },
        {
            pregunta: "Indique la respuesta correcta: ¿Cómo se denomina la hemorragia uterina?",
            resp_correcta: "Metrorragia",
            resp_inco1: "Dismenorrea",
            resp_inco2: "Rectorragia",
            resp_inco3: "Hipermenorrea"
        },
        {
            pregunta: "Indique la respuesta correcta: El aislamiento entérico no requiere",
            resp_correcta: "Uso de mascarilla",
            resp_inco1: "Uso de guantes",
            resp_inco2: "Lavado de manos",
            resp_inco3: "Control de objetos contaminados"
        },
        {
            pregunta: "Indique la respuesta correcta: ¿Qué es una equimosis?",
            resp_correcta: "Todas son incorrectas",
            resp_inco1: "Hemorragia uretral",
            resp_inco2: "Hemorragia ocular",
            resp_inco3: "Hemorragia nasal"
        },
        {
            pregunta: "Indique la respuesta correcta: Una herida es contusa cuando se produce por:",
            resp_correcta: "Objeto romo",
            resp_inco1: "Estilete",
            resp_inco2: "Objeto punzante",
            resp_inco3: "Objeto afilado"
        },
        {
            pregunta: "Indique la respuesta correcta: Constituye material séptico:",
            resp_correcta: "Todas son correctas",
            resp_inco1: "Cuña",
            resp_inco2: "Palanganas",
            resp_inco3: "Botellas de orina"
        },
        {
            pregunta: "Indique la respuesta correcta: Un antiséptico",
            resp_correcta: "A y B son correctas",
            resp_inco1: "Se usa sobre piel y heridas",
            resp_inco2: "Es desinfectante",
            resp_inco3: "Es esterilizante"
        },
        {
            pregunta: "Indique la respuesta correcta: Las quemaduras de primer grado son aquellas que",
            resp_correcta: "Afectan a la epidermis",
            resp_inco1: "Afectan a la capa media de la dermis",
            resp_inco2: "Afectan a las capas profundas de la dermis",
            resp_inco3: "Afectan a vasos, músculos y nervios"
        },
        {
            pregunta: "Según la Ley Orgánica 13/1982, de 10 de agosto, de Reintegración y Amejoramiento del Régimen Foral de Navarra, indique la respuesta correcta:",
            resp_correcta: "Navarra constituye una Comunidad Foral con régimen, autonomía e instituciones propias, indivisible integrada en la Nación española y solidaria con todos sus pueblos",
            resp_inco1: "Navarra constituye una Comunidad Foral con régimen, autonomía e instituciones propias, divisible integrada en la Nación española y solidaria con todos sus pueblos",
            resp_inco2: "Navarra constituye una Comunidad Foral con régimen, autonomía e instituciones propias, indivisible integrada en la Nación española y solidaria con algunos de sus pueblos",
            resp_inco3: "Navarra constituye una Autonomía Foral con régimen, autonomía e instituciones propias, indivisible integrada en la Nación española y solidaria con todos sus pueblos"
        },
        {
            pregunta: "La Ley Orgánica 13/1982, de 10 de agosto, de Reintegración y Amejoramiento del Régimen Foral de Navarra dice que en el momento de promulgarse esta Ley el territorio de la Comunidad Foral de Navarra está integrado por los municipios comprendidos en sus Merindades históricas de:",
            resp_correcta: "Pamplona, Estella, Sangüesa, Olite y Tudela",
            resp_inco1: "Pamplona, Estella, Tudela, Aoiz, y Olite",
            resp_inco2: "Pamplona, Estella, Olite, Aoiz, Peralta",
            resp_inco3: "Pamplona, Tudela, Aoiz, Sangüesa y Peralta"
        },
        {
            pregunta: "De acuerdo con la naturaleza del Régimen Foral de Navarra, su Amejoramiento, en los términos de la Ley Orgánica 13/1982, de 10 de agosto, tiene por objeto:",
            resp_correcta: "Todas son correctas",
            resp_inco1: "Integrar en el Régimen Foral de Navarra todas aquellas facultades y competencias compatibles con la unidad constitucional",
            resp_inco2: "Ordenar democráticamente las instituciones Forales de Navarra",
            resp_inco3: "Garantizar todas aquellas facultades y competencias propias del Régimen Foral de Navarra"
        },
        {
            pregunta: "La constitución española 1978 en el artículo 1.3 de su Título Preliminar, establece que:",
            resp_correcta: "La forma política del Estado español es la Monarquía parlamentaria",
            resp_inco1: "La forma política del Estado español es la Monarquía absoluta",
            resp_inco2: "La forma política del Estado español es la Monarquía constitucional",
            resp_inco3: "La forma política del Estado español es la Monarquía federal"
        },
        {
            pregunta: "¿En que artículo de la constitución española 1978, viene establecido que la soberanía nacional reside en el pueblo español, del que emanan los poderes del estado?",
            resp_correcta: "Artículo 1.2 del Título Preliminar",
            resp_inco1: "Artículo 3.2 del Título Preliminar",
            resp_inco2: "Artículo 11 del Capítulo Primero",
            resp_inco3: "Todas son incorrectas"
        },
        {
            pregunta: "El Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos, en el capítulo I artículo 5 establece que los datos personales serán:",
            resp_correcta: "Tratados de manera lícita, leal y transparente en relación con el interesado",
            resp_inco1: "Tratados de manera ilícita, leal y transparente en relación con el interesado",
            resp_inco2: "Tratados de manera lícita, leal y opaca en relación con el interesado",
            resp_inco3: "Tratados de manera lícita, desleal y transparente en relación con el interesado"
        },
        {
            pregunta: "El Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y la libre circulación de estos datos, no se aplica al tratamiento de datos personales:",
            resp_correcta: "Todas son correctas",
            resp_inco1: "En el ejercicio de una actividad no comprendida en el ámbito de aplicación del Derecho de la Unión",
            resp_inco2: "Por parte de las autoridades competentes con fines de prevención, investigación, detección o enjuiciamiento de infracciones penales, o de ejecución de sanciones penales, incluida la de protección frente a amenazas a la seguridad pública y su prevención",
            resp_inco3: "Efectuado por una persona física en el ejercicio de actividades exclusivamente personales o domésticas"
        },
        {
            pregunta: "A efectos del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y la libre circulación de estos datos, se entenderá por datos relativos a la salud:",
            resp_correcta: "Datos personales relativos a la salud física o mental de una persona física, incluida la prestación de servicios de atención sanitaria, que revelen información sobre su estado de salud",
            resp_inco1: "Datos personales relativos únicamente a la salud física de una persona física, incluida la prestación de servicios de atención sanitaria, que revelen información sobre su estado de salud",
            resp_inco2: "Datos personales relativos únicamente a la salud mental de una persona física, incluida la prestación de servicios de atención sanitaria, que revelen información sobre su estado de salud",
            resp_inco3: "Datos personales relativos únicamente a la salud mental de una persona jurídica, incluida la prestación de servicios de atención sanitaria, que revelen información sobre su estado de salud"
        },
        {
            pregunta: "Respecto al derecho a la intimidad recogido en el capítulo III artículo 7 de la Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica:",
            resp_correcta: "Toda persona tiene derecho a que se respete el carácter confidencial de los datos referentes a su salud, y a que nadie pueda acceder a ellos sin previa autorización amparada por la Ley",
            resp_inco1: "Toda persona tiene derecho a que se respete el carácter no confidencial de los datos referentes a su salud, y a que nadie pueda acceder a ellos sin previa autorización amparada por la Ley",
            resp_inco2: "Toda persona tiene derecho a que se respete el carácter confidencial de los datos referentes a su salud, y a que cualquier persona física pueda acceder a ellos sin previa autorización amparada por la Ley",
            resp_inco3: "Toda persona tiene obligación a que se respete el carácter confidencial de los datos referentes a su salud, y a que nadie pueda acceder a ellos sin previa autorización amparada por la Ley"
        },
        {
            pregunta: "Según la Ley 41/2002 de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica, será parte del contenido mínimo de la historia clínica:",
            resp_correcta: "La anamnesis y la exploración física",
            resp_inco1: "La anamnesis y la exploración química",
            resp_inco2: "La amnesia y la exploración física",
            resp_inco3: "La anestesia y la exploración física"
        },
        {
            pregunta: "Según la Ley 41/2002 de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica, se entiende por centro sanitario:",
            resp_correcta: "El conjunto organizado de profesionales, instalaciones y medios técnicos que realiza actividades y presta servicios para cuidar la salud de los pacientes y usuarios",
            resp_inco1: "El conjunto organizado de profesionales, instaladores y medios técnicos que realiza actividades y presta servicios para cuidar la salud de los pacientes y usuarios",
            resp_inco2: "El conjunto organizado de profesionales, instalaciones y medios técnicos que realiza actividades y presta servicios para cuidar la felicidad de los pacientes y usuarios",
            resp_inco3: "El conjunto desorganizado de profesionales, instalaciones y medios técnicos que realiza actividades y presta servicios para cuidar la salud de los pacientes y usuarios"
        },
        {
            pregunta: "Indique cual no es un principio básico recogido en el Capítulo I artículo 2 la Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica:",
            resp_correcta: "El paciente o usuario tiene derecho a decidir libremente, después de recibir la información sesgada, entre las opciones clínicas disponibles y no disponibles",
            resp_inco1: "Todo paciente o usuario tiene derecho a negarse al tratamiento, excepto en los casos determinados en la Ley. Su negativa al tratamiento constará por escrito",
            resp_inco2: "La dignidad de la persona humana, el respeto a la autonomía de su voluntad y a su intimidad orientarán toda la actividad encaminada a obtener, utilizar, archivar, custodiar y transmitir la información y la documentación clínica",
            resp_inco3: "La persona que elabore o tenga acceso a la información y la documentación clínica está obligada a guardar la reserva"
        },
        {
            pregunta: "El Servicio Navarro de Salud-Osasunbidea como organismo autónomo dentro de la Administración de la Comunidad Foral de Navarra, tiene una estructura básica. Dentro de ésta estructura el Director Gerente del Servicio Navarro de Salud-Osasunbidea es un órgano central:",
            resp_correcta: "De dirección",
            resp_inco1: "De Participación",
            resp_inco2: "De Gestión",
            resp_inco3: "Todas son correctas"
        },
        {
            pregunta: "Indique cuál de las siguientes opciones de respuesta, no es una función del Consejo Navarro de salud:",
            resp_correcta: "Leer las historias clínicas de todos los ciudadanos",
            resp_inco1: "Emitir informe sobre el Plan de Salud de Navarra",
            resp_inco2: "Promover la participación de la Comunidad en los Centros y establecimientos sanitarios",
            resp_inco3: "Informar la Memoria Anual del Servicio Navarro de Salud"
        },
        {
            pregunta: "Según la Ley 41/2002 de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica, la historia clínica tendrá como fin principal:",
            resp_correcta: "Facilitar la asistencia sanitaria, dejando constancia de todos aquellos datos que, bajo criterio médico, permitan el conocimiento veraz y actualizado del estado de salud",
            resp_inco1: "Documentar las enfermedades del paciente para el libre acceso de familiares y amigos",
            resp_inco2: "Publicar anualmente los nombres de aquellas personas que hayan fallecido debido al VIH",
            resp_inco3: "Todas son falsas"
        },
        {
            pregunta: "En cuanto al Servicio Navarro de Salud-Osasunbidea como organismo autónomo dentro de la Administración de la Comunidad Foral de Navarra, indique la respuesta correcta:",
            resp_correcta: "Se crea el Servicio Navarro de Salud-Osasunbidea como un organismo autónomo de carácter administrativo, dotado de personalidad jurídica propia y plena capacidad de obrar para el cumplimiento de sus fines",
            resp_inco1: "Se crea el Servicio Navarro de Salud-Osasunbidea como un organismo autónomo de carácter legislativo, dotado de personalidad jurídica propia y plena capacidad de obrar para el cumplimiento de sus fines",
            resp_inco2: "Se crea el Servicio Navarro de Salud-Osasunbidea como un organismo autónomo de carácter administrativo, sin personalidad jurídica propia y plena capacidad de obrar para el cumplimiento de sus fines",
            resp_inco3: "Se crea el Servicio Navarro de Salud-Osasunbidea como un organismo autónomo de carácter administrativo, dotado de personalidad jurídica propia y sin capacidad de obrar para el cumplimiento de sus fines"
        },
        {
            pregunta: "El Servicio Navarro de Salud-Osasunbidea como organismo autónomo dentro de la Administración de la Comunidad Foral de Navarra tiene por objeto:",
            resp_correcta: "La organización y gestión en régimen descentralizado de los servicios y prestaciones de atención primaria de salud y de asistencia especializada",
            resp_inco1: "La organización y gestión en régimen centralizado de los servicios y prestaciones de atención primaria de salud y de asistencia especializada",
            resp_inco2: "Gestionar los servicios y programas que las Administraciones Públicas no le encomienden",
            resp_inco3: "La organización y gestión en régimen descentralizado de los servicios y prestaciones de atención secundaria de salud y de asistencia especializada"
        },
        {
            pregunta: "Las paredes del corazón están formadas por tres capas, ¿Cuál es la capa externa que envuelve el corazón? indique la respuesta correcta:",
            resp_correcta: "Pericardio",
            resp_inco1: "Miocardio",
            resp_inco2: "Endocardio",
            resp_inco3: "Todas son falsas"
        },
        {
            pregunta: "Según la acción que realicen, los músculos se pueden clasificar en distintos grupos:",
            resp_correcta: "A y B son verdaderas",
            resp_inco1: "Flexores, Extensores, Rotadores",
            resp_inco2: "Aductores, Abductores, movimiento de circunducción",
            resp_inco3: "A y B son falsas"
        },
        {
            pregunta: "¿Cuál es el nombre del proceso mediante el cual el cuerpo humano convierte los alimentos en energía?",
            resp_correcta: "Digestión",
            resp_inco1: "Fotosíntesis",
            resp_inco2: "Circulación",
            resp_inco3: "Respiración"
        },
        {
            pregunta: "¿Qué sistema del cuerpo es responsable de la producción de hormonas que regulan diversas funciones, como el metabolismo y el crecimiento?",
            resp_correcta: "Sistema endocrino",
            resp_inco1: "Sistema nervioso",
            resp_inco2: "Sistema inmunológico",
            resp_inco3: "Sistema linfático"
        },
        {
            pregunta: "El aparato urinario está formado por una serie de estructuras cuya función principal es recoger y eliminar todas las sustancias de desecho resultantes de las reacciones bioquímicas que tienen lugar en el organismo. Señala la respuesta incorrecta sobre las funciones del aparato urinario:",
            resp_correcta: "Eliminación de la orina a través de los uréteres",
            resp_inco1: "Almacenamiento de la orina en la vejiga",
            resp_inco2: "Transporte de la orina hasta la vejiga urinaria a través de los uréteres",
            resp_inco3: "Almacenamiento de la orina en la vejiga"
        },
        {
            pregunta: "Como se le llama al giro del antebrazo que coloca la palma de la mano hacia atrás o hacia abajo. indique la respuesta correcta:",
            resp_correcta: "Pronación",
            resp_inco1: "Rotación",
            resp_inco2: "Abducción",
            resp_inco3: "Supinación"
        },
        {
            pregunta: "¿Cuál de las siguientes afirmaciones es incorrecta acerca de las técnicas de movilización de pacientes?",
            resp_correcta: "Las técnicas de movilización deben ser realizas por una sola persona para mayor eficiencia",
            resp_inco1: "Las técnicas de movilización son importantes para prevenir complicaciones como ulceras por presión",
            resp_inco2: "Es importante comunicarse con el paciente antes de realizar una movilización",
            resp_inco3: "Las técnicas de movilización se utilizan para mejorar la circulación y la comodidad del paciente"
        },
        {
            pregunta: "En la posición de Fowler, el paciente se encuentra semi sentado formando un ángulo de:",
            resp_correcta: "45 grados",
            resp_inco1: "30 grados",
            resp_inco2: "90 grados",
            resp_inco3: "120 grados"
        },
        {
            pregunta: "Señale la afirmación incorrecta:",
            resp_correcta: "La posición de litotomía es en decúbito lateral",
            resp_inco1: "La posición de Fowler es semi sentada",
            resp_inco2: "La posición ginecológica es supina",
            resp_inco3: "La posición genupectoral es de rodillas"
        },
        {
            pregunta: "Cuando el celador traslada a un paciente desde un servicio a otro, ¿Qué no deberá hacer?",
            resp_correcta: "Colocar los drenajes sobre la cama",
            resp_inco1: "Llevar la historia clínica del paciente",
            resp_inco2: "Avisar al personal sanitario de que se lo va a llevar",
            resp_inco3: "Informar al paciente de que va a hacer con él"
        },
        {
            pregunta: "¿Por qué es importante movilizar a los pacientes encamados con regularidad?",
            resp_correcta: "Para mantener la circulación sanguínea adecuada y prevenir complicaciones",
            resp_inco1: "Para evitar la necesidad de cambio de ropa de cama",
            resp_inco2: "Para ahorrar tiempo de atención médica",
            resp_inco3: "Para dar a los pacientes la oportunidad de hacer ejercicio"
        },
        {
            pregunta: "Según el manual de manipulación de cargas del Servicio Navarro de Salud-Osasunbidea, uno de los principales factores que influyen en el manejo manual de cargas son las características de la carga, dentro de estas tendremos en cuenta el peso, ¿Cuántos kilos se aconseja no sobrepasar?",
            resp_correcta: "25 Kg",
            resp_inco1: "30 Kg",
            resp_inco2: "20 Kg",
            resp_inco3: "15 Kg"
        },
        {
            pregunta: "¿Cuál de las siguientes afirmaciones es verdadera acerca de las sujeciones utilizadas en el cuidado de pacientes?",
            resp_correcta: "Las sujeciones deben usarse solo como último recurso cuando sea necesario para la seguridad del paciente",
            resp_inco1: "Las sujeciones deben usarse como medida rutinaria para evitar que los pacientes se muevan",
            resp_inco2: "Las sujeciones no tienen riesgos y son completamente seguras",
            resp_inco3: "Las sujeciones son exclusivamente para pacientes con demencia"
        },
        {
            pregunta: "Si un celador sufre una agresión verbal, física o psíquica en el desempeño de su trabajo o como consecuencia directa de su trabajo, esta tendrá la consideración de:",
            resp_correcta: "Accidente de trabajo",
            resp_inco1: "Lesión física",
            resp_inco2: "Enfermedad común",
            resp_inco3: "Todas las respuestas anteriores son correctas"
        },
        {
            pregunta: "La infección nosocomial es una complicación frecuente de los pacientes ingresado en UCI, para evitar su aparición se llevan a cabo una serie de técnicas y cuidados. Indique la respuesta incorrecta.",
            resp_correcta: "Cada vez que se abandone la UCI para traslado de pacientes se debe guardar la bata, calzas, gorro, guantes, etc.… para el uso en otro paciente",
            resp_inco1: "Lavarse las manos tras el contacto con cada paciente",
            resp_inco2: "Si existe posibilidad de que los líquidos orgánicos del paciente pueden salpicar al personal, se utilizaran gafas protectoras y mascarillas",
            resp_inco3: "Si el paciente presenta infección respiratoria, se mantendrá aislado en una habitación individual de presión negativa"
        },
        {
            pregunta: "¿La persona celadora en UCI tiene la responsabilidad de diagnosticar enfermedades y prescribir tratamientos a los pacientes?",
            resp_correcta: "No, la persona celadora no tiene la formación ni la autorización para diagnosticar ni recetar tratamientos",
            resp_inco1: "Si, la persona celadora puede diagnosticar enfermedades y recetar tratamientos",
            resp_inco2: "Solo si el medico está de acuerdo con sus diagnósticos y tratamientos",
            resp_inco3: "Solo si el paciente lo solicita específicamente"
        },
        {
            pregunta: "Señale la respuesta correcta, la fase que transcurre desde que el paciente es colocado en la mesa de operaciones hasta que abandona el quirófano, es:",
            resp_correcta: "Transoperatoria",
            resp_inco1: "Postoperatoria",
            resp_inco2: "Perioperatoria",
            resp_inco3: "Preoperatoria"
        },
        {
            pregunta: "¿Qué tareas se le puede encomendar a un celador de quirófano durante una intervención quirúrgica?",
            resp_correcta: "Las respuestas A y B son correctas",
            resp_inco1: "Transporte de aparatos diagnósticos",
            resp_inco2: "Transporte de biopsia intraoperatoria a la Unidad Anatomía Patología",
            resp_inco3: "Las respuestas A y B son falsas"
        },
        {
            pregunta: "¿Cuál de estas respuestas es correcta sobre el Decreto Foral Legislativo 251/1993, de 30 de agosto, por el que se aprueba el Texto Refundido del Estatuto del Personal al servicio de las Administraciones Publicas de Navarra: título II, Capitulo VIII, Art. 40-. Son retribuciones complementarias del puesto de trabajo:",
            resp_correcta: "Todas son correctas",
            resp_inco1: "El complemento de puesto directivo",
            resp_inco2: "El complemento de prolongación de jornada",
            resp_inco3: "El complemento de incompatibilidad"
        },
        {
            pregunta: "En la comunicación del celador con los familiares del enfermo, indique la respuesta incorrecta:",
            resp_correcta: "Se informará del estado del enfermo y se lo comunicará a sus familiares",
            resp_inco1: "Se dirigirá siempre hacia ellos con respeto",
            resp_inco2: "Les hará llegar el mensaje que se quiera enviar con la máxima claridad posible",
            resp_inco3: "Debe mostrar empatía y evitar discusiones"
        },
        {
            pregunta: "Cuando un celador traslada a un enfermo a otras dependencias del hospital, indique la respuesta correcta:",
            resp_correcta: "Se responsabiliza también de la documentación que se le entregue en relación con el enfermo",
            resp_inco1: "La responsabilidad del celador es únicamente trasladar al enfermo de la forma más rápida y correcta posible",
            resp_inco2: "Sólo se responsabiliza de la documentación si lo lleva a Quirófanos",
            resp_inco3: "El personal de enfermería es el único responsable de la documentación clínica"
        },
        {
            pregunta: "Una de las funciones del celador de urgencias es, indique la respuesta correcta:",
            resp_correcta: "Mantener la entrada de urgencias convenientemente surtida de sillas de ruedas y camillas",
            resp_inco1: "Mantener limpia la sala de espera con la temperatura adecuada",
            resp_inco2: "Tomar todos los datos de identificación del paciente cuando llegue a Urgencias",
            resp_inco3: "Informar a los familiares del enfermo del lugar donde deben esperar y evolución del paciente"
        },
        {
            pregunta: "¿Quién envía el Plan de Salud al Parlamento de Navarra para su debate y aprobación dentro del año de finalización temporal del plan que esté vigente? Indique la respuesta correcta:",
            resp_correcta: "El Gobierno, a propuesta del Departamento de Salud previo informe del Consejo de Salud de Navarra",
            resp_inco1: "El Consejo de Salud de Navarra",
            resp_inco2: "El Departamento de Salud",
            resp_inco3: "El Gobierno, a propuesta del Consejo de Salud de Navarra, previo informe del Departamento de Salud"
        },
        {
            pregunta: "¿Quién es el Presidente del Consejo de Gobierno del Servicio Navarro de Salud–Osasunbidea? Indique la respuesta correcta:",
            resp_correcta: "El Consejero de Salud",
            resp_inco1: "Director gerente del Servicio Navarro de Salud–Osasunbidea",
            resp_inco2: "El Director General de Salud",
            resp_inco3: "El Secretario General Técnico del Departamento de Salud"
        },
        {
            pregunta: "Indique la respuesta correcta: La sábana travesera,",
            resp_correcta: "Recibe también el nombre de sábana de arrastre y entremetida",
            resp_inco1: "Se coloca cubriendo la mitad inferior de la cama",
            resp_inco2: "Suele ser impermeable y ajustable",
            resp_inco3: "No forma parte de la lencería"
        },
        {
            pregunta: "¿Qué conocemos por las siglas D.E.A., en el ámbito de las urgencias sanitarias? Indique la respuesta correcta:",
            resp_correcta: "Desfibrilador Externo Automático",
            resp_inco1: "Datos Externos Automatizados",
            resp_inco2: "Desfibrilador Esencial Automático",
            resp_inco3: "Desfibrilador Especial Automatizado"
        },
        {
            pregunta: "El 31 de marzo de 2009 se aprobó el protocolo de actuación ante agresiones externas del Servicio Navarro de Salud-Osasunbidea, el cual fue aprobado:",
            resp_correcta: "Por el Comité de Seguridad y Salud",
            resp_inco1: "Por la Dirección de Enfermería del HUN",
            resp_inco2: "Por la Dirección de Administración y Servicios Generales del HUN",
            resp_inco3: "Por el Jefe de Celadores"
        },
        {
            pregunta: "Indique la respuesta correcta: En la movilización de pacientes, el arnés es",
            resp_correcta: "Un dispositivo de elevación del paciente con poca movilidad",
            resp_inco1: "Un dispositivo de limpieza",
            resp_inco2: "Un dispositivo de inmovilización del paciente",
            resp_inco3: "Un dispositivo de recuperación funcional"
        },
        {
            pregunta: "Siguiendo el sistema Manchester de Triaje, ¿En cuántos niveles se clasifican los pacientes? Indique la respuesta correcta:",
            resp_correcta: "Cinco niveles",
            resp_inco1: "Cuatro niveles",
            resp_inco2: "Tres niveles",
            resp_inco3: "Seis niveles"
        },
        {
            pregunta: "La supervisora del Servicio de Urgencias le ordena que vaya a buscar los resultados de un HOLTER de un paciente que permanece en observación de urgencias, ¿A qué Servicio tendría que ir usted?",
            resp_correcta: "Al Servicio de Cardiología",
            resp_inco1: "Al Servicio de Cirugía",
            resp_inco2: "Al Servicio de Anatomía Patológica",
            resp_inco3: "Al Servicio de Urología"
        },
        {
            pregunta: "Destinados en el almacén debemos extremar al máximo las normas de mecánica corporal para evitar lesiones, por eso tenemos que saber que, en postura de sentado, no se deberían manipular cargas de más de:",
            resp_correcta: "Tres kg",
            resp_inco1: "Cinco kg",
            resp_inco2: "Seis kg",
            resp_inco3: "Cuatro kg"
        },
        {
            pregunta: "Cuando estamos colocando un paquete en una estantería de un almacén, según la normativa vigente sobre la manipulación manual de cargas, el peso teórico recomendado con la carga alejada del cuerpo y a la altura de la cabeza será de:",
            resp_correcta: "Siete kg",
            resp_inco1: "Once kg",
            resp_inco2: "Doce kg",
            resp_inco3: "Nueve kg"
        },
        {
            pregunta: "La capacidad de expresar sentimientos, ideas y opiniones, de manera clara, libre y sencilla comunicándolas en el momento justo y a la persona indicada se denomina:",
            resp_correcta: "Asertividad",
            resp_inco1: "Resumir",
            resp_inco2: "Empatía",
            resp_inco3: "Escucha activa"
        },
        {
            pregunta: "En el caso de que un celador sufra una agresión física en el desempeño de su trabajo o como consecuencia directa del mismo:",
            resp_correcta: "Todas las respuestas anteriores son correctas",
            resp_inco1: "La agresión deberá ponerse en conocimiento, lo antes posible, del responsable inmediato de la persona agredida",
            resp_inco2: "Si como consecuencia de la agresión, el trabajador necesita asistencia sanitaria, debe acudir al Servicio de Urgencias más cercano donde se le emitirá el correspondiente parte de lesiones",
            resp_inco3: "Se procederá a rellenar un formulario para el registro de dicha a agresión, que recibirá el SPRL y la Unidad de Personal que corresponda"
        },
        {
            pregunta: "No es función del celador de urgencias:",
            resp_correcta: "Avisar a los familiares de los pacientes que ingresan a planta para acompañarles",
            resp_inco1: "Ayudar al personal sanitario en la movilización de pacientes durante la colocación de férulas de yeso",
            resp_inco2: "Trasladar al servicio de mantenimiento electromédico la instrumentación médica averiada",
            resp_inco3: "Preparar el cadáver para su traslado al mortuorio"
        },
        {
            pregunta: "Indique la respuesta correcta: En caso de movilizar a una persona con múltiples traumatismos:",
            resp_correcta: "Se le desplazará en bloque",
            resp_inco1: "Dependerá si el paciente puede colaborar",
            resp_inco2: "Se le desplazará agarrándole por las axilas",
            resp_inco3: "Se le desplazará con un transfer entre dos personas"
        },
        {
            pregunta: "Indique la respuesta correcta: Cuando utilizamos una camilla de tijera tenemos que tener en cuenta:",
            resp_correcta: "El plano en el que se encuentre el paciente tiene que ser horizontal",
            resp_inco1: "Se debe colocar entre cuatro personas mínimo ya que sirve para inmovilizar",
            resp_inco2: "El plano en el que se encuentre el paciente tiene que ser semisentado",
            resp_inco3: "Se debe utilizar junto a las correas de sujeción"
        },
        {
            pregunta: "Cómo se denomina el tipo de cama articulada de estructura metálica dotada de un armazón o marco que le rodea que sujeta unas varillas metálicas situadas encima de la cama, para acoplar unas poleas que, mediante cuerdas, soportan diferentes sistemas de pesas y permiten la colocación de tracciones: Indique la respuesta correcta:",
            resp_correcta: "Cama traumatológica u ortopédica de Judet",
            resp_inco1: "Cama de levitación",
            resp_inco2: "Cama de Striker",
            resp_inco3: "Cama Roto-Test"
        },
        {
            pregunta: "En una bala de oxígeno el flujo de oxígeno se mide en: Indique la respuesta correcta:",
            resp_correcta: "Litros/minuto",
            resp_inco1: "Milímetros de mercurio",
            resp_inco2: "Atmósferas",
            resp_inco3: "Kilogramos por centímetro cúbico"
        },
        {
            pregunta: "Si traslada el celador a un paciente que se encuentra en observación a la consulta de cardiología ¿qué actuación no debe realizar para pasar al paciente del sillón en que se encuentra a la silla de ruedas?",
            resp_correcta: "Levantarlo del sillón tirando de los brazos del paciente",
            resp_inco1: "Colocar la silla al lado del sillón",
            resp_inco2: "Indicar al paciente que se coja de los hombros de las personas que le van a levantar",
            resp_inco3: "Cogerlo por las axilas, levantarlo y sentarlo en la silla de ruedas"
        },
        {
            pregunta: "En el área de urgencias, un paciente situado en un box pide agua al celador ¿Cuál debe ser su actitud? Indique la respuesta correcta:",
            resp_correcta: "Responder que no puede dárselo y ponerlo en conocimiento del personal de enfermería",
            resp_inco1: "Responder diciendo que no es personal sanitario y, por tanto, no puede dárselo",
            resp_inco2: "Darle agua a la mayor brevedad",
            resp_inco3: "Ignorar al paciente pues no es competencia suya"
        },
        {
            pregunta: "Indique la actuación incorrecta del celador en la ayuda al técnico de rayos X en las urgencias:",
            resp_correcta: "Tomar las medidas de protección correspondientes",
            resp_inco1: "Trasladar el aparato portátil a los diversos Boxes de observación",
            resp_inco2: "Ayudar al técnico en la movilización de los pacientes que lo requieran",
            resp_inco3: "Colocar el chasis bajo el paciente"
        },
        {
            pregunta: "Al enfriamiento del cuerpo después del fallecimiento se le llama:",
            resp_correcta: "Algor mortis",
            resp_inco1: "Rigor mortis",
            resp_inco2: "Livideces cadavéricas",
            resp_inco3: "Tanatopraxia"
        },
        {
            pregunta: "¿Quién es el máximo responsable de la indicación de la contención mecánica, quien la autoriza y decide su finalización? Indique la respuesta correcta:",
            resp_correcta: "A y B son correctas",
            resp_inco1: "El/la médico/a",
            resp_inco2: "El/la enfermero/a",
            resp_inco3: "El/la celador/a"
        },
        {
            pregunta: "Un celador que sufre una agresión verbal, física o psíquica en el desempeño de su trabajo o como consecuencia directa de su trabajo, tiene derecho a recibir:",
            resp_correcta: "Todas las respuestas anteriores son correctas",
            resp_inco1: "La asistencia sanitaria necesaria",
            resp_inco2: "El apoyo psicológico necesario",
            resp_inco3: "El asesoramiento legal necesario"
        },
        {
            pregunta: "¿Qué equipo es imprescindible al atender un paciente en aislamiento estricto?",
            resp_correcta: "Todo el equipo de protección individual (EPI)",
            resp_inco1: "Guantes y bata",
            resp_inco2: "Mascarilla y gafas de protección",
            resp_inco3: "Solo guantes desechables"
        },
        {
            pregunta: "¿Cuál es el objetivo de la Ley Foral 7/2019?",
            resp_correcta: "Todas son correctas",
            resp_inco1: "Garantizar la igualdad de oportunidades",
            resp_inco2: "Establecer criterios en la contratación pública",
            resp_inco3: "Promover la conciliación de la vida personal y laboral"
        },
        {
            pregunta: "¿Qué tipo de fracturas se denominan fracturas conminutas?",
            resp_correcta: "Aquellas en las que el hueso se rompe en diversos fragmentos",
            resp_inco1: "Aquellas que presentan una línea de fractura oblicua",
            resp_inco2: "Aquellas que presentan una rotura en espiral",
            resp_inco3: "Aquellas que afectan a huesos jóvenes con aspecto de tallo verde"
        },
        {
            pregunta: "En la posición de litotomía, ¿cómo se encuentra el paciente?",
            resp_correcta: "En decúbito supino",
            resp_inco1: "Semi-sentado",
            resp_inco2: "De rodillas",
            resp_inco3: "En decúbito lateral"
        },
        {
            pregunta: "¿Qué acción debe realizar un celador si un paciente solicita agua en Urgencias?",
            resp_correcta: "Ponerlo en conocimiento del personal de enfermería",
            resp_inco1: "Ignorar la solicitud del paciente",
            resp_inco2: "Entregarle agua inmediatamente",
            resp_inco3: "Negarse porque no es su responsabilidad"
        },
        {
            pregunta: "¿Cuál es la postura correcta para levantar cargas según las normas de seguridad?",
            resp_correcta: "Con la espalda recta y usando las piernas",
            resp_inco1: "Flexionando la espalda hacia adelante",
            resp_inco2: "Con los brazos extendidos",
            resp_inco3: "De pie y girando el tronco"
        },
        {
            pregunta: "En el protocolo de traslado de cadáveres, ¿qué es prioritario?",
            resp_correcta: "Usar un circuito específico para cadáveres",
            resp_inco1: "Asegurar que las joyas permanezcan en el cuerpo",
            resp_inco2: "Cubrir el cadáver con una sábana limpia",
            resp_inco3: "Informar a los familiares antes del traslado"
        },
        {
            pregunta: "¿Qué equipo es imprescindible al realizar una contención mecánica?",
            resp_correcta: "Correas de contención aprobadas",
            resp_inco1: "Material de inmovilización improvisado",
            resp_inco2: "Ninguno, depende de la situación",
            resp_inco3: "Sábanas adicionales"
        },
        {
            pregunta: "En caso de accidente biológico, ¿qué debe hacer el celador inmediatamente?",
            resp_correcta: "Todas son correctas",
            resp_inco1: "Informar al supervisor y seguir el protocolo establecido",
            resp_inco2: "Lavar la zona afectada con abundante agua y jabón",
            resp_inco3: "Contactar con el servicio de prevención de riesgos laborales"
        },
        {
            pregunta: "¿Qué término describe la incapacidad del cuerpo para mantener la temperatura corporal?",
            resp_correcta: "Hipotermia",
            resp_inco1: "Hipertermia",
            resp_inco2: "Pirexia",
            resp_inco3: "Afasia"
        },
        {
            pregunta: "¿Qué medida es importante para prevenir infecciones cruzadas en un hospital?",
            resp_correcta: "Lavar las manos antes y después del contacto con cada paciente",
            resp_inco1: "Reutilizar guantes y mascarillas siempre que sea posible",
            resp_inco2: "Evitar el contacto directo con pacientes infecciosos",
            resp_inco3: "Cerrar las puertas de todas las habitaciones de aislamiento"
        },
        {
            pregunta: "En el protocolo de aislamiento de contacto, ¿qué medida es incorrecta?",
            resp_correcta: "Llevar mascarilla quirúrgica siempre que se entre en la habitación",
            resp_inco1: "Retirar los guantes inmediatamente después de salir de la habitación",
            resp_inco2: "Usar guantes al entrar en la habitación",
            resp_inco3: "Evitar compartir equipos entre pacientes"
        },
        {
            pregunta: "¿Qué es la anafilaxia?",
            resp_correcta: "Una reacción alérgica grave que puede comprometer la vida",
            resp_inco1: "Una infección bacteriana del torrente sanguíneo",
            resp_inco2: "Una enfermedad viral que afecta al sistema inmunológico",
            resp_inco3: "Una inflamación crónica de las vías respiratorias"
        }
    ];
    
