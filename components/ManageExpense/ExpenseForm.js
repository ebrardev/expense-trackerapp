
 import { StyleSheet,TextInput,Text, View, Alert } from "react-native";
import Input from "./Input";
import { GlobalStyles } from "../../constants/style";
import { useState } from "react";
import Button from "../UI/Button";
import { getFormattedDate } from "../../util/Date";
function ExpenseForm({onCancel,onSubmit,submitButtonHandler,defaultValues}) {

    const  [inputs,setInputs]=useState({
        amount:{ value: defaultValues ? defaultValues.amount.toString() : "", isValid: true },
        date:{ value: defaultValues ? getFormattedDate(defaultValues.date) : "", isValid: true },
        description:{ value :defaultValues ? defaultValues.description : "",isValid: true },
    });   
    function inputChangedHandler(inputIdentifier,enteredValue) {
        setInputs((curInputs) => {
            return {
                ...curInputs,
                [inputIdentifier]: {value: enteredValue, isValid: enteredValue , isValid: true}
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
    const formIsInvalid = !inputs.amount.isValid || !inputs.date.isValid || !inputs.description.isValid;

    return (
        <View style={styles.form}>
            <Text style={styles.text}> Your Expense</Text>
            <View style={styles.inputsRow}>
            <Input 
    style={styles.rowInput}
    label="Amount" 
    inValid = {!inputs.amount.isValid}
    textInputConfig={{ 
        keyboardType: "decimal-pad", 
        onChangeText: inputChangedHandler.bind(this, "amount"),
        value: inputs.amount.value  
    }} 
/>
<Input 
    style={styles.rowInput}
    label="Date" 
    inValid = {!inputs.date.isValid}
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
    inValid = {!inputs.description.isValid}
    textInputConfig={{ 
        multiline: true,
        onChangeText: inputChangedHandler.bind(this, "description"),
        value: inputs.description.value  
    }} 
/>

   {formIsInvalid && <Text style={styles.errorText}>Please  check your entered data !   </Text> }
 
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
    errorText : {
        color: GlobalStyles.colors.error500,
        textAlign: "center",
        marginTop: 10,
        padding: 10,
        fontSize: 16,
    },
    invalidLabel:{
        color: GlobalStyles.colors.error500,
    },
    invalidInput:{
        backgroundColor: GlobalStyles.colors.error50,
    },
})