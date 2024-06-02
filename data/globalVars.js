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
        let finalStr = '';
        let whitespace = '<span style="color: white">';
        let start = itemName.indexOf("_");
        let end = itemName.lastIndexOf("_");
        placeholder = placeholder.substring(itemName.length + itemPrice.length + 2);
        whitespace += itemName.substring(start, end + 1) + '</span>';
        if (start > 0) { // underscore is at the end of string
        	itemName = itemName.substring(0, start);
          finalStr += itemName + whitespace;
        } else { // underscore is at the start of string OR does not exist
        	itemName = itemName.substring(end + 1, itemName.length);
          finalStr += whitespace + itemName;
        }
        finalStr += ' ' + placeholder + ' ' + itemPrice;
        element.innerHTML += '<li class="biggerfont3">' + finalStr + '</li>';
    }
    list.appendChild(element);
}

function buildHTMLstarter() {
    // let href = window.location.href;
    //console.log(currentDataSet);
    if(document.getElementById('list0')){
      currentDataSet = lunch;
      for (let i = 0; i < currentDataSet.length; i++) {
          buildHTMLforMenuPriceList(currentDataSet[i], `list${i}`);
      }
    }
}
