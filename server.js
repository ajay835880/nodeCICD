const express = require("express");
const app = express();

app.use(express.json());

app.use("/api/users", (req,res)=>{
    res.json({message: "this is Ajay"})
});   


const PORT =  9000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});