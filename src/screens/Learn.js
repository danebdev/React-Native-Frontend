import * as React from 'react';
import { View, Text } from 'react-native';

const LearnScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0099ff',
      }}>
      <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Learn Screen</Text>
    </View>
  );
};

export default LearnScreen;
