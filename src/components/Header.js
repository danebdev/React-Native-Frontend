import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { Colors } from '../constants/assets/Colors';
import { Icons } from '../constants/assets/Icons';
import { Images } from '../constants/assets/Images';
import appStyle from '../styles/appStyle';
import { screenWidth } from '../styles/screenSize';

const Header = (props) => {
  const { profile, isChange } = props;
  return (
    <View style={styles.container}>
      <View style={[appStyle.row, appStyle.aiCenter]}>
        <TouchableOpacity>
          <Image
            style={[styles.menu, { tintColor: isChange && Colors.white }]}
            source={Icons.menu}
          />
        </TouchableOpacity>
        <Image
          style={[styles.logo, { tintColor: isChange && Colors.white }]}
          source={Images.headerLogo}
        />
      </View>
      <View style={[appStyle.row, appStyle.aiCenter]}>
        <TouchableOpacity>
          <Image
            style={[styles.bell, { tintColor: isChange && Colors.white }]}
            source={Icons.bell}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileButton}>
          <Image style={styles.profile} source={Images.dummyUser} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    ...appStyle.rowBtw,
    ...appStyle.ph15,
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  menu: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  logo: {
    width: screenWidth.width35,
    height: 26,
    resizeMode: 'contain',
    marginLeft: 15,
    top: -2,
  },
  bell: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  profileButton: {
    marginLeft: 15,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
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
    width: 30,
    height: 30,
    resizeMode: 'contain',
    borderRadius: 100,
  },
});
