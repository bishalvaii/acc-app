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

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 20,
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
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default Header;
