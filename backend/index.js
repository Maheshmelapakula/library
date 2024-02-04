const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const cors = require('cors')
const bodyParser = require('body-parser')




const { connection } = require('./config/db');
const { UserModel } = require('./model/User.model');
const {bookRouter} = require('./routes/book.route');
const { authentication } = require('./middlewares/authenticate.middleware');


const app = express()
app.use(express.json())
app.use(bodyParser.json())

app.use(cors({
    origin:"*"
}))

app.get('/', (req, res) => {

    res.send('API IS WORKING')
})

app.post("/register", async (req, res) => {
    const {username,studentID, department, email, password} = req.body;
    try{
        bcrypt.hash(password, 4, async function(err, hash) {
            await UserModel.create({username,studentID, department, email, password : hash})
            return res.send({msg : "Registration successfull"})
        });
    }
    catch(err){
        console.log(err)
        return res.send({msg : "something went wrong, please try again later"})
    }
})

app.post('/login', async(req,res)=>{
    const {studentId,password} = req.body;
    console.log(studentId,"studentID",password);

    const user = await UserModel.findOne({studentID:studentId})
   
    if(!user){
        return res.send({msg:"User not found, please signup",status:"NotFound"})
    }

    const hash = user.password
    // console.log(hash,user,studentID,password);
    bcrypt.compare(password,hash, function(err,result){
        
        if(result){
            const token = jwt.sign({userID : user._id}, "bookManagemet")
            return res.send({msg:"Login successfull", token, status:"Sucuss"})

        }else{
            return res.send({msg:"Invalid credentials",status:"Invalid"})
        }
    })

})


app.use('/books', bookRouter);













const PORT = process.env.PORT || 5050

app.listen(PORT, async()=>{
    try {
        await connection
        console.log("Connected to MongoDB");
        
    } catch (error) {
        console.log(error);
        console.log("Error in connecting to DB");

    }
    console.log(`server running on http://localhost:${PORT}`);
})

