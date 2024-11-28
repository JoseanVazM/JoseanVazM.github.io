        // Arrays que necesitaremos recoger valores en una función y usarlos en otra distinta.
        let preguntas_final = [];
        let resp_pos_correcta = [];
        let respuestas_final = [];
        let iniciado = 0;
        const num_preguntas = document.getElementsByClassName("rsp1");
        const num_respuestas = document.getElementsByName("opt0");

        function generar_examen() { // generamos las preguntas aleatorias
            let sel_pregunta = [], // array donde guardaremos la posición de cada pregunta
                pos_correcta = [], // array donde guardaremos la posición que ocupará la pregunta correcta
                n_pregunta; // variable que usaremos para guardar la posición de la pregunta con random

            if (iniciado==1){ // si ya se ha respondido por lo menos 1 vez, reinicio los label y los radios
                const validas = document.querySelectorAll("label");
                const inp_marcados = document.querySelectorAll("input[type=radio]");
                for (i=0; i<validas.length;i++){
                    if (validas[i].className=="valid"){
                        validas[i].classList.remove("valid");
                        validas[i].classList.add("lbl");
                    } else{
                        validas[i].classList.remove("invalid");
                        validas[i].classList.add("lbl");
                    }
                    inp_marcados[i].checked=false;
                    inp_marcados[i].disabled=false;
                }

                const check = document.querySelectorAll("p");
                for (i=0; i<check.length; i++){
                    if (check[i].className=="checkOK" || check[i].className=="checkNoK"){
                        check[i].classList.remove(check[i].className);
                        check[i].classList.add("check");
                    }
                }
                respuestas_final = [];
            }

            let pasa = true;
            
            for (let i = 0; i<num_preguntas.length; i++){ // empezamos a generar y guardar las posiciones de las preguntas
                n_pregunta = Math.floor(Math.random() *(preguntas.length));
                for (x in sel_pregunta){ 
                    //este for sirve para que no se repitan las preguntas; si se repite vuelve a hacer random en la misma posición.
                    if (sel_pregunta[x] == n_pregunta){
                        i--;
                        pasa = false;
                        break;
                    }
                }
                // guardamos la posición donde pondremos las respuestas correctas, tanto en el array interno como en el externo.
                if (pasa==true){
                    pos_correcta[i] = Math.floor(Math.random() *(num_respuestas.length))+1;
                    resp_pos_correcta[i] = pos_correcta[i];
                    // guardamos la posición que corresponde a la pregunta y la respuesta correcta.
                    sel_pregunta[i] = n_pregunta;
                    preguntas_final[i] = n_pregunta;
                }
                pasa = true;
            }

            for (j = 0; j<num_preguntas.length; j++){ 
                // en este for llamamos a las siguientes funciones para mostrar las preguntas y respuestas en pantalla, las respuestas correctas se colocan en posición random (1 a 3)
                genera_pregunta(parseInt(j)+1, sel_pregunta);
                genera_respuestas(parseInt(j), pos_correcta, sel_pregunta);
            }
            document.getElementById("correctas").innerHTML = "";
            document.getElementById("generar").style.visibility="hidden";
            document.getElementById("comprueba").style.visibility="visible";

            iniciado = 1;
        }

        function genera_pregunta(num_pregunta, sel_pregunta) { // coloca pregunta en la posición indicada
            let pregunta = document.getElementById("pregunta"+num_pregunta);
            pregunta.innerHTML = parseInt(num_pregunta) + "- " + preguntas[sel_pregunta[parseInt(num_pregunta)-1]].pregunta;
        }

        function genera_respuestas(num_respuesta, pos_correcta, sel_pregunta) { 
        //coloca respuesta correcta en la posición indicada y en las otras 2 posiciones respuestas incorrectas

            let radio;
            let lbl;

            for (i=0; i<num_respuestas.length; i++){ 
            // recorre las 3 posiciones de cada grupo de respuestas y coloca la correcta en la posición indicada (la posición se elije por random)
                radio = document.getElementById("opt"+i+"_"+num_respuesta);
                lbl = document.getElementById("opt"+num_respuesta+"_"+i+"_"+num_respuesta);
                if (pos_correcta[num_respuesta]==1) {
                    if (i==0){
                        lbl.innerHTML = preguntas[sel_pregunta[num_respuesta]].resp_correcta;
                    } else if(i==1){
                        lbl.innerHTML = preguntas[sel_pregunta[num_respuesta]].resp_inco1;
                    }else if(i==2){
                        lbl.innerHTML = preguntas[sel_pregunta[num_respuesta]].resp_inco2;
                    }else {
                        lbl.innerHTML = preguntas[sel_pregunta[num_respuesta]].resp_inco3;
                    }
                }else if (pos_correcta[num_respuesta]==2) {
                    if (i==0){
                        lbl.innerHTML = preguntas[sel_pregunta[num_respuesta]].resp_inco1;
                    } else if(i==1){
                        lbl.innerHTML = preguntas[sel_pregunta[num_respuesta]].resp_correcta;
                    }else if(i==2){
                        lbl.innerHTML = preguntas[sel_pregunta[num_respuesta]].resp_inco2;
                    }else{
                        lbl.innerHTML = preguntas[sel_pregunta[num_respuesta]].resp_inco3;
                    }
                }else if (pos_correcta[num_respuesta]==3) {
                    if (i==0){
                        lbl.innerHTML = preguntas[sel_pregunta[num_respuesta]].resp_inco1;
                    } else if(i==1){
                        lbl.innerHTML = preguntas[sel_pregunta[num_respuesta]].resp_inco2;
                    }else if(i==2){
                        lbl.innerHTML = preguntas[sel_pregunta[num_respuesta]].resp_correcta;
                    }else{
                        lbl.innerHTML = preguntas[sel_pregunta[num_respuesta]].resp_inco3;
                    }
                }else{
                    if (i==0){
                        lbl.innerHTML = preguntas[sel_pregunta[num_respuesta]].resp_inco1;
                    } else if(i==1){
                        lbl.innerHTML = preguntas[sel_pregunta[num_respuesta]].resp_inco2;
                    }else if(i==2){
                        lbl.innerHTML = preguntas[sel_pregunta[num_respuesta]].resp_inco3;
                    }else{
                        lbl.innerHTML = preguntas[sel_pregunta[num_respuesta]].resp_correcta;
                    }
                }
                radio.style.visibility = "visible";
                lbl.style.visibility = "visible";
            }
        }

        function guarda_resp(cual, donde) { 
            /* guarda en un array de 3 elementos el radio que has pinchado, se llama desde onclick de cada radio pasando 
            nº de la pregunta a la que respondes (1,2 o 3) y la respuesta que elijes (1,2 o 3) */

            respuestas_final[donde]= cual;
        }

        function comprobar() { // comprueba el numero de aciertos, inhabilita los radios y cambia el color a las respuetas correctas (a verde) y las incorrectas (a rojo)
            let aciertos = 0;
            const resp_marcadas = document.querySelectorAll("label");
            const inp_marcados = document.querySelectorAll("input[type=radio]");
            let j;
            let z=0;
            
            for (x = 0; x<inp_marcados.length;x++){ // for para cambiar el color e inhabilitar los radios
                if (x<num_respuestas.length){
                    j=parseInt(x)+1;
                } else if(x<(num_respuestas.length*2)){
                    j=x-3;
                }else if(x<(num_respuestas.length*3)){
                    j=x-7;
                }else if(x<(num_respuestas.length*4)){
                    j=x-11;
                }else if(x<(num_respuestas.length*5)){
                    j=x-15;
                }else if(x<(num_respuestas.length*6)){
                    j=x-19;
                }else if(x<(num_respuestas.length*7)){
                    j=x-23;
                }else if(x<(num_respuestas.length*8)){
                    j=x-27;
                }else if(x<(num_respuestas.length*9)){
                    j=x-31;
                }else{
                    j=x-35;
                }
                resp_marcadas[x].classList.remove("lbl");
                if (resp_pos_correcta[z]==j){
                    resp_marcadas[x].classList.add("valid");
                }else{
                    resp_marcadas[x].classList.add("invalid");
                }
                if (parseInt(x+1)%4 == 0){
                    z++;
                }
                inp_marcados[x].disabled = true;
            }

            const check = document.querySelectorAll("p[class=check]");
            for (i in preguntas_final){ // for para contar los aciertos
                check[i].classList.remove("check");
                if (resp_pos_correcta[i] == respuestas_final[i]){
                    check[i].classList.add("checkOK");
                    aciertos++;
                } else{
                    check[i].classList.add("checkNoK");
                }
            }
            document.getElementById("correctas").innerHTML = "Has acertado " + aciertos + " de " + num_preguntas.length + " preguntas."
            document.getElementById("generar").style.visibility="visible";
            document.getElementById("comprueba").style.visibility="hidden";
        }