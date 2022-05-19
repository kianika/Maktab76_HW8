
let animal = {
speaks: true,
walk() {
console.log("Animal walks");
}
};


const dog = {
    name : "dog",
    type: "huskey",
    __proto__: animal
}

console.log(dog.speaks);