var main = document.querySelector("#main");
var cur = document.querySelector("#cursor");
main.addEventListener("mousemove", function(yem){
    cur.style.left = yem.x+"px";
    cur.style.top = yem.y+"px";
});