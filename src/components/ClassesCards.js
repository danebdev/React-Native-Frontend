import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Colors } from '../constants/assets/Colors';
import appStyle from '../styles/appStyle';
import { screenHeight, screenWidth } from '../styles/screenSize';

const ClassesCards = (props) => {
  const { course, days, timing } = props;
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.boxMain}>
      <Text numberOfLines={1} style={styles.subjectTitle}>
        {course}
      </Text>
      <View style={styles.dayTimeSection}>
        <Text style={styles.days}>{days}</Text>
        <View style={styles.centerLine} />
        <Text style={styles.days}>{timing}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ClassesCards;

const styles = StyleSheet.create({
  //box style
  boxMain: {
    width: screenWidth.width40 + 15,
    height: screenHeight.height10,
    backgroundColor: Colors.white,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  subjectTitle: {
    fontSize: 16,
    color: Colors.black,
  },
  days: {
    color: Colors.themeDull,
    fontWeight: '600',
  },
  centerLine: {
    borderLeftWidth: 1.5,
    borderColor: Colors.themeDull,
    height: 15,
    marginHorizontal: 5,
  },
  dayTimeSection: {
    ...appStyle.rowCenter,
    backgroundColor: Colors.softPink,
    width: screenWidth.width30,
    paddingVertical: 3,
    borderRadius: 50,
    marginTop: 5,
  },
});
