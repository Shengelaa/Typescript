var hello = "Hello world";
// number | string | boolean | null | undefined
var age = 10;
var weight = 90.5;
var weight2 = -90.5;
var weight3 = NaN;
var weight4 = Infinity;
// String
var firstName = "Mindia";
var firstName2 = "Mindia";
var firstName3 = "Mindia";
// Boolean
var isTrue = true;
var isFalse = false;
// Null Undefined
var empty = null;
var empty2 = undefined;
// any
var x = "hello World";
x = 15;
// firstName.includes("Hello");
// Functions
function add(a, b) {
    return a + b;
}
function add2(a, b) {
    console.log(a + b);
}
// Object
var user1 = {
    name: "Mindia",
    age: 99,
    isTrue: true,
};
var user2 = {
    name: "Mindia",
    age: 99,
    isTrue: true,
    address: {
        city: "Tbilisi",
        country: "Georgia",
    },
};
var user3 = {
    name: "Mindia",
    age: 99,
    isTrue: true,
    address: {
        city: "Tbilisi",
        country: "Georgia",
    },
};
// Array
var user10 = ["erti", "ori", "sami", 1, 2, 3];
var user11 = [1, 2, 3];
var user12 = ["erti", "ori", "sami"];
var union = 5;
var union2 = "5";
if (typeof union2 === "string") {
    console.log(union2.toUpperCase());
}
var user19 = {
    name: "Mindia",
    age: 21,
    phone: "555555555",
    email: "MiaKhalifa@gmail.com",
};
var user20 = {
    name: "Giorgi",
    age: 18,
};
var user21 = {
    name: "Mindia",
    age: 12,
};
function renderCarUser(user) { }
var myDirection = "Up";
function getStatus(status) {
    console.log(status);
}
// @ts-ignore
var num20 = "Hello world";
//// type guard
// unknown
var num99 = "Hello World";
if ("Mindia" /* user100.name */ === "Mindia") {
    console.log("Hello Mindia");
}
