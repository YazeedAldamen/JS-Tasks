function bolds(){
    var bold=document.getElementById("bold").value;
    if (bold == "bold"){
        document.getElementById("area").style.fontWeight="bold";
    }
}

function italics(){
    var italic=document.getElementById("italic").value;
    if (italic == "italic"){
        document.getElementById("area").style.fontStyle="italic";
    }
}

function underlines(){
    var under=document.getElementById("underline").value;
    if (under == "underline"){
        document.getElementById("area").style.textDecoration="underline";
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