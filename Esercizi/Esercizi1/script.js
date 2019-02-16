            //Esercizio 1
            function oneNumber() {
                var number = prompt("Inserisci un numero");

                parseInt(number);

                if (number == 10){
                    alert("Il numero è uguale a 10");
                }
            }

            //Esercizio 2
            function twoNumbers(){
                var firstNum = prompt("Inserisci un numero");
                var secondNum = prompt("Inserisci un altro numero");

                parseInt(firstNum);
                parseInt(secondNum);

                if (firstNum == secondNum){
                    alert("I due numeri sono uguali tra loro");
                }
            }

            //Esercizio 3
            function twoStrings(){
                var firstString = prompt("Inserisci una stringa");
                var secondString = prompt("Inserisci un'altra stringa");

                if (firstString == secondString){
                    alert("Le stringhe sono uguali tra loro");
                }
                else{
                    alert("Le stringhe non sono uguali tra loro")
                }
            }