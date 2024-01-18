import { NavigationContainer } from '@react-navigation/native';

import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { RecoilRoot } from 'recoil';
import Layout from './src/components/layout/Layout';
import HomeScreen from './src/screens/HomeScreen';
import MoodScreen from './src/screens/MoodScreen';
import TodayIsScreen from './src/screens/TodayIsScreen';

const Stack = createStackNavigator<ROOT_NAVIGATION>();

function App(): JSX.Element {
  return (
    <RecoilRoot>
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
    </RecoilRoot>
  );
}

export default App;
