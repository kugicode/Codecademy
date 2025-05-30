// function icanhaz(item){
//    if (typeof item === 'string'){
//     console.log(`i can haz ${item}?`);
//    }
//    else{
//     console.log(`i can haz cheezbuger?`);
//    }
  
// }
// // Returns: i can haz presentz?
// icanhaz('cat');

// // Returns: i can haz cheezburger?
// icanhaz();


const icanhaz = (defualt = 'cheezburger') =>{
return `i can haz ${defualt}?`;
}

console.log(icanhaz("cat"));
console.log(icanhaz());