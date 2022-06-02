import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

import Tabs from '../components/Tabs';
import { Colors } from '../constants/assets/Colors';
import { Icons } from '../constants/assets/Icons';
import ClassesScreen from '../screens/Classes';
import HomeScreen from '../screens/Home';
import LearnScreen from '../screens/Learn';

const HomeStack = createNativeStackNavigator();
const Home = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

const ClassesStack = createNativeStackNavigator();
const Classes = () => {
  return (
    <ClassesStack.Navigator screenOptions={{ headerShown: false }}>
      <ClassesStack.Screen name="Classes" component={ClassesScreen} />
    </ClassesStack.Navigator>
  );
};

const LearnStack = createNativeStackNavigator();
const Learn = () => {
  return (
    <LearnStack.Navigator screenOptions={{ headerShown: false }}>
      <LearnStack.Screen name="Learn" component={LearnScreen} />
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
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => <Tabs focused={focused} icon={Icons.home} label="home" />,
        }}
      />
      <Tab.Screen
        name="ClassesScreen"
        component={Classes}
        options={{
          tabBarIcon: ({ focused }) => (
            <Tabs focused={focused} icon={Icons.classes} label="classes" />
          ),
        }}
      />
      <Tab.Screen
        name="LearnScreen"
        component={Learn}
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
    bottom: 25,
    left: 20,
    right: 20,
    backgroundColor: Colors.white,
    borderRadius: 50,
    height: 80,
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
