let currentDataSet = [];

function buildHTMLBasic(elementId, htmlString) {
    let targetDiv = document.getElementById(elementId);
    let element = document.createElement('div');
    element.innerHTML += htmlString;
    targetDiv.appendChild(element);
}

function buildHTMLforMenuPriceList(data, id) {
    let list = document.getElementById(id);
    let element = document.createElement('ul');
    element.style.padding = '0px';
    for (let i = 0; i < data.length; i++) {
        let placeholder = '..........................................................';
        let itemName = data[i].name;
        let itemPrice = data[i].price;
        placeholder = placeholder.substring(itemName.length + itemPrice.length + 2);
        let finalStr = itemName + ' ' + placeholder + ' ' + itemPrice;
        element.innerHTML += '<li class="biggerfont3">' + finalStr + '</li>';
    }
    list.appendChild(element);
}

function buildHTMLforList(data, id) {
    let list = document.getElementById(id);
    let element = document.createElement('ul');
    for (let i = 0; i < data.length; i++) {
        let desc = '';
        if (data[i].description.length > 0) {
            desc = ` ${data[i].description}`;
        }
        element.innerHTML += '<li> \
        <a href="'+ data[i].pic + '">'
        + data[i].name + '<span style="color: black">' + desc + '</span> \
        </a> '
        + data[i].price +
        '</li>';
    }
    list.appendChild(element);
}

function buildHTMLforList2Price(data, id) {
    let list = document.getElementById(id);
    let element = document.createElement('ul');
    for (let i = 0; i < data.length; i++) {
        let desc = '';
        if (data[i].description.length > 0) {
            desc = ` ${data[i].description}`;
        }
        element.innerHTML += '<li> \
        <a href="'+ data[i].pic + '">'
        + data[i].name + '<span style="color: black">' + desc + '</span> \
        </a> '
        + 'Mini ' + data[i].priceMini + ' | Reg ' + data[i].priceReg +
        '</li>';
    }
    list.appendChild(element);
}

function buildHTMLforList3Price(data, id) {
    let list = document.getElementById(id);
    let element = document.createElement('ul');
    for (let i = 0; i < data.length; i++) {
        let desc = '';
        if (data[i].description.length > 0) {
            desc = ` ${data[i].description}`;
        }
        element.innerHTML += '<li> \
        <a href="'+ data[i].pic + '">'
        + data[i].name + '<span style="color: black">' + desc + '</span> \
        </a> '
        + 'S ' + data[i].priceSm + ' | M ' + data[i].priceMd + ' | L ' + data[i].priceLg +
        '</li>';
    }
    list.appendChild(element);
}

function buildHTMLforGrid(data, id) {
    let href = window.location.href;
    let list = document.getElementById(id);
    let element = document.createElement('div');
    let temp = '<div class="ui five cards stackable centered">';
    for (let i = 0; i < data.length; i++) {
        let desc = '';
        if (data[i].description.length > 0) { // if there is a description
            desc = '<div class="content cardContent">' + data[i].description + '</div>';
        }
        temp +=
        '<div class="ui raised card"> \
            <img class="myImage" src="' + data[i].pic +'"> \
            <div class="content cardContent" style="font-weight: 600;">' + data[i].name + '</div> \
            <div class="content cardContent" style="font-weight: 600;">' + data[i].price + '</div>'
            + desc +
         '</div>';
    }
    temp += '</div>';
    element.innerHTML = temp;
    list.appendChild(element);
}

function buildHTMLforGrid2Price(data, id) {
    let href = window.location.href;
    let list = document.getElementById(id);
    let element = document.createElement('div');
    let temp = '<div class="ui five cards stackable centered">';
    for (let i = 0; i < data.length; i++) {
        let desc = '';
        if (data[i].description.length > 0) { // if there is a description
            desc = '<div class="content cardContent">' + data[i].description + '</div>';
        }
        temp +=
        '<div class="ui raised card"> \
            <img class="myImage" src="' + data[i].pic +'"> \
            <div class="content cardContent" style="font-weight: 600;">' + data[i].name + '</div> \
            <div class="content cardContent" style="font-weight: 600;">Mini ' + data[i].priceMini + ' | Reg ' + data[i].priceReg + '</div>'
            + desc +
         '</div>';
    }
    temp += '</div>';
    element.innerHTML = temp;
    list.appendChild(element);
}

function buildHTMLforGrid3Price(data, id) {
    let href = window.location.href;
    let list = document.getElementById(id);
    let element = document.createElement('div');
    let temp = '<div class="ui five cards stackable centered">';
    for (let i = 0; i < data.length; i++) {
        let desc = '';
        if (data[i].description.length > 0) { // if there is a description
            desc = '<div class="content cardContent">' + data[i].description + '</div>';
        }
        temp +=
        '<div class="ui raised card"> \
            <img class="myImage" src="' + data[i].pic +'"> \
            <div class="content cardContent" style="font-weight: 600;">' + data[i].name + '</div> \
            <div class="content cardContent" style="font-weight: 600;">S ' + data[i].priceSm + ' | M ' + data[i].priceMd + ' | L ' + data[i].priceLg + '</div>'
            + desc +
         '</div>';
    }
    temp += '</div>';
    element.innerHTML = temp;
    list.appendChild(element);
}

function buildHTMLstarter() {
    let href = window.location.href;
    console.log(currentDataSet);
    if (href.includes('lunch') || href.includes('full')) {
      currentDataSet = lunch;
      for (let i = 3; i < currentDataSet.length; i++) {
          buildHTMLforMenuPriceList(currentDataSet[i], `list${i-2}`);
      }
    }
}
