'use strict';

module.exports = function(app, passport, express, data) {
    let aboutRouter = new express.Router(),
        aboutController = require('../controllers/about-controller')(data);

    aboutRouter
        .get('/api/about', passport.authenticate('jwt'), aboutController.getDetails);

    app.use(aboutRouter);
};
