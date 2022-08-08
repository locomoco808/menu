function buildFooter() {
    let footer = document.getElementById('footer');
    let element = document.createElement('div');
    element.innerHTML +=
    '<hr> \
    <p>The cakes above are available at the following Baskin Robbins locations:</p> \
    <details class="myindent1"> \
        <summary>Waipio Shopping Center</summary> \
        <div class="myindent2"> \
            <strong>Address</strong>: 94-800 Ukeʻe Street Ste 301, Waipahu, HI 96797<br> \
            <strong>Phone</strong>: (808) 676-2888<br> \
            <strong>Hours</strong>: <strong>Monday - Friday</strong> 10:30am - 9:00pm<br> \
            <div class="myindent3"><strong>Saturday</strong> 9:30am - 9:00pm<br></div> \
            <div class="myindent3"><strong>Sunday</strong> 9:30am - 8:00pm<br></div> \
        </div> \
    </details> \
    <br>\
    <br>'
    footer.appendChild(element);
}
