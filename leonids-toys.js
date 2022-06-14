
//for column 2 number 9
const toyToFind = 5

/*const slide = {
    id: 1,
    name: "Fischer Price Plastic Slide",
    maker: "Fischer Price",
    price: 50
}

const ball = {
    id: 2, 
    name: "Paw Patrol Ball",
    maker: "Spin Master",
    price: 5 
}

const book = {
    id: 3,
    name: "Goodnight Moon Book",
    maker: "Harper Collins Publisher",
    price: 10
} */

const toys = [
    {
        id: 1,
        name: "Fischer Price Plastic Slide",
        maker: "Fischer Price",
        price: 50
    },

    {
        id: 2, 
        name: "Paw Patrol Ball",
        maker: "Spin Master",
        price: 5 
    },

    {
        id: 3,
        name: "Goodnight Moon Book",
        maker: "Harper Collins Publisher",
        price: 10 
    }
]
//console.log(toys)

/*for (const toy of toys) {
    console.log(toy.name)
}*/

const swing = {
    id: 4,
    name: "Outdoor Swing",
    maker: "Fischer Price",
    price: 25
}

const crayons = {
    id: 5,
    name: "Crayola Crayons",
    maker: "Crayola",
    price: 1
}

/*for (const newToys of toys) {
    console.log(toys.push(swing))
}*/ //I don't think this is correct

toys.push(swing)
toys.push(crayons)

/*for (const toy of toys) {
    console.log(toy.name)
}*/ //for column 2 number 6

/*for column 2 number 7
for (const toy of toys) {
    console.log (`The ${toy.name} by ${toy.maker} costs ${toy.price} dollars.`)
}
blockers: I got it to work easily. But I still don't understand the creating a new constant in the for()*/


// column 2 number 8
for (const toy of toys) {
    // console.log(toy.price)
    //column 2 number 9
    if (toy.id === toyToFind) {
        toy.price *= 1.05  // increase price by %5
        console.log(`The ${toy.name} by ${toy.maker} costs $ ${toy.price}.`)
    }
    //console.log(toy.price)
}





