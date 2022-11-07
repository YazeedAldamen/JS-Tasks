let input=Number(prompt("insert a number"));

function isOdd(num){
    if (num % 2 != 0){
        document.write("true");
    }
    else {
        document.write("false");

    }
}

isOdd(input);