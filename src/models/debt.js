class Debt {
    constructor(borrower, lender, amount, dueDate) {
        this.borrower = borrower;
        this.lender = lender;
        this.amount = amount;
        this.dueDate = dueDate;
        this.status = 'active'; // Peut être 'active' ou 'paid'
    }

    pay() {
        this.status = 'paid';
    }
}

module.exports = Debt;
