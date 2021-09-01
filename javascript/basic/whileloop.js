console.log("The While Loop Example \n");
/*
    var declare
    while(condition){
        statement
        i++/i--
    }
*/


var i = 1;
while(i<=10){
    console.log("The While Say :", i);
    i++;
}

console.log("-------in Desc Order--------");
var i = 10;
while(i>=1){
    console.log("The While Say :", i);
    i--;
}

console.log("-------Odd Even No Using while loop--------");
var i = 1;
while(i<=15){
    if(i%2 == 0){
        console.log("The Even : ", i);
    }else{
        console.log("The Odd :" , i);
    }
    i++;
}