let x=Number(prompt("Enter a number"));
let y=Number(prompt("Enter another number"));

function largestNum (a,b){
    if (a>b){
        document.write(`the two numbers are: ${a} and ${b}, and the largest number is ${a}`)
    }
    else {
        document.write(`the two numbers are: ${a} and ${b}, and the largest number is ${b}`)
    }
}

largestNum(x,y);