function pass() {
    let passwordd = document.getElementById("password").value;
    
    if (passwordd.length < 6){
        document.getElementById('p1').style.color="red";
        document.getElementById('p1').innerHTML="Too short";
    }
    else {
        document.getElementById('p1').style.display="none";

    }
    
  }

function repeats(){
    let re=document.getElementById("repeat").value;
    let passwordd = document.getElementById("password").value;
    if (re != passwordd ){
        document.getElementById('p2').style.color="red";
        document.getElementById("p2").innerHTML="the two passwords don't match";
    }
    
    else if ( re == passwordd && passwordd.length > 5 && re.length >5) {
        document.getElementById("btn").style.display="block";
        document.getElementById("p2").style.display="none";

    };
     if (re != passwordd || passwordd.length < 6  ){
        document.getElementById("btn").style.display="none";
    }

}