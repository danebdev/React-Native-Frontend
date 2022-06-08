import { OpenSans_300Light, useFonts } from '@expo-google-fonts/open-sans';
import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { ProgressBar } from 'react-native-paper';

import { Header, Button, ClassesCards, LinearGradientText } from '../components';
import { Colors } from '../constants/assets/Colors';
import { Icons } from '../constants/assets/Icons';
import { Images } from '../constants/assets/Images';
import appStyle from '../styles/appStyle';
import { getClout } from '../utils/Helper';
import { horizontalscale, moderateScale, verticalScale } from '../utils/ScaleUtils';
import { DummyClasses } from './DummyData';

const Home = ({ navigation }) => {
  const [clout, setClout] = useState(600);
  const [fontsLoaded, error] = useFonts({
    light: OpenSans_300Light,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const onPressSearch = () => {
    // if (clout < 1500) {
    //   setClout(clout + 200);
    // } else {
    //   setClout(0);
    // }
  };

  return (
    <SafeAreaView style={[appStyle.flex1, { backgroundColor: Colors.backgroundGray }]}>
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
        <TouchableOpacity style={styles.addAClassButton}>
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
    </SafeAreaView>
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
});
