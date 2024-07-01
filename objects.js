console.clear()

const person = {
    firstName: "John",
    lastName: "Doe",
    printName: function () {
        console.log(this.firstName + " " + this.lastName)
    }
}

console.log(person.firstName)

console.log(person["lastName"])

person.age = 23

person["isAdmin"] = true
console.log(person)

person.printName()

delete person.isAdmin
console.log(person)


console.log(Object.keys(person))

for (const key of Object.keys(person)) {
    console.log(`${key}: ${person[key]}`)
}

for (const value of Object.values(person)) {
    console.log(value)
}

for (const [key,value] of Object.entries(person)) {
    console.log(`${key}: ${value}`)
}