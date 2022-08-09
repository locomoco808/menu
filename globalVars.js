let currentDataSet = [];

function buildHTMLforList(data, id) {
    let list = document.getElementById(id);
    console.log(list, id, data);
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

function buildHTMLforGrid(data, id) {
    let href = window.location.href;
    let list = document.getElementById(id);
    let element = document.createElement('div');
    let temp = '<div class="ui four cards stackable centered">';
    for (let i = 0; i < data.length; i++) {
        let desc = '';
        if (data[i].description.length > 0) { // if there is a description && not grid
            desc =
            '<div class="extra content" style="padding: 0.5rem;"> \
                <p class="ui header">' + data[i].description + '</p> \
            </div>';
        }
        temp +=
        '<div class="ui raised card"> \
            <a class="image" href="'+ data[i].pic + '"> \
                <img class="myImage" src="' + data[i].pic +'"> \
            </a> \
            <div class="content" style="padding: 0.5rem;"> \
                <a class="ui header" href="' + data[i].pic+ '">' + data[i].name + '</a> \
            </div>'
            + desc +
            '<div class="extra content" style="padding: 0.5rem;"> \
                <p class="ui header">' + data[i].price + '</p> \
             </div> \
         </div>';
    }
    temp += '</div>';
    element.innerHTML = temp;
    list.appendChild(element);
}

function buildHTMLstarter() {
    let href = window.location.href;
    if (href.includes('full')) {
      let runningTotal = 0;
      for (let i = 0; i < currentDataSet.length; i++) { // [breakfast, lunch, catering]
        for (let j = 0; j < currentDataSet[i].length; j++) {
            buildHTMLforList(currentDataSet[i][j], `list${runningTotal+j+1}`);
        }
        runningTotal += currentDataSet[i].length;
      }
    } else { // grid
        for (let i = 0; i < currentDataSet.length; i++) {
            buildHTMLforGrid(currentDataSet[i], `list${i+1}`);
        }
    }
}
