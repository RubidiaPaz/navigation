import React from "react";
import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Perros" component={Home} options={{ tabBarLabel: 'Perros', tabBarIcon: ({color, size}) => (
          <Icon name="paw" color={color} size={25}/>
        ),}}/>
      <Tab.Screen
        name="Gatos"
        component={Contact}
        options={{ tabBarLabel: 'Gatos', tabBarIcon: ({color, size}) => (
            <Icon name="logo-github" color={color} size={25}/>
          ),}}/>
      {/* <Tab.Screen name="about" component={About} options={{ title: "About" }} /> */}
    </Tab.Navigator>
  );
}
