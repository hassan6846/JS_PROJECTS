

// getting the api url which should follow cors policy
const ApiUrl="https://api.kanye.rest/"
// selection heading which we should change the innerHTMl
const heading=document.querySelector("h1");
// making the XMLREQUEST To api Server
const request=new XMLHttpRequest();
request.open("GET",ApiUrl);
request.send();
request.addEventListener("load", function(e){
    const data=e.target.response;
// parsing json response
const QuoteTxt=JSON.parse(data);
// changing heading when reload
heading.innerHTML=QuoteTxt.quote;
console.log(QuoteTxt);
})

