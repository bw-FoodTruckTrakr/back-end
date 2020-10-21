const router = require('express').Router();
const bcrypt = require('bcryptjs');
const Users = require('../models/userModels.js');
const getToken = require('../auth/getToken.js');

router.get('/diners', (req, res) => {
  Users.findDiners()
    .then(diners => {
      res.json(diners)
    })
})

router.get('/operators', (req, res) => {
  Users.findOperators()
    .then(operator => {
      res.json(operator)
    })
})

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 6);
    user.password = hash;

    Users.insert(user)
        .then(newUser => {
          const token = getToken(newUser);
            res.status(201).json({
              message: 'You have succesfully registered!',
              type: `${newUser.type}`,
              id: `${newUser.id}`,
              location:`${newUser.currentLocation}`,
              token
            } )
        })
        .catch(err =>{
            res.status(500).json({error_message:'Error', ErrNo:err})})
});

router.post('/login', (req, res) => {
    const { type, username, password } = req.body;
  
    Users.findUser({ type, username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
         
          const token = getToken(user);

          res.status(200).json({ 
            message: `Welcome ${user.username}`,
            type: `${user.type}`,
            id: `${user.id}`,
            location:`${user.currentLocation}`,
            token
          });
        } else {
          res.status(401).json({ error: `Login Failed` });
        }
      })
      .catch(error => res.status(500).json(error.message));
});

module.exports = router;