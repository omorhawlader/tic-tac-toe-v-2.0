let turn = true;
    const divs = document.querySelectorAll(".container button")
    const reset = document.querySelector(".reset")
    const won = document.querySelector(".won")
    const winner = document.querySelector(".winner")
    
    const winPatterns=[
     [0,1,2],
     [0,3,6],
     [0,4,8],
     [1,4,7],
     [2,5,8],
     [2,4,6],
     [3,4,5],
     [6,7,8]
      ]
    function stopGameBtn(div){
      divs.forEach(div=>div.disabled=true)
    }
    reset.addEventListener("click",(e)=>{
      e.target.style.color="gray";
      turn = true;
      won.innerHTML=""
      divs.forEach(div=>div.disabled=false)
      
      divs.forEach(div=>{
        if(div.classList.contains("cross")){ 
          div.classList.remove("cross")
          winner.classList.remove("cross")
        }
        if(div.classList.contains("rec")){
          div.classList.remove("rec")
          winner.classList.remove("rec")
        }
      })
    })
    divs.forEach((div)=>{
      div.addEventListener("click",(e)=>{
        if(turn){
              e.target.classList.add("rec")
              turn=false
        }else{
               e.target.classList.add("cross")
               turn=true
        }
        e.target.disabled=true
        checking()
      })
    })
    function checking(){
      for(let patter of winPatterns){
        let pos0 = divs[patter[0]]
        let pos1 = divs[patter[1]]
        let pos2 = divs[patter[2]]
        if(
          pos0.classList.contains("cross")
          &&
          pos1.classList.contains("cross")
          &&
          pos2.classList.contains("cross")
          ){
            won.innerHTML="Winner Is "
            winner.classList.add("cross")
            stopGameBtn()
            reset.style.color="tomato"
           
          }else if(
           pos0.classList.contains("rec")
          &&
          pos1.classList.contains("rec")
          &&
          pos2.classList.contains("rec")
            
            ){
          
            won.innerHTML="Winner Is "
            winner.classList.add("rec")
            reset.style.color="tomato"
          
            stopGameBtn()
          }
          
          
          
      }
    }