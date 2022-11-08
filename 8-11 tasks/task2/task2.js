

function flag(){

    let selected = document.getElementById("country").value;
    if (selected == "jordan"){
        document.getElementById("img").src = "/task2/images/jordan.jpg";
    }

    else if (selected == "mexico"){
        
        document.getElementById("img").src = "/task2/images/mexico.png";

    }
    else if (selected == "italy"){
        document.getElementById("img").src = "/task2/images/italy.png";

    }
    else if (selected == "japan"){
        document.getElementById("img").src = "/task2/images/japan.png";

    }
    else if (selected == "uk"){
        document.getElementById("img").src = "/task2/images/uk.png";

    }



}


