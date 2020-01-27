//Fixed variables for all cars
const basePrice = 24999;
const salesTaxAmount = 0.13;
const availableAddOns = {
  "AWD Drivetrain": 2500,
  "GPS Navigation": 2000,
  "Winte Tire Package": 2000,
  "Sport Package": 3500,
  "Live Traffic Updates": 1500,
  "Roadside Assistance": 2500,
};
//instance variables for each function call
var requestedAddOns = "";
var requestedAddOnPrices = 0;

//Calculates the price for a car order and logs a brief summary of the order
const pricingCalculator = (requestedConfigurations) => {
  var totalPrice = basePrice;
  calculateAddOnPrices(requestedConfigurations);
  totalPrice += requestedAddOnPrices;
  var adminFees = 1200 + (totalPrice * 0.02);
  totalPrice += + adminFees;
  var salesTax = totalPrice * salesTaxAmount;
  totalPrice += salesTax;

  console.log("The cost for this car is $" + totalPrice.toFixed(2) + 
    " with the following configurations: " + requestedAddOns);
};

//Helper function to calculate the price of the requested add ons
const calculateAddOnPrices = (configurations) => {
  if (configurations.length === 0){
    return;
  }
  if (configurations[0].add_on in availableAddOns){
    configurations.length === 1 ? 
      requestedAddOns += "& " + configurations[0].add_on + "."  
      : requestedAddOns += configurations[0].add_on + ", ";
  }
  if (requestedAddOnPrices > 8000) {
      requestedAddOnPrices += configurations[0].price * 0.5;
  } else {
    requestedAddOnPrices += configurations[0].price;
  }
  return calculateAddOnPrices(configurations.splice(1,configurations.length));
};

var testInput = [
  {
    "add_on" : "AWD Drivetrain",
    "price" : 2500
  },
  {
    "add_on" : "Sport Package",
    "price" : 3500
  }
];

pricingCalculator(testInput);