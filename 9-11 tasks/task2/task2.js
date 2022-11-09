


function gather(){
    
    document.getElementById("card").style.display = "block";




    localStorage.setItem("subject",document.getElementById("subject").value);
    localStorage.setItem("provider",document.getElementById("provider").checked);
    localStorage.setItem("buyer",document.getElementById("buyer").checked);
    localStorage.setItem("textarea",document.getElementById("area").value);
    localStorage.setItem("js",document.getElementById("js").checked);
    localStorage.setItem("python",document.getElementById("python").checked);
    localStorage.setItem("php",document.getElementById("php").checked);




    let subject = localStorage.getItem("subject");
    let provider = localStorage.getItem("provider");
    let buyer = localStorage.getItem("female");
    let area = localStorage.getItem("textarea");
    let js = localStorage.getItem("js");
    let python = localStorage.getItem("python");
    let php = localStorage.getItem("php");


    let card = document.getElementById("card");


    document.getElementById("psubject"). innerHTML += subject;

    if (provider == "true"){
        document.getElementById("pusertype").innerHTML += "provider";
    }
    else if (buyer == "true"){
        document.getElementById("pusertype").innerHTML += "buyer";

    };

    document.getElementById("pdescription").innerHTML += area;
    
    if (js == "true"){
        document.getElementById("plang").innerHTML += "JavaScript ";
    };
    if (python == "true"){
        document.getElementById("plang").innerHTML += "Python ";    };
    if (php == "true"){
        document.getElementById("plang").innerHTML += "php ";    };
   
   

    
    

}