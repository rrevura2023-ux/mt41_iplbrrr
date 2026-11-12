/*


document.write("Hello, JAVASCRIPT!");
console.log("Text")
console.error("Еррор")
console.warn("Варнінг")
console.info("Text") // Теж саме що і console.log

var num = 5;

var someNew = "Result: "
console.log(someNew + num +"!")

num = "Tert";
console.log(num);

const number = 10;
number = 15; // Error, бо константа не може змінюватися
console.log(someNew + number +"!")

var isJohnHasCar = true;

var nam1 = 5;
var nam2 = 10;

var result = nam1 + nam2;
console.log("Result: " + result);

console.log("Result: " + (nam1 + nam2));
console.log("Result: " + (nam1 % nam2));

*/
/*
var text1 = "Hello";
var text2 = "World";
console.log(text1 + text2);
console.log("Result: " + (text1 + " " + text2));

var num3 = 5;
var num4 = Number("10");

console.log("Result: " + (num3 + num4));
console.log("Result: " + (num3 + Number(num4)));

nam1 += 10;
console.log("Result: " + nam1);

nam1 = 5;
nam1--;
console.log("Result: " + nam1);
nam1 = 5;
nam1++;
console.log("Result: " + nam1);

var pi = Math.PI;
console.log("PI: " + pi);
console.log("E: " + Math.E)
console.log("Sin: " + Math.abs(-1));
console.log("Sin: " + Math.min(-1, 3, 4, 5, 6));
console.log("Sin: " + Math.max(-1, 3, 4, 5, 6)); 




document.write("Hello, JAVASCRIPT!");
console.log("Text")
console.error("Еррор")
console.warn("Варнінг")
console.info("Text") // Теж саме що і console.log

var num = 5;

var someNew = "Result: "
console.log(someNew + num +"!")

num = "Tert";
console.log(num);

const number = 10;
number = 15; // Error, бо константа не може змінюватися
console.log(someNew + number +"!")

var isJohnHasCar = true;

var nam1 = 5;
var nam2 = 10;

var result = nam1 + nam2;
console.log("Result: " + result);

console.log("Result: " + (nam1 + nam2));
console.log("Result: " + (nam1 % nam2));

var text1 = "Hello";
var text2 = "World";
console.log(text1 + text2);
console.log("Result: " + (text1 + " " + text2));

*/
/*
var num3 = 5;
var num4 = Number("10");

console.log("Result: " + (num3 + num4));
console.log("Result: " + (num3 + Number(num4)));

nam1 += 10;
console.log("Result: " + nam1);

nam1 = 5;
nam1--;
console.log("Result: " + nam1);
nam1 = 5;
nam1++;
console.log("Result: " + nam1);

var pi = Math.PI;
console.log("PI: " + pi);
console.log("E: " + Math.E)
console.log("Sin: " + Math.abs(-1));
console.log("Sin: " + Math.min(-1, 3, 4, 5, 6));
console.log("Sin: " + Math.max(-1, 3, 4, 5, 6)); 

*/

/* var number = 14;

if (number == 15) {
    console.log("Yes")
}

else if (number == 14) {
    console.log("Resulte: TRUE")
}
else (number !== 15)
    console.log("NOOOOOO")

if (number >= 15) {
    console.log(">=")
}

if (number <= 15) {
    console.log("<=")
}

if (number > 16) {
    console.log(">")
}

if (number < 16) {
    console.log("<")
}

var Text = "Text"

if (Text == "Text"){
    console.log("YEEEEESSS")
}
else (Text !== "Text")
    console.log("NOOOOOO")

*/

/*var IsHasCar = true
var Firma = "LENO"

if (IsHasCar == true) {
    document.write("Yes, his have car")
    if (Firma == "LENO") {
        document.write (" " + ',Its LENO.')
    }
}
if (IsHasCar)
{ document.write("Lets " + ",")}
if (!IsHasCar)
{ document.write("LTTTEEETTTEEE") }
else(IsHasCar != false) 
    document.write(" " + "Esss")

if (IsHasCar == true && Firma == "LENO") {
    document.write("Fdreeee")
    document.write("ELPS")
}*/

/*var word = "rrr"
switch (word) {
    case "new": console.log("Var is New"); break;
    case "5": console.log("Var is 5"); break;
    case "Some": console.log("Some");
        break;
        default:
            console.log("Var an dont know");
}*/

/*var data = [3, 5, 4, 5.4, "Text", true] // new Array(4, 5, 6, 0, 3);
data[0] = "Some"
console.log(data[0])
console.log(data.length)

var matrix = [[5, 6], ["Word", false], [5.4, true]]
matrix[1][1] = "Some"
console.log(matrix[0][0])
console.log(matrix[1][1])*/

/* for (var i = 1; i <= 10; i++) {
    console.log(i)
    if (i == 10) {
        console.log("Finish")
    }
}


for (var i = 100; i > 10; i /= 2) {
    console.log(i)
    if (i == 12.5) {
        console.log("Finish")
    }
}


var i = 0
while (i < 15) {
    console.log(i)
    i += 2
    if (i == 14) {
        console.log("Finish")
    }
}

var x = 100;
do {
    console.log(x);
    x /= 2;
} while(x < 10);

for (var i = 10; i > 0; i--) {
    if (i == 2) {
        break
    }
    
    if (i % 2 == 0) {
        continue
    }
    console.log(i)
}

var nums = [5, 6, 7, 8, 9, 10];

for (var i = 0; i < nums.length; i += 1 ) {
    nums[i] *= 2
    console.log("Element is :" + nums[i])
}

// alert("Привіт як в тебе справи?")
var data = confirm("Чи все вам подобається?");
if(data)
    alert("Привіт як в тебе справи?")
else 
    console.log("Error")*/

var data = prompt("Як ваші справи?", "Okay")
console.log(data)
