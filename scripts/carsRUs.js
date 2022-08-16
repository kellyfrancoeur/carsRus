import { paintColor } from "./colors.js";
import { Interiors } from "./interiors.js";
import { Technologies } from "./technologies.js";
import { Wheels } from "./wheels.js";
import { Orders } from "./orders.js";
import { addCustomOrder } from "./database.js";


document.addEventListener(
    "click",
    (event) => {
        if(event.target.id === "orderButton") {
            addCustomOrder(parseInt(event.target.value))
        }
    }
)

export const carsRUs = () => {
    return `
    <h1>Cars-R-Us: Personal Car Builder!</h1>
    <article class ="picture"><img src="https://i.pinimg.com/originals/1f/b3/fd/1fb3fd287f851da90e3ec73b10be294a.gif" alt="Cool Car"style="width: auto; height: auto;max-width: 220px;max-height: 200px"></img></article>
    <article class="buyTheCar">
        <article class="options">
            <div id = "paint">
                ${paintColor()}            
            </div>
            <div id = "fabric">
                ${Interiors()}
            </div>
            <div id = "tech">
                ${Technologies()}
            </div>
            <div id = "wheelies">
                ${Wheels()}
            </div>
        </article>
    </article>
    
    <article>
            <button id="orderButton">Place Car Order</button>
        </article>

        <article class="orders">
            <h2>Custom Car Orders</h2>
            <div id = "orderSpace">
            ${Orders()}
            </div>
        
        </article>
    `
}