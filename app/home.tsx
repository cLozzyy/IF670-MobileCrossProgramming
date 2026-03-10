import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={{ flex:1, alignItems:"center", justifyContent:"center" }}>
      <Text>Navigation List</Text>

      <Link href="/(tabs)" push asChild>
        <Button title="Go to Email Screen"/>
      </Link>

      <Link href="/(tabs)" push asChild>
        <Button title="Go to User List Page"/>
      </Link>
    </View>
  );
}