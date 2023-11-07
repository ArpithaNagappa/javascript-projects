//TODO: Add Your Code Below
window.addEventListener("load", function(){
fetch ("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
    response.json().then(function(json){
    console.log(json);
    //sorted one
    let sortedAstro = json.sort(function(a,b){return a.hoursInSpace - b.hoursInSpace});
   
    const container = document.getElementById("container");
     for (i=0;i < json.length;i++){
     let astronauts=json[i];
     //json.forEach(function(astronauts){
 
   container.innerHTML += 
                `<div class="astronaut">
                    <div class="bio">
                        <h3>${astronauts.firstName}${astronauts.lastName}</h3>
                        <ul>
                        <li>Hours in space:${astronauts.hoursInSpace}</li>
                        <li id ="green${i}">Active: ${astronauts.active}</li>
                        <li>Skills: ${astronauts.skills.join(", ")}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${astronauts.picture}">
                </div> `;
     }
     // CSS
        let greenText = document.getElementById(`green${i}`)
            if(astronauts.active === true){
                greenText.style.color="green";
            }
        });
    });
});
