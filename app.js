const http=require("http");
const { dirname } = require("path");
const fs=require("fs").promises;
http.createServer(async(req,res)=>
{
res.setHeader("Content-Type", "application/json");
if(req.url==="/users" && req.method==="GET")
{
 const teacher=JSON.parse(await fs.readFile(process.cwd()+"/teachers.json","utf-8"));
 const group=JSON.parse(await fs.readFile(process.cwd()+"/Groups.json","utf-8"));

 let i=0;
 while(i<group.length){

for(let j=0;j<teacher.length;j++)
{
    if(group[i].techer_id===teacher[j].id)
        {
                 group[i].techer_id=teacher[j];
        }
  }
  i+=1;
 }

res.statusCode=200;
res.end(JSON.stringify(group));
}

}).listen(400,()=>{
    console.log("ishlamoqda.........");
})