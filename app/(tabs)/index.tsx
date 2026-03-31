import { Link, Stack } from "expo-router";
import { ScrollView } from "react-native";
import { Avatar, Card } from "react-native-paper";
import { styles } from "../AppStyles";
// 1. TAMBAH IMPORT ANIMASI DARI REANIMATED
import Animated, { FadeInDown } from "react-native-reanimated";

const userData = require("../data.json"); 

interface User {
  name: string;
  email: string;
  photo_url: string;
}

export default function UserList() {
  return (
    <>
      <Stack.Screen options={{ title: "User List" }} />

      <ScrollView contentContainerStyle={styles.container}>
        {(userData as User[]).map((user: User, index: number) => (
          <Animated.View 
            key={index} 
            entering={FadeInDown.delay(index * 200).springify()}
          >
            <Link
              href={{
                pathname: "/profile",
                params: { userName: user.name }
              }}
              asChild
            >
              <Card style={styles.card}>
                <Card.Title
                  title={user.name}
                  subtitle={user.email}
                  left={(props) => (
                    <Avatar.Image {...props} source={{ uri: user.photo_url }} />
                  )}
                />
              </Card>
            </Link>
          </Animated.View>

        ))}
      </ScrollView>
    </>
  );
}