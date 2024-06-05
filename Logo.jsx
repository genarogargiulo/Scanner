// Logo.js
import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <Image source={require('./assets/images/logo.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    position: 'absolute',
    top: -40,
    //left: 10,
    zIndex: 1,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});

export default Logo;
