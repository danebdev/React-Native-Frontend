import { OpenSans_300Light, useFonts } from '@expo-google-fonts/open-sans';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { Header } from '../../components';
import MyStatusBar from '../../components/MyStatusBar';
import { Colors } from '../../constants/assets/Colors';
import { Icons } from '../../constants/assets/Icons';
import appStyle from '../../styles/appStyle';
import { screenHeight, screenWidth } from '../../styles/screenSize';

const OptionsSelection = ({ route, navigation }) => {
  const { subject } = route.params;

  const [fontsLoaded, error] = useFonts({
    light: OpenSans_300Light,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={[appStyle.flex1, { backgroundColor: Colors.backgroundGray }]}>
      <MyStatusBar backgroundColor={Colors.theme} barStyle="light-content" />
      <View style={styles.headerSection}>
        <Header isChange />
        <View style={[appStyle.row, appStyle.jcSpaceBetween, appStyle.ph20, appStyle.aiFlexEnd]}>
          <Text style={styles.subjectTitle}>{subject && subject.subjectTitle}</Text>
          <View>
            <Text style={styles.headerRightText}>
              Difficulty:{' '}
              <Text style={styles.values}>
                {subject && subject.subjectCompleteness + ' ' + 'Were Correct'}
              </Text>
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.boxMain}>
        <View style={styles.questionMian}>
          <Text style={styles.question}>What is the answer?</Text>
        </View>

        <View style={styles.optionsMain}>
          <View style={styles.optionsTag}>
            <Text>A</Text>
          </View>
          <Text style={styles.options}>Option 1</Text>
        </View>
      </View>
    </View>
  );
};

export default OptionsSelection;

const styles = StyleSheet.create({
  headerSection: {
    ...appStyle.pb20,
    backgroundColor: Colors.theme,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    height: screenHeight.height20,
    justifyContent: 'space-between',
  },
  subjectTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: Colors.white,
  },
  headerRightText: {
    fontSize: 12,
    fontWeight: '800',
    color: Colors.white,
  },
  values: {
    color: Colors.yellow,
  },
  boxMain: {
    height: screenHeight.height62,
    width: screenWidth.width95,
    backgroundColor: Colors.white,
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 11,
    paddingBottom: 15,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  questionMian: {
    height: screenHeight.height10,
    backgroundColor: Colors.theme,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  question: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '700',
    color: Colors.white,
  },
  optionsMain: {
    height: screenHeight.height6,
    backgroundColor: Colors.softWhite,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,

  },
  optionsTag: {
    backgroundColor: Colors.offWhite,
    width: 36,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginRight: 10
  },
  options: {

  }
});
