
var item=["apple", "mango", "banana", "grapes", "orange", "papaya"];

	for(var i=0; i<item.length; i++){
		if(i%2==0){
			console.log("even",item[i]);
		}else{
			console.log("odd",item[i]);
		}
	}
	
	console.log("----uses of reverse() function----");
	item.reverse();
	
	for(var i=0; i<item.length; i++){
		
			console.log(item[i]);
		}
	
	var price=[100,300,500,30.30,98989,656765];
	
	console.log("\n---- read data from 2 array using single loop----");
	
	for(var i=0; i<item.length; i++){
		
			console.log(item[i] +"------"+ price[i]);
		}
	
	
	
	
	