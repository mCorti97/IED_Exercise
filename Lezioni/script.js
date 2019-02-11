//IF

function readNumber(){
    var myNumber = prompt("Scrivi un numero: ");

    myNumber = parseInt(myNumber);

    return myNumber;
}

function printMessage(message){
    var myMessage = message;

    alert(myMessage);

    return;
}

function isEqualToTen(myNumber){
    const COMPARABLE_NUMBER = 10;

    return myNumber == COMPARABLE_NUMBER;
}

function simpleCheck(){
    var readedNumber = readNumber();
    var  isThatNumberEqualToTen = isEqualToTen(readedNumber);

    if (isThatNumberEqualToTen){
        printMessage('Sì, il numero è uguale a 10');
    }
}

simpleCheck();

//IF - ELSE

function binaryCheck(){
    var readedNumber = readNumber();
    var  isThatNumberEqualToTen = isEqualToTen(readedNumber);

    if (isThatNumberEqualToTen){
        printMessage('Sì, il numero è uguale a 10');
    } else{
        printMessage('No, il numero non è uguale a 10');
    }
}

//SWITCH CASE

function switchPie(myNumber){
    switch(myNumber){
        case 2:
        case 5:
        case 7:
        case 13:
            return 'Primo';
        case 10:
            return 'Base';
        case 8:
        case 64:
            return 'Octal';
        default:
            return 'None';
    }
}

