function welcomeGuest(name, greetHandler){
    greetHandler(name);
}

const actorName = 'Tom Haks';

function greetMorning(name){
    console.log('Good Morning', name);
}
function greetAfternoon(name){
    console.log('Good Afternoon', name);
}
function greetEvening(name){
    console.log('Good Evening', name);
}

welcomeGuest(actorName, greetMorning);
welcomeGuest(actorName, greetEvening);
welcomeGuest(actorName, greetAfternoon);

function handleClick(){
    console.log("Someone Click me again");
}
// document.getElementById("click").addEventListener("click", function/greetAfternoon);