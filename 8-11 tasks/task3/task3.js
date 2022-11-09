function bolds(){
    var bold=document.getElementById("bold").checked;
    if (bold){
        document.getElementById("area").style.fontWeight="bold";
    }
    else {
        document.getElementById("area").style.fontWeight="normal";

    }
}

function italics(){
    var italic=document.getElementById("italic").checked;
    if (italic){
        document.getElementById("area").style.fontStyle="italic";
    }
    else {
        document.getElementById("area").style.fontStyle="normal";

    }
}

function underlines(){
    var under=document.getElementById("underline").checked;
    if (under){
        document.getElementById("area").style.textDecoration="underline";
    }
    else {
        document.getElementById("area").style.textDecoration="none";

    }
}

function fontfamily(){
    var fam= document.getElementById("font").value;
    if (fam == "arial"){
        document.getElementById("area").style.fontFamily="Arial";
    }
    else if (fam == "times"){
        document.getElementById("area").style.fontFamily= "Times";
    }
}


function fontsizes(){
    var size=document.getElementById("size").value;
    if (size == "12"){
        document.getElementById("area").style.fontSize="12px";
    }

    else if (size =="20"){
        document.getElementById("area").style.fontSize="20px";
    }
}