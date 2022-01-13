const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3001;

<<<<<<< HEAD
const sequelize = require("./config/connection");
=======
const session = require("express-session");

>>>>>>> 4b8d6924f7c3c45cf0ddeced6fc2b0f5d6cee93c
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

<<<<<<< HEAD
const hbs = exphbs.create({});

=======
// handlebars.js set up
>>>>>>> 4b8d6924f7c3c45cf0ddeced6fc2b0f5d6cee93c
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(require("./controllers/"));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
