## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

## Here I created a counter till the 10 without using setInterval 
let counter = 0;
console.log("start")
for(let i=0; i<10; i++){
	setTimeout(function(){
		counter = counter + 1;
		console.log(counter);
	},1000);
}
console.log("end")






































































(Hint: setTimeout)