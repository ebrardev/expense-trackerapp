
 import { StyleSheet,TextInput, View } from "react-native";
import Input from "./Input";
function ExpenseForm() {
    function amountChangeHandler(amount) {
        console.log(amount)
    }

    return (
        <View>
           <Input label="Amount" textInputConfig={{ 
            keyboardType: "decimal-pad", 
           onchangeText: amountChangeHandler
           }} />
           <Input label="Date" textInputConfig={{ 
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeTxt: () => { }
            }} />
            <Input label="Description" textInputConfig={{ 
           multiline: true,
      
      

            }} />
 
            
        </View>


    )

}
export default ExpenseForm;

const styles = StyleSheet.create({
})