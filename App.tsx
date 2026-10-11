import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './src/screens/Splash';
import Home from './src/screens/Home';
import HomeScreen from './src/screens/Home';
import ProfileScreen from './src/screens/Profile';


//create stack 

// create type for match screen name and its set argument or not pass argument


export type RootParam={ 
  Splash:undefined, //no pass argument
  Home:undefined,
  Profile:undefined,
}

export default function App() {

// create stack for navigate screen

const Stack=createNativeStackNavigator<RootParam>(); //we can set type check screens


// we can set initial screen in Stack navigator
// header edit or chnages can use option that screen
//All screen can change stack navigator
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name='Splash' component={SplashScreen}/>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Profile' component={ProfileScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

