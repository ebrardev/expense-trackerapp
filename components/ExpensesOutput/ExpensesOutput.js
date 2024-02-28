import {  View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";


const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'New Desk',
        amount : 123.45,
        date: new Date(2021,7,14)
    },
    {
        id: 'e2',
        description: 'New TV',
        amount : 113.45,
        date: new Date(2022,7,14)
    },
    {
        id: 'e3',
        description: 'kskjsd Desk',
        amount : 13.45,
        date: new Date(2023,7,14)
    },
    {
        id: 'e4',
        description: 'araba',
        amount : 31.45,
        date: new Date(2020,7,14)
    }
]

function ExpensesOutput({expenses,expensesPeriod}) {
    return(
        <View>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
           <ExpensesList />
        </View>

    )
}
export default ExpensesOutput;