function validateForm() {
  let x = document.forms["f1"]["email"].value;
  let y = document.forms["f1"]["password"].value;
  if (x =="") {
    document.getElementById("name1").style.display="block";
    return false;
  }
  else if(y ==""){
    document.getElementById("name2").style.display="block";
    return false;
  }
}

function changeText(id) {
  id.innerHTML = "🍕🍔🍟";
}
var style2;
function lightstyle(){
  var lightstyle="style3.css";
  style2=document.getElementById("style2");
  style2.href=lightstyle;
}
function darkstyle(){
  var darkstyle="style2.css";
  style3=document.getElementById("style2");
  style3.href=darkstyle;
}
var style1;
function lightstyle1(){
  var lightstyle="style4.css";
  style1=document.getElementById("style1");
  style1.href=lightstyle;
}
function darkstyle1(){
  var darkstyle="style1.css";
  style4=document.getElementById("style1");
  style4.href=darkstyle;
}  
function openNav() {
  document.getElementById("sidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("sidenav").style.width = "0";
}

