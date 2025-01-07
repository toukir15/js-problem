// Create an array of objects representing cars with properties like make, model, and year.Write a function to sort the array of cars by the year of manufacture in ascending order.Print the sorted array.

const peoples = [
    { name: "Alice", age: 25, gender: "female" },
    { name: "Bob", age: 30, gender: "male" },
    { name: "Charlie", age: 22, gender: "male" },
    { name: "Diana", age: 28, gender: "female" },
    { name: "Edward", age: 35, gender: "male" }
];

const findAndModify = (peoples, name, newAge) => {
    const modifyArray = peoples.map((people) => {
        if (people.name == name) {
            people.age = newAge
        }
        return people
    })
    return modifyArray
}
console.log(findAndModify(peoples, "Diana", 20))
