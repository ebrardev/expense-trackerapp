import axios from 'axios';

const BACKEND_URL = 'https://expensetracker-ab46f-default-rtdb.firebaseio.com/';
 export function StoreExpense(expenseData) {
    axios.post( BACKEND_URL +'/expenses.json', expenseData)
expenseData
}

export  async function FetchExpenses() {
   const response = await  axios.get( BACKEND_URL +'/expenses.json')

   const expenses = []


   con
    for (const key in response.data) {
       const expenseObj = {
            id: key,
            amount: response.data[key].amount,
            date: new Date( response.data[key].date),
            description: response.data[key].description
       }
         expenses.push(expenseObj)
    }
    return expenses

}