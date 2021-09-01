
var user = [
{name:"ramesh", city:"bangalore", age:"25 years"},
{name:"alex", city:"pune", age:"24 years"},
{name:"suresh", city:"mumbai", age:"26 years"},
{name:"mohit", city:"kolkata", age:"27 years"},
{name:"madan", city:"korba", age:"22 years"}

];

console.log("total users:", user.length);

console.log(user[2].city);

console.log(user[4].name);

console.log("-------------------");

for(var i=0; i<user.length; i++){
	console.log(user[i].name , user[i].age , user[i].city);
}




