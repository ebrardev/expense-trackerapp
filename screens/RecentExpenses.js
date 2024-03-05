
import { useContext ,useState,useEffect} from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/Date';
import { FetchExpenses } from '../util/Http';
function RecentExpenses() {
const expensesCtx = useContext(ExpensesContext);


 useEffect(()=>{
  async function getExpenses() {
    const expenses= await FetchExpenses()
    expensesCtx.setExpenses(expenses)

  }
  getExpenses()
 },[])
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo= getDateMinusDays(today,7)

    return  (expense.date > date7DaysAgo && expense.date <= today)

  })

    return (
      <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 days" fallBackText="No recent expenses in last 7 days "/>
    );
}
export default RecentExpenses;