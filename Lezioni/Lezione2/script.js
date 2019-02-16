        function myFunction(){

            var myNumber = prompt("Write a number:");
            myNumber = parseInt(myNumber);

            if ( myNumber < 0){

            alert('Given number is negative, Absing it..');

            myNumber = Math.abs(myNumber);

            } else {

            alert("Given number is positive");
            }

            var squareRoot = Math.sqrt(myNumber);

            alert(squareRoot);
        }