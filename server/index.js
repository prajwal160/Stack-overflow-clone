import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import  mongoose  from "mongoose";

const app = express();
dotenv.config();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


app.get('/',(req, res) => {
  res.send("hlo prajwal how are you")
})

app.use('/users', userRoutes) 
app.use('/questions', questionsRoutes) 
app.use('/answer', answerRoutes) 

const PORT = process.env.PORT || 5000

const DATABASE_URL= process.env.CONNECTION_URL
//"mongodb+srv://prajwal:prajwal@clone.q0aob4q.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect( DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(PORT, () => {console.log(`server running on port ${PORT}`)})) 
  .catch((err) => console.log(err.message))
