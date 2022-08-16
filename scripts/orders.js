import { getOrders, getColors, getInteriors, getTechnologies, getWheels } from "./database.js";

const colors = getColors()
const interiors = getInteriors()
const technologies = getTechnologies()
const wheels = getWheels()

const buildOrderListItem = (order) => {
    const selectedColor = colors.find(
        (color) => {
       
            if (color.id === order.colorId) {
                return true
            
        }
        }
    )
    const selectedInterior = interiors.find(
        (interior) => {
       
            if (interior.id === order.interiorId) {
                return true
            
        }
        }
    )
    const selectedTechnology = technologies.find(
        (technology) => {
       
            if (technology.id === order.technologyId) {
                return true
            
        }
        }
    )
    const selectedWheel = wheels.find(
        (wheel) => {
       
            if (wheel.id === order.wheelId) {
                return true
            
        }
        }
    )
    const totalCost = (selectedColor.price + selectedInterior.price + selectedTechnology.price + selectedWheel.price)
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    
    return `<li class = "customOrders">
        ${selectedColor.color} car with ${selectedWheel.wheel} wheels, ${selectedInterior.interior}, and the ${selectedTechnology.technology} package for a total
        cost of ${costString}.

        
    </li>`
}

export const Orders = () => {

    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}
