import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ContactPage = () => {
  const handleSendMessage = () => {
    // Handle sending the message logic
    // You can implement the logic to send the message here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>

      {/* Location */}
      <Text style={styles.subtitle}>Location:</Text>
      <Text>123 Main Street, City, State, Zip Code</Text>

      {/* Call */}
      <Text style={styles.subtitle}>Call:</Text>
      <Text>Phone: +1 123-456-7890</Text>

      {/* Email */}
      <Text style={styles.subtitle}>Email:</Text>
      <Text>Email: contact@example.com</Text>

      {/* Form */}
      <Text style={styles.subtitle}>Send us a message:</Text>
      <TextInput style={styles.input} placeholder="Full Name" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput
        style={[styles.input, styles.messageInput]}
        placeholder="Message"
        multiline={true}
        numberOfLines={4}
      />
      <TouchableOpacity style={styles.button} onPress={handleSendMessage}>
        <Text style={styles.buttonText}>Send Message</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  messageInput: {
    height: 80,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ContactPage;
