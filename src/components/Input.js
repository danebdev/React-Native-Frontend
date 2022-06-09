import React from 'react';
import { View, Image, Text, StyleSheet, TextInput } from 'react-native';

import { Colors } from '../constants/assets/Colors';
import { screenHeight, screenWidth } from '../styles/screenSize';
import { horizontalscale, moderateScale, verticalScale } from '../utils/ScaleUtils';

const Input = (props) => {
  const { focused, icon, label, inputStyle, keyboardType, onChangeText, value, placeholder } = props;
  return (
    <View style={{ marginVertical: verticalScale(5) }}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputMian}>
        <TextInput
          style={[styles.input, inputStyle]}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          keyboardType={keyboardType}
        />
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputMian: {
    borderWidth: 1,
    borderColor: Colors.backgroundGray,
    height: verticalScale(40),
    justifyContent: 'center',
    paddingHorizontal: horizontalscale(15),
  },
  label: {
    fontSize: verticalScale(12),
    lineHeight: verticalScale(20),
    fontWeight: '700',
    marginBottom: verticalScale(5)
  }

});
