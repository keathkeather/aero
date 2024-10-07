import React, { useState,useEffect } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

interface ConversionToolProps {
  isVisible: boolean;
  onClose: () => void;
  initialValue: number;
  initialCategory: string;
  initialUnit: string;
}

const units = {
  Length: [
    { label: 'Meter (m)', value: 'm' },
    { label: 'Kilometer (km)', value: 'km' },
    { label: 'Centimeter (cm)', value: 'cm' },
    { label: 'Millimeter (mm)', value: 'mm' },
    { label: 'Mile (mi)', value: 'mi' },
    { label: 'Foot (ft)', value: 'ft' },
    { label: 'Inch (in)', value: 'in' },
  ],
  Area: [
    { label: 'Sq. Meter (m²)', value: 'm²' },
    { label: 'Sq. Centimeter (cm²)', value: 'cm²' },
    { label: 'Sq. Millimeter (mm²)', value: 'mm²' },
    { label: 'Sq. Foot (ft²)', value: 'ft²' },
    { label: 'Sq. Inch (in²)', value: 'in²' },
  ],
  Temperature: [
    { label: 'Celsius (°C)', value: 'C' },
    { label: 'Fahrenheit (°F)', value: 'F' },
    { label: 'Kelvin (K)', value: 'K' },
  ],
  Volume: [
    { label: 'Cubic Meter (m³)', value: 'm³' },
    { label: 'Cubic Centimeter (cm³)', value: 'cm³' },
    { label: 'Cubic Millimeter (mm³)', value: 'mm³' },
    { label: 'Liter (L)', value: 'L' },
    { label: 'Milliliter (mL)', value: 'mL' },
    { label: 'Cubic Foot (ft³)', value: 'ft³' },
    { label: 'Cubic Inch (in³)', value: 'in³' },
  ],
  Weight: [
    { label: 'Kilogram (kg)', value: 'kg' },
    { label: 'Gram (g)', value: 'g' },
    { label: 'Milligram (mg)', value: 'mg' },
    { label: 'Pound (lb)', value: 'lb' },
    { label: 'Slug (slug)', value: 'slug' },
    { label: 'Newton (N)', value: 'N' },
  ],
  Time: [
    { label: 'Second (s)', value: 's' },
    { label: 'Minute (min)', value: 'min' },
    { label: 'Hour (hr)', value: 'hr' },
  ],
};

type UnitCategory = 'Length' | 'Area' | 'Temperature' | 'Volume' | 'Weight' | 'Time';

const ConversionTool: React.FC<ConversionToolProps> = ({ isVisible, onClose, initialValue, initialCategory, initialUnit }) => {
  const defaultCategory: UnitCategory = Object.keys(units).includes(initialCategory) ? initialCategory as UnitCategory : 'Length';
  
  const [fromValue, setFromValue] = useState<string>(initialValue.toString());
  const [toValue, setToValue] = useState<number>(initialValue);
  const [fromUnit, setFromUnit] = useState<string>(initialUnit);
  const [toUnit, setToUnit] = useState<string>(initialUnit);
  const [category, setCategory] = useState<UnitCategory>(defaultCategory);

  // Effect to set initial units when the modal opens
  useEffect(() => {
    if (isVisible) {
      const initialUnitValue = units[category]?.[0]?.value || '';
      setFromUnit(initialUnitValue);
      setToUnit(initialUnitValue);
      setFromValue(''); // Reset the input field
      setToValue(0); // Reset the output field
    }
  }, [isVisible, category]);

  const handleConversion = () => {
    const parsedFromValue = parseFloat(fromValue);
    if (!isNaN(parsedFromValue)) {
      const convertedValue = convertUnits(parsedFromValue, fromUnit, toUnit);
      setToValue(convertedValue);
    }
  };

  const switchUnits = () => {
    const newFromValue = convertUnits(toValue, toUnit, fromUnit);
    setFromUnit(toUnit);
    setToUnit(fromUnit);
    setFromValue(newFromValue.toString());
  };

  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Conversion Tool</Text>

          {/* Category Selector */}
          <Picker
            selectedValue={category}
            style={styles.picker}
            onValueChange={(value) => {
              const newCategory = value as UnitCategory;
              setCategory(newCategory);
              const initialUnitValue = units[newCategory]?.[0]?.value || '';
              setFromUnit(initialUnitValue);
              setToUnit(initialUnitValue);
              setFromValue(''); // Reset the input field
              setToValue(0); // Reset the output field
            }}
          >
            {Object.keys(units).map((category) => (
              <Picker.Item key={category} label={category} value={category} />
            ))}
          </Picker>

          {/* From Unit Selector */}
          <Picker
            selectedValue={fromUnit}
            style={styles.picker}
            onValueChange={(itemValue) => setFromUnit(itemValue)}
          >
            {units[category]?.map((unit) => (
              <Picker.Item key={unit.value} label={unit.label} value={unit.value} />
            ))}
          </Picker>

          {/* From Value Input */}
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={fromValue}
            onChangeText={(value) => {
              if (value === "" || value === "." || /^\d*\.?\d*$/.test(value)) {
                setFromValue(value);
              }
            }}
          />

          {/* Switch Units Button */}
          <TouchableOpacity style={styles.switchButton} onPress={switchUnits}>
            <Text style={styles.switchButtonText}>⇆</Text>
          </TouchableOpacity>

          {/* To Unit Selector */}
          <Picker
            selectedValue={toUnit}
            style={styles.picker}
            onValueChange={(itemValue) => setToUnit(itemValue)}
          >
            {units[category]?.map((unit) => (
              <Picker.Item key={unit.value} label={unit.label} value={unit.value} />
            ))}
          </Picker>

          {/* To Value Display */}
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={toValue.toString()}
            editable={false}
          />

          {/* Convert Button */}
          <TouchableOpacity style={styles.convertButton} onPress={handleConversion}>
            <Text style={styles.convertButtonText}>Convert</Text>
          </TouchableOpacity>

          {/* Close Modal Button */}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
// Updated conversion logic
const convertUnits = (value: number, fromUnit: string, toUnit: string): number => {
  const conversionRates: { [key: string]: number } = {
    // Length conversions (base: meters)
    m: 1, km: 0.001, cm: 100, mm: 1000, mi: 0.0006213689, ft: 3.280839895, in: 39.37007874,
    // Area conversions (base: square meters)
    'm²': 1, 'cm²': 10000,'mm²':1000000, 'ft²': 10.7639104, 'in²': 1550.0031,
    // Volume conversions (base: cubic meters)
    'm³': 1,'cm³': 1000000,'mm³':1000000000 ,L: 1000, mL: 1000000, 'ft³': 35.3146667, 'in³': 61023.7441,
    // Weight conversions (base: kilograms)
    kg: 1, g: 1000, mg: 1000000, lb: 2.20462, slug: 0.0685218,'N':9.81,
    // Time conversions (base: seconds)
    s: 1, min: 1 / 60, hr: 1 / 3600,
    // Temperature conversions handled separately
  };

  if (fromUnit === 'C' && toUnit === 'F') return (value * 9) / 5 + 32;
  if (fromUnit === 'F' && toUnit === 'C') return ((value - 32) * 5) / 9;
  if (fromUnit === 'C' && toUnit === 'K') return value + 273.15;
  if (fromUnit === 'K' && toUnit === 'C') return value - 273.15;

  const baseValue = value / conversionRates[fromUnit];
  const result = baseValue * conversionRates[toUnit];
  return result;
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  picker: {
    height: 55,
    width: '100%',
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  switchButton: {
    alignSelf: 'center',
    marginVertical: 10,
  },
  switchButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  convertButton: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  convertButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: '#FF3B30',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ConversionTool;
