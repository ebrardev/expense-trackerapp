import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ManageExpense from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import { GlobalStyles } from './constants/style';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import IconButton from './components/UI/IconButton';
import ExpensesContextProvider from './store/expenses-context';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return(
    <BottomTabs.Navigator
    screenOptions={({ navigation }) => ({
      headerStyle: {
        backgroundColor: GlobalStyles.colors.primary500,
      },
      headerTintColor: "white",
      tabBarStyle: {
        backgroundColor: GlobalStyles.colors.primary500,
      },
      tabBarActiveTintColor: GlobalStyles.colors.accent500,
      headerRight: () => (
        <IconButton 
          icon="plus" 
          size={24} 
          color="white" 
          onPress={() => {
            navigation.navigate("ManageExpense",{editExpense: false})
          }}
        />
      )
    })}
  >
<BottomTabs.Screen name="RecentExpenses" component={RecentExpenses}
options={ {
  title : "Recent Expenses",
  tabBarLabel: "Recent",
  tabBarIcon: ({color,size}) =>


  <FontAwesome5 name="receipt" size={size} color={color} />
}}
/>
<BottomTabs.Screen name="AllExpenses"
 component={AllExpenses}
 options={ {
  title : "All Expenses",
  tabBarLabel: "All",
  tabBarIcon: ({color,size}) =>

<FontAwesome name="calendar" size={size} color={color} />
}}
 />
  </BottomTabs.Navigator>
  );
}
export default function App() {
  return (
  <>
  <StatusBar style="auto" />
  <ExpensesContextProvider>
  <NavigationContainer>
    <Stack.Navigator 
    screenOptions={{
      headerStyle: {
        backgroundColor: GlobalStyles.colors.primary500,
      },
      headerTintColor: "white",
    
    }}
    
    >
    <Stack.Screen name="ExpensesOverview" component={ExpensesOverview}  options={{headerShown:false}}/>
      <Stack.Screen name="ManageExpense" component={ManageExpense}
      options={{
      presentation: "modal",
      
      }}
      
      />


    </Stack.Navigator>

  </NavigationContainer>
  </ExpensesContextProvider>
  </>
  );
}
