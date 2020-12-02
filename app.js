var btnTranslate = document.querySelector("#btn-translate")
var textInput = document.querySelector("#txt-input-area")


function clickListener(){
    console.log("clicked")
    console.log("input", textInput.value)
}

btnTranslate.addEventListener("click", clickListener)