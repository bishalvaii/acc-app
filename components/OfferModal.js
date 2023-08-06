import React from "react";
import {View, Text,Modal, TouchableOpacity, StyleSheet} from 'react-native';

const OfferModal = ({ isVisible, onClose, offer}) => {
    const formatDate = (timestamp) => {
        if (timestamp && timestamp.toDate) {
          const date = timestamp.toDate(); // Convert Firebase Timestamp to JavaScript Date
          return date.toLocaleDateString(); // Format the date as a string
        } else {
          return "N/A"; // Return a default value if the date is not available or invalid
        }
      };
    return (
        <Modal 
          visible={isVisible}
          transparent
          animationType="fade"
          onRequestClose={onClose}
          >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.title}>{offer.title}</Text>
                    <Text style={styles.description}>{offer.description}</Text>
                    <Text style={styles.discount}>Discount: {offer.discountPercentage}%</Text>
                    <Text style={styles.startDate}>Start Date: {formatDate(offer.startDate)}</Text>
                    <Text style={styles.expiryDate}>Expirty Date: {formatDate(offer.expiryDate)}</Text>
                    <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                        <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
          </Modal>
    )
}
const styles = StyleSheet.create({
 modalContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
 },
 modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems:'center'
 },
 title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
 },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  discount: {
    fontSize: 16,
    marginBottom: 10,
  },
  startDate: {
    fontSize: 16,
    marginBottom: 10,
  },
  expiryDate: {
    fontSize: 16,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  

})
 
export default OfferModal;