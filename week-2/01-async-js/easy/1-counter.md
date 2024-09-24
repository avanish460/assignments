## Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second

## Here I used setInterval function with callback function and 1 sec of delay. So, that it will go up as time goes by in interval of 1 sec
let counter = 0;
setInterval(function(){
	counter = counter + 1;
	console.log(counter);
},1000);
