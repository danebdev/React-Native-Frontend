import { OpenSans_300Light, useFonts } from '@expo-google-fonts/open-sans';
import AppLoading from 'expo-app-loading';
import React, { useState, createRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import ActionSheet, { SheetManager } from 'react-native-actions-sheet';
import { ProgressBar } from 'react-native-paper';

import { Header, Button, ClassesCards, LinearGradientText, Input, CheckBox } from '../components';
import MyStatusBar from '../components/MyStatusBar';
import { Colors } from '../constants/assets/Colors';
import { Icons } from '../constants/assets/Icons';
import { Images } from '../constants/assets/Images';
import appStyle from '../styles/appStyle';
import { getClout } from '../utils/Helper';
import { horizontalscale, moderateScale, verticalScale } from '../utils/ScaleUtils';
import { DummyClasses, DummyDays } from './DummyData';

const addClassSheetRef = createRef();

const Home = ({ navigation }) => {

  const [clout, setClout] = useState(600);
  const [isChecked, setIsChecked] = useState(false);

  const [fontsLoaded, error] = useFonts({
    light: OpenSans_300Light,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const onPressAddClass = () => {
    addClassSheetRef.current?.setModalVisible();
  };

  const onPressSearch = () => { };

  const onPressCheckBox = () => {
    setIsChecked(!isChecked);
  };

  const onPressClose = () => {
    addClassSheetRef.current?.setModalVisible(false);
  };

  return (
    <View style={[appStyle.flex1, { backgroundColor: Colors.backgroundGray }]}>
      <MyStatusBar backgroundColor={Colors.backgroundGray} barStyle="dark-content" />
      <Header />
      <View style={appStyle.flex1}>
        <View style={[appStyle.aiCenter, { paddingVertical: verticalScale(10) }]}>
          <View style={styles.profileMain}>
            <Image style={styles.profile} source={Images.dummyUser} />
          </View>
          <LinearGradientText name="robert fox" />
          <Text style={[styles.sigma, { fontFamily: 'light' }]}>{getClout(clout)}</Text>
          <View style={styles.progressMain}>
            <ProgressBar
              progress={clout / 1500}
              color={Colors.progress}
              style={styles.progressBar}
            />
          </View>
          <Text style={[styles.clout, { fontFamily: 'light' }]}>{clout + ' '}clout</Text>
        </View>
        <View style={[appStyle.aiCenter, { paddingVertical: verticalScale(10) }]}>
          <Text style={styles.yourClasses}>your classes</Text>
        </View>
        <View>
          <ScrollView contentContainerStyle={styles.classesMain}>
            {DummyClasses.map((item, index) => {
              return (
                <ClassesCards
                  key={index}
                  course={item.courseTitle}
                  days={item.days}
                  timing={item.timing}
                />
              );
            })}
          </ScrollView>
        </View>
        <TouchableOpacity onPress={onPressAddClass} style={styles.addAClassButton}>
          <Image style={styles.plusIcon} source={Icons.ic_plusCircle} />
          <Text style={styles.addAClass}>add a class</Text>
        </TouchableOpacity>
        <View style={[appStyle.aiCenter]}>
          <Button
            onPress={onPressSearch}
            label="search"
            labelStyle={styles.buttonLabelStyle}
            leftIcon={Icons.ic_search}
            buttonStyle={styles.buttonStyle}
          />
        </View>
      </View>
      <ActionSheet ref={addClassSheetRef} gestureEnabled>
        <View style={styles.addClassSheeMain}>
          <ScrollView>
            <View style={styles.addClassMain}>
              <Text style={styles.addClassSheetText}>Add Class</Text>
              <TouchableOpacity onPress={onPressClose} style={styles.crossButton}>
                <Image style={styles.crossIcon} source={Icons.ic_cross} />
              </TouchableOpacity>
            </View>
            <Input
              //onChangeText
              //value
              label="Class Name"
              placeholder="enter class name"

            />
            <View>
              <Text style={styles.label}>Select Days</Text>
              {DummyDays.map((item, index) => {
                return (
                  <View key={index} style={[appStyle.row, appStyle.aiCenter]}>
                    <CheckBox onPress={onPressCheckBox} isChecked={isChecked} />
                    <Text style={styles.days}>{item.label}</Text>
                  </View>
                );
              })}
            </View>
            <View style={{ marginTop: verticalScale(5) }}>
              <Text style={styles.label}>Select Time</Text>
              <TouchableOpacity style={styles.timeInput}>
                <Text style={styles.timeText}>1:00 PM</Text>
              </TouchableOpacity>
            </View>

            <Input
              //onChangeText
              //value
              label="University"
              placeholder="enter university"
            />
            <Input
              //onChangeText
              //value
              label="Teacher"
              placeholder="enter teacher name"
            />
            <View style={[appStyle.aiCenter]}>
              <Button
                // onPress={onPressSearch}
                label="submit"
                buttonStyle={styles.buttonStyle}
              />
            </View>
          </ScrollView>
        </View>
      </ActionSheet>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  headerSection: {},
  profileMain: {
    width: verticalScale(150),
    height: verticalScale(150),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.24,
    shadowRadius: 16.41,
    elevation: verticalScale(60),
  },
  profile: {
    width: verticalScale(150),
    height: verticalScale(150),
    resizeMode: 'contain',
    borderRadius: 100,
  },
  sigma: {
    fontSize: moderateScale(16),
    color: Colors.lightPurple,
  },
  progressMain: {
    width: horizontalscale(329),
    paddingVertical: verticalScale(15),
  },
  progressBar: {
    height: verticalScale(22),
    backgroundColor: Colors.white,
    borderRadius: 50,
  },
  clout: {
    fontSize: moderateScale(16),
    color: Colors.lightPurple,
  },
  yourClasses: {
    fontSize: moderateScale(16),
    fontWeight: '600',
  },
  classesMain: {
    paddingHorizontal: horizontalscale(20),
    ...appStyle.rowWrap,
    justifyContent: 'space-between',
    marginTop: verticalScale(10),
  },
  addAClassButton: {
    paddingHorizontal: horizontalscale(20),
    ...appStyle.row,
    ...appStyle.aiCenter,
  },
  plusIcon: {
    width: verticalScale(16),
    height: verticalScale(16),
    resizeMode: 'contain',
    marginRight: horizontalscale(5),
  },
  addAClass: {
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: Colors.black,
  },
  buttonStyle: {
    height: verticalScale(36),
    width: verticalScale(155),
    marginTop: verticalScale(15),
  },
  buttonLabelStyle: {
    paddingLeft: horizontalscale(20),
  },

  // action sheet styles here
  addClassSheeMain: {
    backgroundColor: Colors.white,
    paddingTop: verticalScale(10),
    paddingBottom: verticalScale(30),
    paddingHorizontal: horizontalscale(20)
  },
  addClassMain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  addClassSheetText: {
    fontSize: verticalScale(20),
    lineHeight: verticalScale(20),
    fontWeight: '800'
  },
  crossButton: {
    position: 'absolute',
    right: horizontalscale(10),
  },
  crossIcon: {
    width: verticalScale(24),
    height: verticalScale(24),
    resizeMode: 'contain'
  },
  label: {
    fontSize: verticalScale(12),
    lineHeight: verticalScale(20),
    fontWeight: '700',
    marginBottom: verticalScale(5)
  },
  days: {
    marginLeft: horizontalscale(10),
    fontSize: verticalScale(16),
    lineHeight: verticalScale(22),
    fontWeight: '400',
    marginBottom: verticalScale(5)
  },
  timeInput: {
    borderWidth: 1,
    borderColor: Colors.backgroundGray,
    height: verticalScale(40),
    justifyContent: 'center',
    paddingHorizontal: horizontalscale(15),
  },
  timeText: {
    fontSize: verticalScale(16),
    lineHeight: verticalScale(21),
    fontWeight: '400'
  },
});
