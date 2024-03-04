
 import { StyleSheet,TextInput,Text, View } from "react-native";
import Input from "./Input";
import { GlobalStyles } from "../../constants/style";
function ExpenseForm() {
    function amountChangeHandler(amount) {
        console.log(amount)
    }

    return (
        <View style={styles.form}>
            <Text style={styles.text}> Your Expense</Text>
            <View style={styles.inputsRow}>
            <Input 
            style={styles.rowInput}
            label="Amount" textInputConfig={{ 
            keyboardType: "decimal-pad", 
           onchangeText: amountChangeHandler
           }} />
           <Input 
              style={styles.rowInput}
           label="Date" textInputConfig={{ 
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeTxt: () => { }
            }} />
            </View>
           
            <Input label="Description" textInputConfig={{ 
           multiline: true,
      
      

            }} />
 
            
        </View>


    )

}
export default ExpenseForm;

const styles = StyleSheet.create({
    form : {
        marginTop:40
    },
    text : {
        fontSize:24,
        marginBottom:15,
        fontWeight:"bold",
        textAlign:"center",
        alignItems:"center",
        justifyContent:"center",
        color: GlobalStyles.colors.primary100
    },
    inputsRow : {
        flexDirection:"row",
        justifyContent:"space-between",
    },
    rowInput:{
        flex:1,
    }
})