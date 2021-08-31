import {onSnake,expandSnake} from'./snake.js'
import {randomGridPosition} from './grid.js'
let food =getRandomFoodPosition()
const EXPANSION_RATE =5

export function update(){
if (onSnake(food)){
expandSnake(EXPANSION_RATE)
food =getRandomFoodPosition()
}
}
                                                  
export function draw(gameBoard){
const foodElement = document.createElement('div')
foodElement.style.gridRowStart = food.y
foodElement.style.gridColumnStart = food.x
foodElement.classList.add('food')
board.appendChild(foodElement)
}
function getRandomFoodPosition(){
let newFoodPositon
while (newFoodPositon ==null || onSnake(newFoodPositon)){
newFoodPositon =randomGridPosition()
}
return newFoodPositon
}