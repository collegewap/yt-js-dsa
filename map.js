console.clear()

const map = new Map([["name","James"],["age",30]])

map.set("isAdmin",true)

map.delete("age")

for (const [key,value] of map) {
    console.log(key,value)
}

console.log(map.size)

console.log(map.has("size"))

map.clear()

console.log(map.size)

