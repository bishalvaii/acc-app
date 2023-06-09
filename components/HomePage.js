// HomePage.js

import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const HomePage = () => {
  const [showSubMenu, setShowSubMenu] = useState(false)
 

const navigation = useNavigation();
  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu)
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => toggleSubMenu()}>
          <Text style={styles.menu}>Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.subMenuItem}>Login</Text>
          </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Notices')}>
          <Text style={styles.menu}>Notice</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <Text style={styles.chat}>Chat</Text>
        </TouchableOpacity>
        {showSubMenu && (
          <View style={styles.subMenu}>
          <TouchableOpacity onPress={() => navigation.navigate('Location')}>
            <Text style={styles.subMenuItem}>Location</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Schedules')}>
            <Text style={styles.subMenuItem}>Schedules</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('FAQS')}>
            <Text style={styles.subMenuItem}>FAQs</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Fares')}>
            <Text style={styles.subMenuItem}>Fares</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Review')}>
            <Text style={styles.subMenuItem}>Reviews</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Team')}>
            <Text style={styles.subMenuItem}>Team</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
            <Text style={styles.subMenuItem}>Contact</Text>
          </TouchableOpacity>
        </View>
        )}
      </View>
      <View style={styles.body}>
        <Image source={require('../assets/cablecar.jpg')} style={styles.image} />
        <Text style={styles.title}>Welcome to the Annapurna Cable Car Service</Text>
        <Text style={styles.description}>
          Enjoy the breathtaking views of Pokhara Valley from Sarangkot 
          during your vacations . We provide you the best experience
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Schedules')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menu: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subMenu: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  subMenuItem: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007aff',
    paddingVertical: 5,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  chat: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007aff',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 300,
    height: 250,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007aff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomePage;
