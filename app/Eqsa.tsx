import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet ,Image} from 'react-native';
import ConversionTool from '~/components/unitConverter';
export default function Eqsa() {

  const [p, setP] = useState('');
  const [ρ, setρ] = useState('');
  const [t, setT] = useState('');
  const [H, setH] = useState('');
  const [r] = useState(287); 
  const [selectedVariable, setSelectedVariable] = useState('P');
  const [modalVisible, setModalVisible] = useState(false);
  const [result, setResult] = useState('');
  const handleCalculation = () => {
    let result;
    const numericρ = parseFloat(ρ);
    const numericT = parseFloat(t);
    const numericP = parseFloat(p);
    const numericH = parseFloat(H);
    if (selectedVariable === 'P') {

      let t1 = 288+(-0.0065*numericH)
      let temperature = 288+(-0.0065*numericH);
      let  pressureAtAltitude= (Math.pow((t1/288),5.26))*101325;
      let density = (Math.pow((t1/288),4.26))*1.2256;
      setρ(density.toString());
      setT(temperature.toString());
      setResult(pressureAtAltitude.toString());
      // setT(temperature.toString());
      // setρ(density.toString());
      console.log(`P: ${pressureAtAltitude.toString()} density: ${density.toString()} temperature: ${t1.toString()}`);
    }
  };

  const clearFields = () => {
    setP('');
    setρ('');
    setT('');
    setH('');
    setResult('');
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View className=' relative bg-[#f2f2f2] rounded-[32px] shadow'>
        <TouchableOpacity onPress={()=>setModalVisible(true)}>
          <Image 
            className="w-[30px] h-[30px] left-[336px] top-[61px] absolute"
            source={require('../assets/Images/ConversionIcon.png')}
            >
          </Image>
        </TouchableOpacity>

        <ConversionTool
            isVisible={modalVisible}
            onClose={() => setModalVisible(false)}
            initialValue={100} 
            initialUnit="kg" 
            initialCategory="Length" // Add this line
        />


        <View style={styles.container}>
          
          <View
            className="w-[68.47px] h-[66px] p-4 left-[24px] top-[132px] absolute bg-[#ff5a1f] rounded-2xl justify-center items-center gap-2 inline-flex"
          >
            <Text className="text-white text-[32px] font-bold font-Inter_900Black">
              P
            </Text>
          </View>
          <View className="w-[213px] h-[53px] left-[154px] top-[139px] absolute rounded-[5px] border border-[#242424]">
            <View className="w-[213px] h-[53px] left-0 top-0 absolute rounded-md border border-[#242424] "></View>
              <TextInput
                className=" left-[11.87px] top-[14.84px] absolute text-[#242424] text-xl font-bold font-Inter_900Black"
                placeholder="P"
                value={result}
                keyboardType="number-pad"
                readOnly={true}
              />
            
           </View>
           <View className='w-[68.47px] h-[66px] p-[13.20px] left-[24px] top-[211px] absolute bg-[#ff5a1f] rounded-2xl justify-center items-center gap-[6.60px] inline-flex'>
              <TextInput className="text-white text-[32px] font-bold font-Inter_900Black">
              ρ
              </TextInput>
           </View>
           <View className='w-[213px] h-[53px] left-[154px] top-[218px] absolute rounded-[5px] border border-[#242424]'>
              <View className="w-[213px] h-[53px] left-0 top-0 absolute rounded-md border border-[#242424]"></View> 
                <TextInput 
                  className="left-[11.87px] top-[14.84px] absolute text-[#242424] text-xl font-bold font-Inter_900Black"
                  placeholder="ρ"
                  value={ρ}
                  keyboardType="number-pad"
                  readOnly={true}
                >
                </TextInput>
           </View>
           <View className='w-[68.47px] h-[66px] p-[13.20px] left-[24px] top-[290px] absolute bg-[#ff5a1f] rounded-2xl justify-center items-center gap-[6.60px] inline-flex'>
              <TextInput className="text-white text-[32px] font-bold font-Inter_900Black">
              T
              </TextInput>
           </View>
           <View className='w-[213px] h-[53px] left-[154px] top-[297px] absolute rounded-[5px] border border-[#242424]'>
              <View className="w-[213px] h-[53px] left-0 top-0 absolute rounded-md border border-[#242424]"></View> 
                <TextInput 
                className="left-[11.87px] top-[14.84px] absolute text-[#242424] text-xl font-bold font-Inter_900Black"
                placeholder={selectedVariable}
                value={t}
                keyboardType="number-pad"
                readOnly={true}
                >
                </TextInput>
           </View>
           
           
        <View className="w-[343px] h-[50px] left-[24px] top-[382px] absolute rounded-[5px] border border-black/10">
            <View className="w-[343px] h-[50px] left-0 top-0 absolute rounded border border-black/10">
              <TextInput
                className='left-[19.11px] top-[14px] absolute text-black/10 text-sm font-bold font-Inter_900Black'
                placeholder="H"
                value={H}
                onChangeText={setH}
                keyboardType="numeric"
              />
            </View>
        </View>
   

        {/* Calculation and Clear buttons */}
        <View className='flex flex-row justify-between'>
            <TouchableOpacity className="w-[164px] h-[66px] p-4 left-[203px] top-[702px] absolute bg-[#ff5a1f] rounded-2xl justify-center items-center gap-2 inline-flex" onPress={handleCalculation}>
              <Text  className="text-white text-[32px] font-bold font-Inter900_Black leading-[48px]">=</Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-[164px] h-[66px] p-4 left-[24px] top-[702px] absolute bg-[#d9d8e0] rounded-2xl justify-center items-center gap-2 inline-flex" onPress={clearFields}>
              <Text  className="font-bold text-[#19191b] text-[32px]  leading-[48px] font-Inter900_Black">C</Text>
            </TouchableOpacity>
          </View>
        </View>
        
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#f5f5f5' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between' },
  button: { flex: 1, backgroundColor: '#f44', padding: 20, margin: 5 },
  buttonText: { color: 'white', textAlign: 'center', fontSize: 20 },
});
