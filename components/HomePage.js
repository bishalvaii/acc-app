import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';

const HomePage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigation = useNavigation();

  const toggleMenu = () => {  
    setShowMenu(!showMenu);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };
  return (
    <TouchableWithoutFeedback onPress={() => closeMenu()}>
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => toggleMenu()}>
          <Icon name="md-menu" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Icon name="log-in-outline" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Notices')}>
          <Icon name="notifications" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <Icon name="chatbubble-ellipses" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <Modal visible={showMenu} animationType="slide" transparent={true}>
        <TouchableWithoutFeedback onPress={() => closeMenu()}>
          <View style={styles.overlay}>
            <View style={styles.menu}>
              <TouchableOpacity onPress={() => navigation.navigate('Location')}>
                <Text style={styles.menuItem}>Location</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Schedules')}>
                <Text style={styles.menuItem}>Schedules</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('FAQS')}>
                <Text style={styles.menuItem}>FAQs</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Fares')}>
                <Text style={styles.menuItem}>Fares</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Review')}>
                <Text style={styles.menuItem}>Reviews</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Team')}>
                <Text style={styles.menuItem}>Team</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
                <Text style={styles.menuItem}>Contact</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.closeButton} onPress={() => toggleMenu()}>
              <AntIcon name="close" size={30} color="black" />
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <View style={styles.body}>
        <Image source={require('../assets/cablecar.jpg')} style={styles.image} />
        <Text style={styles.title}>Welcome to the Annapurna Cable Car Service</Text>
        <Text style={styles.description}>
          Enjoy the breathtaking views of Pokhara Valley from Sarangkot during your vacations. We provide you the best experience.
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Schedules')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  </TouchableWithoutFeedback>
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
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  menuItem: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007aff',
    paddingVertical: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 400,
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
