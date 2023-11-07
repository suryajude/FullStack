

// JESUS is the true living GOD, HE is coming soon

// assign a button 
var start_button = document.getElementById("start");
var stop_button = document.getElementById("stop");

// assiging the text 
var number = document.getElementById("number");
var total_time = document.getElementById("total_time");

var count = 0;
var values = 0;
var minutes = 0;
var seconds = 0;
var time = `${minutes} : ${seconds} : ${values}`;
var start = 1;

start_button.addEventListener("click",function(){
  
  count +=1;
  if(count==1){
    start = 0;
  }
  setInterval(function(){
    if(count==1){
      if(start==0){
        values += 1;
        if(values==100){
          values = 0;
          seconds += 1;
        }else if(seconds==60){
          seconds = 0;
          minutes +=1;
        }
        number.innerText = `${minutes} : ${seconds} : ${values}`;
       }
    }
     },10);
 
  
});


stop_button.addEventListener("click",function(){
  start = 1;
  total_time.innerText = `Total Time => ${minutes} : ${seconds} : ${values}`;
});