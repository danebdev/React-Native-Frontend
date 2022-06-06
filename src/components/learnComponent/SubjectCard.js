import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

import { Colors } from '../../constants/assets/Colors';
import { Icons } from '../../constants/assets/Icons';
import appStyle from '../../styles/appStyle';
import { screenHeight, screenWidth } from '../../styles/screenSize';
import Button from '../Button';

const SubjectCard = (props) => {
  const { time, subjectTitle, onPressStart, subjectCompleteness, questions } = props;

  return (
    <View style={styles.cardMain}>
      <View style={appStyle.rowBtw}>
        <Text style={styles.time}>{time}</Text>
        <TouchableOpacity>
          <Image style={styles.dotsMenu} source={Icons.ic_dots_menu} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.subjectTitle}>{subjectTitle}</Text>
        <View style={[appStyle.rowBtw, appStyle.aiFlexEnd]}>
          <Button
            onPress={onPressStart}
            label="start"
            buttonStyle={styles.buttonStyle}
            labelStyle={styles.buttonLabelStyle}
          />
          <View style={appStyle.aiFlexEnd}>
            <Text style={styles.completedPercentage}>{subjectCompleteness}</Text>
            <Text style={styles.questions}>{questions + ' ' + 'questions'}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SubjectCard;

const styles = StyleSheet.create({
  cardMain: {
    width: screenWidth.width95,
    height: screenHeight.height18,
    backgroundColor: Colors.white,
    borderRadius: 10,
    paddingLeft: 30,
    paddingRight: 10,
    paddingVertical: 15,
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  time: {
    fontSize: 12,
    color: Colors.midGray,
    top: -10,
  },
  dotsMenu: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  subjectTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.black,
    marginBottom: 15,
  },
  buttonStyle: {
    width: screenWidth.width25,
    height: 30,
    borderRadius: 10,
  },
  buttonLabelStyle: {
    fontSize: 12,
    fontWeight: '600',
  },
  completedPercentage: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.lightGreen,
  },
  questions: {
    fontSize: 10,
    fontWeight: '700',
    color: Colors.black,
  },
});
