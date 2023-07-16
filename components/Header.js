import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Annapurna Cable Car</Text>
    </View>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    height: height,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  logo: {
    width: width * 0.7,
    height: width * 0.7,
    resizeMode: 'contain',
  },
  title: {
    fontSize: height * 0.04,
    fontWeight: 'bold',
    marginTop: height * 0.05,
  },
});

export default Header;
