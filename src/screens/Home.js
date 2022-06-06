import { OpenSans_300Light, useFonts } from '@expo-google-fonts/open-sans';
import AppLoading from 'expo-app-loading';
import * as React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ProgressBar } from 'react-native-paper';

import { Header, Button, ClassesCards, LinearGradientText } from '../components';
import { Colors } from '../constants/assets/Colors';
import { Icons } from '../constants/assets/Icons';
import { Images } from '../constants/assets/Images';
import appStyle from '../styles/appStyle';
import { screenHeight, screenWidth } from '../styles/screenSize';
import { DummyClasses } from './DummyData';

const Home = ({ navigation }) => {
  const [fontsLoaded, error] = useFonts({
    light: OpenSans_300Light,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={[appStyle.flex1, { backgroundColor: Colors.backgroundGray }]}>
      <View style={[appStyle.pt30, appStyle.pb15]}>
        <Header />
      </View>
      <View style={appStyle.flex1}>
        <View style={[appStyle.aiCenter, appStyle.pv10]}>
          <View style={styles.profileMain}>
            <Image style={styles.profile} source={Images.dummyUser} />
          </View>
          <LinearGradientText name="robert fox" />
          <Text style={[styles.sigma, { fontFamily: 'light' }]}>sigma</Text>
          <View style={styles.progressMain}>
            <ProgressBar progress={0.6} color={Colors.progress} style={styles.progressBar} />
          </View>
          <Text style={[styles.clout, { fontFamily: 'light' }]}>3323 clout</Text>
        </View>
        <View style={[appStyle.aiCenter, appStyle.pv10]}>
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
      </View>
      <View>
        <TouchableOpacity style={styles.addAClassButton}>
          <Image style={styles.plusIcon} source={Icons.ic_plusCircle} />
          <Text style={styles.addAClass}>add a class</Text>
        </TouchableOpacity>
        <View style={[appStyle.aiCenter, appStyle.jcFlexEnd]}>
          <Button
            label="search"
            labelStyle={styles.buttonLabelStyle}
            leftIcon={Icons.ic_search}
            buttonStyle={styles.buttonStyle}
          />
        </View>
      </View>
      <View style={{ height: screenHeight.height14 }} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  profileMain: {
    width: screenWidth.width35,
    height: screenWidth.width35,
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
    elevation: 20,
  },
  profile: {
    width: screenWidth.width35,
    height: screenWidth.width35,
    resizeMode: 'contain',
    borderRadius: 100,
  },
  sigma: {
    fontSize: 16,
    color: Colors.lightPurple,
  },
  progressMain: {
    width: screenWidth.width80,
    paddingVertical: 5,
  },
  progressBar: {
    height: 22,
    backgroundColor: Colors.white,
    borderRadius: 50,
  },
  clout: {
    fontSize: 16,
    color: Colors.lightPurple,
  },
  yourClasses: {
    fontSize: 16,
    fontWeight: '600',
  },
  classesMain: {
    paddingHorizontal: 20,
    ...appStyle.rowWrap,
    justifyContent: 'space-between',
    marginTop: 10,
  },
  addAClassButton: {
    ...appStyle.ph20,
    ...appStyle.row,
    ...appStyle.aiCenter,
  },
  plusIcon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    marginRight: 5,
  },
  addAClass: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.black,
  },
  buttonStyle: {
    width: screenWidth.width35,
  },
  buttonLabelStyle: {
    paddingLeft: 20,
  },
});
