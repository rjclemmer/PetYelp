const router = require("express").Router();
const { Post, Comment, User, Pet } = require("../models/");

// get petData for homepage
const petData = () => Pet;
router.get("../models/Pet.js", (req, res) => {
  try {
    const petData = Pet.findAll();

    const pet = petData.map((pet) => pet.get({ plain: true }));

    res.render("/", {
      layout: "./../views/pet.handlebars",
      // pet: "../views/pet.handlebars",
      filename: "../views/pet.handlebars",
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// route to display dynamic src images
router.get('/', (req,res) => {
  imageList = [];

  imageList.push({
    src: '/images/01-pug-wearing-glasses.jpg',
    name: 'Herbie'
  })
  imageList.push({
    src: '/images/02-grumpy-cat.jpg',
    name: 'Chipper'
  })
  imageList.push({
    src: '/images/03-hairless-cat.jpg',
    name: 'Chicken'
  })
  imageList.push({
    src: '/images/04-cozy-cat-in-blanket.jpg',
    name: 'Mittens'
  })
  imageList.push({
    src: '/images/05-backpack-cat.jpg',
    name: 'Cozmo'
  })
  imageList.push({
    src: '/images/06-long-haired-chihuahua.jpg',
    name: 'Shredder'
  })
  imageList.push({
    src: '/images/07-smiley-cat.jpg',
    name: 'Frank'
  })
  imageList.push({
    src: '/images/08-expressive-pug.jpg',
    name: 'Snickers'
  })
  imageList.push({
    src: '/images/09-side-eye-frenchie.jpg',
    name: 'Violette'
  })
  imageList.push({
    src: '/images/10-running-weimaraner.jpg',
    name: 'Charlotte'
  });

  res.render("login", { imageList });
});

// get all posts for homepage
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [User],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("all-posts", { posts });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get single post
router.get("/post/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    if (postData) {
      const post = postData.get({ plain: true });

      res.render("single-post", { post });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

module.exports = router;
