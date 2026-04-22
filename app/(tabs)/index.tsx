import { Camera } from "expo-camera";
import * as FileSystem from "expo-file-system";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import { useState } from "react";
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [image, setImage] = useState<string | null>(null);

  const openCamera = async () => {
    const permission = await Camera.requestCameraPermissionsAsync();
    if (!permission.granted) {
      Alert.alert("Permission Denied", "Camera permission is required!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const openGallery = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert("Permission Denied", "Gallery permission is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const saveImage = async () => {
    if (!image) {
      Alert.alert("Error", "Pilih atau ambil gambar terlebih dahulu!");
      return;
    }

    try {
      const permission = await MediaLibrary.requestPermissionsAsync();
      if (!permission.granted) {
        Alert.alert("Izin Ditolak", "Dibutuhkan izin untuk menyimpan foto ke galeri.");
        return;
      }

      const filename = image.split('/').pop() || 'my_saved_image.jpg';
      const destinationPath = FileSystem.documentDirectory + filename;

      await FileSystem.copyAsync({
        from: image,
        to: destinationPath,
      });

      await MediaLibrary.saveToLibraryAsync(destinationPath);
      
      Alert.alert("Berhasil!", "Gambar telah sukses disimpan ke galeri kamu.");
    } catch (error) {
      console.log(error);
      Alert.alert("Gagal", "Terjadi kesalahan saat menyimpan gambar.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Jangan lupa sesuaikan NIM */}
      <Text style={styles.text}>
        Nicholas Andre Natalino - [Isi NIM Di Sini]
      </Text>

      <View style={styles.button}>
        <Button title="OPEN CAMERA" onPress={openCamera} />
      </View>
      
      <View style={styles.button}>
        <Button title="OPEN GALLERY" onPress={openGallery} />
      </View>

      {image && (
        <>
          <Image source={{ uri: image }} style={styles.image} />
          <View style={styles.button}>
            <Button title="SAVE IMAGE" onPress={saveImage} color="#28a745" />
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  text: {
    marginBottom: 20,
    fontSize: 16,
    fontWeight: "bold"
  },
  button: {
    marginVertical: 5,
    width: 200,
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
    resizeMode: "cover"
  },
});