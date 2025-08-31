const express = require('express');
const Debt = require('../models/debt');
const router = express.Router();

let debts = [];

router.post('/debts', (req, res) => {
    const { borrower, lender, amount, dueDate } = req.body;
    const newDebt = new Debt(borrower, lender, amount, dueDate);
    debts.push(newDebt);
    res.status(201).send(newDebt);
});

router.get('/debts', (req, res) => {
    res.send(debts);
});

module.exports = router;
