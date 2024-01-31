import { NavigationContainer } from '@react-navigation/native';

import { firebase } from '@react-native-firebase/messaging';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Alert, Text, View } from 'react-native';
import { RecoilRoot } from 'recoil';
import BackButton from './src/components/BackButton';
import HomeScreen from './src/screens/HomeScreen';
import ItemScreen from './src/screens/ItemScreen';
import MoodScreen from './src/screens/MoodScreen';
import TodayIsScreen from './src/screens/TodayIsScreen';

const Stack = createStackNavigator<ROOT_NAVIGATION>();

// Request Permission before use FCM
const requestUserPermission = async () => {
  const authStatus = await firebase.messaging().requestPermission();
  const enabled =
    authStatus === firebase.messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === firebase.messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}

  // Get FCM Token
  const getFcmToken = async () => {
    const fcmToken = await firebase.messaging().getToken();
    console.log('[FCM Token] ', fcmToken);
  };

function App(): JSX.Element {

  useEffect(() => {
    requestUserPermission();
  }, []);

  useEffect(() => {
    getFcmToken();
    const unsubscribe = firebase.messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    return unsubscribe;

  }, []);

  return (
    <RecoilRoot>
      <React.Suspense
        fallback={
          <View>
            <Text>Loading</Text>
          </View>
        }>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Mood"
              component={MoodScreen}
              options={{
                headerStyle: {
                  backgroundColor: 'transparent',
                },
                headerShown: true,
                headerTransparent: false,
                title: '',
                headerLeft: () => {
                  return <BackButton />;
                },
              }}
            />
            <Stack.Screen
              name="TodayIs"
              component={TodayIsScreen}
              options={{
                headerStyle: {
                  backgroundColor: 'transparent',
                },
                headerShown: true,
                headerTransparent: true,
                title: '',
                headerLeft: () => {
                  return <BackButton />;
                },
              }}
            />
            <Stack.Screen
              name="Item"
              component={ItemScreen}
              options={{
                headerStyle: {
                  backgroundColor: 'transparent',
                },
                headerShown: true,
                headerTransparent: false,
                title: '',
                headerLeft: () => {
                  return <BackButton />;
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </React.Suspense>
    </RecoilRoot>
  );
}

export default App;
