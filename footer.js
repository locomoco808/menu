function buildFooter() {
    let footer = document.getElementById('footer');
    let element = document.createElement('div');
    element.innerHTML +=
    '<div style="text-align: center;"> \
        <strong>Loco Moco Drive Inn</strong> <br> \
        Waipio Shopping Center <br> \
        <a href="https://goo.gl/maps/aYPwwv6t3wApWtKXA" style="color: tan;">94-800 Ukeʻe Street Ste 304, Waipahu, HI 96797</a> <br> \
        <a href="tel:8086762888" style="color: tan;">(808) 676-2888</a> <br> \
        <strong>Everyday</strong> 10:00am - 8:30pm<br> \
     </div>'
    footer.appendChild(element);
}
