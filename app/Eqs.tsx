import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet, Image } from 'react-native';
import ConversionTool from '~/components/unitConverter';
export default function Eqs() {
  const [p, setP] = useState('');
  const [ρ, setρ] = useState('');
  const [t, setT] = useState('');
  const [r] = useState(287);
  const [selectedVariable, setSelectedVariable] = useState('P');
  const [modalVisible, setModalVisible] = useState(false);
  const [conversionModalVisible, setConversionModalVisible] = useState(false);
  const [result, setResult] = useState('');
  const handleCalculation = () => {
    let result;
    const numericρ = parseFloat(ρ);
    const numericT = parseFloat(t);
    const numericP = parseFloat(p);

    if (selectedVariable === 'P') {
      result = numericρ * r * numericT;
      setResult(result.toString());
    } else if (selectedVariable === 'T') {
      result = numericP / (numericρ * r);
      setResult(result.toString());
    } else if (selectedVariable === 'ρ') {
      result = numericP / (r * numericT);
      setResult(result.toString());
    }
  };

  const clearFields = () => {
    setP('');
    setρ('');
    setT('');
    setResult('');
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <View className=" relative rounded-[32px] bg-[#f2f2f2] shadow">
        <TouchableOpacity onPress={() => setConversionModalVisible(true)}>
          <Image
            className="absolute left-[336px] top-[61px] h-[30px] w-[30px]"
            source={require('../assets/Images/ConversionIcon.png')}></Image>
        </TouchableOpacity>

        <ConversionTool
          isVisible={conversionModalVisible}
          onClose={() => setConversionModalVisible(false)}
          initialValue={100}
          initialUnit="kg"
          initialCategory="Length" 
        />
        <View style={styles.container}>
          {/* Button to select variable */}
          <View className="absolute left-[24px] top-[132px] inline-flex h-[66px] w-[68.47px] items-center justify-center gap-2 rounded-2xl bg-[#ff5a1f] p-4">
            <Text className="font-Inter_900Black text-[32px] font-bold text-white">
              {selectedVariable}
            </Text>
          </View>
          <View className="absolute left-[154px] top-[139px] h-[53px] w-[213px] rounded-[5px] border border-[#242424]">
            <View className="absolute left-0 top-0 h-[53px] w-[213px] rounded-md border border-[#242424] ">
              <TextInput
                className=" font-Inter_900Black absolute left-[11.87px] top-[14.84px] text-xl font-bold text-[#242424]"
                placeholder={selectedVariable}
                value={result}
                onChangeText={setP}
                keyboardType="number-pad"
              />
            </View>
          </View>
        </View>
        <View className="border-black/10 absolute left-[24px] top-[382px] h-[50px] w-[343px] rounded-[5px] border">
          {/* Input fields for factors */}
          {selectedVariable !== 'P' && (
            <TextInput
              className="border-gray-300 mb-2.5 border p-2.5"
              placeholder="P"
              value={p}
              onChangeText={setP}
              keyboardType="numeric"
            />
          )}
          {selectedVariable !== 'ρ' && (
            <TextInput
              className="border-gray-300 mb-2.5 border p-2.5"
              placeholder="ρ"
              value={ρ}
              onChangeText={setρ}
              keyboardType="numeric"
            />
          )}
          {selectedVariable !== 'T' && (
            <TextInput
              className="border-gray-300 mb-2.5 border p-2.5"
              placeholder="T"
              value={t}
              onChangeText={setT}
              keyboardType="numeric"
            />
          )}
          
        </View>
         {/* Calculation and Clear buttons */}
         
        {/* Modal for selecting variable */}
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View className="m-auto h-[316px] w-[304px] items-center justify-center rounded-[32px] bg-[#f2f2f2] shadow">
            <Text className="font-Inter_900Black absolute top-[43px] text-xl font-semibold text-[#242424]">
              Finding for?
            </Text>

            <View className="absolute top-[98px] w-[165px] flex-row justify-between">
              <TouchableOpacity
                className="h-[72px] w-[75px] items-center justify-center rounded-[17px] bg-[#ff5a1f]"
                onPress={() => {
                  setSelectedVariable('P');
                  setModalVisible(false);
                  clearFields();
                }}>
                <Text className="font-Inter_900Black text-[28px] font-bold text-white">P</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="h-[72px] w-[75px] items-center justify-center rounded-[17px] bg-[#ff5a1f]"
                onPress={() => {
                  setSelectedVariable('T');
                  setModalVisible(false);
                  clearFields();
                }}>
                <Text className="font-Inter_900Black text-[28px] font-bold text-white">T</Text>
              </TouchableOpacity>
            </View>

            <View className="absolute top-[185px] flex-col">
              <TouchableOpacity
                className="h-[72px] w-[75px] items-center justify-center rounded-[17px] bg-[#ff5a1f]"
                onPress={() => {
                  setSelectedVariable('ρ');
                  setModalVisible(false);
                  clearFields();
                }}>
                <Text className="font-Inter_900Black text-[32px] font-bold text-white">ρ</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

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
