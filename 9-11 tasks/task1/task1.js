


function gather(){
    
    document.getElementById("card").style.display = "block";

    localStorage.setItem("name",document.getElementById("name").value);
    localStorage.setItem("age",document.getElementById("age").value);
    localStorage.setItem("male",document.getElementById("male").checked);
    localStorage.setItem("female",document.getElementById("female").checked);
    localStorage.setItem("textarea",document.getElementById("area").value);
    localStorage.setItem("major",document.getElementById("major").value);
    localStorage.setItem("js",document.getElementById("js").checked);
    localStorage.setItem("python",document.getElementById("python").checked);
    localStorage.setItem("php",document.getElementById("php").checked);

    let name = localStorage.getItem("name");
    let age = localStorage.getItem("age");
    let male = localStorage.getItem("male");
    let female = localStorage.getItem("female");
    let area = localStorage.getItem("textarea");
    let major = localStorage.getItem("major");
    let js = localStorage.getItem("js");
    let python = localStorage.getItem("python");
    let php = localStorage.getItem("php");

    let card = document.getElementById("card");


    document.getElementById("pname"). innerHTML += name;
    document.getElementById("page"). innerHTML += age;

    if (male == "true"){
        document.getElementById("pgender").innerHTML += "Male";
    }
    else if (female == "true"){
        document.getElementById("pgender").innerHTML += "Female";

    };

    document.getElementById("pdescription").innerHTML += area;
    document.getElementById("pmajor").innerHTML += major;

    if (js == "true"){
        document.getElementById("plang").innerHTML += "JavaScript ";
    };
    if (python == "true"){
        document.getElementById("plang").innerHTML += "Python ";    };
    if (php == "true"){
        document.getElementById("plang").innerHTML += "php ";    };
   
   

    
    

}