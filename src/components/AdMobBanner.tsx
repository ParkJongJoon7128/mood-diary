import React from 'react';
import { Platform, View } from 'react-native';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const AdMobBanner = () => {
  // Logic
  const unitID =
    Platform.select({
      ios: 'ca-app-pub-1675206643803027/4554858456',
      android: 'ca-app-pub-1675206643803027/6845979870',
    }) || '';

  const adUnitID = __DEV__ ? TestIds.BANNER : unitID;

  // Views
  return (
    <View className='justify-end'>
      <BannerAd
        unitId={adUnitID}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{requestNonPersonalizedAdsOnly: true}}
      />
    </View>
  );
};

export default AdMobBanner;
