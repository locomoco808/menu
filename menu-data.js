const lunchPrices = {
  tier1: {reg: "$13.99", mini: "$9.99"},
  tier2: {reg: "$14.99", mini: "$10.99"},
  tier3: {reg: "$16.99", mini: "$12.99"},
};

const partyPanPrices = [
  {sm: "$14.99", md: "$24.99", lg: "$34.99"},
  {sm: "$28.99", md: "$45.99", lg: "$65.99"},
  {sm: "$34.99", md: "$55.99", lg: "$80.99"},
  {sm: "$38.99", md: "$61.99", lg: "$90.99"},
  {sm: "$43.99", md: "$67.99", lg: "$95.99"},
  {sm: "$55.99", md: "$79.99", lg: "$108.99"},
  {sm: "$64.99", md: "$93.99", lg: "$122.99"},
];

const lunchWokPlates = [
  { name: "Fried Rice / Chow Mein / Stir Fry Vegetable w/ Beef or Chicken", price: "$14.99", description: "" },
  { name: "Fried Rice / Chow Mein / Stir Fry Vegetable w/ Shrimp", price: "$15.99", description: "" },
  { name: "Fried Saimin", price: "$13.99", description: "" },
  { name: "Fried Saimin w/ BBQ Chicken or Teri Beef", price: "$14.99", description: "" },
  { name: "Bento (Katsu, Teriyaki Steak, Fish, Spam)", price: "$14.99", description: "" },
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

const partyPans = [
  { name: "Steamed Rice", priceSm: partyPanPrices[0].sm, priceMd: partyPanPrices[0].md, priceLg: partyPanPrices[0].lg, description: "" },

  { name: "Macaroni Salad", priceSm: partyPanPrices[1].sm, priceMd: partyPanPrices[1].md, priceLg: partyPanPrices[1].lg, description: "" },
  { name: "Tossed Salad", priceSm: partyPanPrices[1].sm, priceMd: partyPanPrices[1].md, priceLg: partyPanPrices[1].lg, description: "" },

  { name: "Chicken Katsu", priceSm: partyPanPrices[2].sm, priceMd: partyPanPrices[2].md, priceLg: partyPanPrices[2].lg, description: "" },
  { name: "BBQ Chicken", priceSm: partyPanPrices[2].sm, priceMd: partyPanPrices[2].md, priceLg: partyPanPrices[2].lg, description: "" },
  { name: "Mochiko Chicken", priceSm: partyPanPrices[2].sm, priceMd: partyPanPrices[2].md, priceLg: partyPanPrices[2].lg, description: "" },
  { name: "Garlic Chicken", priceSm: partyPanPrices[2].sm, priceMd: partyPanPrices[2].md, priceLg: partyPanPrices[2].lg, description: "" },
  { name: "Lemon Chicken", priceSm: partyPanPrices[2].sm, priceMd: partyPanPrices[2].md, priceLg: partyPanPrices[2].lg, description: "" },
  { name: "Cold Ginger Chicken", priceSm: partyPanPrices[2].sm, priceMd: partyPanPrices[2].md, priceLg: partyPanPrices[2].lg, description: "" },
  { name: "Oriental Chicken Salad", priceSm: partyPanPrices[2].sm, priceMd: partyPanPrices[2].md, priceLg: partyPanPrices[2].lg, description: "" },

  { name: "Fried Saimin", priceSm: partyPanPrices[3].sm, priceMd: partyPanPrices[3].md, priceLg: partyPanPrices[3].lg, description: "" },
  { name: "Chicken Fried Rice", priceSm: partyPanPrices[3].sm, priceMd: partyPanPrices[3].md, priceLg: partyPanPrices[3].lg, description: "" },
  { name: "Chicken Chow Mein (Wet or Dry)", priceSm: partyPanPrices[3].sm, priceMd: partyPanPrices[3].md, priceLg: partyPanPrices[3].lg, description: "" },

  { name: "Teriyaki Beef", priceSm: partyPanPrices[4].sm, priceMd: partyPanPrices[4].md, priceLg: partyPanPrices[4].lg, description: "" },
  { name: "Teriyaki Pork", priceSm: partyPanPrices[4].sm, priceMd: partyPanPrices[4].md, priceLg: partyPanPrices[4].lg, description: "" },
  { name: "Beef Curry", priceSm: partyPanPrices[4].sm, priceMd: partyPanPrices[4].md, priceLg: partyPanPrices[4].lg, description: "" },
  { name: "Beef Stew", priceSm: partyPanPrices[4].sm, priceMd: partyPanPrices[4].md, priceLg: partyPanPrices[4].lg, description: "" },
  { name: "Sweet & Sour Spare Ribs", priceSm: partyPanPrices[4].sm, priceMd: partyPanPrices[4].md, priceLg: partyPanPrices[4].lg, description: "" },
  { name: "Shrimp Fried Rice", priceSm: partyPanPrices[4].sm, priceMd: partyPanPrices[4].md, priceLg: partyPanPrices[4].lg, description: "" },

  { name: "Beef Broccoli", priceSm: partyPanPrices[5].sm, priceMd: partyPanPrices[5].md, priceLg: partyPanPrices[5].lg, description: "" },
  { name: "BBQ Short Ribs", priceSm: partyPanPrices[6].sm, priceMd: partyPanPrices[6].md, priceLg: partyPanPrices[6].lg, description: "" },
];

const lunch = [lunchWokPlates, lunchSandwiches, lunchSalads, lunchSides];
const catering = [partyPans];

const menuData = [lunch, catering];
