import React from "react";
import {useWindowDimensions, View} from 'react-native';

function Page({children, style}: any) {
  const {height} = useWindowDimensions();

  return <View style={[{height}, style]}>{children}</View>;
}

export default Page;
