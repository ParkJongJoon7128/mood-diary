import notifee, { EventType } from '@notifee/react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { RecoilRoot } from 'recoil';
import BackButton from './src/components/BackButton';
import HomeScreen from './src/screens/HomeScreen';
import ItemScreen from './src/screens/ItemScreen';
import MoodScreen from './src/screens/MoodScreen';
import TodayIsScreen from './src/screens/TodayIsScreen';
import {
  requestAndroidPermissionSettings,
  requestUserPermission,
} from './src/util/LocalNotification';

const Stack = createStackNavigator<ROOT_NAVIGATION>();

function App(): JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
    requestUserPermission();
    requestAndroidPermissionSettings();
  }, []);

  // Subscribe to events
  useEffect(() => {
    return notifee.onForegroundEvent(({type, detail}) => {
      switch (type) {
        case EventType.DISMISSED:
          // Remove the notification
          notifee
            .decrementBadgeCount()
            .then(() => notifee.getBadgeCount())
            .then(count =>
              console.log('Badge count decremented by 1 to: ', count),
            );
          break;
        case EventType.PRESS:
          notifee
            .decrementBadgeCount()
            .then(() => notifee.getBadgeCount())
            .then(count =>
              console.log('Badge count decremented by 1 to: ', count),
            );
          break;
      }
    });
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
              options={{
                headerStyle: {
                  backgroundColor: 'transparent',
                },
                headerShown: false,
                headerTransparent: false,
                title: '',
              }}
            />
            <Stack.Screen
              name="Mood"
              component={MoodScreen}
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
