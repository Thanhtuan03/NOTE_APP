import { View,Text, TextInput, Button } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useNoteStore } from "@/app/(tabs)/store";
import { useState, useEffect } from "react";
export default function EditNoteScreen() {
  const { id } = useLocalSearchParams();
  const note = useNoteStore((state) => state.notes.find((n) => n.id === id));
  const editNote = useNoteStore((state) => state.editNote);
  const [content, setContent] = useState(note?.content || "");
  const router = useRouter();

  const handleSave = () => {
    if (id && content.trim()) {
      editNote(id.toString(), content);
      router.back();
    }
  };

  if (!note) return <Text style={{ padding: 20 }}>Không tìm thấy ghi chú</Text>;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        value={content}
        onChangeText={setContent}
        style={{ borderWidth: 1, padding: 10, marginBottom: 20 }}
      />
      <Button title="Lưu chỉnh sửa" onPress={handleSave} />
    </View>
  );
}
