import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, View } from 'react-native';

import { Colors } from '../../constants/assets/Colors';
import { Icons } from '../../constants/assets/Icons';
import appStyle from '../../styles/appStyle';
import { screenWidth } from '../../styles/screenSize';

const Post = (props) => {
  const {
    userImage,
    userName,
    time,
    postTitle,
    postDescription,
    likes,
    comments,
    projectNumber,
    showMore,
    onPressShowMore,
    onPressShowLess,
  } = props;
  return (
    <View style={styles.postMain}>
      <TouchableOpacity style={styles.heart}>
        <Image style={styles.heartIcon} source={Icons.ic_heart} />
      </TouchableOpacity>
      <View style={[appStyle.rowBtw]}>
        <View style={[appStyle.row]}>
          <Image style={styles.userImage} source={userImage} />
          <View style={appStyle.ml10}>
            <Text style={styles.userName}>{userName}</Text>
            <Text style={styles.postTime}>{time}</Text>
          </View>
        </View>
      </View>

      <View style={styles.lowerSection}>
        <View style={[appStyle.rowBtw, appStyle.pr5, appStyle.mt10]}>
          <Text style={styles.postQuestion}>{postTitle}</Text>
          {showMore && (
            <TouchableOpacity onPress={onPressShowMore}>
              <Image style={styles.arrowIcon} source={Icons.ic_arrow_up} />
            </TouchableOpacity>
          )}
        </View>
        {showMore && (
          <>
            <View style={styles.postDescriptionMain}>
              <Text style={styles.postDescription}>{postDescription}</Text>
            </View>
            <View style={[appStyle.rowBtw]}>
              <View style={[appStyle.row, appStyle.aiCenter, appStyle.mt10]}>
                <View style={styles.thumbAndChat}>
                  <TouchableOpacity>
                    <Image style={styles.thumbAndChatIcon} source={Icons.ic_like} />
                  </TouchableOpacity>
                  <Text style={styles.thumbAndChatCount}>{likes}</Text>
                </View>
                <View style={styles.thumbAndChat}>
                  <TouchableOpacity>
                    <Image style={styles.thumbAndChatIcon} source={Icons.ic_comment} />
                  </TouchableOpacity>
                  <Text style={styles.thumbAndChatCount}>{comments}</Text>
                </View>
              </View>
              <View style={styles.projectNumber}>
                <Text style={styles.projectNumberText}>#project-{projectNumber}</Text>
              </View>
            </View>
          </>
        )}
      </View>

      {!showMore && (
        <TouchableOpacity onPress={onPressShowLess} style={styles.downArrow}>
          <Image style={styles.arrowIcon} source={Icons.ic_arrow_down} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  postMain: {
    marginHorizontal: 10,
    backgroundColor: Colors.white,
    borderRadius: 8,
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  userImage: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
    borderRadius: 100,
  },
  userName: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.black,
  },
  postTime: {
    fontSize: 12,
    fontWeight: '400',
    color: Colors.midGray,
  },
  heart: {
    position: 'absolute',
    right: 20,
    top: 15,
    zIndex: 5,
  },
  heartIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: Colors.black,
  },
  postQuestion: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.black,
    width: screenWidth.width65,
  },
  arrowIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  postDescriptionMain: {
    width: screenWidth.width65,
    marginVertical: 5,
  },
  postDescription: {
    fontSize: 12,
    color: Colors.black,
  },
  thumbAndChat: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  thumbAndChatIcon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    tintColor: Colors.midGray,
    marginRight: 2,
  },
  thumbAndChatCount: {
    fontSize: 14,
    color: Colors.midGray,
  },
  projectNumber: {
    backgroundColor: Colors.softGreen,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  projectNumberText: {
    fontSize: 12,
    color: Colors.black,
  },
  lowerSection: {
    marginLeft: screenWidth.width10,
  },
  downArrow: {
    position: 'absolute',
    bottom: 25,
    right: 25,
    zIndex: 5,
  },
});
