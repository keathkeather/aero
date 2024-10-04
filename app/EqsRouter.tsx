import { router, Stack } from "expo-router";
import { TouchableOpacity, View ,Text,Image} from "react-native";



export default function EqsRouter(){
    const routeToEqs=()=>{ 
        router.push('/Eqs')
    }
    const routeToEqsA=()=>{
        router.push('/Eqsa')
    }

    return(
        <>
            <Stack.Screen options={{ headerShown: false }} />
            <TouchableOpacity onPress={() => routeToEqsA()}>
                <View className="w-[327px] h-[176px] bg-[#E0533D] rounded-[10px] shadow-lg mt-[141px] ml-[33px] mr-[30px] flex-col justify-start items-start inline-flex">
                <View className="flex-col justify-start items-start gap-4 inline-flex ml-[20]">
                    <Text
                        className="text-[#111111] text-[24px] font-semibold leading-loose "
                    >
                        {"Equation of State with Altitude"}
                    </Text>
                    
                </View>
                    <View className="origin-top-left ml-[231px] mb-[6px] w-[98px] h-[100px] relative">
                        <Image source={require('../assets/Images/EqWave.png')}></Image>
                    </View>
                    </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => routeToEqs()}>
                <View className="w-[327px] h-[176px] bg-[#E0533D] rounded-[10px] shadow-lg mt-[141px] ml-[33px] mr-[30px] flex-col justify-start items-start inline-flex">
                <View className="flex-col justify-start items-start gap-4 inline-flex ml-[20]">
                    <Text
                        className="text-[#111111] text-[24px] font-semibold leading-loose "
                    >
                        {"Equation of State at Standard Sea Level"}
                    </Text>
                    
                </View>
                    <View className="origin-top-left ml-[231px] mb-[6px] w-[98px] h-[100px] relative">
                        <Image source={require('../assets/Images/EqWave.png')}></Image>
                    </View>
                    </View>
            </TouchableOpacity>
        </>
    )
}