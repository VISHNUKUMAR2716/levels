var person ={
    name:'vishnu kumar',
    age :21 ,
    city:'salem',
    hobbies: ['reading','cricket','coading']
}
console.log('name:',person.name)
console.log('age:',person.age)
console.log('city',person.city)
console.log('hobbies',person.hobbies)

person.age =23

person.greet =function(){
    return `hello my name is ${this.name}`
}
console.log(person.greet())