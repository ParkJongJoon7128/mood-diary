import notifee, { EventType } from '@notifee/react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { AppState, Platform, Text, View } from 'react-native';
import codePush from 'react-native-code-push';
import { PERMISSIONS, request } from 'react-native-permissions';
import SplashScreen from 'react-native-splash-screen';
import { RecoilRoot } from 'recoil';
import BackButton from './src/components/BackButton';
import HomeScreen from './src/screens/HomeScreen';
import ItemScreen from './src/screens/ItemScreen';
import MoodScreen from './src/screens/MoodScreen';
import TodayIsScreen from './src/screens/TodayIsScreen';

const Stack = createStackNavigator<ROOT_NAVIGATION>();

function App(): JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
    const listener = AppState.addEventListener('change', (status) => {
      if (Platform.OS === 'ios' && status === 'active'){
        request(PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY)
        .then((result) => console.log(result))
        .catch((error) => console.log(error));
      }
    });

    return () => {listener.remove()}
    // requestUserPermission();
    // requestAndroidPermissionSettings();
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

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_START,
  installMode: codePush.InstallMode.IMMEDIATE,
}

// export default App;
export default codePush(codePushOptions)(App)
