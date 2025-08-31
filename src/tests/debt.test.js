const Debt = require('../models/debt');

describe('Debt Model', () => {
    it('should create a debt correctly', () => {
        const debt = new Debt('Alice', 'Bob', 100, '2023-12-31');
        expect(debt.borrower).toBe('Alice');
        expect(debt.lender).toBe('Bob');
        expect(debt.amount).toBe(100);
        expect(debt.dueDate).toBe('2023-12-31');
        expect(debt.status).toBe('active');
    });

    it('should mark the debt as paid', () => {
        const debt = new Debt('Alice', 'Bob', 100, '2023-12-31');
        debt.pay();
        expect(debt.status).toBe('paid');
    });
});
