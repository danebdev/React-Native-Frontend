import { OpenSans_300Light, useFonts } from '@expo-google-fonts/open-sans';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { createFilter } from 'react-native-search-filter';
import MyStatusBar from '../../components/MyStatusBar';
import { Colors } from '../../constants/assets/Colors';
import { Icons } from '../../constants/assets/Icons';
import appStyle from '../../styles/appStyle';
import { horizontalscale, moderateScale, verticalScale } from '../../utils/ScaleUtils';
import { DummyClasses } from '../DummyData';

const KEYS_TO_FILTERS = ['courseTitle'];

const Search = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const [fontsLoaded, error] = useFonts({
    light: OpenSans_300Light,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const onPressClose = () => {
    navigation.goBack();
  };

  const onPresssubject = () => {
    navigation.navigate('Classes');
  };

  const filteredSubjects = DummyClasses.filter(createFilter(searchQuery, KEYS_TO_FILTERS))
  return (
    <View style={[appStyle.flex1, { backgroundColor: Colors.backgroundGray }]}>
      <MyStatusBar backgroundColor={Colors.backgroundGray} barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.searchMain}>
          <Text style={styles.searchText}>Search Class</Text>
          <TouchableOpacity onPress={onPressClose} style={styles.crossButton}>
            <Image style={styles.crossIcon} source={Icons.ic_cross} />
          </TouchableOpacity>
        </View>
        <View style={styles.searcBarMain}>
          <Searchbar
            onChangeText={(term) => setSearchQuery(term)}
            placeholder="search class by name"
            placeholderTextColor={Colors.lightMidGrayNew}
            value={searchQuery}
            clearIcon={Icons.ic_cross}
            icon={Icons.ic_search}
            style={styles.searcBar}
            iconColor={Colors.lightMidGrayNew}
          />
        </View>
        <View>
          {filteredSubjects.length > 0 ?
            filteredSubjects.map((item, index) => {
              return (
                <TouchableOpacity onPress={onPresssubject} style={styles.subjectMain}>
                  <Text style={styles.subjectTitle}>
                    {item.courseTitle}
                  </Text>
                  <View style={styles.dayTimeSection}>
                    <Text style={styles.days}>{item.days}</Text>
                    <View style={styles.centerLine} />
                    <Text style={styles.days}>{item.timing}</Text>
                  </View>
                </TouchableOpacity>
              )
            })
            :
            <View style={[appStyle.aiCenter, appStyle.mt50]}>
              <Text style={styles.noSearchFound}>no search found</Text>
            </View>
          }
        </View>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    paddingTop: verticalScale(10),
    paddingHorizontal: horizontalscale(15)
  },
  searchMain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: verticalScale(10)

  },
  searchText: {
    fontSize: verticalScale(20),
    lineHeight: verticalScale(20),
    fontWeight: '800',
  },
  crossButton: {
    position: 'absolute',
    right: horizontalscale(10),
  },
  crossIcon: {
    width: verticalScale(24),
    height: verticalScale(24),
    resizeMode: 'contain',
  },
  searcBarMain: {
    paddingVertical: verticalScale(20)
  },
  searcBar: {
    borderColor: Colors.backgroundGray,
  },
  subjectMain: {
    width: horizontalscale(336),
    height: verticalScale(42),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    paddingHorizontal: horizontalscale(10),
    borderRadius: 18,
    marginBottom: verticalScale(10)
  },
  subjectTitle: {
    fontSize: moderateScale(16),
    color: Colors.black,
  },
  days: {
    fontSize: verticalScale(10),
    color: Colors.themeDull,
    fontWeight: '600',
  },
  centerLine: {
    borderLeftWidth: 1.5,
    borderColor: Colors.themeDull,
    height: verticalScale(15),
    marginHorizontal: horizontalscale(5),
  },
  dayTimeSection: {
    ...appStyle.rowCenter,
    backgroundColor: Colors.softPink,
    width: verticalScale(127),
    paddingVertical: verticalScale(3),
    borderRadius: 50,
  },
  noSearchFound: {
    fontSize: verticalScale(16),
    color: Colors.midGray,
    fontWeight: '600',
  }
});
