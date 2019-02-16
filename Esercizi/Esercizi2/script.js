
	//INSERIMENTO OPERATORE
	function inputOperator(){

		var operator = prompt("Scegli l'operazione da svolgere es.(+ - * /)");

		return operator;
	}

	//CONTROLLO OPERATORE
	function switchCheck(operator){

		switch(operator){
			case "+":
			case "-":
			case "*":
			case "/":
				return true;
			default:
				return false;
		}
	}

	//RESTART IN CASO L'OPERATORE INSERITO NON SIA VALIDO
	function inputCheck(check){

		if (check == true){
			inputNumbers();
			switchOperation(operator);
		} else {
			alert("Qualcosa è andato storto...Riprova");
			start();

		}
	}

	//START
	function start(){

		operator = inputOperator(); 
		check = switchCheck(operator);
		inputCheck(check);
	}

	//SWITCH PER IL TIPO DI OPERAZIONE DA EFFETTUARE
	function switchOperation(operator){

		switch (operator){
		    case "+":
		        sum();
		        break
		    case "-":
		        minus();
		        break
		    case "*":
		        multiply();
		        break
		    case "/":
		        divide();
		        break
		}
	}

	//INSERIMENTO NUMERI
	function inputNumbers(){

		firstNumber = prompt("Inserisci il primo numero");
		secondNumber = prompt("Inserisci il secondo numero");

		firstNumber = parseInt(firstNumber);
		secondNumber = parseInt(secondNumber);
	}


	//OPERAZIONI
	function sum(){

        result = firstNumber + secondNumber;

        alert("Il risultato è " + result);
    }

    function minus(){

        result = firstNumber - secondNumber;

        alert("Il risultato è " + result);
    }

    function multiply(){

        result = firstNumber * secondNumber;

        alert("Il risultato è " + result);
    }

    function divide(){

        result = firstNumber / secondNumber;
        
        alert("Il risultato è " + result);        
    }


