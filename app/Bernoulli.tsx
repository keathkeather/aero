import { Text, View, StyleSheet, TouchableOpacity, TextInput, Modal, Image } from 'react-native';
import { Stack } from 'expo-router';
import { useState } from 'react';
import ConversionTool from '~/components/unitConverter';

export default function Bernoulli() {
  const [P1, setP1] = useState('');
  const [P2, setP2] = useState('');
  const [V1, setV1] = useState('');
  const [V2, setV2] = useState('');
  const [ρ1, setρ1] = useState('');
  const [ρ2, setρ2] = useState('');
  const [selectedVariable, setSelectedVariable] = useState('P');
  const [conversionModalVisible, setConversionModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [result, setResult] = useState('');

  const handleCalculation = () => {
    let result;
    const numericP1 = parseFloat(P1);
    const numericP2 = parseFloat(P2);
    const numericV1 = parseFloat(V1);
    const numericV2 = parseFloat(V2);
    const numericρ1 = parseFloat(ρ1);
    const numericρ2 = parseFloat(ρ2);

    if (selectedVariable == 'P1') {
      result =
        numericP2 +
        (0.5 * numericρ2 * Math.pow(numericV2, 2) - 0.5 * numericρ1 * Math.pow(numericV1, 2));
      setResult(result.toString());
    } else if (selectedVariable == 'P2') {
      result =
        numericP1 +
        (0.5 * numericρ1 * Math.pow(numericV1, 2) - 0.5 * numericρ2 * Math.pow(numericV2, 2));
      setResult(result.toString());
    } else if (selectedVariable == 'V1') {
      result = Math.sqrt(
        (numericP2 - numericP1 + 0.5 * numericρ2 * Math.pow(numericV2, 2)) / (0.5 * numericρ1)
      );
      setResult(result.toString());
    } else if (selectedVariable == 'V2') {
      result = Math.sqrt(
        (numericP1 - numericP2 + 0.5 * numericρ1 * Math.pow(numericV1, 2)) / (0.5 * numericρ2)
      );
      setResult(result.toString());
    } else if (selectedVariable == 'ρ1') {
      result =
        2 *
        ((numericP2 - numericP1 + 0.5 * numericρ2 * Math.pow(numericV2, 2)) /
          Math.pow(numericV1, 2));
      setResult(result.toString());
    } else if (selectedVariable == 'ρ2') {
      result =
        2 *
        ((numericP1 - numericP2 + 0.5 * numericρ1 * Math.pow(numericV1, 2)) /
          Math.pow(numericV2, 2));
      setResult(result.toString());
    }
  };
  const clearFields = () => {
    setP1('');
    setP2('');
    setV1('');
    setV2('');
    setρ1('');
    setρ2('');
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
          <TouchableOpacity
            className="absolute left-[24px] top-[132px] inline-flex h-[66px] w-[68.47px] items-center justify-center gap-2 rounded-2xl bg-[#ff5a1f] p-4"
            onPress={() => setModalVisible(true)}>
            <Text className="font-Inter_900Black text-[32px] font-bold text-white">
              {selectedVariable}
            </Text>
          </TouchableOpacity>
        </View>
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
        <View className="border-black/10 absolute left-[24px] top-[382px] h-[50px] w-[343px] rounded-[5px] border">
          {selectedVariable !== 'P1' && (
            <TextInput
              className="border-gray-300 mb-2.5 border p-2.5"
              placeholder="P1"
              value={P1}
              onChangeText={setP1}
              keyboardType="numeric"
            />
          )}
          {selectedVariable !== 'P2' && (
            <TextInput
              className="border-gray-300 mb-2.5 border p-2.5"
              placeholder="P2"
              value={P2}
              onChangeText={setP2}
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
                  setSelectedVariable('P1');
                  setModalVisible(false);
                  clearFields();
                }}>
                <Text className="font-Inter_900Black text-[28.96px] font-semibold leading-[43.44px] text-white">
                  P1
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
                  setSelectedVariable('P2');
                  setModalVisible(false);
                  clearFields();
                }}>
                <Text className="font-Inter_900Black text-[28.96px] font-semibold leading-[43.44px] text-white">
                  P2
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
        {/* Calculation and Clear buttons */}
        <View className="flex flex-row justify-between">
          <TouchableOpacity
            className="absolute left-[203px] top-[702px] inline-flex h-[66px] w-[164px] items-center justify-center gap-2 rounded-2xl bg-[#ff5a1f] p-4"
            onPress={handleCalculation}>
            <Text className="font-Inter900_Black text-[32px] font-bold leading-[48px] text-white">
              =
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="absolute left-[24px] top-[702px] inline-flex h-[66px] w-[164px] items-center justify-center gap-2 rounded-2xl bg-[#d9d8e0] p-4"
            onPress={clearFields}>
            <Text className="font-Inter900_Black text-[32px] font-bold  leading-[48px] text-[#19191b]">
              C
            </Text>
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
