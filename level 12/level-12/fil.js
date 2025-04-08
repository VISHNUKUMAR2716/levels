const fs= require('fs')

const output='output.txt'

if(fs.existsSync(output)){
    console.log(`${output} exists`)
}else{
    console.log(`${output} does not exist`)
}