const footerText =
'<div style="text-align: center;"> \
    <strong>Loco Moco Drive Inn</strong> <br> \
    Waipio Shopping Center <br> \
    <a href="https://goo.gl/maps/aYPwwv6t3wApWtKXA" style="color: tan;">94-800 Ukeʻe Street Ste 304, Waipahu, HI 96797</a> <br> \
    <a href="tel:8086762888" style="color: tan;">(808) 676-2888</a> <br> \
    <strong>Everyday</strong> 10:00am - 8:30pm<br> \
 </div>';

const houseFavsContentText =
'<div class="ui center aligned container"> \
  <div class="ui stackable centered cards"> \
    <div class="ui centered card"> \
      <div class="image"><img src="images/lunch/4-chickenKatsu.jpg"></div> \
      <div class="content"> \
        <div class="header">Chicken Katsu</div> \
        <div class="description"><span class="tier1reg"></span></div> \
      </div> \
    </div> \
    <div class="ui centered card"> \
      <div class="image"><img src="images/lunch/10-mochikoChicken.jpg"></div> \
      <div class="content"> \
        <div class="header">Mochiko Chicken</div> \
        <div class="description"><span class="tier1reg"></span></div> \
      </div> \
    </div> \
    <div class="ui centered card"> \
      <div class="image"><img src="images/lunch/bbqChicken.png"></div> \
      <div class="content"> \
        <div class="header">BBQ Chicken</div> \
        <div class="description"><span class="tier1reg"></span></div> \
      </div> \
    </div> \
    <div class="ui centered card"> \
      <div class="image"><img src="images/lunch/garlicChicken.png"></div> \
      <div class="content"> \
        <div class="header">Garlic Chicken</div> \
        <div class="description"><span class="tier1reg"></span></div> \
      </div> \
    </div> \
    <div class="ui centered card"> \
      <div class="image"><img src="images/lunch/5-locoMoco.jpg"></div> \
      <div class="content"> \
        <div class="header">Loco Moco</div> \
        <div class="description"><span class="tier2reg"></span></div> \
      </div> \
    </div> \
    <div class="ui centered card"> \
      <div class="image"><img src="images/lunch/13-beefStew.jpg"></div> \
      <div class="content"> \
        <div class="header">Beef Stew</div> \
        <div class="description"><span class="tier2reg"></span></div> \
      </div> \
    </div> \
    <div class="ui centered card"> \
      <div class="image"><img src="images/lunch/hamburgerSteak.png"></div> \
      <div class="content"> \
        <div class="header">Hamburger Steak</div> \
        <div class="description"><span class="tier2reg"></span></div> \
      </div> \
    </div> \
    <div class="ui centered card"> \
      <div class="image"><img src="images/lunch/14-teriyakiSteak.jpg"></div> \
      <div class="content"> \
        <div class="header">Teriyaki Steak</div> \
        <div class="description"><span class="tier2reg"></span></div> \
      </div> \
    </div> \
    <div class="ui centered card"> \
      <div class="image"><img src="images/lunch/16-chickenStirFry.jpg"></div> \
      <div class="content"> \
        <div class="header">Chicken Stir Fry</div> \
        <div class="description"><span class="chickenStirFryPrice"></span></div> \
      </div> \
    </div> \
    <div class="ui centered card"> \
      <div class="image"><img src="images/lunch/11-bbqChickenWithFriedSaimin.jpg"></div> \
      <div class="content"> \
        <div class="header">Fried Saimin w/ BBQ Chicken</div> \
        <div class="description"><span class="saiminBBQChickenPrice"></span></div> \
      </div> \
    </div> \
  </div> \
  <br> \
</div>';

const lunchContentText =
'<div id="plateLunchDiv"> \
  <h1 style="text-align: center">Plate Lunches</h1> \
  <div class="ui center aligned container" style="padding: 0px 10%"> \
    <div class="ui segment mySegment"> \
      <div class="ui large list"> \
        <div class="item"><div class="content biggerfont2"><strong>Regular</strong> - 2 steamed rice & 1 mac salad</div></div> \
        <div class="item"><div class="content biggerfont2"><strong>Mini</strong> - 1 steamed rice & 1 mac salad</div></div> \
      </div> \
    </div> \
  </div> \
  <br> \
  <div class="ui stackable two column relaxed divided grid"> \
    <div class="column"> \
      <div class="ui center aligned container"> \
        <div class="ui big horizontal list" style="margin: 0px"> \
          <div class="item"><h3 class="biggerfont3"><span class="tier1reg"></span> REGULAR</h3></div> \
          <div class="item" style="padding: 10px"></div> \
          <div class="item"><h3 class="biggerfont3"><span class="tier1mini"></span> MINI</h3></div> \
        </div> \
        <div class="ui list"> \
          <div class="item"><div class="content">Chicken Katsu / Cutlet</div></div> \
          <div class="item"><div class="content">Chicken Katsu Curry</div></div> \
          <div class="item"><div class="content">BBQ Chicken</div></div> \
          <div class="item"><div class="content">Mochiko Chicken</div></div> \
          <div class="item"><div class="content">Garlic Chicken</div></div> \
          <div class="item"><div class="content">Lemon Chicken</div></div> \
          <div class="item"><div class="content">Cold Ginger Chicken</div></div> \
        </div> \
      </div> \
    </div> \
    <div class="column"> \
      <div class="ui center aligned container"> \
        <div class="ui horizontal list" style="margin: 0px"> \
          <div class="item"><h3 class="biggerfont3"><span class="tier2reg"></span> REGULAR</h3></div> \
          <div class="item" style="padding: 10px"></div> \
          <div class="item"><h3 class="biggerfont3"><span class="tier2mini"></span> MINI</h3></div> \
        </div> \
        <div class="ui list"> \
          <div class="item"><div class="content">Loco Moco</div></div> \
          <div class="item"><div class="content">Hamburger Steak</div></div> \
          <div class="item"><div class="content">Beef Curry / Stew</div></div> \
          <div class="item"><div class="content">Breaded Veal Cutlet</div></div> \
          <div class="item"><div class="content">Pork Katsu / Cutlet</div></div> \
          <div class="item"><div class="content">Sweet & Sour Spare Ribs</div></div> \
          <div class="item"><div class="content">Teriyaki Steak</div></div> \
          <div class="item"><div class="content">Teriyaki Pork</div></div> \
          <div class="item"><div class="content">Chili Dog Plate</div></div> \
          <div class="item"><div class="content">Chili Hamburger Plate</div></div> \
        </div> \
      </div> \
    </div> \
  </div> \
</div> \
<br> \
<div class="ui center aligned container"> \
  <div class="ui big horizontal list" style="margin: 0px"> \
    <div class="item"><h3 class="biggerfont3"><span class="tier3reg"></span> REGULAR</h3></div> \
    <div class="item" style="padding: 10px"></div> \
    <div class="item"><h3 class="biggerfont3"><span class="tier3mini"></span> MINI</h3></div> \
  </div> \
  <div class="ui list"> \
    <div class="item"><div class="content">Deep Fried Shrimp</div></div> \
    <div class="item"><div class="content">Deep Fried Fish</div></div> \
    <div class="item"><div class="content">Shrimp Curry</div></div> \
    <div class="item"><div class="content">Garlic Shrimp</div></div> \
    <div class="item"><div class="content">Grilled Garlic Fish</div></div> \
  </div> \
</div> \
<br> \
<div class="ui center aligned container"> \
  <div class="ui three centered cards"> \
    <div class="ui centered card"> \
      <div class="image"><img src="images/lunch/4-chickenKatsu.jpg"></div> \
      <div class="content"> \
        <div class="header">Chicken Katsu</div> \
        <div class="description"><span class="tier1reg"></span></div> \
      </div> \
    </div> \
    <div class="ui centered card"> \
      <div class="image"><img src="images/lunch/5-locoMoco.jpg"></div> \
      <div class="content"> \
        <div class="header">Loco Moco</div> \
        <div class="description"><span class="tier2reg"></span></div> \
      </div> \
    </div> \
    <div class="ui centered card"> \
      <div class="image"><img src="images/lunch/13-beefStew.jpg"></div> \
      <div class="content"> \
        <div class="header">Beef Stew</div> \
        <div class="description"><span class="tier2reg"></span></div> \
      </div> \
    </div> \
  </div> \
</div> \
<br> \
<div id="comboPlatesDiv"> \
  <h1 style="text-align: center">Combination Plates</h1> \
  <h2 style="text-align: center"><span class="comboPlateReg"></span> REGULAR ONLY</h2> \
  <div class="ui center aligned container" style="padding: 0px 10%"> \
    <div class="ui segment mySegment"> \
      <div class="ui large list"> \
        <div class="item"><div class="content biggerfont2"><strong>Regular</strong> - 2 steamed rice & 1 mac salad</div></div> \
      </div> \
    </div> \
  </div> \
  <br> \
  <div class="ui two column relaxed divided grid"> \
    <div class="column" style="padding: 0% 10%"> \
      <h2>Mixed Plate</h2> \
      <div class="ui bulleted list"> \
        <div class="item"><div class="content">Hamburger Steak</div></div> \
        <div class="item"><div class="content">Teriyaki Steak</div></div> \
        <div class="item"><div class="content">w/ 1 choice of</div> \
        <div class="ui bulleted list"> \
          <div class="item"><div class="content">Beef Curry</div></div> \
          <div class="item"><div class="content">Beef Stew</div></div> \
          <div class="item"><div class="content">Beef Chili</div></div> \
        </div> \
      </div> \
    </div> \
    <h2>BBQ Mixed Plate</h2> \
    <div class="ui bulleted list"> \
      <div class="item"><div class="content">BBQ Short Ribs</div></div> \
      <div class="item"><div class="content">BBQ Chicken</div></div> \
      <div class="item"><div class="content">Teriyaki Steak</div></div> \
    </div> \
  </div> \
  <div class="column" style="padding: 0% 10%"> \
    <h2>Seafood Combo</h2> \
    <div class="ui bulleted list"> \
      <div class="item"><div class="content">Deep Fried Fish</div></div> \
      <div class="item"><div class="content">Deep Fried Shrimp</div></div> \
      <div class="item"><div class="content">w/ 1 choice of</div> \
      <div class="ui bulleted list"> \
        <div class="item"><div class="content">BBQ Chicken</div></div> \
        <div class="item"><div class="content">Teriyaki Steak</div></div> \
        <div class="item"><div class="content">Teriyaki Pork</div></div> \
      </div> \
    </div> \
  </div> \
  </div> \
</div> \
</div> \
<br> \
<!-- <h2 style="text-align: center">Special Combo Plate</h2> \
<p style="text-align: center">(any 2 choices of plate lunch)</p> --> \
<div class="ui center aligned container" style="padding: 0px 17%"> \
  <div class="ui segment mySegment"> \
    <h3 style="text-align: center; font-size: 1.5rem" class="biggerfont3">Special Combo Plate</h3> \
    <div class="ui large list"> \
      <div class="item"><div class="content biggerfont2">Any 2 choices of plate lunch</div></div> \
    </div> \
  </div> \
</div> \
<br> \
<br> \
</div> \
<div id="wokPlatesDiv"> \
  <div class="ui raised container center aligned segment menuPrice"> \
    <h1 style="text-align: center">Wok Plates</h1> \
    <div id="list0"></div> \
  </div> \
  <br> \
  <div class="ui center aligned container" style="width: 50%"> \
    <div class="ui two centered cards"> \
      <div class="ui centered card"> \
        <div class="medium image"><img src="images/lunch/16-chickenStirFry.jpg"></div> \
        <div class="content"> \
          <div class="header">Chicken Stir Fry</div> \
          <div class="description"><span class="chickenStirFryPrice"></span></div> \
        </div> \
      </div> \
      <div class="ui centered card"> \
        <div class="image"><img src="images/lunch/11-bbqChickenWithFriedSaimin.jpg"></div> \
        <div class="content"> \
          <div class="header">Fried Saimin w/ BBQ Chicken</div> \
          <div class="description"><span class="saiminBBQChickenPrice"></span></div> \
        </div> \
      </div> \
    </div> \
  </div> \
  <br> \
</div> \
<div id="sandwichesDiv"> \
  <div class="ui raised container center aligned segment menuPrice"> \
    <h1 style="text-align: center">Sandwiches</h1> \
    <div id="list1"></div> \
  </div> \
  <br> \
</div> \
<div id="saladsDiv"> \
  <div class="ui raised container center aligned segment menuPrice"> \
    <h1 style="text-align: center">Salads</h1> \
    <div id="list2"></div> \
  </div> \
  <br> \
</div> \
<div id="sidesDiv"> \
  <div class="ui raised container center aligned segment menuPrice"> \
    <h1 style="text-align: center">Sides</h1> \
    <div id="list3"></div> \
  </div> \
  <br> \
</div>';

const cateringContentHTML = '';
const cateringContentText =
'<div id="partyPanPacks" style="padding: 0px 5%"> \
  <h1 style="text-align: center">Party Pan Packs</h1> \
  <div class="ui horizontal segments" style="background-color: transparent; border: none; box-shadow: none;"> \
    <div class="ui segment mySegment" style="padding-right: 50px"> \
      <h2>Party Pan-Pack #1</h2> \
      <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">Serves 3-4 People</h3> \
      <span class="biggerfont2">BBQ Chicken (4 pcs)</span> <br> \
      <span class="biggerfont2">BBQ Shortribs (2 pcs)</span> <br> \
      <span class="biggerfont2">BBQ Teriyaki Steak (2 pcs)</span> <br> \
      <h2 style="margin-top: 1rem;"><span class="partyPanPack1"></span></h2> \
    </div> \
    <div class="ui segment" style="width: 2%; background-color: transparent; border: none; box-shadow: none;"></div> \
    <div class="ui segment mySegment"> \
      <h2>Party Pan-Pack #2</h2> \
      <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">Serves 6-8 People</h3> \
      <span class="biggerfont2">BBQ Chicken (10 pcs)</span> <br> \
      <span class="biggerfont2">BBQ Shortribs (5 pcs)</span> <br> \
      <span class="biggerfont2">BBQ Teriyaki Steak (5 pcs)</span> <br> \
      <h2 style="margin-top: 1rem;"><span class="partyPanPack2"></span></h2> \
    </div> \
  </div> \
</div> \
<br> \
<div id="partyPans" class="ui center aligned container"> \
  <h1>Party Pans</h1> \
  <div class="ui center aligned container" style="padding: 0px 18%"> \
    <div class="ui segment mySegment"> \
      <div class="ui large list"> \
        <div class="item"><div class="content biggerfont2"><strong>Small Pan</strong> serves <strong>6-8</strong> people</div></div> \
        <div class="item"><div class="content biggerfont2"><strong>Medium Pan</strong> serves <strong>10-15</strong> people</div></div> \
        <div class="item"><div class="content biggerfont2"><strong>Large Pan</strong> serves <strong>20-25</strong> people</div></div> \
      </div> \
    </div> \
  </div> \
  <br> \
  <h3 class="biggerfont4" style="text-align: center">S <span class="tier1sm"></span> | M <span class="tier1md"></span> | L <span class="tier1lg"></span></h3> \
  <div class="ui big horizontal list" style="margin: 0px"> \
    <div class="item"><div class="content biggerfont3">Chicken Katsu</div></div> \
    <div class="item"><div class="content biggerfont3">Mochiko Chicken</div></div> \
    <div class="item"><div class="content biggerfont3">BBQ Chicken</div></div> \
    <div class="item"><div class="content biggerfont3">Garlic Chicken</div></div> \
    <div class="item"><div class="content biggerfont3">Lemon Chicken</div></div> \
    <div class="item"><div class="content biggerfont3">Cold Ginger Chicken</div></div> \
    <div class="item"><div class="content biggerfont3">Oriental Chicken Salad</div></div> \
  </div> \
  <h3 class="biggerfont4" style="text-align: center">S <span class="tier2sm"></span> | M <span class="tier2md"></span> | L <span class="tier2lg"></span></h3> \
  <div class="ui big horizontal list" style="margin: 0px"> \
    <div class="item"><div class="content biggerfont3">Fried Saimin</div></div> \
    <div class="item"><div class="content biggerfont3">Chicken Fried Rice</div></div> \
    <div class="item"><div class="content biggerfont3">Chicken Chow Mein (Wet or Dry)</div></div> \
  </div> \
  <h3 class="biggerfont4" style="text-align: center">S <span class="tier3sm"></span> | M <span class="tier3md"></span> | L <span class="tier3lg"></span></h3> \
  <div class="ui big horizontal list" style="margin: 0px"> \
    <div class="item"><div class="content biggerfont3">Teriyaki Pork</div></div> \
    <div class="item"><div class="content biggerfont3">Teriyaki Beef</div></div> \
    <div class="item"><div class="content biggerfont3">Beef Stew</div></div> \
    <div class="item"><div class="content biggerfont3">Beef Curry</div></div> \
    <div class="item"><div class="content biggerfont3">Beef Broccoli</div></div> \
    <div class="item"><div class="content biggerfont3">Shrimp Fried Rice</div></div> \
    <div class="item"><div class="content biggerfont3">Sweet & Sour Spare Ribs</div></div> \
  </div> \
  <h3 class="biggerfont4" style="text-align: center">S <span class="tier5sm"></span> | M <span class="tier5md"></span> | L <span class="tier5lg"></span></h3> \
  <div class="ui big horizontal list" style="margin: 0px"> \
    <div class="item"><div class="content biggerfont3">BBQ Short Ribs</div></div> \
  </div> \
  <h3 class="biggerfont4" style="text-align: center">S <span class="tier6sm"></span> | M <span class="tier6md"></span> | L <span class="tier6lg"></span></h3> \
  <div class="ui big horizontal list" style="margin: 0px"> \
    <div class="item"><div class="content biggerfont3">Macaroni Salad</div></div> \
    <div class="item"><div class="content biggerfont3">Tossed Salad</div></div> \
  </div> \
  <h3 class="biggerfont4" style="text-align: center">S <span class="tier7sm"></span> | M <span class="tier7md"></span> | L <span class="tier7lg"></span></h3> \
  <div class="ui big horizontal list" style="margin: 0px"> \
    <div class="item"><div class="content biggerfont3">Steamed Rice</div></div> \
  </div> \
</div>';
