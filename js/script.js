function find_sum() {
    let a = Number(document.getElementById("first_number").value);
    let b = Number(document.getElementById("second_number").value);
    let sum = a + b;
    let output_msg = "The sum of " + a + " and " + b + " is = " + sum;
    document.getElementById("result_sum").innerHTML = output_msg;
}

function find_difference() {
    let a = Number(document.getElementById("first_number").value);
    let b = Number(document.getElementById("second_number").value);
    let difference = a - b;
    let output_msg = "The difference of " + a + " and " + b + " is = " + difference;
    document.getElementById("result_difference").innerHTML = output_msg;
}

function find_product() {
    let a = Number(document.getElementById("first_number").value);
    let b = Number(document.getElementById("second_number").value);
    let product = a * b;
    let output_msg = "The product of " + a + " and " + b + " is = " + product;
    document.getElementById("result_product").innerHTML = output_msg;
}

function find_quotient() {
    let a = Number(document.getElementById("first_number").value);
    let b = Number(document.getElementById("second_number").value);
    let quotient = a / b;
    let remainder = a % b;
    let output_msg = "The quotient and remainder after dividing " + a + 
        " by " + b + " is = " + quotient + " and " + remainder + " respectively";
    document.getElementById("result_quotient").innerHTML = output_msg;

    //console.log(output_msg);
}

/**
FINAL PROJECT - Create a web application using HTML, CSS, JS & Bootstrap
A. Create a Home page with navigation bar to navigate to other pages

1. Create a page Simple Calculator
a) Addition
b) Subtraction
c) Multiplication
d) Division

2. Create a page Area Calculator
a) Area of Square
b) Area of Rectangle
c) Area of Triangle (with base & height)
d) Area of Triangle (with three sides)
e) Area of Circle
f) Surface area of sphere

3. Create a page Currency Converter
a) INR to USD
b) INR to YEN
c) USD to INR
d) USD to YEN
e) YEN to INR
f) YEN to USD

4. Create a page showcasing your favourites

5. Add relevant pages (your creative work)


PROJECT REVIEW - 8.00pm to 9.00pm -  Mon, 30 Jan 2023
*/
