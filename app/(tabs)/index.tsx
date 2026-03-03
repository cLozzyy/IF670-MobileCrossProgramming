import { Stack } from "expo-router";
import { ScrollView } from "react-native";
import { Avatar, Card } from "react-native-paper";
import { styles } from "./AppStyles";
import userData from "./data.json";

interface User {
  name: string;
  email: string;
  photo_url: string;
}

interface ScreenOptions {
  title: string;
  headerStyle: { backgroundColor: string };
  headerTintColor: string;
}

export default function App(): React.ReactElement {
  return (
    <>
      <Stack.Screen options={{ title: "User List", headerStyle: { backgroundColor: '#607D8B' }, headerTintColor: '#FFFFFF' } as ScreenOptions} />

      <ScrollView contentContainerStyle={styles.container}>
        {(userData as User[]).map((user: User, index: number) => (
          <Card style={styles.card} key={index} mode="elevated">
            <Card.Title
              title={user.name}
              titleStyle={styles.titleText}
              subtitle={user.email}
              subtitleStyle={styles.subtitleText}
              left={(props) => (
                <Avatar.Image {...props} source={{ uri: user.photo_url }} />
              )}
            />
          </Card>
        ))}
      </ScrollView>
    </>
  );
}