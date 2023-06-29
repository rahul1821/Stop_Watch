// access button by the id
let startbutton = document.getElementById('start');
let stopbutton = document.getElementById('stop');
let resetbutton = document.getElementById('reset');

// create a variables 
let hour = 00;
let min = 00;
let sec = 00;
let count = 00;

// start time 
startbutton.addEventListener('click', function(){
    timer = true;
    watch();
});

// stop stopwatch time
stopbutton.addEventListener('click', function(){
    timer = false;
});

// reset all values on the html page! (hr:min:sec)
resetbutton.addEventListener('click', function(){
    timer = false;
    hour = 0;
    min = 0;
    sec = 0;
    count = 0;
    document.getElementById('hr').innerHTML == "00";
    document.getElementById('min').innerHTML == "00";
    document.getElementById('sec').innerHTML == "00";
})

// time work functionality
function watch(){
    if(timer){
        count++;

        if(count == 100){
            sec++;
            count=0;
        }
        if(sec == 60){
            min++;
            sec = 0;
        }
        if(min == 60){
            hour++;
            min = 0;
            sec = 0;
        }

        let hourstring = hour;
        let minstring = min;
        let secstring = sec;
        let countstring = count;

        if(hour <10){
            hourstring = "0" + hourstring;
        }
        if(min < 10){
            minstring = "0" + minstring;
        }
        if(sec < 10){
            secstring = "0" + secstring;
        }
        if(count < 10){
            countstring = "0" + countstring;
        }

        document.getElementById('hr').innerHTML = hourstring; // access hour values for the html page like (00)
        document.getElementById('min').innerHTML = minstring; // access min values for the html page like (00)
        document.getElementById('sec').innerHTML = secstring; // access hour sec for the html page like (00)
        
        setTimeout(watch, 10);
        }
}
