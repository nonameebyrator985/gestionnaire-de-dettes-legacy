const Debt = require('../models/debt');

const createDebt = (borrower, lender, amount, dueDate) => {
    return new Debt(borrower, lender, amount, dueDate);
};

module.exports = { createDebt };