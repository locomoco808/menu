function buildFooter() {
    let footer = document.getElementById('footer');
    let element = document.createElement('div');
    element.innerHTML +=
    '<hr> \
    <div class="ui two column middle aligned grid"> \
        <div class="column"> \
          <div style="text-align: center;"> \
            <strong>Loco Moco Drive Inn</strong> <br> \
            Waipio Shopping Center <br> \
            94-800 Ukeʻe Street Ste 301, Waipahu, HI 96797 <br> \
            <a href="tel:8086762888">(808) 676-2888</a> <br> \
          </div> \
        </div> \
        <div class="column"> \
          <div style="text-align: center;"> \
            <strong>Hours of Operation</strong> <br> \
            <strong>Monday - Friday</strong> 10:30am - 9:00pm<br> \
            <strong>Saturday</strong> 9:30am - 9:00pm<br> \
            <strong>Sunday</strong> 9:30am - 8:00pm<br> \
          </div> \
        </div> \
    </div> \
    <br>'
    footer.appendChild(element);
}
