import { NavigationContainer } from '@react-navigation/native';

import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import { RecoilRoot } from 'recoil';
import Layout from './src/components/layout/Layout';
import HomeScreen from './src/screens/HomeScreen';
import ItemScreen from './src/screens/ItemScreen';
import MoodScreen from './src/screens/MoodScreen';
import TodayIsScreen from './src/screens/TodayIsScreen';

const Stack = createStackNavigator<ROOT_NAVIGATION>();

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <React.Suspense
        fallback={
          <View>
            <Text>Loading</Text>
          </View>
        }>
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
              <Stack.Screen name="Item" component={ItemScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </Layout>
      </React.Suspense>
    </RecoilRoot>
  );
}

export default App;
