const express = require('express');
const router = express.Router();
const vacationController = require('../controllers/vacationController');


router.get('/', vacationController.getVacations);


router.post('/choose', vacationController.chooseVacation);


router.put('/update', vacationController.updateVacationDetails);


router.get('/results', vacationController.calculateVacationResults);

module.exports = router;
