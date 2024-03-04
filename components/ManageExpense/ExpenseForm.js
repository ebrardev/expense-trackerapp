
 import { StyleSheet,TextInput,Text, View } from "react-native";
import Input from "./Input";
import { GlobalStyles } from "../../constants/style";
import { useState } from "react";
import Button from "../UI/Button";
function ExpenseForm({onCancel,onSubmit,submitButtonHandler}) {

    const  [inputValues,setInputValues]=useState({
        amount:"",
        date:"",
        description:""
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
 
    }

    return (
        <View style={styles.form}>
            <Text style={styles.text}> Your Expense</Text>
            <View style={styles.inputsRow}>
            <Input 
            style={styles.rowInput}
            label="Amount" textInputConfig={{ 
            keyboardType: "decimal-pad", 
           onchangeText: inputChangedHandler.bind(this, "amount"),
            value: inputValues.amount   
           }} />
           <Input 
              style={styles.rowInput}
           label="Date" textInputConfig={{ 
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onchangeText: inputChangedHandler.bind(this, "date"),
            value: inputValues.date   
            }} />
            </View>
           
            <Input label="Description" textInputConfig={{ 
           multiline: true,
      
      
           onchangeText: inputChangedHandler.bind(this, "description"),
           value: inputValues.description   
            }} />
 
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