function buildHeader() {
    let href = window.location.href;
    let header = document.getElementById('header');
    let element = document.createElement('div');
    element.innerHTML +=
    '<div class="ui fixed fluid inverted menu" style="padding: 0px 1rem;"> \
        <a class="biggerfont activeLogo item" href="https://locomoco808.github.io/menu/full"><img class="ui small spaced image" src="images/loco-moco-logo.png"></a> \
        <div class="right menu"> \
          <a class="biggerfont activeFull item" href="https://locomoco808.github.io/menu/full">Full Menu</a> \
          <a class="biggerfont activeBreakfast item" href="https://locomoco808.github.io/menu/breakfast">Breakfast</a> \
          <a class="biggerfont activeLunch item" href="https://locomoco808.github.io/menu/lunch">Lunch</a> \
          <a class="biggerfont activeCatering item" href="https://locomoco808.github.io/menu/catering">Catering</a> \
        </div> \
    </div> \
    <br> \
    <br> \
    <hr> \
    <p style="text-align: center;"><strong>Phone Orders</strong>: Call <a class="pink" href="tel:8086762888">(808) 676-2888</a></p> \
    <hr> \
    ';
    if (href.includes('full')) {
        currentDataSet = menuData;
        element.innerHTML = element.innerHTML.replace("activeFull", "active");
        element.innerHTML = element.innerHTML.replace("activeBreakfast", "");
        element.innerHTML = element.innerHTML.replace("activeLunch", "");
        element.innerHTML = element.innerHTML.replace("activeCatering", "");
    } else if (href.includes('breakfast')) {
        currentDataSet = breakfast;
        element.innerHTML = element.innerHTML.replace("activeFull", "");
        element.innerHTML = element.innerHTML.replace("activeBreakfast", "active");
        element.innerHTML = element.innerHTML.replace("activeLunch", "");
        element.innerHTML = element.innerHTML.replace("activeCatering", "");
    } else if (href.includes('lunch')) {
        currentDataSet = lunch;
        element.innerHTML = element.innerHTML.replace("activeFull", "");
        element.innerHTML = element.innerHTML.replace("activeBreakfast", "");
        element.innerHTML = element.innerHTML.replace("activeLunch", "active");
        element.innerHTML = element.innerHTML.replace("activeCatering", "");
    } else { // if (href.includes('catering')
        currentDataSet = catering;
        element.innerHTML = element.innerHTML.replace("activeFull", "");
        element.innerHTML = element.innerHTML.replace("activeBreakfast", "");
        element.innerHTML = element.innerHTML.replace("activeLunch", "");
        element.innerHTML = element.innerHTML.replace("activeCatering", "active");
    }
    header.appendChild(element);
}
