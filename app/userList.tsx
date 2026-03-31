import { Link } from "expo-router";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Avatar, Card, Text } from "react-native-paper";

// 1. IMPORT LIBRARY ANIMASI DI SINI
import Animated, { FadeInDown } from "react-native-reanimated";

// Pastikan lokasi import data.json kamu sudah benar
const userData = require("./data.json"); 

export default function UserList() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {userData.map((user: any, index: number) => (
        <Animated.View 
          key={index} 
          entering={FadeInDown.delay(index * 200).springify()}
        >
          <Card style={styles.card}>
            <Link
              href={{
                pathname: "/profile",
                params: { userName: user.name },
              }}
              push
              asChild
            >
              <TouchableOpacity>
                <Card.Content style={styles.cardContent}>
                  <Avatar.Image
                    size={70}
                    source={{ uri: user.photo_url }}
                  />
                  <View style={styles.textContainer}>
                    <Text variant="titleMedium" style={{ fontWeight: 'bold' }}>
                      {user.name}
                    </Text>
                    <Text variant="bodyMedium" style={{ color: 'gray' }}>
                      {user.email}
                    </Text>
                  </View>
                </Card.Content>
              </TouchableOpacity>
            </Link>
          </Card>
        </Animated.View>

      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f1f5f9",
    flexGrow: 1,
  },
  card: {
    marginBottom: 12,
    backgroundColor: "white",
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    marginLeft: 16,
  },
});