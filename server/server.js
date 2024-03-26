const config = require ("../config/config");
const app = require ("./express");
const mongoose = require("mongoose")

mongoose.connect(config.mongoUri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}) 

.then(()=>console.log("connected to mongoDB"))
.catch((err) => console.error("could not connect to mangoDB", err))

app.listen(config.port, (err)=>{
    if (err){
        console.log(err);
    }
    console.info("server started on port %s.", config.port + " " + config.mongoUri  )
})