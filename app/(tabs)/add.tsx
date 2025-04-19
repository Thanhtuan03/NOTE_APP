import { View, TextInput, Button } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { useNoteStore } from "@/app/(tabs)/store";

export default function AddNoteScreen() {
  const [content, setContent] = useState("");
  const addNote = useNoteStore((state) => state.addNote);
  const router = useRouter();

  const handleSave = () => {
    if (content.trim()) {
      addNote(content);
      router.back();
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        placeholder="Nhập ghi chú..."
        value={content}
        onChangeText={setContent}
        style={{ borderWidth: 1, padding: 10, marginBottom: 20 }}
      />
      <Button title="Lưu" onPress={handleSave} />
    </View>
  );
}
