//  for (var x = 1; x <= 10; x++) {
//      alert(x);
//  }

// var num = +prompt("Enter your number");
// var Snum = +prompt("Enter starting number");
// var Enum = +prompt("Enter ending number");


// for (var i = Snum; i <= Enum; i++) {
//     document.write(num + "x" + i + "=" + num * i + "<br>");

// }

// for (var i = 0; i < 10; i++) {
//     for (var j = 0; j < i; j++) {
//         document.write("*");
//     }
//     document.write("<br>");

// }

// var value1 = +prompt("Enter your first value");
// var value2 = +prompt("Enter your second value");
// var sign = prompt("Enter your operator");

// if (sign === "+") {
//     alert(value1 + value2);

// } else if (sign === "-") {
//     alert(value1 - value2);

// } else if (sign === "*") {
//     alert(value1 * value2);

// } else if (sign === "/") {
//     alert(value1 / value2);

// } else {
//     alert("Invalid Operator")
// }

// for (var a = 1; a <= 100; a = a + 10) {
//     for (var b = a; b < a + 10; b++) {
//         document.write(b + " ");
//     }
//     document.write("<br>");
// }


// var city = prompt("Enter city name :");
// city = city.toLowerCase();

// var CityArray = ["lahore", "karachi"];

// if (CityArray.includes(city)) {
//     alert("City has found");
// } else {
//     alert("City has not found");
// }

// var text = "this is example";
// var text1 = text.replace("example", "book");
// alert(text1);

// var a = new Date();
// var b = a.toString();
// var c = b.slice(0, 3);
// alert(c);

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// alert(nameOfToday);

// var d = new Date();
// var currYr = d.getFullYear();
// alert(currYr);

// function foo(greet) {
//     alert(greet)
// }

// function getvalue() {
//     var name = document.getElementById("name");
//     alert(name.value);
// }

function getnumber(num) {

    var result = document.getElementById("result");
    result.value += num;

}

function clearnumber() {
    var result = document.getElementById("result");
    result.value = "";
}

function totalresult() {
    var result = document.getElementById("result");
    result.value = eval(result.value)
}