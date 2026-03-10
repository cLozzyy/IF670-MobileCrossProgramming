import { Link, useLocalSearchParams } from "expo-router";
import { Button, Text, View } from "react-native";
import { Avatar } from "react-native-paper";
import userData from "./data.json";

export default function Profile() {

  const { userName } = useLocalSearchParams<{ userName: string }>();

  const user = userData.find((u) => u.name === userName);

  return (
    <View style={{ flex:1, alignItems:"center", justifyContent:"center" }}>

      <Avatar.Image
        size={120}
        source={{ uri: user?.photo_url }}
      />

      <Text style={{ fontSize:18, marginTop:10 }}>
        {user?.name}'s Profile
      </Text>

      <Text>{user?.email}</Text>

      <Link href="/home" push asChild>
        <Button title="Go to Home Screen"/>
      </Link>

    </View>
  );
}