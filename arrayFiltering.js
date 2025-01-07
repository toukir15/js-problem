const peoples = [
    { name: "Alice", age: 25, gender: "female" },
    { name: "Bob", age: 30, gender: "male" },
    { name: "Charlie", age: 22, gender: "male" },
    { name: "Diana", age: 28, gender: "female" },
    { name: "Edward", age: 35, gender: "male" }
];

const filterAndMapNames = peoples.filter((people) => people.gender !== "female").map((people) => people.name)
console.log(filterAndMapNames)