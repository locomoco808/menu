const breakfastPlates = [
  { name: "Breakfast Plate", price: "$7.15", description: "(2 eggs, 2 rice, 1 choice of meat)", pic: "images/breakfast/cat5.png" },
  { name: "Omelet", price: "$7.65", description: "(3 eggs, 2 rice, 1 choice of meat)", pic: "images/breakfast/cat5.png" },
  { name: "Cheese Omelet w/Rice", price: "$7.15", description: "", pic: "images/breakfast/cat5.png" },
];

const breakfastSandwiches = [
  { name: "Grilled Cheese Sandwich", price: "$4.10", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Grilled Cheese Sandwich w/Ham", price: "$5.05", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Grilled Cheese Sandwich w/Spam", price: "$5.30", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Fried Egg Sandwich", price: "$4.10", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Fried Egg Sandwich w/Ham", price: "$5.05", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Fried Egg Sandwich w/Spam", price: "$5.30", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Ham Sandwich", price: "$4.90", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Spam Sandwich", price: "$5.05", description: "", pic: "images/breakfast/cat5.png" },
  { name: "BLT", price: "$5.90", description: "", pic: "images/breakfast/cat5.png" },
];

const breakfastSides = [
  { name: "Any Meat", price: "$5.50", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Egg", price: "$2.50", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Hash Brown", price: "$2.50", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Toast", price: "$2.50", description: "", pic: "images/breakfast/cat5.png" },
  { name: "French Toast", price: "$5.90", description: "", pic: "images/breakfast/cat5.png" },
];

const lunchPlates = [
  { name: "Loco Moco", priceReg: "$13.55", priceMini: "$9.90", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Chicken Katsu", priceReg: "$13.95", priceMini: "$9.50", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Chicken Katsu Curry", priceReg: "$13.95", priceMini: "$9.50", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Mochiko Chicken", priceReg: "$13.95", priceMini: "$9.50", description: "", pic: "images/breakfast/cat5.png" },
  { name: "BBQ Chicken", priceReg: "$13.95", priceMini: "$9.50", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Garlic Chicken", priceReg: "$13.95", priceMini: "$9.50", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Lemon Chicken", priceReg: "$13.95", priceMini: "$9.50", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Cold Ginger Chicken", priceReg: "$13.95", priceMini: "$9.50", description: "", pic: "images/breakfast/cat5.png" },

  { name: "Chili Dog Plate", priceReg: "$14.05", priceMini: "$9.60", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Chili Hamburger Plate", priceReg: "$14.05", priceMini: "$9.60", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Sweet & Sour Spareribs", priceReg: "$14.05", priceMini: "$9.60", description: "", pic: "images/breakfast/cat5.png" },

  { name: "Hamburger Steak", priceReg: "$14.25", priceMini: "$9.80", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Beef Curry", priceReg: "$14.25", priceMini: "$9.80", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Beef Stew", priceReg: "$14.25", priceMini: "$9.80", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Breaded Veal Cutlet", priceReg: "$14.25", priceMini: "$9.80", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Pork Katsu", priceReg: "$14.25", priceMini: "$9.80", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Teriyaki Pork", priceReg: "$14.25", priceMini: "$9.80", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Teriyaki Steak", priceReg: "$14.25", priceMini: "$9.80", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Shrimp Curry", priceReg: "$14.45", priceMini: "$9.90", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Deep Fried Shrimp", priceReg: "$14.20", priceMini: "$10.40", description: "", pic: "images/breakfast/cat5.png" },

  { name: "Deep Fried Fish", priceReg: "$14.75", priceMini: "$10.20", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Garlic Shrimp", priceReg: "$14.95", priceMini: "$10.10", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Grilled Garlic Fish", priceReg: "$14.95", priceMini: "$10.10", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Grilled Salmon", priceReg: "$16.70", priceMini: "$10.10", description: "", pic: "images/breakfast/cat5.png" },
  { name: "BBQ Shortribs", priceReg: "$17.55", priceMini: "$13.00", description: "", pic: "images/breakfast/cat5.png" },
];

const lunchComboPlates = [
  { name: "Mixed Plate", price: "$14.85", description: "(Hamburger Steak & Teriyaki Steak w/ 1 choice of Beef Curry, Beef Stew, or Chili)", pic: "images/breakfast/cat5.png" },
  { name: "BBQ Mixed Plate", price: "$16.85", description: "(BBQ Shortrib, BBQ Chicken, & Teriyaki Steak)", pic: "images/breakfast/cat5.png" },
  { name: "Seafood Combo", price: "$15.90", description: "(Deep Fried Fish & Deep Fried Shimp w/ 1 choice of BBQ Chicken, Teriyaki Steak, or Teriyaki Pork)", pic: "images/breakfast/cat5.png" },
  { name: "Seafood Combo w/ BBQ Shortrib", price: "$18.80", description: "(Deep Fried Fish & Deep Fried Shimp w/ BBQ Shortrib)", pic: "images/breakfast/cat5.png" },
  { name: "Seafood Platter", price: "$16.35", description: "(Deep Fried Fish, Deep Fried Shrimp, & Scallops)", pic: "images/breakfast/cat5.png" },
  { name: "Special Combo Plate", price: "$14.85", description: "(any 2 choices of plate lunch)", pic: "images/breakfast/cat5.png" },
  { name: "Special Combo Plate w/ 1 choice seafood", price: "$15.55", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Special Combo Plate w/ 2 choice seafood", price: "$15.95", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Special Combo Plate w/ BBQ Shortrib", price: "$17.75", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Grilled Prime Rib", price: "$15.85", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Grilled Prime Rib w/ Deep Fried Shrimp", price: "$16.85", description: "", pic: "images/breakfast/cat5.png" },
];

const lunchWokPlates = [
  { name: "Fried Rice or Chow Mein or Stir Fry Vegetable w/ Beef or Chicken", price: "$14.75", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Fried Rice or Chow Mein or Stir Fry Vegetable w/ Shrimp", price: "$15.75", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Vegetarian Stir Fry", price: "$14.75", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Chopped Steak", price: "$15.05", description: "", pic: "images/breakfast/cat5.png" },
];

const lunchSpecialties = [
  { name: "Bento", price: "$14.45", description: "(Katsu, Teriyaki Steak, Fish, Spam)", pic: "images/breakfast/cat5.png" },
  { name: "Fried Saimin", price: "$13.00", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Fried Saimin w/ BBQ Chicken or Teri Beef", price: "$14.25", description: "", pic: "images/breakfast/cat5.png" },
];


const lunchSandwiches = [
  { name: "Homemade Hamburger", price: "$5.10", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Cheeseburger", price: "$5.40", description: "", pic: "images/breakfast/cat5.png" },
  { name: "BBQ Burger", price: "$5.70", description: "", pic: "images/breakfast/cat5.png" },
  { name: "BBQ Cheeseburger", price: "$6.00", description: "", pic: "images/breakfast/cat5.png" },
  { name: "BBQ Chicken Sandwich", price: "$6.20", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Katsu Burger", price: "$6.20", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Teri Beef Sandwich", price: "$6.20", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Fish Sandwich", price: "$6.50", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Shrimp Burger", price: "$6.80", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Double Hamburger", price: "$6.20", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Double Cheeseburger", price: "$6.40", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Double BBQ Burger", price: "$6.50", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Double BBQ Cheeseburger", price: "$6.70", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Make it Deluxe!", price: "$1.75", description: "(additional)", pic: "images/breakfast/cat5.png" },
];

const lunchSalads = [
  { name: "Macaroni Salad", price: "$4.25", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Tossed Green Salad", price: "$7.50", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Oriental Chinese Chricken Salad", price: "$14.50", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Grilled Chicken Salad", price: "$15.20", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Grilled Salmon Salad", price: "$16.55", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Shrimp Salad", price: "$16.55", description: "", pic: "images/breakfast/cat5.png" },
];

const lunchSides = [
  { name: "Steamed Rice", price: "$2.10", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Brown Rice", price: "$2.35", description: "", pic: "images/breakfast/cat5.png" },
  { name: "French Fries", price: "$4.50", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Onion Rings", price: "$4.90", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Chili Fries", price: "$6.50", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Saimin", price: "$5.45", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Teri Beef Saimin", price: "$8.25", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Beef Curry Bowl / Stew Bowl / Chili Bown", price: "$9.05", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Won Ton Mein", price: "$8.60", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Won Ton Soup", price: "$9.10", description: "", pic: "images/breakfast/cat5.png" },
];

const beverages = [
  { name: "Small", price: "$2.35", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Medium", price: "$2.59", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Large", price: "$2.99", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Hot Coffee or Tea", price: "$2.25", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Slushie (small)", price: "$4.55", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Slushie (large)", price: "$5.55", description: "", pic: "images/breakfast/cat5.png" },
];

const partyPans = [
  { name: "Steamed Rice", priceSm: "$21.95", priceMd:"$37.95", priceLg: "$53.95", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Macaroni Salad", priceSm: "$28.95", priceMd:"$45.95", priceLg: "$65.95", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Tossed Salad", priceSm: "$28.95", priceMd:"$45.95", priceLg: "$65.95", description: "", pic: "images/breakfast/cat5.png" },

  { name: "Oriental Chicken Salad", priceSm: "$34.95", priceMd:"$55.95", priceLg: "$90.95", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Chicken Katsu", priceSm: "$34.95", priceMd:"$55.95", priceLg: "$90.95", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Mochiko Chicken", priceSm: "$34.95", priceMd:"$55.95", priceLg: "$90.95", description: "", pic: "images/breakfast/cat5.png" },
  { name: "BBQ Chicken", priceSm: "$34.95", priceMd:"$55.95", priceLg: "$90.95", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Garlic Chicken", priceSm: "$34.95", priceMd:"$55.95", priceLg: "$90.95", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Lemon Chicken", priceSm: "$34.95", priceMd:"$55.95", priceLg: "$90.95", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Cold Ginger Chicken", priceSm: "$34.95", priceMd:"$55.95", priceLg: "$90.95", description: "", pic: "images/breakfast/cat5.png" },

  { name: "Chicken Chow Mein (Wet or Dry)", priceSm: "$38.95", priceMd:"$61.95", priceLg: "$88.95", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Fried Saimin", priceSm: "$38.95", priceMd:"$61.95", priceLg: "$88.95", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Chicken Fried Rice", priceSm: "$38.95", priceMd:"$61.95", priceLg: "$88.95", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Chicken Vegetable", priceSm: "$40.95", priceMd:"$63.95", priceLg: "$91.95", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Teriyaki Pork or Teriyaki Beef", priceSm: "$42.95", priceMd:"$66.95", priceLg: "$94.95", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Beef Stew or Beef Curry", priceSm: "$42.95", priceMd:"$66.95", priceLg: "$94.95", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Sweet & Sour Spareribs", priceSm: "$42.95", priceMd:"$66.95", priceLg: "$94.95", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Shrimp Fried Rice", priceSm: "$43.95", priceMd:"$67.95", priceLg: "$95.95", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Beef Broccoli", priceSm: "$54.95", priceMd:"$78.95", priceLg: "$106.95", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Shrimp Vegetable", priceSm: "$55.95", priceMd:"$79.95", priceLg: "$108.95", description: "", pic: "images/breakfast/cat5.png" },
  { name: "BBQ Shortrib", priceSm: "$65.00", priceMd:"$94.00", priceLg: "$123.00", description: "", pic: "images/breakfast/cat5.png" },

];

const breakfast = [breakfastPlates, breakfastSandwiches, breakfastSides];
const lunch = [lunchPlates, lunchComboPlates, lunchWokPlates, lunchSpecialties, lunchSandwiches, lunchSalads, lunchSides, beverages];
const catering = [partyPans];

const menuData = [breakfast, lunch, catering];
