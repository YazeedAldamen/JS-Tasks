let mark = 69;

if (mark < 0 ){
    document.write("Invalid Entry")

}


else if (mark >= 0 && mark < 50){
    document.write("FAIL");
}

else if (mark <60 ){
    document.write("D");
}
else if (mark <70 ){
    document.write("C");
}
else if (mark <80 ){
    document.write("B");
}
else if (mark <90 ){
    document.write("A");
}
else if (mark <= 100 ){
    document.write("A+");
}

else {
    document.write("Invalid Entry")
}