const path = require("path");
const express = require("express");

const logger = require("morgan");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");
const app = express();

app.set("view engine", "ejs");


console.log("__dirname: ", __dirname);


app.use(express.static(path.join(__dirname, "public")));



app.use(logger("dev"));


app.use(express.urlencoded({ extended: true }));


app.use(cookieParser());



app.use((request, response, next) => {
  

  const username = request.cookies.username;

  
  response.locals.loggedInUserName = username || "";

  
  next();
});


app.use(
  

  methodOverride((request, response) => {
    if (request.body && request.body._method) {
      const method = request.body._method;
      

      return method;
    }
  })
);

const login_logoutRouter = require("./routes/login_logout");

app.use("/", login_logoutRouter);

const DOMAIN = 'localhost' 
const PORT = 3707

app.listen(PORT, DOMAIN, () => {
  
  console.log(`Server is listening on ${DOMAIN}:${PORT}`)
})