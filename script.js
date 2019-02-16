        	//TOGGLE BOTTONI


        	//PRIMO
        	codice = document.getElementById("codice");
            mostra = document.getElementById("primo1");
            nascondi = document.getElementById("primo0");

            function mostraCodice(){

                codice.classList.remove("hide");
                codice.classList.add("display");

                mostra.classList.remove("display");
                mostra.classList.add("hide");

                nascondi.classList.remove("hide");
                nascondi.classList.add("display");
            }

            function nascondiCodice(){
            	codice.classList.remove("display");
            	codice.classList.add("hide");

            	mostra.classList.remove("hide");
            	mostra.classList.add("display");

            	nascondi.classList.remove("display");
            	nascondi.classList.add("hide");
            }

            //SECONDO
            codice1 = document.getElementById("codice1");
            mostra1 = document.getElementById("secondo1");
            nascondi1 = document.getElementById("secondo0");

            function mostraCodice1(){

                codice1.classList.remove("hide");
                codice1.classList.add("display");

                mostra1.classList.remove("display");
                mostra1.classList.add("hide");

                nascondi1.classList.remove("hide");
                nascondi1.classList.add("display");
            }

            function nascondiCodice1(){
            	codice1.classList.remove("display");
            	codice1.classList.add("hide");

            	mostra1.classList.remove("hide");
            	mostra1.classList.add("display");

            	nascondi1.classList.remove("display");
            	nascondi1.classList.add("hide");
            }

            //TERZO
            codice2 = document.getElementById("codice2");
            mostra2 = document.getElementById("terzo1");
            nascondi2 = document.getElementById("terzo0");
            
            function mostraCodice2(){

                codice2.classList.remove("hide");
                codice2.classList.add("display");

                mostra2.classList.remove("display");
                mostra2.classList.add("hide");

                nascondi2.classList.remove("hide");
                nascondi2.classList.add("display");
            }

            function nascondiCodice2(){
            	codice2.classList.remove("display");
            	codice2.classList.add("hide");

            	mostra2.classList.remove("hide");
            	mostra2.classList.add("display");

            	nascondi2.classList.remove("display");
            	nascondi2.classList.add("hide");
            }