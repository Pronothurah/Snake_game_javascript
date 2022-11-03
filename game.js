
import {update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection} from './snake.js'
import {update as updateFood, draw as drawFood} from './food.js'
import { outsideGrid } from './grid.js'

let LastRenderTime = 0;
let gameOver = false
const gameBoard = document.getElementById('game-board');

// Game Loop
function main(currentTime){
    if (gameOver){
        if (confirm('You Lost Press OK to Restart')){
            window.location ='/'
        }
        return
    }
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - LastRenderTime)/1000;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
  
    LastRenderTime = currentTime;
    
    update()
    draw()
    checkDeath()
}

window.requestAnimationFrame(main);


// Update loop
function update(){
    updateSnake();
    updateFood();
}


// Draw loop
function draw(){
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}