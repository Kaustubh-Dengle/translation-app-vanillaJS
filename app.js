var btnTranslate = document.querySelector("#btn-translate")
var textInput = document.querySelector("#txt-input-area")
var outputText = document.querySelector("#output")

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}

function errorHandling(error){
    console.log("Error occured: ", error)
}

function clickListener(){
    var inputTxt = textInput.value

    fetch(getTranslationURL(inputTxt))
    .then(res => res.json())
    .then(translation => {
        var translatedTxt = translation.contents.translated
        outputText.innerText = translatedTxt
    })
    .catch(errorHandling)
    
}

btnTranslate.addEventListener("click", clickListener)