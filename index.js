console.log(process.env);
console.log(process.env.API_KEY);

require('http').createServer((req,res)=>{
    res.end(JSON.stringify(process.env));
}).listen(process.env.PORT||3000)