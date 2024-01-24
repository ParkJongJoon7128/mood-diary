import React, { FC } from 'react';
import { ImageBackground } from 'react-native';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <ImageBackground
      source={require("../../public/images/BackgroundCell.png")}
      resizeMode={'repeat'}
      className="flex-1 overflow-hidden">
      {children}
    </ImageBackground>
  );
};

export default Layout;
