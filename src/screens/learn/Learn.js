import * as React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { Header, SubjectCard } from '../../components';
import { Screen } from '../../constants';
import { Colors } from '../../constants/assets/Colors';
import appStyle from '../../styles/appStyle';
import { screenHeight } from '../../styles/screenSize';
import { DummySubjects } from '../DummyData';

const Learn = ({ navigation }) => {
  const onPressStart = (item) => {
    navigation.navigate(Screen.subjectDetails, { subject: item });
  };

  return (
    <View style={[appStyle.flex1, { backgroundColor: Colors.backgroundGray }]}>
      <View style={styles.headerSection}>
        <Header isChange />
        <View style={[appStyle.aiCenter, appStyle.pt30]}>
          <Text style={styles.t12}>ready to learn?</Text>
          <Text style={styles.getStartedText}>click on a class to get started</Text>
        </View>
      </View>
      <View style={{ height: screenHeight.height68 }}>
        <ScrollView contentContainerStyle={[appStyle.aiCenter, appStyle.pv10]}>
          {DummySubjects.map((item, index) => {
            return (
              <SubjectCard
                key={index}
                onPressStart={() => onPressStart(item)}
                subjectTitle={item.subjectTitle}
                time={item.time}
                subjectCompleteness={item.subjectCompleteness}
                questions={item.questions}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Learn;

const styles = StyleSheet.create({
  headerSection: {
    ...appStyle.pt30,
    ...appStyle.pb20,
    backgroundColor: Colors.theme,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  t12: {
    fontSize: 12,
    color: Colors.white,
  },
  getStartedText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.white,
  },
});
