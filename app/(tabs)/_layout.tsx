import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ 
        tabBarActiveTintColor: "#3b82f6", 
        headerStyle: { backgroundColor: '#f8fafc' },
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
        }}
      />
      {/* Nanti kita tambah layar Report dan Notif di sini */}
    </Tabs>
  );
}