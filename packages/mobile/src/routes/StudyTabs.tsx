import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import ClassList from '../pages/ClassList';
import Favorites from '../pages/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

const focusedIconColor = '#8257e5';

const StudyTabs = () => {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          showOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: '#fafafc',
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#32264d',
      }}
    >
      <Screen
        name="ClassList"
        component={ClassList}
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="ios-easel"
              size={size}
              color={focused ? focusedIconColor : color}
            />
          ),
        }}
      />

      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="ios-heart"
              size={size}
              color={focused ? focusedIconColor : color}
            />
          ),
        }}
      />
    </Navigator>
  );
};

export default StudyTabs;
