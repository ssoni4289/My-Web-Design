
console.log("The Break and continue Example \n");
for(var i=1; i<=30; i++){
    console.log("The Forloop Say : ", i);
    if(i==20){
        break;
    }
}

console.log("-----Continue Example------");
for(var i=1; i<=20; i++){

    if(i !=15 ){
        console.log(i);
        continue;
    }
}


console.log("-----Break with While Loop ------");
var i=1;
while(i<=10){
    console.log(i);
    if(i==6){
        break;
    }
    i++;
}


console.log("-----Continue with While Loop ------");
var i=1;
while(i<=10){
    if(i == 6 ){
        continue;
    }
    console.log(i);
    i++;
}

