// let userName = "anas";

// userName.length>0 ? console.log("Hello " + userName) : console.log("Hello");

// let userQuestion = "Random number";

// if (!userQuestion) { console.log("Please ask a question."); } else { console.log(`You've asked: ${userQuestion}`); }


// let randomNumber = Math.floor(Math.random()*8);

// let eightBall = "";

// switch(randomNumber){
//     case 0:
//         eightBall = ":D"
//         break;
//         case 1: 
//         eightBall = ":)"
//         break;
//         case 2:
//             eightBall = ":("
//             break;
//             case 3: 
//             eightBall = "dai"
//             break;
//             case 4:
//                 eightBall = "Popp"
//                 break;
//                 case 5:
//                     eightBall = "Maam"
//                     break;
//                     case 6: 
//                     eightBall = "Avan"
//                     break;
//                     case 7:
//                         eightBall = "Hyunckel"
//                         break
// }
// console.log(eightBall);



let age = 25;
let hasLicense = true;

if (age >= 18) { // Outer if
  if (hasLicense) { // Inner if
    console.log("You are allowed to drive.");
  } else { // Inner else
    console.log("You need a driving license to drive.");
  }
} else { // Outer else
  console.log("You are too young to drive.");
}
