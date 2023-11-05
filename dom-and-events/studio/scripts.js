// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function(){;

    let rocketPosX=0;
    let rocketPosY=0;
    let altitude =0;

    const abortMission= document.getElementById("missionAbort");
    const liftOff = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const shuttleHeight =document.getElementById("spaceShuttleHeight");//Number(shuttleheight.innerHTML)
    const Land =document.getElementById("landing");
    const Up =document.getElementById("up");
    const Down =document.getElementById("down");
    const Right =document.getElementById("right");
    const Left =document.getElementById("left");
    const rocket =document.getElementById("rocket")
  

    liftOff.addEventListener("click", function(){
        let takeoff = confirm("Confirm that the shuttle is ready for takeoff.");
        if(takeoff== true){
        flightStatus.innerHTML="Shuttle in flight.";
        shuttleBackground.style.backgroundColor ="blue";
        altitude= 10000;
        shuttleHeight.innerHTML= altitude;
        }
});
    Land.addEventListener("click", function(){
        let Land = alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML="The shuttle has landed.";
        shuttleBackground.style.backgroundColor ="green";
        altitude= 0;
        shuttleHeight.innerHTML= altitude;
 });

    abortMission.addEventListener("click", function(){
    let abortMission = confirm("Confirm that you want to abort the mission.");
    if(abortMission== true){
    flightStatus.innerHTML="Mission aborted.";
    shuttleBackground.style.backgroundColor ="green";
    altitude= 0;
    shuttleHeight.innerHTML= altitude;
    }
});

document.addEventListener("click", function(event){
  
if (event.target.id === "left"){
    rocketPosX-=10;
    rocket.style.marginLeft = rocketPosX + "px";    
}
if (event.target.id === "right"){
    rocketPosX+=10;
    rocket.style.marginLeft = rocketPosX + "px";    
}
if (event.target.id === "up"){
    rocketPosY+=10;
    rocket.style.marginBottom = rocketPosY + "px";   
    altitude += 10000;
    shuttleHeight.innerHTML=altitude; 
    
}
if (event.target.id === "down"){
    rocketPosY-=10;
    rocket.style.marginBottom = rocketPosY + "px"; 
    altitude -= 10000;
    shuttleHeight.innerHTML=altitude; 
     
}
})
})






