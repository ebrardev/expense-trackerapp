import { createContext, useReducer } from "react";
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
    },
    {
        id: 'e5',
        description: 'New Desk',
        amount : 123.45,
        date: new Date(2021,7,14)
        
    },
    {
        id: 'e6',
        description: 'New TV',
        amount : 113.45,
        date: new Date(2022,7,14)

    },
     {
        id: 'e7',
        description: 'akdks Desk',
        amount : 13.45,
        date: new Date(2023,7,14)
    
     },
     {
        id: 'e11',
        description: 'buzdolabı',
        amount : 13.45,
        date: new Date(2024,3,1)
    
     },
     {
        id: 'e10',
        description: 'araba',
        amount : 31.45,
        date: new Date(2020,7,14)
     },
        {
            id: 'e9',
            description: 'New Desk',
            amount : 123.45,
            date: new Date(2021,7,14)
        },
]
export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({description,amount,date}) => {},
    updateExpense: (id,{description,amount,date}) => {},
    deleteExpense: (id) => {},
})
    
function expensesReducer(state,action) {
 switch(action.type){
    case "ADD_EXPENSE":
       const  id =  new Date().getTime().toString() +Math.random().toString();
       return [{...action.payload,id:id},...state]
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

const [expensesState,dispatch]= useReducer(expensesReducer,DUMMY_EXPENSES)

function addExpense(expenseData){

dispatch({type:"ADD_EXPENSE",payload: expenseData})

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
}

return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
}

export default ExpensesContextProvider;