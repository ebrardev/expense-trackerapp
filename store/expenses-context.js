import { createContext, useReducer } from "react";

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({description,amount,date}) => {},
    setExpenses:  (expenses) => {},
    updateExpense: (id,{description,amount,date}) => {},
    deleteExpense: (id) => {},
})
    
function expensesReducer(state,action) {
 switch(action.type){
    case "ADD_EXPENSE":
       const  id =  new Date().getTime().toString() +Math.random().toString();
       return [{...action.payload,id:id},...state]
       case "SET":
              return action.payload

    case "UPDATE_EXPENSE":
        const updatableExpenseIndex =  state.findIndex((expense)=> expense.id===action.payload.id)
        const updatableExpense = state[updatableExpenseIndex]
        const updatedItem = {...updatableExpense,...action.payload.data}
        const updatedExpenses = [...state]
        updatedExpenses[updatableExpenseIndex] = updatedItem
        return updatedExpenses
    case "DELETE_EXPENSE":
        return state.filter((expense)=>expense.id!==action.payload)
    default:
        return state;

 }
}
function ExpensesContextProvider({children}){

const [expensesState,dispatch]= useReducer(expensesReducer,[])

function addExpense(expenseData){

dispatch({type:"ADD_EXPENSE",payload: expenseData})

}
 function setExpenses(expense) {
    dispatch({type:"SET",payload: expense})
 }

function deleteExpense(id) {
    dispatch({type:"DELETE_EXPENSE",payload: id})

}

function updateExpense(id,expenseData){
    dispatch({type:"UPDATE_EXPENSE",payload: {id:id,data:expenseData}})
}

const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
    setExpenses: setExpenses
}

return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
}

export default ExpensesContextProvider;