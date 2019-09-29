

setInterval (
  
   function() {
        var countdown = document.getElementById('countdown')

        var toEnd = new Date(2019,7,18,16,30)
        var now = new Date()

        var over = toEnd.getTime()
        
        
        var now = now.getTime()
        
        var different = over - now

        var alls = parseInt(different/1000)

        var hour = parseInt(alls / 3600)

        var mins = parseInt((alls  % 3600)/ 60)

        var s = parseInt(((alls  % 3600)% 60) %60)

        if (hour < 10 ) {
            hour ="0"+hour;

        }else if(hour==0){
            hour= 00;

        }  if(mins<10){
            mins="0"+mins;
       
        }if(s<10){
            s="0"+s;
        
        } else{
           countdown.innerHTML = hour + '：' + mins + ':' + s
        }
             
    }

    ,1000
)







