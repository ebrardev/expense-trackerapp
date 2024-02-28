import { Pressable, View } from "react-native";

function ExpenseItem() {
    return (
        <Pressable>
            <View>
                <View>
                    <Text>DEScription</Text>
                    <Text>Amount</Text>
                    // ? devam et

                </View>
                <View>
                    <Text>Date</Text>
                </View>
            </View>
        </Pressable>
    )

}

export default ExpenseItem;