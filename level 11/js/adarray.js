const number=[1,2,3,4,5,6,7,8,9,10]

const sqer =number.map(num=>num*num)
console.log(sqer)
const oddnumber =number.filter(num=>num%2 !==0)
console.log(oddnumber)
const sum =number.reduce((acc,add)=>acc+add,0)
console.log(sum)
const yoo =number.forEach(num=>{
    console.log(`${num}=${Math.sqrt(num).toFixed(2)}`)
})