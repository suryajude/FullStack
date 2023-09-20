var button = document.getElementById('button');
var timecount = document.getElementById('time');
var title = document.getElementById('title');
// number to start the counting 
var count = 0;
var time = 0;
button.addEventListener("click",function(){
    count+=1;
    if(count==1){
        setInterval(function(){
            time = time+1;
            timecount.innerText = `${time}`;
            if(time%2==0){
                timecount.style.color = 'blue';
                title.style.color = 'green';
            }else if(time){
                timecount.style.color = 'red';
                title.style.color = 'purple';
            }
        },500);
    }else{
        null;
    }
});