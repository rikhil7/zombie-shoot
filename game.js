let gameBody = document.querySelector("#game-body");
let lives = 5
let livesBox= document.querySelector("#lives-box")
let lifeBar = document.querySelector("#max-lives")
let margin = 0
let score = 0
let shotGun = new Audio("./assets/shotgun.wav")
let bgm = new Audio("./assets/bgm.mp3") 
bgm.play()
bgm.loop = true
gameBody.onclick = ()=>{
    shotGun.play()
}
function zombieImage() {
    console.log(lives)
    if (lives<0){
        window.open("game-over.html","_self")
    }
    let img = document.createElement("img");
    let marginValue = Math.ceil(Math.random() * 90);
    img.style.marginLeft = `${marginValue}%`;
    // img.setAttribute("src", "./assets/zombie-2.png");
    img.setAttribute("class", "zombie-image");
    
    let operator = Math.ceil(Math.random()*5)
    switch(operator){
        case 1:
            img.setAttribute("src", "./assets/zombie-1.png");
            break
        case 2:
            img.setAttribute("src", "./assets/zombie-2.png");
            break
        case 3:
            img.setAttribute("src", "./assets/zombie-3.png");
            break
        case 4:
            img.setAttribute("src", "./assets/zombie-4.png");
            break
        case 5:
            img.setAttribute("src", "./assets/zombie-5.png");
            break
    }
    let op2 = Math.ceil(Math.random()*2)+3
    img.style.animationDuration = `${op2}s`
    img.style.width = "100px";
    gameBody.appendChild(img);
    let count = 0
    img.onclick = () => {
        score++
        localStorage.setItem("score", score)
        count++
        gameBody.removeChild(img);
        zombieImage(); // Create a new zombie after removing the current one
    }
    setTimeout(()=>{
        if (count==0){
            gameBody.removeChild(img)
            lives--
            margin+=10
            lifeBar.style.marginLeft = `${margin}%`
            lifeBar.style.marginRight = `${margin}%`
            lifeBar.style.width = `${20*lives}%`
            zombieImage()
        }
    },`${op2*1000}`)
}

zombieImage();


let time
let timer = document.getElementById("timer");
let changeTime;

function startTimer(){
    time = 30;
    timer.textContent = time;
    changeTime = setInterval(()=>{
        time--;
        timer.textContent = time;
        if (time == 0){
            window.open("win.html", "_self");
        }
    },1000)
}
localStorage.setItem("score",0)
startTimer()






























// Iteration 1: Declare variables required for this game

// Iteration 1.2: Add shotgun sound

// Iteration 1.3: Add background sound

// Iteration 1.4: Add lives

// Iteration 2: Write a function to make a zombie

// Iteration 3: Write a function to check if the player missed a zombie

// Iteration 4: Write a function to destroy a zombie when it is shot or missed

// Iteration 5: Creating timer

// Iteration 6: Write a code to start the game by calling the first zombie

// Iteration 7: Write the helper function to get random integer
