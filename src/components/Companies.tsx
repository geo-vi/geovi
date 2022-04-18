import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

function Companies() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://www.ikarussecurity.com/wp-content/uploads/2020/10/IKARUS-logo-claim-300x78-2.png',
        }}
        style={{width: 300, height: 78, tintColor: 'white'}}
      />
      <Image
        source={{
          uri: 'https://assets-global.website-files.com/60ab78ff992bc560336cb1ea/61111f040216b3c7ba1f9e79_Group%2028227.svg',
        }}
        style={{width: 288, height: 54}}
      />
      <Image
        source={{
          uri: 'https://avatars.githubusercontent.com/u/67278693?s=200&v=4',
        }}
        style={{width: 60, height: 60, tintColor: 'white'}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '100%',
  },
});

export default Companies;
