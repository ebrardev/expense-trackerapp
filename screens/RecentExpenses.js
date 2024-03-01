
import { useContext } from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/Date';
function RecentExpenses() {

 const ExpensesCtx= useContext(ExpensesContext)
  const recentExpenses = ExpensesCtx.expenses.filter(expense => {
    const today = new Date();
    const date7DaysAgo= getDateMinusDays(today,7)

    return  (expense.date > date7DaysAgo && expense.date <= today)

  })

    return (
      <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 days"/>
    );
}
export default RecentExpenses;