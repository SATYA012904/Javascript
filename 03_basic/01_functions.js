function sayname(){
    console.log("S");
    console.log("a");
    console.log("t");
    console.log("y");
    console.log("a");
    
}


sayname()


function calprice(...num1){
    return num1;
}


console.log(calprice(200,400,500))


const user ={
    username:"satya",
    age:22
}

function objuser(a){
    console.log(`username is ${a.username} and price is ${a.age}`);
}

objuser(user)