import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native';

export default function Eqs() {
  const [p, setP] = useState('');
  const [ρ, setρ] = useState('');
  const [t, setT] = useState('');
  const [r] = useState(287); 
  const [selectedVariable, setSelectedVariable] = useState('P');
  const [modalVisible, setModalVisible] = useState(false);
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
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        {/* Button to select variable */}
        <TouchableOpacity
          className="w-[68.47px] h-[66px] p-4 left-[24px] top-[132px] absolute bg-[#ff5a1f] rounded-2xl justify-center items-center gap-2 inline-flex"
          onPress={() => setModalVisible(true)}
        >
          <Text className="text-white text-[32px] font-bold font-Inter_900Black">
            {selectedVariable}
          </Text>
        </TouchableOpacity>
        <View className="w-[213px] h-[53px] left-[154px] top-[139px] absolute rounded-[5px] border border-[#242424]">
        <View className="w-[213px] h-[53px] left-0 top-0 absolute rounded-md border border-[#242424] ">
          <TextInput
            className=" left-[11.87px] top-[14.84px] absolute text-[#242424] text-xl font-bold font-Inter_900Black"
            placeholder={selectedVariable}
            value={result}
            onChangeText={setP}
            keyboardType="number-pad"
          
          />
        </View>
      </View>
      <View className='mt-[114px]'>
          {/* Input fields for factors */}
        {selectedVariable !== 'P' && (
          <TextInput
            className='border border-gray-300 p-2.5 mb-2.5'
            placeholder="P"
            value={p}
            onChangeText={setP}
            keyboardType="numeric"
          />
        )}
        {selectedVariable !== 'ρ' && (
          <TextInput
          className='border border-gray-300 p-2.5 mb-2.5'
            placeholder="ρ"
            value={ρ}
            onChangeText={setρ}
            keyboardType="numeric"
          />
        )}
        {selectedVariable !== 'T' && (
          <TextInput
            className='border border-gray-300 p-2.5 mb-2.5'
            placeholder="T"
            value={t}
            onChangeText={setT}
            keyboardType="numeric"
          />
        )}
      </View>

        {/* Calculation and Clear buttons */}
        <View className='flex flex-row justify-between mt-[270]'>
          <TouchableOpacity className="w-[164px] h-[66px] p-4 bg-[#ff5a1f] rounded-2xl justify-center items-center gap-2 inline-flex" onPress={handleCalculation}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-[164px] h-[66px] p-[13.20px] bg-[#d9d8e0] rounded-2xl justify-center items-center gap-[6.60px] inline-flex" onPress={clearFields}>
            <Text style={styles.buttonText}>C</Text>
          </TouchableOpacity>
        </View>

        {/* Modal for selecting variable */}
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View className="w-[304px] h-[316px] bg-[#f2f2f2] rounded-[32px] shadow justify-center items-center m-auto">
            <Text className="absolute top-[43px] text-[#242424] text-xl font-semibold font-Inter_900Black">
              Finding for?
            </Text>
            
            <View className="absolute top-[98px] flex-row justify-between w-[165px]">
              <TouchableOpacity
                className="w-[75px] h-[72px] bg-[#ff5a1f] rounded-[17px] justify-center items-center"
                onPress={() => { setSelectedVariable('P'); setModalVisible(false); clearFields(); }}
              >
                <Text className="text-white text-[28px] font-bold font-Inter_900Black">P</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="w-[75px] h-[72px] bg-[#ff5a1f] rounded-[17px] justify-center items-center"
                onPress={() => { setSelectedVariable('T'); setModalVisible(false); clearFields(); }}
              >
                <Text className="text-white text-[28px] font-bold font-Inter_900Black">T</Text>
              </TouchableOpacity>
            </View>

            <View className="absolute top-[185px] flex-col">
              <TouchableOpacity
                className="w-[75px] h-[72px] bg-[#ff5a1f] rounded-[17px] justify-center items-center"
                onPress={() => { setSelectedVariable('ρ'); setModalVisible(false); clearFields(); }}
              >
                <Text className="text-white text-[32px] font-bold font-Inter_900Black">ρ</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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
