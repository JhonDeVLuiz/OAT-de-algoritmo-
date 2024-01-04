function investigar(){
    
    var checkTelefonou = document.getElementById("checkTelefonou")
    var checkLocal = document.getElementById("checkLocal")
    var checkMora = document.getElementById("checkMora")
    var checkDevia = document.getElementById("checkDevia")
    var checkTrabalhou = document.getElementById("checkTrabalhou")

    
    var resultado = ""
    var contador = 0

    if(checkTelefonou.checked){contador++}
    if(checkLocal.checked){contador++}
    if(checkMora.checked){contador++}
    if(checkDevia.checked){contador++}
    if(checkTrabalhou.checked){contador++}

    switch(contador){
        case 2:
            resultado = "<strong>Suspeito</strong>"
            break
        case 3:
        case 4:
            resultado = "<strong>Cúmplice</strong>"
            break
        case 5:
            resultado = "<strong>Assassino</strong>"
            break
        default:
            resultado = "<strong>Inocente</strong>"
    }

    
    document.getElementById('divresposta').innerHTML = resultado
}

