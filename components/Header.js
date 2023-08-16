import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
    </View>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  header: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: width,
    height: height,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  logo: {
    width: width * 0.7,
    height: width * 0.7,
    resizeMode: "contain",
  },
});

export default Header;
