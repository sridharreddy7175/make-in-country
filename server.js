require("dotenv").config();
const mongoose = require("mongoose");
var express = require("express");
var app = express();
var cors = require("cors");
var bodyParser = require("body-parser");
app.use(bodyParser.json());
const path = require('path');
// app.use(bodyParser.urlencoded({ extended: true }));
//  DATABASE=mongodb+srv://sridhar:sridhar@cluster0.9knrs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

app.use(cors());
//DB Connection
// mongoose
//     .connect(process.env.DATABASE, {
//         useUnifiedTopology: true,
//         useNewUrlParser: true
//     })
//     .then(() => {
//         console.log("DB CONNECTED");
//     });
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        // useCreateIndex: true
    })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));



if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../client/build')));

//     app.get('*', (req, res) =>
//         res.sendFile(
//             path.resolve(__dirname, '..', 'client', 'build', 'index.html')
//         )
//     );
// } else {
//     app.get('/', (req, res) => {
//         res.send('API is running....');
//     });
// }



//Routes

var userRoutes = require("./routes/user");
app.use("/api", userRoutes);
var appRoutes = require('./routes/app')
app.use('/api', appRoutes)
const categoryRoutes = require("./routes/category");
app.use("/api", categoryRoutes);


//PORT
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`app is running at ${port}`);
});