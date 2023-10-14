import React, {FC} from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <SafeAreaView>
      <View>{children}</View>
    </SafeAreaView>
  );
};

export default Layout;
