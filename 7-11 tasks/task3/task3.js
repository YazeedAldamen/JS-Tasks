var strings= ["alex","mercer","madrasa","rashed2","emad","hala"];

function shorterInArray(arr){
    let shortest=100;
    let str="";
    for(let i=0; i<arr.length;i++){

        if (arr[i].length < shortest){ 
            shortest=arr[i].length;
            str =arr[i];
            
        }
        
    }
    return str
}

let ting=shorterInArray(strings);
document.write(ting);