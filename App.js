import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {colors} from './src/style/base';
import TopNews from './src/containers/TopNews/TopNews';
import Categories from './src/containers/Categories/Categories';
import Article from './src/components/Article/Article';
import Category from './src/containers/Category/Category';
import {Icon} from 'react-native-elements';

const App: () => React$Node = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  function TabNavigator() {
    return (
      <Tab.Navigator
        initialRouteName="TopNews"
        tabBarOptions={{
          activeTintColor: colors.textColorLight,
          inactiveTintColor: colors.textColorLightInactive,
          activeBackgroundColor: colors.secondaryBackgroundColor,
          inactiveBackgroundColor: colors.secondaryBackgroundColor,
          labelPosition: 'beside-icon',
        }}>
        <Tab.Screen
          name="TopNews"
          component={TopNews}
          options={{
            tabBarLabel: 'Top News',
            tabBarIcon: ({color, size}) => (
              <Icon name="star-rate" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Categories"
          component={Categories}
          options={{
            tabBarLabel: 'Categories',
            tabBarIcon: ({color, size}) => (
              <Icon name="list" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TabNavigator">
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="Article" component={Article} />
        <Stack.Screen name="Category" component={Category} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
