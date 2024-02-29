import { createContext, useReducer } from "react";

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({description,amount,date}) => {},
    updateExpense: (id,{description,amount,date}) => {},
    deleteExpense: (id) => {},
})
    
function expensesReducer(state,action) {
 switch(action.type){
    case "ADD_EXPENSE":
    case "UPDATE_EXPENSE":
    case "DELETE_EXPENSE":
    default:
        

 }
}
function ExpensesContextProvider({children}){

const [expensesState,dispatch]= useReducer(expensesReducer)
return <ExpensesContext.Provider>{children}</ExpensesContext.Provider>
}

export default ExpensesContextProvider;