var Greeter = (function () {
    function Greeter(msg) {
        this.greeting = msg;
    }
    Greeter.prototype.greet = function () {
        console.log("Hey Stranger!! " + this.greeting);
    };
    return Greeter;
}());
var greeter = new Greeter("Good Morning!!");
greeter.greet();

//******** Typescript code *************** // 
// class Greeter {
// 	greeting:string;
// 	constructor(msg:string){
// 	this.greeting=msg;
// }

// greet(){
// 	console.log ("Hey Stranger!! "+ this.greeting);
// }
// }

// var greeter= new Greeter("Good Morning!!");
// greeter.greet();