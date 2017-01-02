'use strict';

const helpers = require('../helpers');

module.exports = function(data) {
    return {
        getUserIncomeDetails(req, res) {
            return data.getAllUserIncomeData()
                .then((listings) => {
                    if (!listings) {
                        throw new Error('No items available');
                    }
                    res.status(200).json(listings);
                })
                .catch((err) => {
                    res.status(400).json({ message: err.message });
                });
        },
        addNewIncome(req, res) {
            let currentUserId = req.user.id;
            let incomeToAdd = req.body;
            let username = req.user.username;

            let response = {
                sucsess: true,
                username: username
            }

            return data.getIncomeByUserId(currentUserId)
                .then((resObject) => {
                    data.addNewIncomeToCurrentUser(incomeToAdd, currentUserId)
                        .then((userWithIncome) => {
                            res.status(200).json(response);
                        });
                });
        },
        getIncomeRecurrences(req, res) {
            return data.getAllIncomeRecurrences()
                .then((recurrences) => {
                    let response = {
                        success: true,
                        recurrences: recurrences
                    }
                    res.status(200).json(response);
                })
                .catch((err) => {
                    res.status(400).json({ message: err.message });
                })
        },
        updateUserIncome(req, res) {
            const userIncomeIdForUpdate = req.body._id;

            const updateObj = {
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              avatarUrl: req.body.avatarUrl,
              age: req.body.age
            };

            return data.findUserIncomeByIdAndUpdate(userIncomeIdForUpdate, updateObj)
                .then((user) => {
                    if (!user) {
                       throw new Error('User Income not found.');
                    }

                    res.status(200).json(user);
                })
                .catch(err => {
                    res.status(400).json({ message: helpers.errorHelper(err) });
                });
        }
    }
}
