import { useLayoutEffect } from "react";
import { View, Text } from "react-native";


function ManageExpense({ route, navigation }) {

    const editedexpenseId = route.params?.expenseId;
    const isEditing = !!editedexpenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? "Edit Expense" : "Add Expense"

        })

    }, [navigation, isEditing])


    return (
        <View>
            <Text>Manage Expense</Text>
        </View>
    )

}
export default ManageExpense;