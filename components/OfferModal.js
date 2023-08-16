import React from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Example: Using Ionicons for icons
import { MaterialCommunityIcons } from "@expo/vector-icons";

const OfferModal = ({ isVisible, onClose, offer }) => {
  const formatDate = (timestamp) => {
    if (timestamp && timestamp.toDate) {
      const date = timestamp.toDate();
      return date.toLocaleDateString();
    } else {
      return "N/A";
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
          <View style={styles.infoContainer}>
            <View style={styles.infoRow}>
              <MaterialCommunityIcons
                name="ticket-percent"
                size={24}
                color="blue"
              />{" "}
              <Text style={styles.infoText}>
                Discount: {offer.discountPercentage}%
              </Text>
            </View>
            <View style={styles.infoRow}>
              <Ionicons name="calendar" size={20} color="#007AFF" />
              <Text style={styles.infoText}>
                Start Date: {formatDate(offer.startDate)}
              </Text>
            </View>
            <View style={styles.infoRow}>
              <Ionicons name="calendar" size={20} color="#007AFF" />
              <Text style={styles.infoText}>
                Expiry Date: {formatDate(offer.expiryDate)}
              </Text>
            </View>
          </View>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    marginLeft: 20, // Add left spacing
    marginRight: 20, // Add right spacing
    width: "90%", // Limit width to 90% of the screen
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  description: {
    fontSize: 20,
    marginBottom: 15,
    color: "#666",
    textAlign: "center",
  },
  infoContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#555",
  },
  closeButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    elevation: 3,
  },
  closeButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default OfferModal;
