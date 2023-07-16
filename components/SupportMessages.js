// SupportMessage.js

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SupportMessage = ({ id,message, profileImage, timestamp, personName }) => {
  return (
    <View style={styles.messageContainer}  key={id}>
      <Image source={profileImage} style={styles.profileImage} />
      <Text style={styles.personName}>{personName}</Text>
      <View style={styles.messageContent}>
        <Text style={styles.messageText}>{message}</Text>
        <Text style={styles.timestampText}>{timestamp}</Text>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  messageContent: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    padding: 10,
    marginLeft: 'auto',
    alignSelf: 'flex-end',
  },
  messageText: {
    fontSize: 16,
  },
  timestampText: {
    fontSize: 12,
    color: 'gray',
    marginTop: 5,
    alignSelf: 'flex-end',
  },
  personName: {
    fontSize: 20,
    marginTop: 10,
    marginLeft: 1,
    textAlign: 'center',
  }
});

export default SupportMessage;
