import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

import { Colors } from '../../constants/assets/Colors';
import { Icons } from '../../constants/assets/Icons';
import appStyle from '../../styles/appStyle';
import { screenHeight, screenWidth } from '../../styles/screenSize';

const SubjectTopicsCard = (props) => {
  const { topicTitle, topicDescription, likes, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.6} style={styles.cardMian}>
      <Text style={styles.cardTitle}>{topicTitle}</Text>
      <Text numberOfLines={4} style={styles.cardDescription}>
        {topicDescription}
      </Text>
      <View style={[appStyle.rowBtw]}>
        <View style={styles.thumb}>
          <TouchableOpacity>
            <Image style={styles.thumbIcon} source={Icons.ic_like} />
          </TouchableOpacity>
          <Text style={styles.likes}>{likes}</Text>
        </View>
        <Image style={styles.rightArrow} source={Icons.ic_arrow_right} />
      </View>
    </TouchableOpacity>
  );
};

export default SubjectTopicsCard;

const styles = StyleSheet.create({
  // cards style here ====
  cardMian: {
    width: screenWidth.width95,
    height: screenHeight.height18,
    backgroundColor: Colors.white,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginVertical: 10,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: Colors.black,
  },
  cardDescription: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.black,
    paddingVertical: 5,
    width: screenWidth.width65,
    height: screenHeight.height9_5,
  },
  thumb: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  thumbIcon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    tintColor: Colors.midGray,
    marginRight: 2,
  },
  likes: {
    fontSize: 14,
    color: Colors.midGray,
  },
  rightArrow: {
    width: 26,
    height: 26,
    resizeMode: 'contain',
    tintColor: Colors.theme,
  },
});
