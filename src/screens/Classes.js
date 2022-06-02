import * as React from 'react';
import { View, Text } from 'react-native';

const ClassesScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#dde123',
      }}>
      <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Classes Screen</Text>
    </View>
  );
};

export default ClassesScreen;
