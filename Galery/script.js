function fadeOut(el,func,delay)
{
    var curop=parseFloat(el.style.opacity);
    if(!isNaN(curop)&&curop!=1)
        return;
    var m = setInterval(function(){
       var op=parseFloat(el.style.opacity);
       if(isNaN(op))
        op=1;
       op-=0.05;
       el.style.opacity=op;
       if(op<=0)
       {
           clearInterval(m);
           if(typeof func != 'undefined')
           {
               if(typeof delay == 'undefined')
                    delay=1000;
               setTimeout(function(){
                  func(el); 
               },delay);
           }
       }  
    }, 30);
}
function fadeIn(el,func,delay)
{
    var curop=parseFloat(el.style.opacity);
    if(!isNaN(curop)&&curop!=0)
        return;
    var m = setInterval(function(){
       var op=parseFloat(el.style.opacity);
       if(isNaN(op))
        op=0;
       op+=0.05;
       el.style.opacity=op;
       if(op>=1)
       {
           clearInterval(m);
           if(typeof func != 'undefined')
           {
               if(typeof delay == 'undefined')
                    delay=1000;
               setTimeout(function()
               {
                  func(el); 
               },delay);
           }
       }  
    }, 50);
}



