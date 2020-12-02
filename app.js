var btnTranslate = document.querySelector("#btn-translate")
var textInput = document.querySelector("#txt-input-area")
var outputText = document.querySelector("#output")

function clickListener(){
    outputText.innerText = "translatedtext " + textInput.value
}

btnTranslate.addEventListener("click", clickListener)