function buildFooter() {
    let footer = document.getElementById('footer');
    let element = document.createElement('div');
    element.innerHTML +=
    '<div style="text-align: center;"> \
        <strong>Loco Moco Drive Inn</strong> <br> \
        Waipio Shopping Center <br> \
        94-800 Ukeʻe Street Ste 301, Waipahu, HI 96797 <br> \
        <a href="tel:8086762888" style="color: tan;">(808) 676-2888</a> <br> \
        <strong>Monday - Friday</strong> 10:00am - 8:30pm<br> \
     </div>'
    footer.appendChild(element);
}
