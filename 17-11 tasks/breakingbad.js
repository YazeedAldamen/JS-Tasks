var data;
async function InfoOfUser(){
    const response = await fetch("https://www.breakingbadapi.com/api/characters");
     data = await response.json();

    
        for(let i = 0; i<data.length; i++){
            document.getElementById("charecters").innerHTML += `<option value="${data[i].img}" id="opt" >${data[i].name}</option>`;
            
        //    console.log("hi");
    }
}

InfoOfUser();

async function pic(){
    document.getElementById('img').src = document.getElementById("charecters").value;
}

