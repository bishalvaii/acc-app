import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const Notices = () => {
  const navigation = useNavigation();
  const handleConfirm = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>NOTICE!!</Text>
      </View>
      <Image source={require("../assets/acc.jpg")} style={styles.logo} />
      {/* <Text style={styles.description}>{notice}</Text> */}

      <Text style={styles.additionalText}>
        We are closed from 11:30 a.m to 12:30 pm everyday forlunch time break .
        So, we inform you to not hurry fortickets. Service will be interrupted
        at this time Thank you , Team Annapurna Cable Car{" "}
      </Text>
      <TouchableOpacity onPress={handleConfirm} style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>Yes, I understand!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "red",
  },
  closeButton: {
    padding: 10,
  },
  closeButtonText: {
    fontSize: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
  },
  additionalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    color: "#888",
  },
  confirmButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
  },
  confirmButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
};

export default Notices;
