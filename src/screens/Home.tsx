import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";
import { RootParam } from "../../App";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";

export default function HomeScreen() {

    type RootProp = NativeStackNavigationProp<RootParam, 'Home'>;
    const navigation = useNavigation<RootProp>();

    // we can hide back arrow
    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackVisible: false,
        })

    })

    return (
        <View>
          
          <Button title="Profile" onPress={()=>navigation.navigate('Profile')}/>

        </View>
    );
}