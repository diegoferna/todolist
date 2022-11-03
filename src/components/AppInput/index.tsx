import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import { dados } from "../../page/home";
import { styles } from "./styles";

interface inputProps {
  setTasksName: React.Dispatch<React.SetStateAction<string>>
  tasksName: string
  setTask: React.Dispatch<React.SetStateAction<dados[]>>
  task: dados[],
}

export function Input({setTasksName, tasksName, setTask, task}: inputProps) {

  function handlerAddTask() {
    if(task.includes({titulo: tasksName, check: 0})){
      Alert.alert("Tarefa Existente", "Já existe uma tarefa com essa descrição!")
    }

    setTask(preventTaks => [...preventTaks, {titulo: tasksName, check: false}])
    setTasksName("")
  }
 
  return (
    <View style={styles.contentFlag}>
      <TextInput
        style={styles.description}
        placeholderTextColor="#808080"
        placeholder="Adicione uma nova tarefa"
        onChangeText={setTasksName}
        value={tasksName}
      ></TextInput>
      <TouchableOpacity style={styles.button} onPress={handlerAddTask}>
        <Text style={styles.addIcon}></Text>
      </TouchableOpacity>
    </View>
  );
}
