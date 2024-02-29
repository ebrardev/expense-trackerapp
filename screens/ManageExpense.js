import { useLayoutEffect } from "react";
import { View, Text } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/style";


function ManageExpense({ route, navigation }) {

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
       
    }

    return (
        <View>
           
            <IconButton icon="trash" size={36} color={GlobalStyles.colors.error500} onPress={deleteExpenseHandler} />
        </View>
    )

}
export default ManageExpense;