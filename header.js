function buildHeader() {
    let href = window.location.href;
    let header = document.getElementById('header');
    let element = document.createElement('div');
    element.innerHTML +=
    '<hr> \
    <p style="text-align: center;"><strong>Phone Orders</strong>: Call <span class="pink">(808) 676-2888</span></p> \
    <hr> \
    <div class="ui fluid four item secondary pointing menu"> \
        <a class="biggerfont activeFull item" href="https://locomoco808.github.io/menu/full">Full Menu</a> \
        <a class="biggerfont activeBreakfast item" href="https://locomoco808.github.io/menu/breakfast">Breakfast (til 12pm)</a> \
        <a class="biggerfont activeLunch item" href="https://locomoco808.github.io/menu/lunch">Lunch</a> \
        <a class="biggerfont activeCatering item" href="https://locomoco808.github.io/menu/catering">Catering</a> \
    </div> \
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
