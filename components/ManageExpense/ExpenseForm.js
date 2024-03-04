
 import { StyleSheet,TextInput,Text, View, Alert } from "react-native";
import Input from "./Input";
import { GlobalStyles } from "../../constants/style";
import { useState } from "react";
import Button from "../UI/Button";
import { getFormattedDate } from "../../util/Date";
function ExpenseForm({onCancel,onSubmit,submitButtonHandler,defaultValues}) {

    const  [inputs,setInputs]=useState({
        amount:{ value: defaultValues ? defaultValues.amount.toString() : "", isValid: !!defaultValues },
        date:{ value: defaultValues ? getFormattedDate(defaultValues.date) : "", isValid: !!defaultValues },
        description:{ value :defaultValues ? defaultValues.description : "",isValid: !!defaultValues },
    });   
    function inputChangedHandler(inputIdentifier,enteredValue) {
        setInputs((curInputs) => {
            return {
                ...curInputs,
                [inputIdentifier]: {value: enteredValue, isValid: enteredValue , isValid: tru}
            }
        })
    }

    function cancelHandler() {
        //cancel
    }
    function submitHandler() {
        const  expenseData = {
            amount:+inputs.amount.value,
            date: new Date(inputs.date.value),

            description:inputs.description.value
        }

        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
        const  dateIsValid = expenseData.date.toString() !== "Invalid Date";
        const descriptionIsValid = expenseData.description.trim().length > 0; 

        if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
            setInputs ((curInputs) =>{
                return {
                    amount: { value: curInputs.amount.value, isValid: amountIsValid },
                    date: { value: curInputs.date.value, isValid: dateIsValid },
                    description: { value: curInputs.description.value, isValid: descriptionIsValid }
                 
                }

        });
        return 
    }


        onSubmit(expenseData);
 
    }

    return (
        <View style={styles.form}>
            <Text style={styles.text}> Your Expense</Text>
            <View style={styles.inputsRow}>
            <Input 
    style={styles.rowInput}
    label="Amount" 
    textInputConfig={{ 
        keyboardType: "decimal-pad", 
        onChangeText: inputChangedHandler.bind(this, "amount"),
        value: inputs.amount.value  
    }} 
/>
<Input 
    style={styles.rowInput}
    label="Date" 
    textInputConfig={{ 
        placeholder: "YYYY-MM-DD",
        maxLength: 10,
        onChangeText: inputChangedHandler.bind(this, "date"),
        value: inputs.date.value  
    }} 
/>

            </View>
           
            <Input 
    label="Description" 
    textInputConfig={{ 
        multiline: true,
        onChangeText: inputChangedHandler.bind(this, "description"),
        value: inputs.description.value  
    }} 
/>
 
 <View style={styles.buttonContainer}>
                <Button style={styles.button} mode="flat" onPress={onCancel}>Cancel</Button>
                <Button  style={styles.button} onPress={submitHandler}>{submitButtonHandler}</Button>
            </View>
           
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
})