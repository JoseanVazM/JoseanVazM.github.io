
        // Declaro variables para usar en distintas funciones
        let sel_palabra; // Posición de la palabra obtenido por random
        let palabra_selec; // Array con todas las letras de la palabra
        let intentos = 11;
        let palabras_usadas =[];
        let cont_palabras_usadas = 0;
        let num_palabras = 0;


        // Función para iniciar y reiniciar el juego.
        function iniciar() { 
            genera_palabra();
            reiniciar_botones(false);
            document.getElementById("iniciar").style.backgroundColor = "#00ffb3";
        }

        // Función para escoger la palabra (y la pista) y generar los _ en las letras a adivinar
        function genera_palabra() {
            // Reinicio intentos y la imagen
            intentos = 11;
            document.getElementById("intentos").innerHTML = "Remaining attempts: " + intentos;
            document.getElementById("intentos").className = "palabra";
            document.getElementById("imagen").src = `img/ahorcado_${intentos}.png`;
            
            // Seleccionar una palabra aleatoria que no se haya usado en las últimas 10 jugadas
            do {
                sel_palabra = Math.floor(Math.random() * palabras.length);
            } while (palabras_usadas.includes(sel_palabra));

            num_palabras = palabras[sel_palabra].palabra.split(" ").length;
            
            // Actualizar el registro de palabras usadas
            palabras_usadas[cont_palabras_usadas] = sel_palabra;
            cont_palabras_usadas = (cont_palabras_usadas + 1) % 10;
            
            // Obtener la palabra seleccionada y dividirla en un array de letras
            palabra_selec = palabras[sel_palabra].palabra.split("");
            
            // Mostrar la cantidad de letras y la pista
            if (num_palabras>1) {
                document.getElementById("acierto").innerHTML = `The word has: ${(palabra_selec.length-(num_palabras-1))} letters.`;
            }else{
                document.getElementById("acierto").innerHTML = `The word has: ${palabra_selec.length} letters.`;                
            }
            document.getElementById("pista").innerHTML = `<b>Hint:</b><br>${palabras[sel_palabra].pista}`;
            
            // Generar los espacios para cada letra o espacio
            let palabra_mostrada = palabra_selec.map(caracter => caracter === " " ? "&nbsp;&nbsp;" : "_ ").join("");
            document.getElementById("palabra").innerHTML = palabra_mostrada;
        }
                                        

        // Función para habilitar los botones
        function reiniciar_botones(habilitar) { 
            // Asigno a btn un array con todos los botones y los recorro habilitando/deshabilitando según sea necesario
            document.querySelectorAll("button").forEach(btn => {
                if (btn.id !== 'iniciar') {
                    btn.disabled = habilitar;
                }
            });
        }
        

        // Recibe como variable el elemento del botón pulsado ("A","B", "C"....) para sacar su ID
        function comprobar(letra_pulsada) { 
            let letra ="";
            const posicion = [];

            // Desabilito el botón pulsado
            document.getElementById(letra_pulsada.id).disabled = true;

            // A la variable letra asigno la letra pulsada en botón, si es la Ñ tiene el id=N2
            if (letra_pulsada.id == "N2") {
                letra = "Ñ";
            }else{
                letra = letra_pulsada.id;
            }

            // Guardo en un array las posiciones de las letras, si están en la palabra a adivinar.
            for (i in palabra_selec){
                if (palabra_selec[i] == letra.toLowerCase()){
                    posicion.push(i);
                }
            }

            // Compruebo si la letra pulsada está en la palabra a adivinar; si no está quito un intento, lo resto en pantalla y cambio la imagen.
            let completa = false;
            let guion_puesto = false;

            if (posicion.length<1) {
                intentos-=1;
                document.getElementById("intentos").innerHTML = "Remaining attempts: " + intentos;
                document.getElementById("imagen").src = "img/ahorcado_"+intentos+".png";
            } else{ // Si la letra está, sustituyo el _ por la letra en la posición que corresponde
                let guiones = document.getElementById("palabra").textContent.replace("&nbsp;&nbsp;", "").split(""); // Guardo las letras y guiones que muestra en pantalla en un array
                let guiones2 = []; // Genero un array vacío

                // recorro el array donde he guardado las letras y guiones para guardar solo letras y guiones, sin espacios ni huecos
                let z = 0;
                let y = 0;
                
                for (let i = 0; i < guiones.length; i++) { 
                    if ((guiones[i].charCodeAt(0) != 32 && guiones[i].charCodeAt(0) != 160)) {
                        guiones2.push(guiones[i]);
                    } else if ((guiones[i].charCodeAt(0) === 32 || guiones[i].charCodeAt(0) === 160) && 
                                (guiones[z].charCodeAt(0) === 32 || guiones[z].charCodeAt(0) === 160) && 
                                (guiones[y].charCodeAt(0) === 32 || guiones[y].charCodeAt(0) === 160)) {
                        guiones2.push("&nbsp;&nbsp;");
                    }
                    
                    z = i;
                    y = z + 2;
                }
                

                // Recorro el array de la palabra a adivinar para comprobar si hubiera alguna letra acertada
                for (i in palabra_selec){
                    if (palabra_selec[i] == letra.toLowerCase()){
                        guiones2[i] = letra.toLowerCase()+" "; // Si acierta una letra, la ubico en la posición donde la ha encontrado
                        if (!guion_puesto){
                            completa = true;
                        }
                    }
                    else if(guiones2[i]=="_"){
                        guiones2[i] = "_ " // Si no va encontrando, añade a la posición espacio, guión y espacio a la posición donde no coincide la letra
                        completa = false;
                        guion_puesto = true;
                    }
                    else if((guiones2[i].charCodeAt(0) == 32 || guiones2[i].charCodeAt(0) == 160)){
                        guiones2[i] = "&nbsp;&nbsp;"
                    }
                    else if(palabra_selec[i]==guiones2[i]){
                        guiones2[i] = guiones2[i] + " ";
                    }
                }
                document.getElementById("palabra").innerHTML = ""; // Vacío el texto mostrado en pantalla
                for (x in guiones2){ // muestro en pantalla las letras y guiones guardados en el array anteriormente
                    document.getElementById("palabra").innerHTML += guiones2[x];
                }
            }

            if (intentos<11 && document.getElementById("iniciar").style.backgroundColor == "rgb(0, 255, 179)") {
                document.getElementById("iniciar").style.backgroundColor = "rgb(255, 255, 0)";
            }

            // Compruebo si has adivinado todas las letras, saco el mensaje de Felicidades y desabilito los botones de letra.
            if (completa){
                document.getElementById("intentos").innerHTML = "Congratulations, the word was: <br>" + palabras[sel_palabra].palabra;
                document.getElementById("intentos").className = "acierto";
                document.getElementById("iniciar").style.backgroundColor = "#00ffb3";
                reiniciar_botones(true);
            }

            if (intentos==1) {
                document.getElementById("iniciar").style.backgroundColor = "rgb(255, 0, 0)";
            }

            // Si los intentos llegan a 0, muestro en pantalla que has fallado y la palabra que era, desabilito todos los botones con letra.
            if (intentos==0) {
                document.getElementById("intentos").innerHTML = "Sorry, the word was: <br>" + palabras[sel_palabra].palabra;
                document.getElementById("intentos").className = "acierto";
                reiniciar_botones(true);
            }

        }
