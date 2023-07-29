import { useNavigation } from "@react-navigation/native";
import { collection, getDocs } from "firebase/firestore/lite";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, Button, FlatList, StyleSheet } from "react-native";
import { auth, db } from "../firebase";
import SupportMessage from "./SupportMessages";

export const SupportChats = () => {
  const navigation = useNavigation();
  const [supportMessages, setSupportMessages] = useState([]);

  useEffect(() => {
    const fetchSupportMessages = async () => {
      try {
        const supportMessagesRef = collection(db, "support_messages");
        const querySnapshot = await getDocs(supportMessagesRef);
        const messages = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const message = {
            id: doc.id,
            message: data.message || "",
            profileImage: data.profileImage || null,
            timestamp: data.timestamp || null,
            personName: data.personName || "",
          };
          messages.push(message);
        });
        // Sort the messages by timestamp in descending order (latest message first)
        messages.sort((a, b) => b.timestamp - a.timestamp);
        setSupportMessages(messages);
      } catch (error) {
        console.error("Error fetching support messages:", error);
      }
    };
    
    fetchSupportMessages();
  }, []);

  const handleViewDetails = () => {
    navigation.navigate('HotelDetails');
  };

  const handleVehicleDetails = () => {
    navigation.navigate('VehicleDetails');
  }
  
  const keyExtractor = (item) => {
    if (item && item.id) {
      return item.id.toString();
    }
    return Math.random().toString(); // Generate a unique key if id is missing
  };
  
  const handleMarketingDetails = () => {
    navigation.navigate('MarketingDetails')
  }

  const handleSupportMessages = () => {
    navigation.navigate('SupportMessages')
  }

  const handleMessages = () => {
    console.log('This displays all messages')
  };

  const renderSupportMessage = ({ item }) => {
    // Convert the timestamp object to a string or formatted date string
    const timestamp = item.timestamp.toDate().toLocaleString();
  
    return (
      <SupportMessage
        message={item.message}
        profileImage={item.profileImage}
        timestamp={timestamp} // Use the converted timestamp
        personName={item.personName}
        id={item.id}
      />
    );
  };
  
  return (
    <View style={styles.container}>
      <Button title="See all chats" onPress={handleMessages} />
      <FlatList
        data={supportMessages}
        renderItem={renderSupportMessage}
        keyExtractor={keyExtractor}
        style={styles.supportMessagesContainer}
        inverted // Display the latest message at the top
      />
      {/* Your other views here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  supportMessagesContainer: {
    flex: 1,
    marginTop: 20,
  },
});
