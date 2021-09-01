console.log("-----For Loop Example------");
for(var i=1; i<10; i++){

    if(i%2==0){
        console.log(i , " - Even");
    }else{
        console.log(i , " - Odd");
    }
}

console.log("------------------");

var odd = "";
var even = "";
for(var i=1; i<=15; i++){

    if(i%2 !=0){
        odd = odd + i + ",";
    }else{
        even = even + i + ",";
    }
}

console.log("List Of Odd Numbers : " , odd);
console.log("List Of Even Numbers : " , even);

