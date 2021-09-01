
 var user = ["ramesh", "ganesh", "mohit", "alex", "raju", "manish"];
 
 console.log( "total users :",user.length );
 
 console.log("the first value is :",user[0]);
 
 console.log("the first value is :",user[5]);
 
 console.log("the first value is :",user[user.length-1]);
 
 console.log("-----the array element using for loop-----");
 
 for(var i=0; i<user.length; i++){
	 console.log("the user is : ", user[i] );
 }
 
 console.log("----Array in reverse order----");
 
 for(var i=user.length-1; i>=0; i--){
	 console.log("the user is : ", user[i] );
 }
 
 console.log("----Array using while loop----");
 
 var i=0;
 while(i<user.length){
	 console.log(user[i]);
	 i++;
 }
 
 
 
 
 