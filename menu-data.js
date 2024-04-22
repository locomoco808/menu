const lunchPrices = {
  tier1: {reg: "$13.99", mini: "$9.99"},
  tier2: {reg: "$14.99", mini: "$10.99"},
  tier3: {reg: "$16.99", mini: "$12.99"},
};

const comboPlatePrices = {reg: "$19.99", mini: "$19.99"};

const partyPanPrices = {
  tier1: {sm: "$34.99", md: "$55.99", lg: "$80.99"},
  tier2: {sm: "$38.99", md: "$61.99", lg: "$88.99"},
  tier3: {sm: "$43.99", md: "$67.99", lg: "$95.99"},
  tier4: {sm: "$55.99", md: "$79.99", lg: "$108.99"},
  tier5: {sm: "$64.99", md: "$93.99", lg: "$122.99"},
  tier6: {sm: "$28.99", md: "$45.99", lg: "$65.99"},
  tier7: {sm: "$14.99", md: "$24.99", lg: "$34.99"},
};

const partyPanPackPrices = {
  pack1: "$28.99",
  pack2: "$65.99",
};

const lunchWokPlates = [
  { name: "Fried Rice / Chow Mein / Stir Fry Vegetable_______________", price: "", description: "" },
  { name: "____w/ Beef or Chicken", price: "$14.99", description: "" },
  { name: "____w/ Shrimp", price: "$15.99", description: "" },
  { name: "Fried Saimin", price: "$13.99", description: "" },
  { name: "____w/ BBQ Chicken or Teri Beef", price: "$17.99", description: "" },
  { name: "Bento (Katsu, Teriyaki Steak, Fish, Spam)", price: "$15.99", description: "" },
];

const lunchSandwiches = [
  { name: "Homemade Hamburger", price: "$5.75", description: "" },
  { name: "Cheeseburger", price: "$6.50", description: "" },
  { name: "BBQ Burger", price: "$5.75", description: "" },
  { name: "BBQ Cheeseburger", price: "$6.50", description: "" },
  { name: "BBQ Chicken Sandwich", price: "$6.99", description: "" },
  { name: "Katsu Burger", price: "$6.99", description: "" },
  { name: "Teri Beef Sandwich", price: "$7.99", description: "" },
  { name: "Fish Sandwich", price: "$7.99", description: "" },
  { name: "Double Hamburger", price: "$6.99", description: "" },
  { name: "Double Cheeseburger", price: "$7.75", description: "" },
  { name: "Double BBQ Burger", price: "$6.99", description: "" },
  { name: "Double BBQ Cheeseburger", price: "$7.75", description: "" },
  { name: "Deluxe (lettuce, onion, tomato)", price: "+$1.75", description: "" },
];

const lunchSalads = [
  { name: "Tossed Green Salad", price: "$9.99", description: "" },
  { name: "Oriental Chinese Chicken Salad", price: "$14.99", description: "" },
  { name: "Grilled Chicken Salad", price: "$16.99", description: "" },
  { name: "Shrimp Salad", price: "$16.99", description: "" },
];

const lunchSides = [
  { name: "Steamed Rice", price: "$2.10", description: "" },
  { name: "Brown Rice", price: "$2.35", description: "" },
  { name: "Macaroni Salad", price: "$4.25", description: "" },
  { name: "French Fries", price: "$4.50", description: "" },
  { name: "Onion Rings", price: "$4.90", description: "" },
  { name: "Chili Fries", price: "$6.50", description: "" },
  { name: "Saimin", price: "$7.50", description: "" },
  { name: "Teri Beef Saimin", price: "$9.50", description: "" },
  { name: "Won Ton Mein", price: "$9.99", description: "" },
  { name: "Won Ton Soup", price: "$9.99", description: "" },
  { name: "Beef Curry Bowl / Stew Bowl / Chili Bowl", price: "$10.99", description: "" },
];

const lunch = [lunchWokPlates, lunchSandwiches, lunchSalads, lunchSides];
const menuData = [lunch];
