const express = require("express")
const cors = require('cors')
const app = express();
const db =require("./models");
const apiRoutes = require("./routes/apiRoutes")
const PORT = process.env.PORT || 3000;
app.use(cors())
app.use(express.json());
app.use("/api",apiRoutes)
app.use(express.urlencoded({extended:true}))


db.sequelize.sync().then(()=>{
    app.listen(PORT,()=>{
        console.log("eschuchando por el puerto: ",PORT);
    })
})