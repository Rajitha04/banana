var button=document.querySelector("#button");
var textarea=document.querySelector("#textarea")
var output=document.querySelector("#output")

function clickhandler(){
    console.log("clicked")
    console.log("input",textarea.value)
    output.innerText="abcdefgh"+textarea.value;
    
    
}

button.addEventListener("click",clickhandler)




