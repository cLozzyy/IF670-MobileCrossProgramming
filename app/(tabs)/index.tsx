import * as Location from "expo-location";
import React, { useState } from "react";
import { Button, Dimensions, StyleSheet, Text, View } from "react-native";
import MapView, { Marker, Region, UrlTile } from "react-native-maps";

type Coordinates = {
  latitude: number;
  longitude: number;
};

const { height } = Dimensions.get("window");

export default function Index() {
  const [location, setLocation] = useState<Coordinates | null>(null);

  const getLocation = async (): Promise<void> => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    
    if (status !== "granted") {
      alert("Permission denied! Please allow location access.");
      return;
    }

    const loc = await Location.getCurrentPositionAsync({});
    setLocation({
      latitude: loc.coords.latitude,
      longitude: loc.coords.longitude,
    });
  };

  const handleMapPress = (e: any) => {

    setLocation({
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude,
    });
  };


  const handleMarkerDragEnd = (e: any) => {
    setLocation({
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude,
    });
  };


  const region: Region | undefined = location
    ? {
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }
    : undefined;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
         <Text style={styles.studentInfo}>Nicholas Andre Natalino - 92117</Text>
      </View>
      
      {!location ? (
        <View style={styles.center}>
            <Button title="Get Geo Location" onPress={getLocation} />
        </View>
      ) : (
        <>
          
          <MapView 
            style={styles.map} 
            initialRegion={region}
            onPress={handleMapPress}
          >
            <UrlTile 
              urlTemplate="https://tile.openstreetmap.org/{z}/{x}/{y}.png" 
              maximumZ={19} 
            />
            
            <Marker 
              coordinate={location} 
              title="My Location" 
              draggable 
              onDragEnd={handleMarkerDragEnd} 
            />
          </MapView>
          
          <View style={styles.info}>
            
            <Text style={styles.infoText}>Latitude: {location.latitude.toFixed(6)}</Text>
            <Text style={styles.infoText}>Longitude: {location.longitude.toFixed(6)}</Text>
            
            <View style={{ marginTop: 20 }}>
               <Button title="Reset to Current Location" onPress={getLocation} />
            </View>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
      paddingTop: 50,
      paddingBottom: 20,
      alignItems: 'center',
      backgroundColor: '#f8f9fa',
      borderBottomWidth: 1,
      borderColor: '#e9ecef'
  },
  studentInfo: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#343a40'
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    height: height * 0.6,
    width: "100%",
  },
  info: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  infoText: {
      fontSize: 18,
      marginBottom: 10,
      fontWeight: '500',
      color: '#495057'
  }
});
```</Marker></Marker></Marker></MapView></Marker></MapView>