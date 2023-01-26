// document.getElementById("p1").innerHTML="hey this is week 10";
// document.getElementById("p1").style.backgroundColor="plum";
// document.getElementsByClassName("p1")[0].innerHTML="Hey this is week 10";
// document.getElementsByClassName("p1")[1].innerHTML="Hey this is week 10";
// document.getElementsByClassName("p1")[2].innerHTML="Hey this is week 10";
// document.getElementsByClassName("p1")[3].innerHTML="Hey this is week 10";
document.getElementsByTagName("h1")[1].innerHTML="getElementsByTagName";
var select = document.getElementsByClassName("p1");
for(var i=0;i<=select.length;i++){
    select[i].innerHTML="hey this is sarthak the don";
    select[i].style.cssText="background-color:plum; color:white; font-size: 20px;";
}