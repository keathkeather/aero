import { Text, View,StyleSheet, TouchableOpacity, TextInput, Modal } from "react-native";
import { Stack } from "expo-router";
import { useState } from "react";

export default function Continuity(){
    const [A1, setA1] = useState('');
    const [A2, setA2] = useState('');
    const [V1, setV1] = useState('');
    const [V2, setV2] = useState('');
    const [ρ1, setρ1] = useState('');
    const [ρ2, setρ2] = useState('');
    const [selectedVariable, setSelectedVariable] = useState('P');
    const [modalVisible, setModalVisible] = useState(false);
    const [result, setResult] = useState('');

    const handleCalculation = () => {
        let result;
        const numericA1 = parseFloat(A1);
        const numericA2 = parseFloat(A2);
        const numericV1 = parseFloat(V1);
        const numericV2 = parseFloat(V2);
        const numericρ1 = parseFloat(ρ1);
        const numericρ2 = parseFloat(ρ2);


        if(selectedVariable == 'A1'){
            result = (numericA2*numericV2*numericρ2)/(numericV1*numericρ1);
            setResult(result.toString());
        }
        else if(selectedVariable =='A2'){
            result = (numericA1*numericV1*numericρ1)/(numericV2*numericρ2);
            setResult(result.toString());
        } 
        else if(selectedVariable =='V1'){
            result = (numericA2*numericV2*numericρ2)/(numericA1*numericρ1);
            setResult(result.toString());
        }
        else if(selectedVariable == 'V2'){
            result = (numericA1*numericV1*numericρ1)/(numericA2*numericρ2);
            setResult(result.toString());
        }
        else if(selectedVariable == 'ρ1'){
            result = (numericA2*numericV2*numericρ2)/(numericA1*numericV1);
            setResult(result.toString());
        }
        else if(selectedVariable == 'ρ2'){
            result = (numericA1*numericV1*numericρ1)/(numericA2*numericV2);
            setResult(result.toString());
        }
    }
    const clearFields = () => {
        setA1('');
        setA2('');
        setV1('');
        setV2('');
        setρ1('');
        setρ2('');
      };
    return(
        <>
            <Stack.Screen options={{ headerShown:false }} />
            <View style={styles.container}>
           
            <TouchableOpacity className="w-[68.47px] h-[66px] p-4 left-[24px] top-[132px] absolute bg-[#ff5a1f] rounded-2xl justify-center items-center gap-2 inline-flex" onPress={() => setModalVisible(true)}>
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
                        keyboardType="number-pad"
                    
                    />
                </View>
            </View>
            <View className='mt-[114px]'>
                {selectedVariable !== 'A1' && (
                    <TextInput
                            className='border border-gray-300 p-2.5 mb-2.5'
                            placeholder="A1"
                            value={A1}
                            onChangeText={setA1}
                            keyboardType="numeric"
                    />
                )}
                {selectedVariable !== 'A2' && (
                    <TextInput
                        className='border border-gray-300 p-2.5 mb-2.5'
                        placeholder="A2"
                        value={A2}
                        onChangeText={setA2}
                        keyboardType="numeric"
                    />
                )}
                {selectedVariable !== 'V1' && (
                    <TextInput
                        className='border border-gray-300 p-2.5 mb-2.5'
                        placeholder="V1"
                        value={V1}
                        onChangeText={setV1}
                        keyboardType="numeric"
                    />
                )}
                {selectedVariable !== 'V2' && (
                    <TextInput
                        className='border border-gray-300 p-2.5 mb-2.5'
                        placeholder="V2"
                        value={V2}
                        onChangeText={setV2}
                        keyboardType="numeric"
                    />
                )}
                {selectedVariable !== 'ρ1' && (
                    <TextInput
                        className='border border-gray-300 p-2.5 mb-2.5'
                        placeholder="ρ1"
                        value={ρ1}
                        onChangeText={setρ1}
                        keyboardType="numeric"
                    />
                )}
                {selectedVariable !== 'ρ2' && (
                    <TextInput
                        className='border border-gray-300 p-2.5 mb-2.5'
                        placeholder="ρ2"
                        value={ρ2}
                        onChangeText={setρ2}
                        keyboardType="numeric"
                    />
                )}
            </View>
            <View className='flex flex-row justify-between mt-[100]'>
                <TouchableOpacity className="w-[164px] h-[66px] p-4 bg-[#ff5a1f] rounded-2xl justify-center items-center gap-2 inline-flex" onPress={handleCalculation}>
                    <Text style={styles.buttonText}>=</Text>
                </TouchableOpacity>
                <TouchableOpacity className="w-[164px] h-[66px] p-[13.20px] bg-[#d9d8e0] rounded-2xl justify-center items-center gap-[6.60px] inline-flex" onPress={clearFields}>
                    <Text style={styles.buttonText}>C</Text>
                </TouchableOpacity>
            </View>
            <Modal animationType="slide" transparent={true} visible={modalVisible}>
            <View className="w-[304px] h-[316px] bg-[#f2f2f2] rounded-[32px] shadow justify-center items-center m-auto">
                <Text className="absolute top-[43px] text-[#242424] text-xl font-semibold font-Inter_900Black">
                Finding for?
                </Text>
                
                {/* First row of buttons */}
                <View className="absolute top-[98px] flex-row justify-between w-[230px]">
                <TouchableOpacity
                    className="w-[66.03px] h-[63.64px] p-4 bg-[#ff5a1f] rounded-2xl justify-center items-center"
                    onPress={() => { setSelectedVariable('A1'); setModalVisible(false); clearFields(); }}
                >
                    <Text className="text-white text-[28.96px] font-semibold font-Inter_900Black leading-[43.44px]">A1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    className="w-[66.03px] h-[63.64px] p-4 bg-[#ff5a1f] rounded-2xl justify-center items-center"
                    onPress={() => { setSelectedVariable('V1'); setModalVisible(false); clearFields(); }}
                >
                    <Text className="text-white text-[28.96px] font-semibold font-Inter_900Black leading-[43.44px]">V1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    className="w-[66.03px] h-[63.64px] p-4 bg-[#ff5a1f] rounded-2xl justify-center items-center"
                    onPress={() => { setSelectedVariable('ρ1'); setModalVisible(false); clearFields(); }}
                >
                    <Text className="text-white text-[28.96px] font-semibold font-Inter_900Black leading-[43.44px]">ρ1</Text>
                </TouchableOpacity>
                </View>

                {/* Second row of buttons */}
                <View className="absolute top-[178px] flex-row justify-between w-[230px]">
                <TouchableOpacity
                    className="w-[66.03px] h-[63.64px] p-4 bg-[#ff5a1f] rounded-2xl justify-center items-center"
                    onPress={() => { setSelectedVariable('A2'); setModalVisible(false); clearFields(); }}
                >
                    <Text className="text-white text-[28.96px] font-semibold font-Inter_900Black leading-[43.44px]">A2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    className="w-[66.03px] h-[63.64px] p-4 bg-[#ff5a1f] rounded-2xl justify-center items-center"
                    onPress={() => { setSelectedVariable('V2'); setModalVisible(false); clearFields(); }}
                >
                    <Text className="text-white text-[28.96px] font-semibold font-Inter_900Black leading-[43.44px]">V2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    className="w-[66.03px] h-[63.64px] p-4 bg-[#ff5a1f] rounded-2xl justify-center items-center"
                    onPress={() => { setSelectedVariable('ρ2'); setModalVisible(false); clearFields(); }}
                >
                    <Text className="text-white text-[28.96px] font-semibold font-Inter_900Black leading-[43.44px]">ρ2</Text>
                </TouchableOpacity>
                </View>
            </View>
            </Modal>


            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#f5f5f5' },
    input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 },
    buttonRow: { flexDirection: 'row', justifyContent: 'space-between' },
    button: { flex: 1, backgroundColor: '#f44', padding: 20, margin: 5 },
    buttonText: { color: 'white', textAlign: 'center', fontSize: 20 },
  });