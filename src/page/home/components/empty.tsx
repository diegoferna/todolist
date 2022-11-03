import { View, Text, FlatList } from "react-native";
import { Feather } from "react-native-vector-icons";

export function EmptyList() {
  return (
    <View style={{ marginTop: 20 }}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Feather name="list" size={60} color="#808080" />
      </View>
      <Text style={{ color: "#808080", fontWeight: "bold", marginTop: 10 }}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={{ color: "#808080" }}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
