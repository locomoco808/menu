function buildHeader() {
    let href = window.location.href;
    let header = document.getElementById('header');
    let element = document.createElement('div');
    element.innerHTML +=
    '<div class="ui fluid inverted menu" id="menuBar"> \
        <a class="biggerfont activeLogo item" style="padding-left: 0.9rem; padding-right: 0.95rem" href="https://locomoco808.github.io/menu/full"><img class="ui small spaced image" src="images/loco-moco-logo.png"></a> \
        <div class="right menu"> \
          <a class="biggerfont activeFull item" href="https://locomoco808.github.io/menu/full">Full Menu</a> \
          <a class="biggerfont activeHouseFavs item" href="https://locomoco808.github.io/menu/houseFavs">House Favorites</a> \
          <a class="biggerfont activeLunch item" href="https://locomoco808.github.io/menu/lunch">Lunch</a> \
          <a class="biggerfont activeCatering item" href="https://locomoco808.github.io/menu/catering">Catering</a> \
        </div> \
    </div> \
    <div class="ui circular segment phoneOrderSegment"> \
      <h2>Phone Orders</h2> \
      <div class="sub header"> \
        <a class="biggerfont2" href="tel:8086762888">(808) 676-2888</a>\
      </div> \
    </div>'
    // <hr> \
    // <p style="text-align: center;"><strong>Phone Orders</strong>: Call <a class="red" href="tel:8086762888">(808) 676-2888</a></p> \
    // <hr> \
    ;
    if (href.includes('full')) {
        currentDataSet = menuData;
        element.innerHTML = element.innerHTML.replace("activeFull", "active");
        element.innerHTML = element.innerHTML.replace("activeHouseFavs", "");
        element.innerHTML = element.innerHTML.replace("activeLunch", "");
        element.innerHTML = element.innerHTML.replace("activeCatering", "");
    } else if (href.includes('houseFavs')) {
        currentDataSet = lunch;
        element.innerHTML = element.innerHTML.replace("activeFull", "");
        element.innerHTML = element.innerHTML.replace("activeHouseFavs", "active");
        element.innerHTML = element.innerHTML.replace("activeLunch", "");
        element.innerHTML = element.innerHTML.replace("activeCatering", "");
    } else if (href.includes('lunch')) {
        currentDataSet = lunch;
        element.innerHTML = element.innerHTML.replace("activeFull", "");
        element.innerHTML = element.innerHTML.replace("activeHouseFavs", "");
        element.innerHTML = element.innerHTML.replace("activeLunch", "active");
        element.innerHTML = element.innerHTML.replace("activeCatering", "");
    } else { // if (href.includes('catering')
        currentDataSet = catering;
        element.innerHTML = element.innerHTML.replace("activeFull", "");
        element.innerHTML = element.innerHTML.replace("activeHouseFavs", "");
        element.innerHTML = element.innerHTML.replace("activeLunch", "");
        element.innerHTML = element.innerHTML.replace("activeCatering", "active");
    }
    header.appendChild(element);
}
