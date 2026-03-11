import { Text, TextInput, View } from "react-native";

interface CustomProps {
  input: string;
  onChange: (val: string) => void;
}

export const CustomTextInput = ({ input, onChange }: CustomProps) => {
  return (
    <View style={{ width: 200 }}>
      <Text>Name:</Text>
      <TextInput
        placeholder="Input your name"
        style={{
          borderColor: "black",
          borderWidth: 1,
          padding: 10,
          borderRadius: 8
        }}
        value={input}
        onChangeText={onChange}
      />
    </View>
  );
};

export const NIMInput = ({ input, onChange }: CustomProps) => {
  return (
    <View style={{ width: 200 }}>
      <Text>NIM:</Text>
      <TextInput
        placeholder="Input your NIM / Student ID"
        style={{
          borderColor: "black",
          borderWidth: 1,
          padding: 10,
          borderRadius: 8
        }}
        value={input}
        keyboardType="numeric"
        onChangeText={onChange}
      />
    </View>
  );
};