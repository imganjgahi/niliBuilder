const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const server = express();


server.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.sendStatus(200);
    }
    else {
        next();
    }
})
//ROUTES PATH
const users = require('./routes/users');
const posts = require('./routes/blog/post')
const categories = require('./routes/blog/categories');
const guestApis = require('./routes/blog/guest');

//Configs
const sequelize = require("./db/mysqlDatabase");


server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.use('/public', express.static('public'))


//passport middleware
server.use(passport.initialize());


//passport config
require('./config/passport')(passport);
// const AuthMidd = require("./utils/JwtAuth")



// ######################## UPLOAD HANDLER #####################
const multer = require("multer");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/uploads"); //here we specify the destination. in this case i specified the current directory
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname)
        cb(null, file.originalname + '-' + uniqueSuffix)
        //   console.log(file); //log the file object info in console
        //   cb(null, file.originalname);//here we specify the file saving name. in this case. 
        //i specified the original file name .you can modify this name to anything you want
    }
});

var uploadDisk = multer({ storage: storage });


//Routes
server.use('/api/users', users);
server.use('/api/posts', passport.authenticate('jwt', { session: false }), posts);
server.use('/api/categories', passport.authenticate('jwt', { session: false }), categories);
// server.use('/api/blog/categories', categories);
server.use('/api/guest', guestApis);



server.use((error, req, res, next) => {
    res.status(500).json({ message: "Internal Error: " + error.message })
})
server.get('/api', (req, res) => res.send({ "message": "Api works" }))

server.get('/', (req, res) => res.send("Hello From TypeScript!"))


//FILE API
server.post("/fileuploaddisk", uploadDisk.single("image"), (req, res) => {
    console.log(" file disk uploaded");
    res.json({ msg: "file disk upload success", fileName: req.file.filename });
});

const PORT = process.env.PORT || 5000;

// sequelize.sync({force: true}).then((result) => {
sequelize.sync().then((result) => {
    server.listen(PORT, () => {
        console.log(`sarver is runnig on port ${PORT}`)
    })
}).catch(error => console.log(error));
