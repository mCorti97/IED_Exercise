	function start(){
    var ingredients = ["farina","uova","latte"];

    for (var indexIn in ingredients){
        var ingredient = ingredients[indexIn];
        
        printStringLenght(ingredient);
    }

    function printStringLenght(ingredient){
       var stringLength = ingredient.length;
       alert(ingredient + " è composto da " + stringLength + " lettere");
    }

}


