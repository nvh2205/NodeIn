const express = require("express");
const path = require("path");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser')
const route = require('./routes')

dotenv.config();

app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

//Khai báo templateEngine sử dụng
app.set('view engine', 'pug')
app.set('views',path.join(__dirname, 'resources', 'views'));

//http logger
var morgan = require('morgan')
app.use(morgan('combined'))

//Khai báo sử dụng middleware cookieParse()
app.use(cookieParser())

route(app);

app.get('/', (req, res) => {
    res.render('index')
})

const PORT = process.env.PORT || 8800

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  })
  