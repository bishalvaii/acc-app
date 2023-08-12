// import React, { useEffect, useState } from 'react';
// import { View, Text } from 'react-native';
// import * as Location from 'expo-location';
// import MapView, { Marker } from 'react-native-maps';

// const MapScreen = () => {
//   const [userLocation, setUserLocation] = useState(null);

//   useEffect(() => {
//     const getUserLocation = async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         console.log('Location permission denied');
//         return;
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       setUserLocation({
//         latitude: location.coords.latitude,
//         longitude: location.coords.longitude,
//       });
//     };

//     getUserLocation();
//   }, []);

//   if (!userLocation) {
//     return <Text>Loading...</Text>;
//   }

//   return (
//     <View style={{ flex: 1 }}>
//       <MapView
//         style={{ flex: 1 }}
//         initialRegion={{
//           latitude: userLocation.latitude,
//           longitude: userLocation.longitude,
//           latitudeDelta: 0.05,
//           longitudeDelta: 0.05,
//         }}
//       >
//         {/* Add a marker for the user's location */}
//         <Marker
//           coordinate={{
//             latitude: userLocation.latitude,
//             longitude: userLocation.longitude,
//           }}
//           title="Your Location"
//           description="You are here"
//         />
//         {/* Add a marker for the Annapurna Cable Car */}
//         <Marker
//           coordinate={{ latitude: 28.2473, longitude: 83.9458 }}
//           title="Annapurna Cable Car"
//           description="Marker Description"
//         />
//         {/* You can add the route polyline here */}
//       </MapView>
//     </View>
//   );
// };

// export default MapScreen;
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => {
  const [userLocation, setUserLocation] = useState(null);
  const annapurnaCableCarLocation = { latitude: 28.2473, longitude: 83.9458 };

  useEffect(() => {
    const getUserLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Location permission denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setUserLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    };

    getUserLocation();
  }, []);

  if (!userLocation) {
    return <Text>Loading...</Text>;
  }

  // Function to calculate distance between two points using Haversine formula
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance.toFixed(2); // Round the distance to 2 decimal places
  };

  // Function to convert degrees to radians
  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  const distanceToAnnapurnaCableCar = calculateDistance(
    userLocation.latitude,
    userLocation.longitude,
    annapurnaCableCarLocation.latitude,
    annapurnaCableCarLocation.longitude
  );

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
          latitudeDelta: 0.20,
          longitudeDelta: 0.20,
        }}
      >
        {/* Add a marker for the user's location */}
        {/* Add a marker for the Annapurna Cable Car */}
        <Marker
          coordinate={annapurnaCableCarLocation}
          title="Annapurna Cable Car"
          description={`Distance: ${distanceToAnnapurnaCableCar} km`}
        />
        <Marker
          coordinate={{
            latitude: userLocation.latitude,
            longitude: userLocation.longitude,
          }}
          title="Your Location"
          description="You are here"
        />
        {/* You can add the route polyline here */}
      </MapView>
    </View>
  );
};

export default MapScreen;
