import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

const TeamPage = () => {
  const windowWidth = Dimensions.get("window").width;
  const imageWidth = (windowWidth - 50) / 2; // Adjust this value as needed
  const imageHeight = imageWidth * 0.75; // Adjust this value as needed for the aspect ratio

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meet Our Team</Text>
      <Text style={styles.description}>
        Discover the dedicated individuals who work together to create
        exceptional experiences for you.
      </Text>

      <View style={styles.photoContainer}>
        <View style={styles.row}>
          <View style={styles.photoItem}>
            <Image
              source={require("../assets/kalugurung.jpg")}
              style={{
                ...styles.photo,
                width: imageWidth,
                height: imageHeight,
              }}
              resizeMode="cover"
            />
            <Text style={styles.name}>Mr. Kalu Gurung</Text>
            <Text style={styles.titleText}>Chairman</Text>
          </View>
          <View style={styles.photoItem}>
            <Image
              source={require("../assets/tirtha.jpg")}
              style={{
                ...styles.photo,
                width: imageWidth,
                height: imageHeight,
              }}
              resizeMode="cover"
            />
            <Text style={styles.name}>Mr. Tirthaj Tripathi</Text>
            <Text style={styles.titleText}>Director</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.photoItem}>
            <Image
              source={require("../assets/aajad.jpeg")}
              style={{
                ...styles.photo,
                width: imageWidth,
                height: imageHeight,
              }}
              resizeMode="cover"
            />
            <Text style={styles.name}>Mr. Aajad Shrestha</Text>
            <Text style={styles.titleText}>Director</Text>
          </View>
          <View style={styles.photoItem}>
            <Image
              source={require("../assets/chandra.jpeg")}
              style={{
                ...styles.photo,
                width: imageWidth,
                height: imageHeight,
              }}
              resizeMode="cover"
            />
            <Text style={styles.name}>Mr. Chandra Bahadur Karki</Text>
            <Text style={styles.titleText}>Director</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  photoContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  photoItem: {
    flex: 1,
    alignItems: "center",
    margin: 5, // Adjust this value for spacing
  },
  photo: {
    aspectRatio: 4 / 3, // Adjust this aspect ratio as needed
    width: "100%",
    borderRadius: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  titleText: {
    fontSize: 14,
    textAlign: "center",
  },
});

export default TeamPage;
