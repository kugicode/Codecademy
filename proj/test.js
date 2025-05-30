function getSleepHours (day){
if (day === "monday"){
    return 8;
}
else if(day === "tuesday"){
    return 6;
}
else if(day === "wednesday"){
    return 7;
}
else if(day === "thursday"){
    return 8;
}
else if(day === "friday"){
    return 6;
}
else if(day === "saturday"){
    return 7;
}
else if(day === "sunday"){
    return 6;
}
else{
    return "Invalid day"
}

}

const  getActualSleepHours = () => getSleepHours("monday") + getSleepHours("tuesday") + getSleepHours("wednesday") + getSleepHours("thursday") + getSleepHours("friday") + getSleepHours("saturday") + getSleepHours("sunday"); //implict return.

// const getActualSleepHours = () => 8 + 6 + 7 + 8 + 6 + 7 + 6; //hard coded...




function getIdealSleepHours (idealHours){
    return idealHours * 7;
}



function calculateSleepDebt (){
let actualSleepHours = getActualSleepHours();
let idealSleepHours = getIdealSleepHours(8);


if (actualSleepHours === idealSleepHours){
    return "You have the perfect amount of sleep!"
}

else if(actualSleepHours > idealSleepHours){
    return `You slept ${actualSleepHours - idealSleepHours} more hours the needed :D`
}

else if(actualSleepHours < idealSleepHours){
    return `You need ${idealSleepHours - actualSleepHours} more hours of sleep :(`
} else{
    "Error calculating sleep debt."
}



}

console.log(calculateSleepDebt());