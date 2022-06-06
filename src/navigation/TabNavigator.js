import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Platform } from 'react-native';

import { Tabs } from '../components';
import { Screen } from '../constants';
import { Colors } from '../constants/assets/Colors';
import { Icons } from '../constants/assets/Icons';
import ClassesScreen from '../screens/Classes';
import HomeScreen from '../screens/Home';
import { Learn, SubjectDetails } from '../screens/learn';
import { screenHeight } from '../styles/screenSize';

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
    bottom: 20,
    left: 20,
    right: 20,
    paddingTop: Platform.OS === 'ios' ? screenHeight.height3 : 0,
    borderRadius: 50,
    height: screenHeight.height10,
    paddingHorizontal: 5,
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.22,
    shadowRadius: 0.33,
    elevation: 5,
  },
});
