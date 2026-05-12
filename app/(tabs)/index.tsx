import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";

import { supabase } from "../lib/supabase";

export default function Index() {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const takePhoto = async () => {
    try {
      // permission camera
      const cameraPermission =
        await ImagePicker.requestCameraPermissionsAsync();

      if (!cameraPermission.granted) {
        Alert.alert("Camera permission denied");
        return;
      }

      // open camera
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });

      if (result.canceled) return;

      const imageUri = result.assets[0].uri;

      setImage(imageUri);

      await uploadPhoto(imageUri);
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Failed to take photo");
    }
  };

  const uploadPhoto = async (uri: string) => {
    try {
      setLoading(true);

      // permission location
      const locationPermission =
        await Location.requestForegroundPermissionsAsync();

      if (!locationPermission.granted) {
        Alert.alert("Location permission denied");
        return;
      }

      // get location
      const location = await Location.getCurrentPositionAsync({});

      const latitude = location.coords.latitude;
      const longitude = location.coords.longitude;

      // convert image to blob
      const response = await fetch(uri);
      const blob = await response.blob();

      // filename
      const fileName = `photo-${Date.now()}.jpg`;

      // upload to storage
      const { error: uploadError } = await supabase.storage
        .from("photos")
        .upload(fileName, blob, {
          contentType: "image/jpeg",
        });

      if (uploadError) {
        throw uploadError;
      }

      // get public url
      const { data } = supabase.storage
        .from("photos")
        .getPublicUrl(fileName);

      const imageUrl = data.publicUrl;

      // insert database
      const { error: insertError } = await supabase
        .from("photos")
        .insert([
          {
            image_url: imageUrl,
            latitude,
            longitude,
          },
        ]);

      if (insertError) {
        throw insertError;
      }

      Alert.alert("Success", "Photo uploaded successfully");
    } catch (error: any) {
      console.log(error);
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Week 11 Supabase Integration
      </Text>

      <Button title="Take Photo" onPress={takePhoto} />

      {loading && (
        <ActivityIndicator
          size="large"
          style={{ marginTop: 20 }}
        />
      )}

      {image && (
        <Image
          source={{ uri: image }}
          style={styles.image}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  image: {
    width: 300,
    height: 300,
    marginTop: 20,
    borderRadius: 10,
  },
});git add .