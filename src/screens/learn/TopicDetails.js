import { OpenSans_300Light, useFonts } from '@expo-google-fonts/open-sans';
import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { Header } from '../../components';
import MyStatusBar from '../../components/MyStatusBar';
import { Colors } from '../../constants/assets/Colors';
import { Icons } from '../../constants/assets/Icons';
import appStyle from '../../styles/appStyle';
import { screenHeight } from '../../styles/screenSize';
import { horizontalscale, verticalScale } from '../../utils/ScaleUtils';
import { DummyOptions } from '../DummyData';

const TopicDetails = ({ route, navigation }) => {
  const { subject } = route.params;

  const [optionSection, setOptionSection] = useState(false);
  const [animationType, setAnimationType] = useState('slideInRight');

  const [fontsLoaded] = useFonts({
    light: OpenSans_300Light,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const onPressSliderButton = (type) => {
    if (type === 'right') {
      setAnimationType('slideInRight')
      setTimeout(() => {
        setOptionSection(!optionSection)
      }, 500);
    } else {
      setAnimationType('slideOutRight')
      setTimeout(() => {
        setOptionSection(!optionSection)
      }, 500);
    }
  }

  return (
    <View style={[appStyle.flex1, { backgroundColor: Colors.backgroundGray }]}>
      <MyStatusBar backgroundColor={Colors.theme} barStyle="light-content" />
      <View style={styles.headerSection}>
        <Header isChange />
        <View style={styles.headerBottomSection}>
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
      {!optionSection ?
        <View style={styles.boxMain}>
          <View>
            <Text style={styles.title}>Introduction</Text>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at interdum nibh.
              Integer magna magna, ornare at tincidunt pretium, ultricies quis sem. Vivamus eget
              lectus ac eros facilisis feugiat. Praesent ultricies nisl at dui feugiat facilisis. Nunc
              vitae maximus metus. Quisque faucibus ante ut metus semper, eu dignissim orci fringilla.
              Aliquam varius suscipit turpis tempus maximus. Mauris vel est nisi. Vestibulum convallis
              lacus risus, sit amet luctus eros semper quis. Fusce nulla magna, consectetur in libero
              sed, fermentum mattis arcu. Maecenas volutpat vitae velit rhoncus ultricies. Fusce elit
              nibh, eleifend non lacus vel, mattis placerat justo
            </Text>
          </View>
          <View style={[appStyle.row, appStyle.aiCenter, appStyle.ph15]}>
            <View style={styles.thumbAndChat}>
              <TouchableOpacity>
                <Image style={styles.thumbAndChatIcon} source={Icons.ic_like} />
              </TouchableOpacity>
              <Text style={styles.thumbAndChatCount}>12</Text>
            </View>
            <View style={styles.thumbAndChat}>
              <TouchableOpacity>
                <Image style={styles.thumbAndChatIcon} source={Icons.ic_comment} />
              </TouchableOpacity>
              <Text style={styles.thumbAndChatCount}>4</Text>
            </View>
          </View>
        </View>
        :
        <Animatable.View animation={animationType} style={styles.boxMainOptions}>
          <View style={styles.questionMian}>
            <Text style={styles.question}>What is the answer?</Text>
          </View>

          {DummyOptions.map((item, index) => {
            return (
              <View key={index} style={styles.optionsMain}>
                <View style={styles.optionsTag}>
                  <Text style={styles.optionSerials}>{item.id}</Text>
                </View>
                <Text style={styles.options}>{item.option}</Text>
              </View>
            );
          })}
        </Animatable.View>
      }
      {!optionSection ?
        <TouchableOpacity onPress={() => onPressSliderButton('right')} style={styles.rightSheetButton}>
          <Image style={styles.leftArrowIcon} source={Icons.ic_left_arrow} />
        </TouchableOpacity>
        :
        <TouchableOpacity onPress={() => onPressSliderButton('left')} style={styles.leftSheetButton}>
          <Image style={styles.leftArrowIcon} source={Icons.ic_right_arrow} />
        </TouchableOpacity>
      }
    </View>
  );
};

export default TopicDetails;

const styles = StyleSheet.create({
  headerSection: {
    paddingBottom: verticalScale(20),
    backgroundColor: Colors.theme,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    height: verticalScale(155),
    justifyContent: 'space-between',
  },
  headerBottomSection: {
    ...appStyle.row,
    ...appStyle.jcSpaceBetween,
    ...appStyle.aiFlexEnd,
    paddingHorizontal: horizontalscale(20),
  },
  subjectTitle: {
    fontSize: verticalScale(20),
    fontWeight: '800',
    color: Colors.white,
  },
  headerRightText: {
    fontSize: verticalScale(14),
    fontWeight: '800',
    color: Colors.white,
  },
  values: {
    color: Colors.yellow,
    fontSize: verticalScale(14),
  },
  boxMain: {
    height: verticalScale(538),
    width: horizontalscale(352),
    backgroundColor: Colors.white,
    alignSelf: 'center',
    marginVertical: verticalScale(15),
    borderRadius: 11,
    justifyContent: 'space-between',
    paddingBottom: verticalScale(15),
    paddingTop: verticalScale(40),
  },
  title: {
    fontSize: verticalScale(20),
    lineHeight: verticalScale(20),
    fontWeight: '800',
    color: Colors.black,
    paddingHorizontal: horizontalscale(10),
  },
  description: {
    fontSize: verticalScale(14),
    lineHeight: verticalScale(20),
    color: Colors.black,
    paddingHorizontal: horizontalscale(10),
    paddingTop: verticalScale(10),
  },
  thumbAndChat: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: horizontalscale(20),
  },
  thumbAndChatIcon: {
    width: verticalScale(18),
    height: verticalScale(18),
    resizeMode: 'contain',
    tintColor: Colors.midGray,
    marginRight: horizontalscale(5),
  },
  thumbAndChatCount: {
    fontSize: verticalScale(14),
    color: Colors.midGray,
  },
  rightSheetButton: {
    backgroundColor: Colors.theme,
    width: verticalScale(20),
    height: verticalScale(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    position: 'absolute',
    top: screenHeight.height50,
    right: 0,
  },
  leftSheetButton: {
    backgroundColor: Colors.theme,
    width: verticalScale(20),
    height: verticalScale(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    position: 'absolute',
    top: screenHeight.height50,
    left: 0,
  },
  leftArrowIcon: {
    width: verticalScale(20),
    height: verticalScale(20),
    resizeMode: 'contain',
  },

  // optins section styling....
  boxMainOptions: {
    height: verticalScale(538),
    width: horizontalscale(352),
    backgroundColor: Colors.white,
    alignSelf: 'center',
    marginVertical: verticalScale(15),
    borderRadius: 11,
  },
  questionMian: {
    height: verticalScale(83),
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
    height: verticalScale(65),
    width: horizontalscale(329),
    backgroundColor: Colors.softWhite,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 20,
    marginTop: verticalScale(22),

  },
  optionsTag: {
    backgroundColor: Colors.offWhite,
    width: verticalScale(36),
    height: verticalScale(30),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginRight: horizontalscale(12)
  },
  optionSerials: {
    fontSize: verticalScale(10),
    fontWeight: '700',
  },
  options: {
    fontSize: verticalScale(12),
    fontWeight: '700',
  }
});
