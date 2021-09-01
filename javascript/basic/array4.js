
console.log("----use of map function in javascript---- \n");

var city = ["chennai", "delhi", "pune", "patna", "kolkata", "bangalore", "mumbai", "bhopal"];

for(var i=0; i<city.length; i++){
	console.log(city[i]);
}

console.log("----using map() first method----");

city.map(cityname => console.log(cityname));

console.log("----using map() second method----");

city.map(cityname => (

		console.log(cityname)
	)

);

console.log("----using map() third method----");

city.map((myelement , index)=>{
	console.log(index +"."+ myelement);
});

console.log("----reverse array using map() third method----");

city.reverse().map(cityname => (

		console.log(cityname)
	)

);


