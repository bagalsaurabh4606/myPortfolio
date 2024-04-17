const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
const mongoose = require('mongoose');
const Certificate = require('./Certificate');
const certificates = require('./certData/items');

const app = express();

app.use(express.json());
mongoose.connect('mongodb://127.0.0.1/portfolio', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connection to MongoDB successful...'))
    .catch(err => console.error('Connection to MongoDB failed...', err));


// Define MongoDB schema for contact form submissions
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    timestamp: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

app.use(express.static("css"));
app.use(express.static(path.join(__dirname, '')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.post("/", async function (req, res) {
    const { name, email, message } = req.body;
    
    try {
        // Save contact form submission to MongoDB
        const contact = new Contact({ name, email, message });
        await contact.save();

        // Send acknowledgment email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'bagalsaurabh644@gmail.com',
                pass: 'hvvn kofa ovht puvq'
            }
        });

        const mailOptions = {
            from: 'saurabhbagal1234@gmail.com',
            to: email,
            cc: 'saurabhbagal1234@gmail.com',
            subject: 'Thanks for contacting us ' + name,
            text: 'Thanks for your message that you have sent to us. ' + message
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("Mail successfully sent !!", info.response);
            }
        });

        res.redirect('/#contacts');
    } catch (error) {
        console.error('Error saving contact form submission to MongoDB:', error);
        res.status(500).send('Internal Server Error');
    }

    // certificates.forEach(async (certificateData) => {
    //   try {
    //       const certificate = new Certificate(certificateData);
    //       console.log(certificate)
    //       await certificate.save();
    //       console.log('Certificate saved:', certificate);
    //   } catch (error) {
    //       console.error('Error saving certificate to MongoDB:', error);
    //   }
     
    // })
  
});








const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// const express =require('express');
// const bodyparser=require('body-parser');
// const nodemailer=require('nodemailer');
// const path=require('path')

// const mongoose= require('mongoose')
// const joi=require('joi')
// const info=require('./certData/items.js')


// const app=express();

// app.use(express.json());
// mongoose.connect('mongodb://127.0.0.1/portfolio')
// .then(()=>console.log('connection is successfull....'))
// .catch(err=>console.error('connection to mongodb is failed....',err))


// app.use(express.static("css"))
// app.use(express.static(path.join(__dirname,'')));
// app.use(bodyparser.urlencoded({extended:true}));

// app.use(express.static(path.join(__dirname, '')));


// app.get("/",function(req,res){
//   res.sendFile(path.join(__dirname + "/index.html"));
// })

// app.post("/",function(req,res){
//   const name=req.body.name;

//   const msg=req.body.message;
//   console.log(name);
//   console.log(msg);
  
//   var transporter=nodemailer.createTransport({
//     service: 'gmail',
//     auth:{
//       user:'bagalsaurabh644@gmail.com',
//       pass:'hvvn kofa ovht puvq'
//     }
//   })
//   var mailOptions={
//     from:'saurabhbagal1234@gmail.com',
//     to:req.body.mail,
//     cc:'saurabhbagal1234@gmail.com',
//     subject:'Thanks for contacting us' +name,
//     text:'Thanks for your message that you have sent to us. ' +msg
//   };
//   transporter.sendMail(mailOptions,function(error,info){
//     if(error){
//       console.log(error);
//     }
//     else {
//       message=> alert("Your message was sent successfully !! Thanks for the feedback 😊 ");
//       res.redirect('/#contacts');
     
//       console.log("Mail successfully sent !!"+info.response);
      

     

//     }
//   })
  
   
// });





// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// })










// const express =require('express');
// const bodyparser =require('body-parser');
// const nodemailer=require('nodemailer');


// const app=express();
// app.use(express.static("css"));
// app.use(express.static("images"))




// app.get("/",function(req,res){
// res.sendFile(__dirname + "/index.html");
// console.log(__dirname);
// })

// app.post("/",function(req,res){
//   const name=req.body.name;

//   const msg=req.body.message;
  
//   var transporter=nodemailer.createTransport({
//     service: 'gmail',
//     auth:{
//       user:'bagalsaurabh644@gmail.com',
//       pass:'hvvn kofa ovht puvq'
//     }
//   })
//   var mailOptions={
//     from:'saurabhbagal1234@gmail.com',
//     to:req.body.mail,
//     cc:'saurabhbagal1234@gmail.com',
//     subject:'Thanks for contacting us'+name,
//     text:'Thanks for your message that you have sent to us. '+msg
//   };
//   transporter.sendMail(mailOptions,function(error,info){
//     if(error){
//       console.log(error);
//     }
//     else{
//       res.redirect('/');
//       console.log("email sent"+info.response);
//     }
//   })

// });




// app.listen(3000,function(){
//    console.log("port is running on 3000 port")
// })



