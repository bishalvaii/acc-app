import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';

// import { auth } from './firebase.js';


const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, navigate to the home page
        navigation.navigate('Admin');
      } else {
        // User is signed out, navigate to the login page
        navigation.navigate('Login');
      }
    });

    return () => unsubscribe(); // Cleanup the event listener when component unmounts
  }, []);

  const handleLogin = () => {
  
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Login successful
        const user = userCredential.user;
        // Handle successful login, navigate to the next screen, etc.
      })
      .catch((error) => {
        // Handle login errors
        const errorCode = error.code;
        const errorMessage = error.message;
        // Display or handle the error message accordingly
      });
  };

  const handleRegister = () => {
   
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Registration successful
        const user = userCredential.user;
        // Handle successful registration, navigate to the next screen, etc.
      })
      .catch((error) => {
        // Handle registration errors
        const errorCode = error.code;
        const errorMessage = error.message;
        // Display or handle the error message accordingly
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      
      <Button title="Login" onPress={handleLogin} />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default LoginScreen;
