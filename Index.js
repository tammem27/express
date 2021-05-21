  
const express=require('express');
const app = express();
const path=require('path');
const PORT = 5000 ;
 app.use(date=(req,res,next)=>{

    var objDate = new Date();
    var hours = objDate.getHours();
    var day =objDate.getDay();
    if((hours >= 17 && hours <= 9)&&(day==0 || day==6)){
        res.send('SORRY WE ARE CLOSED');
    }
    else{
        next()
        
    }
})
app.use(express.static(path.join(__dirname,'Public')));
app.listen(PORT,(err)=>
err? console.log(err):console.log(`service is runing on port ${PORT}`));