var button = document.getElementById('button');
var timecount = document.getElementById('time');
var title = document.getElementById('title');
// number to start the counting 
var count = 0;
var time = 0;
button.addEventListener("click",function(){
    count+=1;
    title.innerText = new Date();
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

console.log("it is a log"); // to print a value
console.warn("It is a warning"); // to print a value witha  yellow theme
console.error("It is an error"); // to print a value with red theme

/**
 * IT is used for programming
 * to handle our views
 * ----> for controlling our views
 * ----> controlling forms, para, buttons,etc...
 * ----> DOM = Document Object Model.
 */