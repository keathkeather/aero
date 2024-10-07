import { Text, View, StyleSheet, TouchableOpacity, TextInput, Modal, Image } from 'react-native';
import { Stack } from 'expo-router';
import { useState } from 'react';
import ConversionTool from '~/components/unitConverter';

export default function Continuity() {
  const [A1, setA1] = useState('');
  const [A2, setA2] = useState('');
  const [V1, setV1] = useState('');
  const [V2, setV2] = useState('');
  const [ρ1, setρ1] = useState('');
  const [ρ2, setρ2] = useState('');
  const [selectedVariable, setSelectedVariable] = useState('A1');
  const [modalVisible, setModalVisible] = useState(false);
  const [conversionModalVisible, setConversionModalVisible] = useState(false);
  const [result, setResult] = useState('');

  const handleCalculation = () => {
    let result;
    const numericA1 = parseFloat(A1);
    const numericA2 = parseFloat(A2);
    const numericV1 = parseFloat(V1);
    const numericV2 = parseFloat(V2);
    const numericρ1 = parseFloat(ρ1);
    const numericρ2 = parseFloat(ρ2);

    if (selectedVariable == 'A1') {
      result = (numericA2 * numericV2 * numericρ2) / (numericV1 * numericρ1);
      setResult(result.toString());
    } else if (selectedVariable == 'A2') {
      result = (numericA1 * numericV1 * numericρ1) / (numericV2 * numericρ2);
      setResult(result.toString());
    } else if (selectedVariable == 'V1') {
      result = (numericA2 * numericV2 * numericρ2) / (numericA1 * numericρ1);
      setResult(result.toString());
    } else if (selectedVariable == 'V2') {
      result = (numericA1 * numericV1 * numericρ1) / (numericA2 * numericρ2);
      setResult(result.toString());
    } else if (selectedVariable == 'ρ1') {
      result = (numericA2 * numericV2 * numericρ2) / (numericA1 * numericV1);
      setResult(result.toString());
    } else if (selectedVariable == 'ρ2') {
      result = (numericA1 * numericV1 * numericρ1) / (numericA2 * numericV2);
      console.log(result);
      setResult(result.toString());
    }
  };
  const clearFields = () => {
    setA1('');
    setA2('');
    setV1('');
    setV2('');
    setρ1('');
    setρ2('');
  };
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View className=' relative bg-[#f2f2f2] rounded-[32px] shadow'>
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
          <TouchableOpacity
            className="absolute left-[24px] top-[132px] inline-flex h-[66px] w-[68.47px] items-center justify-center gap-2 rounded-2xl bg-[#ff5a1f] p-4"
            onPress={() => setModalVisible(true)}>
            <Text className="font-Inter_900Black text-[32px] font-bold text-white">
              {selectedVariable}
            </Text>
          </TouchableOpacity>
          <View className="absolute left-[154px] top-[139px] h-[53px] w-[213px] rounded-[5px] border border-[#242424]">
            <View className="absolute left-0 top-0 h-[53px] w-[213px] rounded-md border border-[#242424] ">
              <TextInput
                className=" font-Inter_900Black absolute left-[11.87px] top-[14.84px] text-xl font-bold text-[#242424]"
                placeholder={selectedVariable}
                value={result}
                keyboardType="number-pad"
              />
            </View>
          </View>
        </View>
        <View className="border-black/10 absolute left-[24px] top-[382px] h-[50px] w-[343px] rounded-[5px] border">
          {selectedVariable !== 'A1' && (
            <TextInput
              className="border-gray-300 mb-2.5 border p-2.5"
              placeholder="A1"
              value={A1}
              onChangeText={setA1}
              keyboardType="numeric"
            />
          )}
          {selectedVariable !== 'A2' && (
            <TextInput
              className="border-gray-300 mb-2.5 border p-2.5"
              placeholder="A2"
              value={A2}
              onChangeText={setA2}
              keyboardType="numeric"
            />
          )}
          {selectedVariable !== 'V1' && (
            <TextInput
              className="border-gray-300 mb-2.5 border p-2.5"
              placeholder="V1"
              value={V1}
              onChangeText={setV1}
              keyboardType="numeric"
            />
          )}
          {selectedVariable !== 'V2' && (
            <TextInput
              className="border-gray-300 mb-2.5 border p-2.5"
              placeholder="V2"
              value={V2}
              onChangeText={setV2}
              keyboardType="numeric"
            />
          )}
          {selectedVariable !== 'ρ1' && (
            <TextInput
              className="border-gray-300 mb-2.5 border p-2.5"
              placeholder="ρ1"
              value={ρ1}
              onChangeText={setρ1}
              keyboardType="numeric"
            />
          )}
          {selectedVariable !== 'ρ2' && (
            <TextInput
              className="border-gray-300 mb-2.5 border p-2.5"
              placeholder="ρ2"
              value={ρ2}
              onChangeText={setρ2}
              keyboardType="numeric"
            />
          )}
        </View>
       
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View className="m-auto h-[316px] w-[304px] items-center justify-center rounded-[32px] bg-[#f2f2f2] shadow">
            <Text className="font-Inter_900Black absolute top-[43px] text-xl font-semibold text-[#242424]">
              Finding for?
            </Text>

            {/* First row of buttons */}
            <View className="absolute top-[98px] w-[230px] flex-row justify-between">
              <TouchableOpacity
                className="h-[63.64px] w-[66.03px] items-center justify-center rounded-2xl bg-[#ff5a1f] p-4"
                onPress={() => {
                  setSelectedVariable('A1');
                  setModalVisible(false);
                  clearFields();
                }}>
                <Text className="font-Inter_900Black text-[28.96px] font-semibold leading-[43.44px] text-white">
                  A1
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="h-[63.64px] w-[66.03px] items-center justify-center rounded-2xl bg-[#ff5a1f] p-4"
                onPress={() => {
                  setSelectedVariable('V1');
                  setModalVisible(false);
                  clearFields();
                }}>
                <Text className="font-Inter_900Black text-[28.96px] font-semibold leading-[43.44px] text-white">
                  V1
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="h-[63.64px] w-[66.03px] items-center justify-center rounded-2xl bg-[#ff5a1f] p-4"
                onPress={() => {
                  setSelectedVariable('ρ1');
                  setModalVisible(false);
                  clearFields();
                }}>
                <Text className="font-Inter_900Black text-[28.96px] font-semibold leading-[43.44px] text-white">
                  ρ1
                </Text>
              </TouchableOpacity>
            </View>

            {/* Second row of buttons */}
            <View className="absolute top-[178px] w-[230px] flex-row justify-between">
              <TouchableOpacity
                className="h-[63.64px] w-[66.03px] items-center justify-center rounded-2xl bg-[#ff5a1f] p-4"
                onPress={() => {
                  setSelectedVariable('A2');
                  setModalVisible(false);
                  clearFields();
                }}>
                <Text className="font-Inter_900Black text-[28.96px] font-semibold leading-[43.44px] text-white">
                  A2
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="h-[63.64px] w-[66.03px] items-center justify-center rounded-2xl bg-[#ff5a1f] p-4"
                onPress={() => {
                  setSelectedVariable('V2');
                  setModalVisible(false);
                  clearFields();
                }}>
                <Text className="font-Inter_900Black text-[28.96px] font-semibold leading-[43.44px] text-white">
                  V2
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="h-[63.64px] w-[66.03px] items-center justify-center rounded-2xl bg-[#ff5a1f] p-4"
                onPress={() => {
                  setSelectedVariable('ρ2');
                  setModalVisible(false);
                  clearFields();
                }}>
                <Text className="font-Inter_900Black text-[28.96px] font-semibold leading-[43.44px] text-white">
                  ρ2
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

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
