const btn=document.querySelector(".btn");
const inp=document.querySelector(".inp");
const main=document.querySelector(".main");
// api request in XMLHttpRequest



const url="https://api.giphy.com/v1/gifs/search?api_key=4NoUyrwgv51B1BcgzQjQ4kVOQ71cWkFg&q=water&limit=25&offset=0&rating=g&lang=en"
const call=new XMLHttpRequest();
call.open("GET", url);
call.send();
call.addEventListener("load", function(e){
const data=e.target.response;
// parsing
const parse=JSON.parse(data);
const result=parse.data;
// getting the url
const url=result[0].url
// adding to image
console.log(url);

})