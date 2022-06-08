import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';

import { Tabs } from '../components';
import { Screen } from '../constants';
import { Colors } from '../constants/assets/Colors';
import { Icons } from '../constants/assets/Icons';
import ClassesScreen from '../screens/Classes';
import HomeScreen from '../screens/Home';
import { Learn, OptionsSelection, SubjectDetails, TopicDetails } from '../screens/learn';
import { screenHeight } from '../styles/screenSize';
import { horizontalscale, verticalScale } from '../utils/ScaleUtils';

const HomeStack = createNativeStackNavigator();
const HomeNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

const ClassesStack = createNativeStackNavigator();
const ClassesNavigator = () => {
  return (
    <ClassesStack.Navigator screenOptions={{ headerShown: false }}>
      <ClassesStack.Screen name="Classes" component={ClassesScreen} />
    </ClassesStack.Navigator>
  );
};

const LearnStack = createNativeStackNavigator();
const LearnNavigator = () => {
  return (
    <LearnStack.Navigator screenOptions={{ headerShown: false }}>
      <LearnStack.Screen name={Screen.learn} component={Learn} />
      <LearnStack.Screen name={Screen.subjectDetails} component={SubjectDetails} />
      <LearnStack.Screen name={Screen.topicDetails} component={TopicDetails} />
      <LearnStack.Screen name={Screen.optionsSelection} component={OptionsSelection} />
    </LearnStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.bottomTab,
      })}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ focused }) => <Tabs focused={focused} icon={Icons.home} label="home" />,
        }}
      />
      <Tab.Screen
        name="ClassesScreen"
        component={ClassesNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Tabs focused={focused} icon={Icons.classes} label="classes" />
          ),
        }}
      />
      <Tab.Screen
        name="LearnScreen"
        component={LearnNavigator}
        options={{
          tabBarIcon: ({ focused }) => <Tabs focused={focused} icon={Icons.learn} label="learn" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  bottomTab: {
    position: 'absolute',
    bottom: verticalScale(20),
    left: horizontalscale(20),
    right: horizontalscale(20),
    borderRadius: 50,
    height: verticalScale(65),
    paddingHorizontal: horizontalscale(5),
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.22,
    shadowRadius: 0.33,
    elevation: verticalScale(5),
    ...ifIphoneX({ paddingTop: verticalScale(screenHeight.height3) }, { paddingTop: 0 }),
  },
});
