

// JESUS is the true living GOD, HE is coming soon

// assign a button 
var start_button = document.getElementById("start");
var stop_button = document.getElementById("stop");
var lap = document.getElementById("lap");

// assiging the text 
var number = document.getElementById("number");
var total_time = document.getElementById("total_time");

// for the lap
var lap_1 = document.getElementById("lap_1");
var lap_2 = document.getElementById("lap_2");
var lap_3 = document.getElementById("lap_3");
var lap_4 = document.getElementById("lap_4");
var lap_5 = document.getElementById("lap_5");
var lap_6 = document.getElementById("lap_6");
var lap_7 = document.getElementById("lap_7");

var count = 0;
var values = 0;
var minutes = 0;
var seconds = 0;
var time = `${minutes} : ${seconds} : ${values}`;
var start = 1;
var lap_count = 0;




// method to start the operation
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

// method for the lap

lap.addEventListener("click",function(){
  lap_count += 1;
  if(lap_count==1){
    lap_1.innerText = `${minutes} : ${seconds} : ${values}`;
  }else if(lap_count==2){
    lap_2.innerText = `${minutes} : ${seconds} : ${values}`;
  }else if(lap_count==3){
    lap_3.innerText = `${minutes} : ${seconds} : ${values}`;
  }else if(lap_count==4){
    lap_4.innerText = `${minutes} : ${seconds} : ${values}`;
  }else if(lap_count==5){
    lap_5.innerText = `${minutes} : ${seconds} : ${values}`;
  }else if(lap_count==6){
    lap_6.innerText = `${minutes} : ${seconds} : ${values}`;
  }else if(lap_count==7){
    lap_7.innerText = `${minutes} : ${seconds} : ${values}`;
  }else if(lap_count ==8){
    start = 1;
  total_time.innerText = `Total Time => ${minutes} : ${seconds} : ${values}`;
  }
});

// method to stop the operation 
stop_button.addEventListener("click",function(){
  start = 1;
  total_time.innerText = `Total Time => ${minutes} : ${seconds} : ${values}`;
});