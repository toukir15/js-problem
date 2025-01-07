// Create an array of objects, each representing a person with properties like name, age, and gender.Write a function to filter out all females and then map the remaining people to an array of names.Print the final result./ create an array of object

const peoples = [
    { name: "Alice", age: 25, gender: "female" },
    { name: "Bob", age: 30, gender: "male" },
    { name: "Charlie", age: 22, gender: "male" },
    { name: "Diana", age: 28, gender: "female" },
    { name: "Edward", age: 35, gender: "male" }
];

const arrayFiltering = (peoples) => {
    const filterAndMapNames = peoples.filter((people) => people.gender !== "female").map((people) => people.name)
    return filterAndMapNames
}


console.log(arrayFiltering(peoples))