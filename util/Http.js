import axios from 'axios';

 export function StoreExpense(expenseData) {
    axios.post('https://expensetracker-ab46f-default-rtdb.firebaseio.com/expenses.json', expenseData)
expenseData
}