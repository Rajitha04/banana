var button=document.querySelector("#button");
var textarea=document.querySelector("#textarea")
var output=document.querySelector("#output")
//var url="https://api.funtranslations.com/translate/minion.json";
var url="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
function translationurl(text){
return url+"?"+"text="+text;
}
function errorhandler(error)
{
    console.log("error")
    alert("some error occured try again later!!")
}
function clickhandler(){
    console.log("clicked");
    var input=textarea.value;
    fetch(translationurl(input))
    .then(response => response.json())
    .then(json => {
        var translatedText=json.contents.translated;
output.innerText=translatedText;
        
     })
    .catch(errorhandler)

}
button.addEventListener("click",clickhandler)



