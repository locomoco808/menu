let currentDataSet = [];

function buildHTMLBasic(elementId, htmlString) {
    let targetDiv = document.getElementById(elementId);
    let element = document.createElement('div');
    element.innerHTML += htmlString;
    targetDiv.appendChild(element);
}

function buildHTMLByClass(elementClass, htmlString) {
    let collection = document.getElementsByClassName(elementClass);
    for (let i = 0; i < collection.length; i++) {
      collection[i].innerHTML = htmlString;
    }
}

function updatePrices(priceArray) {
  let keys = Object.keys(priceArray);
  for (let i = 0; i < keys.length; i++) {
    let innerKeys = Object.keys(priceArray[keys[i]]);
    for (let j = 0; j < innerKeys.length; j++) {
      let innerClassName = keys[i] + innerKeys[j];
      let value = priceArray[keys[i]][innerKeys[j]];
      console.log(innerClassName);
      console.log(value);
      buildHTMLByClass(innerClassName, value);
    }
  }
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

function buildHTMLstarter() {
    let href = window.location.href;
    console.log(currentDataSet);
    if (href.includes('lunch') || href.includes('full')) {
      currentDataSet = lunch;
      for (let i = 1; i < currentDataSet.length; i++) {
          buildHTMLforMenuPriceList(currentDataSet[i], `list${i}`);
      }
    }
}
