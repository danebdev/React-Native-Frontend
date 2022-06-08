import { OpenSans_300Light, useFonts } from '@expo-google-fonts/open-sans';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { Header } from '../../components';
import { Colors } from '../../constants/assets/Colors';
import { Icons } from '../../constants/assets/Icons';
import appStyle from '../../styles/appStyle';
import { screenHeight, screenWidth } from '../../styles/screenSize';

const TopicDetails = ({ route, navigation }) => {
  const { subject } = route.params;

  const [fontsLoaded, error] = useFonts({
    light: OpenSans_300Light,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={[appStyle.flex1, { backgroundColor: Colors.backgroundGray }]}>
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
      <TouchableOpacity style={styles.rightSheetButton}>
        <Image style={styles.leftArrowIcon} source={Icons.ic_left_arrow} />
      </TouchableOpacity>
    </View>
  );
};

export default TopicDetails;

const styles = StyleSheet.create({
  headerSection: {
    ...appStyle.pt30,
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
    justifyContent: 'space-between',
    paddingBottom: 15,
    paddingTop: 40,
  },
  title: {
    fontSize: 20,
    lineHeight: 20,
    fontWeight: '800',
    color: Colors.black,
    paddingHorizontal: 10,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: Colors.black,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  thumbAndChat: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  thumbAndChatIcon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    tintColor: Colors.midGray,
    marginRight: 5,
  },
  thumbAndChatCount: {
    fontSize: 14,
    color: Colors.midGray,
  },
  rightSheetButton: {
    backgroundColor: Colors.theme,
    width: 20,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    position: 'absolute',
    top: screenHeight.height50,
    right: 0,
  },
  leftArrowIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});
