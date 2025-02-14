const dino = document.querySelector('.dino img');
const obstacle = document.querySelector('.tree img ');
const restart = document.querySelector('.restart ');
const game = document.querySelector('.game-container');
const scoreElement = document.getElementById('score'); // Score display element
let score = 0; // Initial score
let scoreInterval;
let isJumping = false;
let isGameOver = false;
let gravity = 0.9;




document.addEventListener("keydown", (e) => {
    if (e.code == "Space") {
        jump();
        console.log('the spacebar was click');
    }
})
document.addEventListener("click", (e) => {
    jump();
    console.log('the right button was click');
})

jump = () => {
    let position = 0;
    let speed = 15;
    isJumping = true;

    function moveup() {
        if (position >= 150) {
            fall()
        } else {
            position += speed;
            speed -= 0.5;
            dino.style.transform = `translateY(-${position}px)`;
            requestAnimationFrame(moveup);
        }
    }

    function fall() {
        if (position <= 0) {
            position = 0;
            dino.style.transform = `translateY(0)`;
            isJumping = false;
        } else {
            speed += 0.5;
            position -= speed;
            dino.style.transform = `translateY(-${position}px)`;
            requestAnimationFrame(fall);
        }
    }

    moveup()
}

function checkCollision() {
    const dinoRect = dino.getBoundingClientRect()
    const obstacleRect = obstacle.getBoundingClientRect();

    if (
        dinoRect.right > obstacleRect.left &&
        dinoRect.left < obstacleRect.right &&
        dinoRect.bottom > obstacleRect.top &&
        dinoRect.top < obstacleRect.bottom
    ) {
        isGameOver = true;
        document.querySelector(".restart").style.display = "block";
    }
}

// Game loop to continuously check for collisions
function gameLoop() {

    if (!isGameOver) {
        checkCollision();
        requestAnimationFrame(gameLoop); // Keep the game running
    }
    if (isGameOver) {
        obstacle.style.animationPlayState = 'paused'; // Pauses obstacle animation
    }
}

function startScore() {
    score = 0; 
    scoreElement.textContent = score; 
    scoreInterval = setInterval(() => {
        if (!isGameOver) {
            score++;
            scoreElement.textContent = score;
        }
    }, 100);
}
function stopscore(){
    clearInterval(scoreInterval);
}

function restartgame(){
    isGameOver = false;
    document.querySelector(".restart").style.display = "none"; 
    obstacle.style.animation = "none"; 
    void obstacle.offsetWidth; 
    obstacle.style.animation = ""; 

    dino.style.transform = "translateY(0)";
    isJumping = false;


    stopscore()
    startScore()
    gameLoop();
}

restart.addEventListener("click",(e)=>{
    console.log('the restart btn was clicked');
    
    e.stopPropagation()
    restartgame()
})

startScore();
gameLoop();