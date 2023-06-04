const lunchPrices = [
  {reg: "$13.99", mini: "$9.99"},
  {reg: "$14.49", mini: "$10.49"},
  {reg: "$16.99", mini: "$16.99"},
];

const partyPanPrices = [
  {sm: "$14.99", md: "$24.99", lg: "$34.99"},
  {sm: "$28.99", md: "$45.99", lg: "$65.99"},
  {sm: "$34.99", md: "$55.99", lg: "$80.99"},
  {sm: "$38.99", md: "$61.99", lg: "$90.99"},
  {sm: "$43.99", md: "$67.99", lg: "$95.99"},
  {sm: "$55.99", md: "$79.99", lg: "$108.99"},
  {sm: "$64.99", md: "$93.99", lg: "$122.99"},
];

const lunchPlates = [
  { name: "Chicken Katsu / Cutlet", priceReg: lunchPrices[0].reg, priceMini: lunchPrices[0].mini, description: "", pic: "images/breakfast/cat5.png" },
  { name: "Chicken Katsu Curry", priceReg: lunchPrices[0].reg, priceMini: lunchPrices[0].mini, description: "", pic: "images/breakfast/cat5.png" },
  { name: "BBQ Chicken", priceReg: lunchPrices[0].reg, priceMini: lunchPrices[0].mini, description: "", pic: "images/breakfast/cat5.png" },
  { name: "Mochiko Chicken", priceReg: lunchPrices[0].reg, priceMini: lunchPrices[0].mini, description: "", pic: "images/breakfast/cat5.png" },
  { name: "Garlic Chicken", priceReg: lunchPrices[0].reg, priceMini: lunchPrices[0].mini, description: "", pic: "images/breakfast/cat5.png" },
  { name: "Lemon Chicken", priceReg: lunchPrices[0].reg, priceMini: lunchPrices[0].mini, description: "", pic: "images/breakfast/cat5.png" },
  { name: "Cold Ginger Chicken", priceReg: lunchPrices[0].reg, priceMini: lunchPrices[0].mini, description: "", pic: "images/breakfast/cat5.png" },

  { name: "Loco Moco", priceReg: lunchPrices[1].reg, priceMini: lunchPrices[1].mini, description: "", pic: "images/breakfast/cat5.png" },
  { name: "Hamburger Steak", priceReg: lunchPrices[1].reg, priceMini: lunchPrices[1].mini, description: "", pic: "images/breakfast/cat5.png" },
  { name: "Beef Curry / Stew", priceReg: lunchPrices[1].reg, priceMini: lunchPrices[1].mini, description: "", pic: "images/breakfast/cat5.png" },
  { name: "Breaded Veal Cutlet", priceReg: lunchPrices[1].reg, priceMini: lunchPrices[1].mini, description: "", pic: "images/breakfast/cat5.png" },
  { name: "Pork Katsu / Curry", priceReg: lunchPrices[1].reg, priceMini: lunchPrices[1].mini, description: "", pic: "images/breakfast/cat5.png" },
  { name: "Sweet & Sour Spare Ribs", priceReg: lunchPrices[1].reg, priceMini: lunchPrices[1].mini, description: "", pic: "images/breakfast/cat5.png" },
  { name: "Chili Dog Plate", priceReg: lunchPrices[1].reg, priceMini: lunchPrices[1].mini, description: "", pic: "images/breakfast/cat5.png" },
  { name: "Chili Hamburger Plate", priceReg: lunchPrices[1].reg, priceMini: lunchPrices[1].mini, description: "", pic: "images/breakfast/cat5.png" },
  { name: "Teriyaki Steak", priceReg: lunchPrices[1].reg, priceMini: lunchPrices[1].mini, description: "", pic: "images/breakfast/cat5.png" },
  { name: "Teriyaki Pork", priceReg: lunchPrices[1].reg, priceMini: lunchPrices[1].mini, description: "", pic: "images/breakfast/cat5.png" },
  { name: "Shrimp Curry", priceReg: lunchPrices[1].reg, priceMini: lunchPrices[1].mini, description: "", pic: "images/breakfast/cat5.png" },
  { name: "Deep Fried Fish", priceReg: lunchPrices[1].reg, priceMini: lunchPrices[1].mini, description: "", pic: "images/breakfast/cat5.png" },
  { name: "Deep Fried Scallop", priceReg: lunchPrices[1].reg, priceMini: lunchPrices[1].mini, description: "", pic: "images/breakfast/cat5.png" },
  { name: "Garlic Shrimp", priceReg: lunchPrices[1].reg, priceMini: lunchPrices[1].mini, description: "", pic: "images/breakfast/cat5.png" },
  { name: "Grilled Garlic Fish", priceReg: lunchPrices[1].reg, priceMini: lunchPrices[1].mini, description: "", pic: "images/breakfast/cat5.png" },
];

const lunchComboPlates = [
  { name: "Mixed Plate", price: lunchPrices[2].reg, description: "(Hamburger Steak & Teriyaki Steak w/ 1 choice of Beef Curry, Beef Stew, or Chili)", pic: "images/breakfast/cat5.png" },
  { name: "BBQ Mixed Plate", price: lunchPrices[2].reg, description: "(BBQ Shortrib, BBQ Chicken, & Teriyaki Steak)", pic: "images/breakfast/cat5.png" },
  { name: "Seafood Combo", price: lunchPrices[2].reg, description: "(Deep Fried Fish & Deep Fried Shimp w/ 1 choice of BBQ Chicken, Teriyaki Steak, or Teriyaki Pork)", pic: "images/breakfast/cat5.png" },
  { name: "Seafood Platter", price: lunchPrices[2].reg, description: "(Deep Fried Fish, Deep Fried Shrimp, & Scallops)", pic: "images/breakfast/cat5.png" },
  { name: "Special Combo Plate", price: lunchPrices[2].reg, description: "(any 2 choices of plate lunch)", pic: "images/breakfast/cat5.png" },
  ];

const lunchWokPlates = [
  { name: "Fried Rice / Chow Mein / Stir Fry Vegetable w/ Beef or Chicken", price: "$14.99", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Fried Rice / Chow Mein / Stir Fry Vegetable w/ Shrimp", price: "$15.99", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Fried Saimin", price: "$13.99", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Fried Saimin w/ BBQ Chicken or Teri Beef", price: "$14.99", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Bento (Katsu, Teriyaki Steak, Fish, Spam)", price: "$14.99", description: "", pic: "images/breakfast/cat5.png" },
];

const lunchSandwiches = [
  { name: "Homemade Hamburger", price: "$5.75", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Cheeseburger", price: "$6.50", description: "", pic: "images/breakfast/cat5.png" },
  { name: "BBQ Burger", price: "$5.75", description: "", pic: "images/breakfast/cat5.png" },
  { name: "BBQ Cheeseburger", price: "$6.50", description: "", pic: "images/breakfast/cat5.png" },
  { name: "BBQ Chicken Sandwich", price: "$6.99", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Katsu Burger", price: "$6.99", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Teri Beef Sandwich", price: "$7.99", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Fish Sandwich", price: "$7.99", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Double Hamburger", price: "$6.99", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Double Cheeseburger", price: "$7.75", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Double BBQ Burger", price: "$6.99", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Double BBQ Cheeseburger", price: "$7.75", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Deluxe (lettuce, onion, tomato)", price: "+$1.75", description: "", pic: "images/breakfast/cat5.png" },
];

const lunchSalads = [
  { name: "Tossed Green Salad", price: "$9.99", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Oriental Chinese Chicken Salad", price: "$14.99", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Grilled Chicken Salad", price: "$16.99", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Shrimp Salad", price: "$16.99", description: "", pic: "images/breakfast/cat5.png" },
];

const lunchSides = [
  { name: "Steamed Rice", price: "$2.10", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Brown Rice", price: "$2.35", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Macaroni Salad", price: "$4.25", description: "", pic: "images/breakfast/cat5.png" },
  { name: "French Fries", price: "$4.50", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Onion Rings", price: "$4.90", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Chili Fries", price: "$6.50", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Saimin", price: "$7.50", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Teri Beef Saimin", price: "$9.50", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Beef Curry Bowl / Stew Bowl / Chili Bowl", price: "$10.99", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Won Ton Mein", price: "$9.99", description: "", pic: "images/breakfast/cat5.png" },
  { name: "Won Ton Soup", price: "$9.99", description: "", pic: "images/breakfast/cat5.png" },
];

const partyPans = [
  { name: "Steamed Rice", priceSm: partyPanPrices[0].sm, priceMd: partyPanPrices[0].md, priceLg: partyPanPrices[0].lg, description: "", pic: "images/breakfast/cat5.png" },

  { name: "Macaroni Salad", priceSm: partyPanPrices[1].sm, priceMd: partyPanPrices[1].md, priceLg: partyPanPrices[1].lg, description: "", pic: "images/breakfast/cat5.png" },
  { name: "Tossed Salad", priceSm: partyPanPrices[1].sm, priceMd: partyPanPrices[1].md, priceLg: partyPanPrices[1].lg, description: "", pic: "images/breakfast/cat5.png" },

  { name: "Chicken Katsu", priceSm: partyPanPrices[2].sm, priceMd: partyPanPrices[2].md, priceLg: partyPanPrices[2].lg, description: "", pic: "images/breakfast/cat5.png" },
  { name: "BBQ Chicken", priceSm: partyPanPrices[2].sm, priceMd: partyPanPrices[2].md, priceLg: partyPanPrices[2].lg, description: "", pic: "images/breakfast/cat5.png" },
  { name: "Mochiko Chicken", priceSm: partyPanPrices[2].sm, priceMd: partyPanPrices[2].md, priceLg: partyPanPrices[2].lg, description: "", pic: "images/breakfast/cat5.png" },
  { name: "Garlic Chicken", priceSm: partyPanPrices[2].sm, priceMd: partyPanPrices[2].md, priceLg: partyPanPrices[2].lg, description: "", pic: "images/breakfast/cat5.png" },
  { name: "Lemon Chicken", priceSm: partyPanPrices[2].sm, priceMd: partyPanPrices[2].md, priceLg: partyPanPrices[2].lg, description: "", pic: "images/breakfast/cat5.png" },
  { name: "Cold Ginger Chicken", priceSm: partyPanPrices[2].sm, priceMd: partyPanPrices[2].md, priceLg: partyPanPrices[2].lg, description: "", pic: "images/breakfast/cat5.png" },
  { name: "Oriental Chicken Salad", priceSm: partyPanPrices[2].sm, priceMd: partyPanPrices[2].md, priceLg: partyPanPrices[2].lg, description: "", pic: "images/breakfast/cat5.png" },

  { name: "Fried Saimin", priceSm: partyPanPrices[3].sm, priceMd: partyPanPrices[3].md, priceLg: partyPanPrices[3].lg, description: "", pic: "images/breakfast/cat5.png" },
  { name: "Chicken Fried Rice", priceSm: partyPanPrices[3].sm, priceMd: partyPanPrices[3].md, priceLg: partyPanPrices[3].lg, description: "", pic: "images/breakfast/cat5.png" },
  { name: "Chicken Chow Mein (Wet or Dry)", priceSm: partyPanPrices[3].sm, priceMd: partyPanPrices[3].md, priceLg: partyPanPrices[3].lg, description: "", pic: "images/breakfast/cat5.png" },

  { name: "Teriyaki Beef", priceSm: partyPanPrices[4].sm, priceMd: partyPanPrices[4].md, priceLg: partyPanPrices[4].lg, description: "", pic: "images/breakfast/cat5.png" },
  { name: "Teriyaki Pork", priceSm: partyPanPrices[4].sm, priceMd: partyPanPrices[4].md, priceLg: partyPanPrices[4].lg, description: "", pic: "images/breakfast/cat5.png" },
  { name: "Beef Curry", priceSm: partyPanPrices[4].sm, priceMd: partyPanPrices[4].md, priceLg: partyPanPrices[4].lg, description: "", pic: "images/breakfast/cat5.png" },
  { name: "Beef Stew", priceSm: partyPanPrices[4].sm, priceMd: partyPanPrices[4].md, priceLg: partyPanPrices[4].lg, description: "", pic: "images/breakfast/cat5.png" },
  { name: "Sweet & Sour Spare Ribs", priceSm: partyPanPrices[4].sm, priceMd: partyPanPrices[4].md, priceLg: partyPanPrices[4].lg, description: "", pic: "images/breakfast/cat5.png" },
  { name: "Shrimp Fried Rice", priceSm: partyPanPrices[4].sm, priceMd: partyPanPrices[4].md, priceLg: partyPanPrices[4].lg, description: "", pic: "images/breakfast/cat5.png" },

  { name: "Beef Broccoli", priceSm: partyPanPrices[5].sm, priceMd: partyPanPrices[5].md, priceLg: partyPanPrices[5].lg, description: "", pic: "images/breakfast/cat5.png" },
  { name: "BBQ Short Ribs", priceSm: partyPanPrices[6].sm, priceMd: partyPanPrices[6].md, priceLg: partyPanPrices[6].lg, description: "", pic: "images/breakfast/cat5.png" },
];

const lunch = [lunchPlates, lunchComboPlates, lunchWokPlates, lunchSandwiches, lunchSalads, lunchSides];
const catering = [partyPans];

const menuData = [lunch, catering];
