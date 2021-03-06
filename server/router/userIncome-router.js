'use strict';

module.exports = function(app, passport, express, data) {
    let userIncomeRouter = new express.Router(),
        userIncomeController = require('../controllers/userIncome-controller')(data);

    userIncomeRouter
        .get('/api/user-income', passport.authenticate('jwt'), userIncomeController.getUserIncomeDetails)
        .post('/api/user-income', passport.authenticate('jwt'), userIncomeController.addNewIncome)
        .put('/api/user-income/:id', passport.authenticate('jwt'), userIncomeController.updateUserIncome)
        .get('/api/income-recurrences', passport.authenticate('jwt'), userIncomeController.getIncomeRecurrences);

    app.use(userIncomeRouter);
};