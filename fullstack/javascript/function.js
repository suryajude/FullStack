var text = document.querySelector('h3')
var time =  document.getElementById('time');
var button = document.getElementById('button');


button.addEventListener("click",function(){
    text.innerText = `you pressed the button ${Math.floor(Math.random() * 70 )}`;
});
var a =0;
setInterval(function(){
 
  if(a!=7){
    a = a+1;
    time.innerText = `running time is ${a}`
  }else{
    time.innerText = "timeout :(";
    time.style.color('red');
  }
},1000)