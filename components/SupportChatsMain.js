import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import React from "react";
import { View, Text, TouchableOpacity, Image, Button, FlatList } from "react-native";
import { auth } from "../firebase";
import SupportMessage from "./SupportMessages";


export const SupportChats = () => {
  const navigation = useNavigation();

  const handleViewDetails = () => {
    navigation.navigate('HotelDetails');
  };

  const handleVehicleDetails = () => {
    navigation.navigate('VehicleDetails');
  }

  const handleMarketingDetails = () => {
    navigation.navigate('MarketingDetails')
  }

  const handleSupportMessages = () => {
    navigation.navigate('SupportMessages')
  }

  const handleMessages = () => {
   console.log('This display all messages')
  };

  const supportMessages = [
    {
      id: 1,
      message: 'Hello, I need assistance with my booking.',
      profileImage: require('../assets/cablecar.jpg'),
      timestamp: '10:30 AM',
      personName: "Bishal Adhikari"
    },
    {
      id: 2,
      message: 'Sure, I can help you with that.',
      profileImage: require('../assets/acc.jpg'),
      timestamp: '10:32 AM',
      personName: 'Sujal Poudel'
    },
    // Add more support messages as needed
  ];

  const renderSupportMessage = ({ item }) => (
    <SupportMessage
      message={item.message}
      profileImage={item.profileImage}
      timestamp={item.timestamp}
      personName={item.personName}
    />
  );

  return (
    <View style={styles.container}>
      <Button title="See all chats" onPress={handleMessages} />
      <FlatList
        data={supportMessages}
        renderItem={renderSupportMessage}
        keyExtractor={(item) => item.id.toString()}
        style={styles.supportMessagesContainer}
      />
      {/* Your other views here */}
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 20,
  },
  supportMessagesContainer: {
    flex: 1,
    marginTop: 20,
  },
};
