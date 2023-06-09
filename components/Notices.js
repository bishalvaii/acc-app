import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const Notices = ({ notice, onClose, onConfirm }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Notice</Text>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>X</Text>
        </TouchableOpacity>
      </View>
      <Image source={require('../assets/acc.jpg')} style={styles.logo} />
      <Text style={styles.description}>{notice}</Text>
      <TouchableOpacity onPress={onConfirm} style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>Yes, I understand</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  closeButton: {
    padding: 10,
  },
  closeButtonText: {
    fontSize: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  confirmButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
  },
  confirmButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
};

export default Notices;
