function clock(){
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    var period = "AM";
    //set the period (AM/PM)
    if(hours>=12){
        period="PM";
    }
    hours = hours>12?hours-12:hours;
    //add zeros for the values less than 10
    if(hours<10)
    {
        hours="0"+hours;
    }
    if(minutes<10){
        minutes="0"+minutes;
    }
    if(seconds<10){
        seconds="0"+seconds;
    }
    document.querySelector('.hours').innerHTML=hours;
    document.querySelector('.minutes').innerHTML=minutes;
    document.querySelector('.seconds').innerHTML=seconds;
    document.querySelector('.period').innerHTML=period;

   
    var month = today.toLocaleString("default",{month:"long"});
    var day = today.toLocaleString("default",{weekday:'long'});
    var date = today.getDate();
    var year = today.getFullYear();
    document.querySelector('.month').innerHTML=month;
    document.querySelector('.day').innerHTML=day;
    document.querySelector('.datenum').innerHTML=date;
    document.querySelector('.year').innerHTML=year;

}
setInterval(clock,1000);
clock();