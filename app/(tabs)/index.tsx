import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useNoteStore } from "@/app/(tabs)/store";

export default function HomeScreen() {
  const router = useRouter();
  const rawNotes = useNoteStore((state) => state.notes);

  // Sắp xếp ghi chú mới nhất lên đầu
  const sortedNotes = [...rawNotes].sort((a, b) => {
    return b.createdAt.localeCompare(a.createdAt);
  });

  return (
    <View style={styles.container}>
      {/* Tiêu đề */}
      <Text style={styles.title}>SIMPLE NOTES</Text>

      <FlatList
        data={sortedNotes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => router.push({ pathname: "/edit", params: { id: item.id } })}
            style={styles.noteCard}
          >
            <Text style={styles.noteContent}>{item.content}</Text>
            <Text style={styles.noteDate}>{item.createdAt}</Text>
          </TouchableOpacity>
        )}
      />
      
      {/* Nút thêm ghi chú */}
      <TouchableOpacity style={styles.addButton} onPress={() => router.push("/add")}>
        <Text style={styles.addButtonText}>Thêm ghi chú</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f4f4f4",  // Màu nền nhẹ nhàng
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",  // In đậm tiêu đề
    color: "#6200ea",  // Màu tím cho tiêu đề
    textAlign: "center",  // Căn giữa tiêu đề
    marginBottom: 20,  // Khoảng cách dưới tiêu đề
  },
  noteCard: {
    backgroundColor: "#fff",  // Thẻ ghi chú có nền trắng
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,  // Bo góc để nhìn mềm mại hơn
    shadowColor: "#000",  // Thêm bóng cho thẻ
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  noteContent: {
    fontSize: 16,
    fontWeight: "bold",  // In đậm cho nội dung ghi chú
    color: "#333",  // Màu chữ đen
    marginBottom: 5,  // Khoảng cách dưới cho nội dung
  },
  noteDate: {
    fontSize: 12,
    color: "#888",  // Màu chữ ghi chú nhỏ
  },
  addButton: {
    backgroundColor: "#6200ea",  // Màu tím cho nút
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,  // Khoảng cách từ cuối danh sách
  },
  addButtonText: {
    color: "#fff",  // Màu chữ trắng
    fontSize: 16,
    fontWeight: "bold",
  },
});
