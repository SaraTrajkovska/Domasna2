
 const router = require('express').Router();
 
 const petHandlers = require('../handlers/pets');

 router.get('/pets', petHandlers.getAllPets);

 router.post('/pets', petHandlers.addNewPet);
 


 
 
 module.exports = router;