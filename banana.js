var button=document.querySelector("#button");
var textarea=document.querySelector("#textarea")
var output=document.querySelector("#output")
var url="https://api.funtranslations.com/translate/minion.json";


function translationurl(text){
return url+"?"+"text="+text;
}
function clickhandler(){
    console.log("clicked");
    var input=textarea.value;
   var user= fetch(translationurl(input))
    .then(response => response.json())
    .then(json => {
        var translatedText=json.contents.translated;
        output.innerText=translatedText;
        
     })
    .catch(errorhandler)

}
function errorhandler(error)
{
    console.log("error")
    alert("some error occured try again later!!")
    
}
button.addEventListener("click",clickhandler)



