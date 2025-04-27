let gameSeq = [];
let userSeq =[];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

let btns = ["yellow", "purple", "red", "green"];

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game started");
        started = true;

        levelUP();
    }
});

function gameFlash(btn){
    btn.classList.add("gameFlash");
    setTimeout(function(){
        btn.classList.remove("gameFlash");
    },250);
};

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
};

function levelUP(){
    userSeq = [];
    level++;
   h2.innerText = `Level ${level}`;

   let randIdx = Math.floor(Math.random() * 3);
   let randColor = btns[randIdx];
   let randBtn = document.querySelector(`.${randColor}`);

//    console.log(randIdx);
//    console.log(randColor);
//    console.log(randBtn);

   gameSeq.push(randColor);
   console.log(gameSeq);

   gameFlash(randBtn);
};

function checkAns(idx){
    // console.log(`current Level ${level}`);
    if(gameSeq[idx] === userSeq[idx]){
        if(gameSeq.length == userSeq.length){
            setTimeout(levelUP, 1000);
        }
    }else{
        h2.innerHTML = `Game Over! <B>your Score Was ${level}</b> </br> Press any key to start again`;

         document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
             document.querySelector("body").style.backgroundColor = "white";
        }, 150);

        reset();
    }
}

function btnPress(){
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
};

function reset(){
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}


