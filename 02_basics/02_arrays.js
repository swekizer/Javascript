const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Batman", "Wonder Woman"]


//Push method
//marvel_heros.push(dc_heros)
//console.log(marvel_heros)
//console.log(marvel_heros[3][1])

//Concat method
marvel_heros.concat(dc_heros)
console.log(marvel_heros)

const newHeros = marvel_heros.concat(dc_heros)
console.log(newHeros)


//Spread method
const newHeros2 = [...marvel_heros, ...dc_heros]
console.log(newHeros2)

//Flat method
const another_array = [1, 2, 3, [4, 5, 6], 7 , [6, 7, [4, 5]]]
const flat_array = another_array.flat(2)
console.log(flat_array);


//From method
console.log(Array.isArray("Swekit"))
console.log(Array.from("Swekit"))
console.log(Array.from({Name: "Swekit"}))

//Of method
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))