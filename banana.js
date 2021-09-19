var button=document.querySelector("#button");
var textarea=document.querySelector("#textarea")
var output=document.querySelector("#output")
var url="https://api.funtranslations.com/translate/minion.json";
function translationurl(text){
return url+"?"+"text="+text;
}
function errorhandler(error)
{
    console.log("error")
    alert("something wrong with the server try again")
}
function clickhandler(){
    console.log("clicked");
    var input=textarea.value;
    fetch(translationurl(input))
    .then(response => response.json())
    .then(json => {
        //var translatedText=json.contents.translated;
        //output.innerText=translatedText;
        console.log(json.contents.translated)
     })
    .catch(errorhandler)

}
button.addEventListener("click",clickhandler)



