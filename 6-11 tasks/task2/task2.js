/* for (let i=1 ; i<11;i++ ){
    document.write(i)
    
    if (i==2){
        i+=1
        document.write(i)
    }

    if (i==4){
        i+=1;
        document.write(i);
        i+=1;
        document.write(i);
    }

    if (i == 7){
        i+=1;
        document.write(i);
        i+=1;
        document.write(i);
        i+=1;
        document.write(i);
    }
    document.write("<br/>")
} */

let x=1

for (let i=1; i<5;i++){
    
    for (let j=0; j<(i);j++){
        document.write(x);
        x+=1;
    }
    
    document.write("<br/>")
}