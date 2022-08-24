const fs = require("fs");
// const readline = require('readline');


// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// rl.question('How many nfts do you want to make ? ', async function (number) {
//     console.log(`creating ${number} items`);

//     await fs.readFile("./sugar/cache.json", (err,data)=>{
//         const realData = JSON.parse(data)
//         const program = realData.program
//         const itemZero = realData.items[0]

//         // realData.push(itemZero)
//         for(i=1;i<=number;i++){
//             realData.items[i] = itemZero
//         }
//         console.log(realData)
//         const jsonRealData = JSON.stringify(realData)
//         fs.writeFile("./sugar/cache.json",jsonRealData,(err)=>{
//             if(err) console.error(err);
//             console.log("success")
//         })
//         rl.close();

//     })

// });

// rl.on('close', function () {
//   console.log('\nBYE BYE !!!');
//   process.exit(0);
// });

fs.readFile("./sugar/cache.json", (err,data)=>{
    const realData = JSON.parse(data)
    const program = realData.program
    const itemZero = realData.items[0]

    // realData.push(itemZero)
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