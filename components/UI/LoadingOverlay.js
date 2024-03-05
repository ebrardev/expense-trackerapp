import { View,ActivityIndicator ,StyleSheet,Text} from "react-native";
import { GlobalStyles } from "../../constants/style";


function LoadingOverlay() {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome Expense Tracker App...</Text>
 <ActivityIndicator size="large" color="white" />
        </View>
    )
}
export default LoadingOverlay;

const styles= StyleSheet.create({
    container : {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        padding:24,
        backgroundColor: GlobalStyles.colors.primary700
    },
    text : {
        color: "white",
        fontSize:24,
        marginBottom:20,

    }
})