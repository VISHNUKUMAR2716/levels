const fs =require('fs')

const additionalContent ='more content here.\n'

fs.appendFile('output.txt',additionalContent,'utf-8',(err)=>{
    if(err){
        console.log('error appending to file:',err.message)
        return
    }
    console.log('content appended successfully!')
})