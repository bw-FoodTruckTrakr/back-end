const router = require('express').Router();

const Trucks = require('../models/trucksModel.js');
const authenticate = require('../auth/auth-middleware.js');
const check = require('../auth/userType-middleware.js');

router.get('/', (req, res) => {
    Trucks.getTrucks()
        .then(trucks => {
            res.json(trucks);
        })
        .catch(error => res.status(500).json(error.message));
})

router.get('/owned', authenticate, check('operator'), (req, res) => {
    const token = req.headers.authorization;
    Trucks.trucksOwned(token)
        .then(trucks => {
            res.json(trucks);
        })
        .catch(error => res.status(500).json({error:error.message}));
})


router.post('/ratings', (req, res) => {
  const name = req.body

  Trucks.truckRating(name)
    .then(rating => {
      res.json(rating)
    })
    .catch(error => res.status(500).json(error.message));
})

router.post('/search', (req, res) => {
  const search = req.body;

  Trucks.findTruck(search)
    .then(truckInfo => {
      res.json(truckInfo)
    })
    .catch(err => res.status(500).json({message: 'Error'}))
})

router.post('/rate', authenticate, check('diner'), (req, res) => {
  const rate = {...req.body, diner_id:`${req.decodedToken.id}`};

  Trucks.truckRate(rate)
    .then(newRate => {
      res.status(201).json(newRate)
    })
    .catch(err =>{res.status(500).json({error_message:'Error', ErrNo:err})})
})


router.post('/', authenticate, (req, res) => {
    const truck = req.body;

    Trucks.insertTruck(truck)
        .then(truck => {
            res.status(201).json(truck)
        })
        .catch(err =>{res.status(500).json({error_message:'Error', ErrNo:err})})
})

router.delete('/',authenticate, check('operator'), (req, res) => {
    const token = req.headers.authorization;
    const truckName = req.body;   

    Trucks.remove(truckName, req.decodedToken.id)
        .then(count => {
            if (count) {
              res.json({ removed: count });
            } else {
              res.status(404).json({ message: 'Could not Delete Truck', count });
            }
          })
          .catch(err => {
            res.status(500).json({ message: 'Error. Truck not deleted', err });
          });
})  

router.put('/', authenticate, (req, res) => {
    const token = req.headers.authorization;

    const changes = req.body;

    Trucks.update(changes, token)
    .then(count => {
      if (count) {
        res.json({ update: count });
      } else {
        res.status(404).json({ message: 'Could not find truck' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to update truck' });
    });
})
module.exports = router;