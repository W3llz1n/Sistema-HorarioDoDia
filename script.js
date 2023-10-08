// window.alert(`Olá amigo :)`)
function carregar(){
    var msg = document.querySelector(`#msg`)
    var img = document.getElementById(`imagem`)
    var data = new Date
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //Bom dia
        msg.innerHTML += ` Bom dia`
        img.src = 'img/FotoManhã.png'
        document.body.style.background = `#f6b882`
    }else if(hora >= 12 && hora < 18){
        //Boa tarde
        msg.innerHTML += ` Boa tarde`
        img.src = `img/FotoTarde.png`
        document.body.style.background = `#ff6003`
    }else{
        //Boa noite
        msg.innerHTML += ` Boa noite`
        img.src = `img/FotoNoite.png` 
        document.body.style.background = `#2774b0`
    }
}