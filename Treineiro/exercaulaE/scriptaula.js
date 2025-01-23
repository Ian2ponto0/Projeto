function carregar () {
    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("imagem");
    var data = new Date()
    var horas = data.getHours();

        msg.innerHTML = `Agora são ${horas} horas.`;

    if (horas >= 0 && horas < 12) {
        img.src = 'Imagemdamanha.jpg'
    } else if ( horas >= 12 && horas < 18) {
        img.src = 'Imagemdatarde.jpg'
    } else {
        img.src = 'imagemdanoite.jpg'
}
}