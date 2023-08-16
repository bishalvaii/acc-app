import React, { useState } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { addDoc, collection, serverTimestamp } from "firebase/firestore/lite";
import { db } from "../firebase";
import { StyleSheet, View, Text } from "react-native";

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);

  const onSend = async (newMessages = []) => {
    // Update the local messages state
    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));

    // Generate a unique ID for the new message
    const messageId = Math.random().toString(36).substring(7);

    // Access the latest message
    const latestMessage = newMessages[0];

    // Extract the required fields from the latest message
    const { text: message, user, createdAt: timestamp } = latestMessage;
    const { _id: senderId, name: personName, avatar: profileImage } = user;

    try {
      // Store the message in Firebase Firestore
      const supportMessagesRef = collection(db, "support_messages");
      const newMessage = {
        id: messageId,
        message,
        profileImage: profileImage ? profileImage : "", // Assign an empty string if profileImage is undefined
        personName: personName ? personName : "", // Assign an empty string if personName is undefined
        timestamp: serverTimestamp(),
      };
      console.log(newMessage);
      await addDoc(supportMessagesRef, newMessage);
      console.log("Message sent to admin panel");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.adminMessageContainer}>
        <Text style={styles.adminMessageText}>Send a Message to Admin</Text>
      </View>
      <GiftedChat
        messages={messages}
        onSend={(newMessages) => onSend(newMessages)}
        user={{
          _id: 1, // Unique ID for the user
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  adminMessageContainer: {
    paddingVertical: 10,
    backgroundColor: "#E0E0E0",
    alignItems: "center",
  },
  adminMessageText: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ChatScreen;
