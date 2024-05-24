const express = require('express')
const router = express.Router()
const voitures = [{id:1,name:"clio"},{id:2,name:"megane"},{id:3,name:"range"}]

router.post('/ajout', (req,res)=> {
const voiture = req.body 
voitures.push(voiture)
res.json (voitures)
}) // QST1 : ajout voiture

router.get('/list', (req, res) => {
    res.json(voitures);
  }); // QST 2 : lister les voitures

router.get('/:id', (req, res) => {
    const carId = parseInt(req.params.id);
    const car = voitures.find(c => c.id === carId);
    if (car) {
      res.json(car);
    } else {
      res.status(404).json({ message: 'Car not found' });
    }
  }); // QST 3 : recherche par ID


router.put('/:id', (req, res) => {
    const carId = parseInt(req.params.id);
    const carIndex = voitures.findIndex(c => c.id === carId);
  
    if (carIndex !== -1) {
      const updatedCar = {
        ...voitures[carIndex],
        ...req.body
      };

      voitures[carIndex] = updatedCar;
      res.json(updatedCar);
    } 
    else {
      res.status(404).json({ message: 'Car not found' });
    }
  }); // QST 4 : modif de voiture avec ID

router.delete('/:id', (req, res) => {
    const carId = parseInt(req.params.id);
    const carIndex = voitures.findIndex(c => c.id === carId);
  
    if (carIndex !== -1) {
      voitures.splice(carIndex, 1);
      res.json({ message: 'Car deleted successfully' });
    } else {
      res.status(404).json({ message: 'Car not found' });
    }
  }); // suppression par ID

module.exports = router // pour les  exporter dans le module principal