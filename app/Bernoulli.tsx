import { Text } from "react-native";
import { Stack } from "expo-router";

export default function Bernoulli(){

    
    return(
        <>
            <Stack.Screen options={{ headerShown:false }} />
            <Text>Bernoulli</Text>
        </>
    )
}