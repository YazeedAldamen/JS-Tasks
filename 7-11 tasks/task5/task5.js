let input=Number(prompt("insert a number"));

function isOdd(num){
    if (num % 2 != 0){
        document.write("true it's odd");
    }
    else {
        document.write("false it's even");

    }
}

isOdd(input);