
 import { StyleSheet,TextInput,Text, View, Alert } from "react-native";
import Input from "./Input";
import { GlobalStyles } from "../../constants/style";
import { useState } from "react";
import Button from "../UI/Button";
import { getFormattedDate } from "../../util/Date";
function ExpenseForm({onCancel,onSubmit,submitButtonHandler,defaultValues}) {

    const  [inputValues,setInputValues]=useState({
        amount:defaultValues ? defaultValues.amount.toString() : "",
        date:defaultValues ? getFormattedDate(defaultValues.date) : "",
        description:defaultValues ? defaultValues.description : "",
    });   
    function inputChangedHandler(inputIdentifier,enteredValue) {
        setInputValues((curInputValues) => {
            return {
                ...curInputValues,
                [inputIdentifier]: enteredValue
            }
        })
    }

    function cancelHandler() {
        //cancel
    }
    function submitHandler() {
        const  expenseData = {
            amount:+inputValues.amount,
            date: new Date(inputValues.date),

            description:inputValues.description
        }

        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
        const  dateIsValid = expenseData.date.toString() !== "Invalid Date";
        const descriptionIsValid = expenseData.description.trim().length > 0; 

        if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
            return Alert.alert("Invalid Input","Please enter a valid amount, date and description",[{text:"Okay"}]);
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
        value: inputValues.amount   
    }} 
/>
<Input 
    style={styles.rowInput}
    label="Date" 
    textInputConfig={{ 
        placeholder: "YYYY-MM-DD",
        maxLength: 10,
        onChangeText: inputChangedHandler.bind(this, "date"),
        value: inputValues.date   
    }} 
/>

            </View>
           
            <Input 
    label="Description" 
    textInputConfig={{ 
        multiline: true,
        onChangeText: inputChangedHandler.bind(this, "description"),
        value: inputValues.description   
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