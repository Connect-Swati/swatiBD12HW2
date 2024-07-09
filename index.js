let express = require("express");
const { type } = require("os");
let app = express();
let port = 3000;
app.listen(port, () => {
  console.log("Server is running on port" + port);
});

//Question 1: Body Mass Index (BMI) Calculator
app.get("/bmi", (req, res) => {
  let height = parseFloat(req.query.height);

  let weight = parseFloat(req.query.weight);
  let bmi = weight / (height * height);
  let bmi_fixedUpto2DecimalPlaces = Math.floor(bmi * 100) / 100;
  res.send("Your BMI is " + bmi_fixedUpto2DecimalPlaces);
  //res.send(bmi.toString()); //22.857142857142858

  // by using toFixed it will round up upto 2 decimal places so we can use below logic to get the same result without rounding
  /*Multiplying by 100: First multiply the number by 100 (or 10 raised to the number of desired decimal places, which is 2 in this case). This shifts the decimal point two places to the right, turning 22.857142857142858 into 2285.7142857142858

Applying Math.floor: By applying Math.floor, you remove the decimal part of 2285.7142857142858, resulting in 2285. This step effectively truncates the number, avoiding any rounding.

Dividing by 100: Finally, you divide the result by 100 to shift the decimal back to its original position, getting 22.85.

This function will always truncate the number to two decimal places without rounding, which means it will cut off all the digits beyond two decimal places without altering the value of the remaining digits.*/
});

//Question 2: Calculate grocery checkout price

app.get("/checkout", (req, res) => {
  let product = req.query.product;
  let units = parseInt(req.query.units);
  let price = parseFloat(req.query.price);
  let total_price = units * price;
  res.send("Your total for " + units + " " + product + " is " + total_price);
});

//Question 3: Calculate grade percentage

app.get("/grade", (req, res) => {
  let maths = parseInt(req.query.maths);
  let science = parseInt(req.query.science);
  let english = parseInt(req.query.english);
  let gradeInPercentage = parseInt(((maths + science + english) / 300) * 100); // asked to Make sure you return the percentage as Integer.
  console.log(typeof gradeInPercentage);
  res.send("Your grade in percentage is " + gradeInPercentage + "%");
});

//Question 4: Return bill amount after applying discount
app.get("/discounted-price", (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let discount = parseFloat(req.query.discount);
  let discounted_price = cartTotal - cartTotal * (discount / 100);
  res.send("Your bill amount is " + discounted_price);
});
//Question 5: Split bill among friends
app.get("/split-bill", (req, res) => {
  let billAmount = parseFloat(req.query.billAmount);
  let numberOfFriends = parseInt(req.query.numberOfFriends);
  let splitAmount = billAmount / numberOfFriends;
  res.send("Each friend owes " + " ₹ " + splitAmount + " against the bill");
});

//Question 6: Convert Celsius to Fahrenheit
app.get("/celsius-to-fahrenheit", (req, res) => {
  let temperature = parseFloat(req.query.temperature);
  let fahrenheit = (temperature * 9) / 5 + 32;
  res.send(fahrenheit + " Fahrenheit");
});

//Question 7: Calculate monthly salary
app.get("/monthly-salary", (req, res) => {
  let totalHours = parseInt(req.query.totalHours);
  let hourlyWage = parseFloat(req.query.hourlyWage);
  let monthlySalary = totalHours * hourlyWage;
  res.send("Your monthly salary is ₹" + monthlySalary);
});
