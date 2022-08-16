import { getTechnologies, setTechnology } from "./database.js";

const techs = getTechnologies()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "technology") {
            // const chosenOption = changeEvent.target.value
            setTechnology(parseInt(changeEvent.target.value))
        }
    }
)

export const Technologies = () => {
    let html = "<h2>Technologies</h2>"

    html += '<select id="technology">'
    html += '<option value="0">Select a technology package</option>'

    for (const tech of techs) {
        html += `<option value="${tech.id}">${tech.technology}</option>`
    }

    html += "</select>"
    return html
    
}

