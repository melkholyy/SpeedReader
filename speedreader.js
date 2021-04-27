
  var stopb = document.getElementById("stop");
  var startb = document.getElementById("start");


var result;
var speed = 250;
var flag = true;
var i=0;




function mod()
{

x=document.getElementById("i/o").value;

var res = x.replaceAll(/;|!|\?|\.|\:|\,/g, "");
result = res.split(" ");

}
  function text(){


if(flag!=false && i<result.length)
{
document.getElementById("op").innerHTML=result[i];
i++;

}

else {
stop();
flag = true;
i=0;
return;
}
timer();

}

function timer()
{
setTimeout(text, speed);
}
function stop(){

    flag = false;
    startb.disabled = false;
    startb.style.backgroundColor ="#FFFFFF";
    stopb.disabled = true;
    stopb.style.backgroundColor ="#808080";
}

function startt()
{
startb.disabled = true;
startb.style.backgroundColor ="#808080";
stopb.disabled = false;
stopb.style.backgroundColor ="#FFFFFF";
mod();
if(flag!=false)
{

text();

}
else
{
document.getElementById("op").innerHTML="";
flag = true;
}
}
