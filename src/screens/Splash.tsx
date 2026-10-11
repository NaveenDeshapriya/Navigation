import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import {useNavigation} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootParam } from "../../App";

export default function SplashScreen(){
//first need useNavigation for access
//next need type access navigation for changes navigation

type RootProps=NativeStackNavigationProp<RootParam,'Splash'>;
const navigation=useNavigation<RootProps>();

    // how to change header or title any changes
    useLayoutEffect(()=>{

        navigation.setOptions({ //now can change
    
            title:"Wel come",
            headerShown:false
        })
    });


    // how to automatic navigate home screen
    // we can use setInterval for waiting time and move screen
    setInterval(()=>{

        navigation.navigate('Home');

    },3000);

    return(
        <View style={style.container}>
            <Text>Splash</Text>
        </View>
    );

}

const style=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})