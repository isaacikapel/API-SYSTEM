const express = require('express');

const app = express();
require ('dotenv').config();

const courseRoute = require("./routes/courseRoute");
const regRoute = require("./Routes/regRoute");
const createError = require("http-errors");

require ('./model/dbConnect');

const studentRoutes = require('./routes/studentRoute');

app.use (express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/students', studentRoutes);
app.use('/api/courses', courseRoute);
app.use('/api/reg', regRoute);
app.listen(process.env.PORT || 4000, function() {
  console.log('Now Listening for requests on: http://localhost:4000/');
});


  


//   //handling  errors
// app.use(async(req, res, next)=>{
//     next(createError.NotFound())
// })

// //Error handling middleware 
// app.use((err, req,res,next)=> {
//     if (err.status === 401){
//         //handle 401 unauthorized error 
//         res.status(401).send({
//             error: {
//                 status:401,
//                 message:"You are not authorised to view this resource"
//             }
//         });
//     }else {
//         //Handle other errrors
//         res.status (err.status || 500).send({
//             error: {
//                 status:err ||500,
//                 message: "Internal Server Error",
//             }
//         });
//     }

// })

