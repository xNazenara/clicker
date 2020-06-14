const mainContainer = document.querySelector('.main-container')

let active = false

let draw = (e) => {
    const dot = document.createElement('span')

    dot.style.background = 'black'

    dot.style.width = '10px'

    dot.style.height = '10px'

    dot.style.borderRadius = '100px'

    dot.style.position = 'absolute'

    dot.style.left = e.pageX
    dot.style.top = e.pageY

    mainContainer.appendChild(dot)
} 
    


window.addEventListener('click', (event) => {
    if(active) {
        window.removeEventListener('mousemove', draw)
        
        active = false
    } else {
        window.addEventListener('mousemove', draw)
        
        active = true
    }
})






















const countries = [
    {
        name: "Швейцария",
        languages: ["Немецкий", "Французский", "Итальянский"],
        capital: {
            name: "Берн",
            population: 126598
        },
        cities: [
            {name:"Цюрих", population: 378884},
            {name: "Женева", population: 188634},
            {name: "Базель", population: 164937}
        ]
    },
    {
        name: "Германия",
        languages: ["Немецкий"],
        capital: {
            name: "Берлин",
            population: 3375000
        },
        cities: [
            {name:"Гамбург", population: 1500000}
        ]
    }
]

//console.log(Object.keys(countries[0].cities[0]))