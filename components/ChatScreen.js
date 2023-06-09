import React, { useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);

  const onSend = (newMessages = []) => {
    setMessages((prevMessages) =>
      GiftedChat.append(prevMessages, newMessages)
    );
    // Access the latest message
    const latestMessage = newMessages[0];
    // Access the sender's ID and message content
    const senderId = latestMessage.user._id;
    const messageContent = latestMessage.text;
    // Process the sender's ID and message content as needed
    console.log('Sender ID:', senderId);
    console.log('Message Content:', messageContent);
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={(newMessages) => onSend(newMessages)}
      user={{
        _id: 1, // Unique ID for the user
      }}
    />
  );
};

export default ChatScreen;
