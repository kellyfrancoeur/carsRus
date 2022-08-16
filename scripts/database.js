const database = {
    colors : [
        {id: 1, color: "Silver", price: 100},
        {id: 2, color: "Midnight Blue", price: 150},
        {id: 3, color: "Firebrick Red", price: 200},
        {id: 4, color: "Spring Green", price: 85}
    ],
    interiors: [
        {id: 1, interior: "Beige Fabric", price: 50},
        {id: 2, interior: "Charcoal Fabric", price: 75},
        {id: 3, interior: "White Leather", price: 125},
        {id: 4, interior: "Black Leather", price: 225} 
    ],
    technologies: [
        {id: 1, technology: "Basic Package", price: 500},
        {id: 2, technology: "Navigation Package", price: 650},
        {id: 3, technology: "Visibility Package", price: 750},
        {id: 4, technology: "Ultra Package", price: 1000}
    ],
    wheels: [
        {id: 1, wheel: "17-inch Pair Radial", price: 400},
        {id: 2, wheel: "17-inch Radial Black", price: 500},
        {id: 3, wheel: "18-inch Pair Spoke Silver", price: 450},
        {id: 4, wheel: "18-inch Spoke Black", price: 650}
    ],
    customOrders: [
        {
        id: 1, 
        colorId: 1, 
        interiorId: 1,
        technologyId: 1,
        wheelId: 1,
        timestamp: 1614659931693 
        }
    ],
    orderBuilder: {}
}
export const getColors = () => {
    return database.colors.map(color => ({...color}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}

export const setColor = (id) => {
    database.orderBuilder.colorId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}

export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}

export const getCurrentOrder = () => {
    return database.orderBuilder
}

export const addCustomOrder = () => {
    const newOrder = {...database.orderBuilder}

    const lastIndex = database.customOrders.length - 1

    newOrder.id = database.customOrders[lastIndex].id + 1

    newOrder.timestamp = Date.now()

    database.customOrders.push(newOrder)

    database.orderBuilder = {}

    document.dispatchEvent(new CustomEvent("stateChanged"))
}
