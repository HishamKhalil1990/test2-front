import 'react-native-gesture-handler'
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScreenOne from './Screens/ScreenOne';
import ScreenTwo from './Screens/ScreenTwo';
import ScreenThree from './Screens/ScreenThree';
import ScreenFour from './Screens/ScreenFour';
import ScreenFive from './Screens/ScreenFive';
import ScreenSix from './Screens/ScreenSix';
import ScreenSeven from './Screens/ScreenSeven';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown:false,
          gestureEnabled:true,
        }}
      >
        <Stack.Screen 
          name="Logo" 
          component={ScreenOne}
        />
        <Stack.Screen 
          options={{
            gestureDirection:'horizontal-inverted',
            cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS
          }}
          name="Login" 
          component={ScreenTwo}
        />
        <Stack.Screen 
          options={{
            gestureDirection:'horizontal-inverted',
            cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS
          }}
          name="Account" 
          component={ScreenThree}
        />
        <Stack.Screen
          options={{
            gestureDirection:'vertical',
            cardStyleInterpolator:CardStyleInterpolators.forVerticalIOS
          }} 
        name="Sign" 
        component={ScreenFour}
        />
        <Stack.Screen name="Forgot" component={ScreenFive}/>
        <Stack.Screen name="Reset" component={ScreenSix}/>
        <Stack.Screen
          options={{
            gestureDirection:'horizontal-inverted',
            cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS
          }} 
          name="Detail" 
          component={ScreenSeven}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
