import { router, Stack, useLocalSearchParams } from 'expo-router';
import { Text, TouchableOpacity, View,Image } from 'react-native';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';
export default function TopicRouter() {
  const routeToEqs=()=>{
    router.push('/EqsRouter');
  }
  const routeToContinuity=()=>{
    router.push('/Continuity');
  }
  const routeToBernoulli=()=>{
    router.push('/Bernoulli');
  }
  return (
    <>
      <Stack.Screen options={{ headerShown:false }} />
      <Text className="text-xl font-bold text-center mt-[61px] leading-relaxed">Choose a topic</Text>

      <TouchableOpacity onPress={() => routeToEqs()}>
        <View className="w-[327px] h-[176px] bg-[#E0533D] rounded-[10px] shadow-lg mt-[141px] ml-[33px] mr-[30px] flex-col justify-start items-start inline-flex">
          <View className="flex-col justify-start items-start gap-4 inline-flex ml-[20]">
              <Text
                  className="text-[#111111] text-[24px] font-semibold leading-loose "
              >
                  {"Equation of State"}
              </Text>
              
          </View>
              <Text
                className="text-[#111111] text-[12px] font-bold  leading-[18px] ml-[20px]"
              >
                {"Relates pressure, volume, and temperature of an ideal gas (p = ρRT)."}
              </Text>
              <View className="origin-top-left ml-[231px] mb-[6px] w-[98px] h-[100px] relative">
                <Image source={require('../assets/Images/EqWave.png')}></Image>
              </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>routeToContinuity()}>
        <View className="w-[327px] h-[176px] bg-[#E78C9D] rounded-[10px] shadow mt-[24px] ml-[33px] mr-[30px] flex-col justify-start items-start inline-flex">
          <View className="flex-col justify-start items-start gap-4 inline-flex ml-[20]">
              <Text
                  className="text-[#111111] text-[24px] font-semibold leading-loose "
              >
                  {"Continuity Equation"}
              </Text>
              
          </View>
            <Text
                className="text-[#111111] text-[12px] font-bold  leading-[18px] ml-[20px]"
              >
                {"The conservation of mass along a stream tube, e.g., wind tunnels (A1V1ρ1=A2V2ρ2)."}
              </Text>
              <View className="origin-top-left ml-[229] mb-[6px] w-[100px] h-[98.34px]  relative">
                <Image source={require('../assets/Images/ContinuityWave.png')}></Image>
              </View>
              
        </View>
          
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>routeToBernoulli()}>
        <View className="w-[327px] h-[176px] bg-[#EED868] rounded-[10px] shadow-lg mt-[24px] ml-[33px] mr-[30px] flex-col justify-start items-start inline-flex">
          <View className="flex-col justify-start items-start gap-4 inline-flex ml-[20px]">
              <Text
                  className="text-[#111111] text-[24px] font-semibold leading-loose "
              >
                  {"Bernoulli’s Equation"}
              </Text>
          </View>
              <Text
                className="text-[#111111] text-[12px] font-bold  leading-[18px] ml-[20]"
              >
                {"Describes the conservation of energy in a fluid flow, where an increase in speed leads to a decrease in pressure or potential energy."}
              </Text>
              <View className="origin-top-left ml-[229] mb-[6px] w-[100px] h-[98.34px]  relative">
                <Image source={require('../assets/Images/BernoulliWave.png')}></Image>
              </View>
        </View>
      </TouchableOpacity>
    </>
  );
}
