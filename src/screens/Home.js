import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { ProgressBar } from 'react-native-paper';

import Header from '../components/Header';
import { Colors } from '../constants/assets/Colors';
import { Images } from '../constants/assets/Images';
import appStyle from '../styles/appStyle';
import { screenWidth } from '../styles/screenSize';

const Home = ({ navigation }) => {
  return (
    <View style={[appStyle.flex1, { backgroundColor: Colors.backgroundGray }]}>
      <View style={[appStyle.pt30, appStyle.pb15]}>
        <Header />
      </View>
      <View style={appStyle.flex1}>
        <ScrollView>
          <View style={[appStyle.aiCenter, appStyle.pv20]}>
            <View style={styles.profileMain}>
              <Image style={styles.profile} source={Images.dummyUser} />
            </View>
            <MaskedView maskElement={<Text style={{ fontSize: 40 }}>robert fox</Text>}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={['#00ADF6', '#8155D7', '#FF00B8']}>
                <View style={{ opacity: 0, height: 50, width: screenWidth.width50 }} />
              </LinearGradient>
            </MaskedView>
            <Text style={{ fontSize: 20, color: '#98B2E9', paddingTop: 10 }}>sigma</Text>
            <View style={{ width: screenWidth.width85, paddingVertical: 10 }}>
              <ProgressBar
                progress={0.6}
                color={Colors.progress}
                style={{ height: 22, backgroundColor: '#fff', borderRadius: 50 }}
              />
            </View>
            <Text style={{ fontSize: 20, color: '#98B2E9' }}>3323 clout</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  profileMain: {
    width: screenWidth.width40,
    height: screenWidth.width40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.24,
    shadowRadius: 16.41,
    elevation: 20,
  },
  profile: {
    width: screenWidth.width40,
    height: screenWidth.width40,
    resizeMode: 'contain',
    borderRadius: 100,
  },
});
