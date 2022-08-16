import { getInteriors, setInterior } from "./database.js";

const interiors = getInteriors()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "interior") {
            // const chosenOption = changeEvent.target.value
            setInterior(parseInt(changeEvent.target.value))
        }
    }
)

export const Interiors = () => {
    let html = "<h2>Interiors</h2>"

    html += '<select id="interior">'
    html += '<option value="0">Select interior</option>'

    for (const interior of interiors) {
        html += `<option value="${interior.id}">${interior.interior}</option>`
    }

    html += "</select>"
    return html
    
}