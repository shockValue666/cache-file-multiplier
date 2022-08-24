const fs = require("fs");

fs.readFile("./sugar/cache.json", (err,data)=>{
    const realData = JSON.parse(data)
    const itemZero = realData.items[0]
    
    
    for(i=1;i<=10;i++){
        realData.items[i] = itemZero
    }
    
    console.log(realData)
    const jsonRealData = JSON.stringify(realData)
    fs.writeFile("./sugar/cache.json",jsonRealData,(err)=>{
        if(err) console.error(err);
        console.log("success")
    })

})