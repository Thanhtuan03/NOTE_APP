import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Button, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, Note } from "@/app/(tabs)/types";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  const [notes, setNotes] = useState<Note[]>([{ id: "1", content: "Ghi chú đầu tiên" }]);

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.note}
            onPress={() => navigation.navigate("EditNote", { note: item })}
          >
            <Text>{item.content}</Text>
          </TouchableOpacity>
        )}
      />
      <Button title="Thêm ghi chú mới" onPress={() => navigation.navigate("AddNote", { notes, setNotes })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  note: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#eee",
    borderRadius: 5,
  },
});
