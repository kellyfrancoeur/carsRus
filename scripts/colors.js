import { getColors, setColor } from "./database.js";

const colors = getColors()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "color") {
            // const chosenOption = changeEvent.target.value
            setColor(parseInt(changeEvent.target.value))
        }
    }
)

export const paintColor = () => {
    let html = "<h2>Paint Color</h2>"

    html += '<select id="color">'
    html += '<option value="0">Select a paint color</option>'

    for (const color of colors) {
        html += `<option value="${color.id}">${color.color}</option>`
    }

    html += "</select>"
    return html
    
}


// document.addEventListener(
//     "change",
//     (event) => {
//         if(event.target.name === "style"){
//             setStyle(parseInt(event.target.value))
//         }
//     }
// )