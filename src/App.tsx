/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import MoodScreen from './screens/MoodScreen';
import TodayIsScreen from './screens/TodayIsScreen';
import Layout from './components/layout/Layout';

const Stack = createStackNavigator<ROOT_NAVIGATION>();

function App(): JSX.Element {
  return (
    <Layout>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: true,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Mood" component={MoodScreen} />
          <Stack.Screen name="TodayIs" component={TodayIsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Layout>
  );
}

export default App;
