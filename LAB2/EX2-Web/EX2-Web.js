//--------------------------follow--------------------------------

// makes sure that the round circle follows the mouse cursor
 var f = document.getElementById('foo');
			document.addEventListener('mousemove', function(ev){
 		  f.style.transform = 'translateY('+(ev.clientY)+'px)';
   		 f.style.transform += 'translateX('+(ev.clientX)+'px)';
			},true);
      
  
//---------------------------time---------------------------------  
  
  
  
  //shows the actual time  https://codepen.io/afarrar/pen/JRaEjP
  function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    //hour hoes till 23 but we want 12 cycles for AM PM
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    //get values in the right format
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    //make sure time can be joined with html
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}
//start
showTime();
