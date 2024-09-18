import { Stack, Link } from 'expo-router';
import { View, Text,Image } from 'react-native';
import { useFonts } from 'expo-font';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{headerShown:false}} />
      <Container>
        <Image 
        className="h-[266.336px] w-[266.334px] mt-36 ml-[61px]"
        source={require('../assets/Images/Home.png')}
        >
        </Image>
        <Text 
        className='text-[32px] w-[311px] font-semibold mt-[70.65px] ml-[39px] leading-[40px]' >
          Make Problem Solving Easier 
          </Text>
        <Text className='ml-[39px] text-[14px] ' >Aero Calc Fx is a mobile application that can help you solve problems in aviation in an easier and simpler way.</Text>
        <Link href={{ pathname: '/TopicRouter',  }} asChild>
          <Button className="h-[56px] mt-[71] mr-[40.5px] ml-[39.5] mb-[90px] text-white bg-[#242424] " title="Let's Start" />
        </Link>
      </Container>
    </>
  );
}
