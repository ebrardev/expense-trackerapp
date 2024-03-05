import { useContext, useLayoutEffect,useState } from "react";
import { View, Text,StyleSheet,TextInput } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/style";
import Button from "../components/UI/Button";
import { ExpensesContext } from "../store/expenses-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { StoreExpense, updateExpense,deleteExpense } from "../util/Http";
import LoadingOverlay from "../components/UI/LoadingOverlay";



function ManageExpense({ route, navigation }) {

    const [isSubmitting, setIsSubmitting] = useState(false)

    const expensesCtx=  useContext(ExpensesContext)

    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;
    const selectedExpense = expensesCtx.expenses.find(expense => expense.id === editedExpenseId);

    console.log("editedExpenseId", editedExpenseId)
    console.log("isEditing", isEditing)
    
         useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? "Edit Expense" : "Add Expense"

        })

    }, [navigation, isEditing])
 async function deleteExpenseHandler() {

    setIsSubmitting(true)
      //delete expense
      await deleteExpense(editedExpenseId)
      expensesCtx.deleteExpense(editedExpenseId);
  
      navigation.goBack();
       
    }

    function cancelHandler() {
        navigation.goBack();

    }

   async function confirmHandler(expenseData) {
    setIsSubmitting(true)
           if (isEditing) {
            //update expense
             expensesCtx.updateExpense(editedExpenseId, expenseData)
             await  updateExpense(editedExpenseId,expenseData)
            
              } else {
          const id =    await    StoreExpense(expenseData)
            expensesCtx.addExpense({...expenseData,id:id})
        }
        navigation.goBack();
    }
    if (isSubmitting) {
        return (
            <LoadingOverlay />
        )
    }

    return (
        <View style={styles.container}>
       <ExpenseForm submitButtonHandler={isEditing ? "update" : "add"} 
       onSubmit={confirmHandler}
       onCancel={cancelHandler}
       defaultValues={isEditing ? selectedExpense : null}
       
       />
           
           {isEditing &&  (
            <View style={styles.deleteContainer}>
          
           <IconButton icon="trash" size={36} color={GlobalStyles.colors.error500} onPress={deleteExpenseHandler} />
           </View>
           ) }
        </View>
    )

}
export default ManageExpense;

const styles = StyleSheet.create ({
    container :{
     flex:1,
     padding:24,
        backgroundColor:GlobalStyles.colors.primary800


    },
    buttonContainer: {
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    },
    button :{
         minWidth:120,
         marginHorizontal:8,
    },

    deleteContainer :{
        marginTop:16,
        paddingTop:8,
        borderTopWidth:2,
        borderTopColor:GlobalStyles.colors.primary200,
        alignItems:"center"

    }
})