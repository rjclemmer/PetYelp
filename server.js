const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/config');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));
// route to display dynamic src images
app.get('/public', (req,res) => {
  imageList = []

  imageList.push({src: '/public/images/01-pug-wearing-glasses.jpg', name: 'Herbie'})
  imageList.push({src: '/public/images/02-grumpy-cat.jpg', name: 'Chipper'})
  imageList.push({src: '/public/images/03-hairless-cat.jpg', name: 'Chicken'})
  imageList.push({src: '/public/images/04-cozy-cat-in-blanket.jpg', name: 'Mittens'})
  imageList.push({src: '/public/images/05-backpack-cat.jpg', name: 'Cozmo'})
  imageList.push({src: '/public/images/06-long-haired-chihuahua.jpg', name: 'Shredder'})
  imageList.push({src: '/public/images/07-smiley-cat.jpg', name: 'Frank'})
  imageList.push({src: '/public/images/08-expressive-pug.jpg', name: 'Snickers'})
  imageList.push({src: '/public/images/09-side-eye-frenchie.jpg', name: 'Violette'})
  imageList.push({src: '/public/images/10-running-weimaraner.jpg', name: 'Charlotte'})

  res.render('main', { imageList: imageList });

});

app.use(require('./controllers/'));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  sequelize.sync({ force: false });
});
