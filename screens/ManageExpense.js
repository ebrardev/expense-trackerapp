import { useContext, useLayoutEffect } from "react";
import { View, Text,StyleSheet } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/style";
import Button from "../components/UI/Button";
import { ExpensesContext } from "../store/expenses-context";


function ManageExpense({ route, navigation }) {

    const expensesCtx=  useContext(ExpensesContext)

    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    console.log("editedExpenseId", editedExpenseId)
    console.log("isEditing", isEditing)
    
         useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? "Edit Expense" : "Add Expense"

        })

    }, [navigation, isEditing])
  function deleteExpenseHandler() {
      //delete expense
     
      expensesCtx.deleteExpense(editedExpenseId);
      navigation.goBack();
       
    }

    function cancelHandler() {
        navigation.goBack();

    }

    function confirmHandler() {
           if (isEditing) {
            //update expense
            expensesCtx.updateExpense(editedExpenseId,{
                description:"test21",
                amount:100,
                date:new Date("2023-10-10")
            })
              } else {
            expensesCtx.addExpense({
                description:"test31",
                amount:100,
                date:new Date("2023-5-10")
            })
        }
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button style={styles.button} mode="flat" onPress={cancelHandler}>Cancel</Button>
                <Button  style={styles.button} onPress={confirmHandler}>{isEditing ? "Update" : "Add"} </Button>
            </View>
           
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