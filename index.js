console.log(process.env);

require('http').createServer((req,res)=>{
    res.end(JSON.stringify(process.env));
}).listen(process.env.PORT||3000)