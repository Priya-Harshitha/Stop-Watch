let display = document.getElementById('display');
let timer = null;
let running = false;
let elapsedTime = 0;
let startTime = 0;


function start(){
    if(!running){
        startTime = Date.now()-elapsedTime;
        timer = setInterval(update,10);
        running = true;
    }
}
function stop(){
    if(running){
        clearInterval(timer);
        elapsedTime = Date.now()-startTime;
        running=false;
    }
}
function reset(){
      clearInterval(timer);
      running = false;
      elapsedTime = 0;
      startTime = 0;
      display.textContent=`00:00:00:00`;
}
function update(){
   const current = Date.now();
   elapsedTime = current-startTime;
   let hours = Math.floor(elapsedTime/(1000*60*60));
   let min = Math.floor(elapsedTime/(1000*60)%60);
   let sec = Math.floor(elapsedTime/(1000%60));
   let milsec = Math.floor(elapsedTime%1000/10);

   hours=String(hours).padStart(2,'0');
   min=String(min).padStart(2,'0');
   sec=String(sec).padStart(2,'0');
   milsec=String(milsec).padStart(2,'0');
   display.textContent =`${hours}:${min}:${sec}:${milsec}`;
}
