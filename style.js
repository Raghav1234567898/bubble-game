document.querySelector("#but").
addEventListener("click",function(){
    document.querySelector("#but").style.top = "-100%"
    var score = 0;
    document.querySelector("#score").textContent = score;
    var time = 60;
    document.querySelector("#timer").textContent = time;
    var rn;
    function ranhit(){
        rn = Math.floor(Math.random()*10)
        document.querySelector("#hit").textContent = rn
    }
    function timing(){
        var timee = setInterval(()=>{
            if(time === 0){
                clearInterval(time);
                document.querySelector("#bubble").innerHTML = `<h1>GAME OVER YOUR SCORE WAS <span>${score}</span></h1>`
            }
            else{ 
                time--;
            }
            document.querySelector("#timer").textContent = time;
        },1000)
    }
    function bubbles(){
        var clutter = "";
    for(i=0;i<136;i++){
        var rn = Math.floor(Math.random()*10);
        clutter += `<div class="ball">${rn}</div>`
    }
    document.querySelector("#bubble").innerHTML = clutter;
    }
    function scorecard(){
        
        document.querySelector("#bubble").addEventListener("click",function(dets){
            document.querySelector("#score").textContent = score;
            if(dets.target.textContent === document.querySelector("#hit").textContent){
                document.querySelector("#score").textContent = Number(score+=5);
                ranhit();
                bubbles();
            }
            else{
                document.querySelector("#score").textContent = Number(score-=3);  
            }
            
        })
    }
    bubbles();
    timing();
    ranhit();
    scorecard();
})