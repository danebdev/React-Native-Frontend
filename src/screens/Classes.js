import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';

import { Button, Header, ListTabs, Post } from '../components';
import { Colors } from '../constants/assets/Colors';
import { Icons } from '../constants/assets/Icons';
import { Keys } from '../constants/keys/Keys';
import appStyle from '../styles/appStyle';
import { screenHeight, screenWidth } from '../styles/screenSize';
import { DummyPosts, DummyLikedPosts } from './DummyData';

const ClassesScreen = ({ navigation }) => {
  const [tab1, setTab1] = useState(true);
  const [tab2, setTab2] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState([]);

  const onPressTabs = (type) => {
    if (Keys.listTab === type) {
      setTab1(true);
      setTab2(false);
    } else {
      setTab2(true);
      setTab1(false);
    }
  };

  const onPressShowMore = (index) => {
    const IndexFound = selectedIndex.includes(index);
    if (IndexFound) {
      const newArray = selectedIndex.filter((i) => i !== index);
      setSelectedIndex(newArray);
    } else {
      setSelectedIndex([...selectedIndex, index]);
    }
  };

  const onPressShowLess = (index) => {
    setSelectedIndex(index);
  };

  return (
    <View style={[appStyle.flex1, { backgroundColor: Colors.backgroundGray }]}>
      <View style={[appStyle.pt30, appStyle.pb15]}>
        <Header />
        <View style={[appStyle.aiCenter, appStyle.pt30]}>
          <Text style={styles.t12}>select your class</Text>
          <TouchableOpacity activeOpacity={0.8} style={styles.dropdown}>
            <Text style={styles.dropdownText}>data structures</Text>
            <Image style={styles.downArrow} source={Icons.ic_down_arrow} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={[appStyle.row]}>
        <ListTabs isActive={tab1} onPress={() => onPressTabs(Keys.listTab)} icon={Icons.ic_list} />
        <ListTabs
          isActive={tab2}
          onPress={() => onPressTabs(Keys.favoriteTab)}
          icon={Icons.ic_heart}
        />
      </View>
      {tab1 && (
        <View style={{ height: screenHeight.height52 }}>
          <ScrollView>
            {DummyPosts.map((item, index) => {
              const IndexFound = selectedIndex.find((i) => i === index);
              return (
                <Post
                  Key={index}
                  userImage={item.userImage}
                  userName={item.userName}
                  time={item.time}
                  postTitle={item.postTitle}
                  postDescription={item.postDescription}
                  likes={item.likes}
                  comments={item.comments}
                  projectNumber={item.projectNumber}
                  onPressShowMore={() => onPressShowMore(index)}
                  onPressShowLess={() => onPressShowMore(index)}
                  showMore={IndexFound === index}
                />
              );
            })}
          </ScrollView>
        </View>
      )}
      {tab2 && (
        <View style={{ height: screenHeight.height52 }}>
          <ScrollView>
            {DummyLikedPosts.map((item, index) => {
              const IndexFound = selectedIndex.find((i) => i === index);
              return (
                <Post
                  Key={index}
                  userImage={item.userImage}
                  userName={item.userName}
                  time={item.time}
                  postTitle={item.postTitle}
                  postDescription={item.postDescription}
                  likes={item.likes}
                  comments={item.comments}
                  projectNumber={item.projectNumber}
                  onPressShowMore={() => onPressShowMore(index)}
                  onPressShowLess={() => onPressShowMore(index)}
                  showMore={IndexFound === index}
                />
              );
            })}
          </ScrollView>
        </View>
      )}
      <View style={[appStyle.aiCenter, appStyle.pt10]}>
        <Button
          label="new post"
          labelStyle={styles.buttonLabelStyle}
          leftIcon={Icons.ic_edit}
          buttonStyle={styles.buttonStyle}
        />
      </View>
    </View>
  );
};

export default ClassesScreen;

const styles = StyleSheet.create({
  t12: {
    fontSize: 12,
  },
  dropdown: {
    width: screenWidth.width45,
    height: 40,
    borderWidth: 1,
    borderColor: Colors.lightMidGray,
    borderRadius: 8,
    backgroundColor: Colors.white,
    ...appStyle.rowBtw,
    ...appStyle.ph20,
    ...appStyle.mt10,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
  },
  dropdownText: {
    fontSize: 16,
    color: Colors.lightPink,
  },
  downArrow: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  buttonStyle: {
    width: screenWidth.width40,
  },
  buttonLabelStyle: {
    paddingLeft: 20,
  },
});
