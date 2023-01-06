const btn=document.querySelector(".btn");
const inp=document.querySelector(".inp");
// api request in XMLHttpRequest


const url="https://api.giphy.com/v1/gifs/search?api_key=4NoUyrwgv51B1BcgzQjQ4kVOQ71cWkFg&q=&limit=25&offset=0&rating=g&lang=en";
const call=new XMLHttpRequest();
call.open("GET", url);
call.send();