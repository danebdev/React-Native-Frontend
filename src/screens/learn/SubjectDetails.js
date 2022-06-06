import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { Header, SubjectTopicsCard } from '../../components';
import { Colors } from '../../constants/assets/Colors';
import appStyle from '../../styles/appStyle';
import { screenHeight } from '../../styles/screenSize';
import { DummySubjectsTopics } from '../DummyData';

const SubjectDetails = ({ route, navigation }) => {
  const { subject } = route.params;

  return (
    <View style={[appStyle.flex1, { backgroundColor: Colors.backgroundGray }]}>
      <View style={styles.headerSection}>
        <Header isChange />
        <View style={[appStyle.row, appStyle.jcSpaceBetween, appStyle.ph20, appStyle.aiFlexEnd]}>
          <Text style={styles.subjectTitle}>{subject && subject.subjectTitle}</Text>
          <View>
            <Text style={styles.headerRightText}>
              Questions: <Text style={styles.values}>{subject && subject.questions}</Text>
            </Text>
            <Text style={styles.headerRightText}>
              Complete: <Text style={styles.values}>{subject && subject.subjectCompleteness}</Text>
            </Text>
          </View>
        </View>
      </View>
      <View style={{ height: screenHeight.height68 }}>
        <ScrollView contentContainerStyle={[appStyle.aiCenter, appStyle.pv10]}>
          {DummySubjectsTopics.map((item, index) => {
            return (
              <SubjectTopicsCard
                key={index}
                onPress={() => {}}
                topicTitle={item.topicTitle}
                topicDescription={item.topicDescription}
                likes={item.likes}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default SubjectDetails;

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
    fontSize: 14,
    fontWeight: '800',
    color: Colors.white,
  },
  values: {
    color: Colors.yellow,
  },
});
