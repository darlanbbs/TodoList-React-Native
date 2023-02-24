import React, { useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { styles } from "../styles/Styles";
import { TaskContext, useTaskList } from "./Context/TaskContext";
import Item from "./itens/Item";

const Home = () => {
  const [newTask, setNewTask] = React.useState("");

  const { addTask } = useTaskList();
  const handleAddTask = () => {
    if (newTask !== "") {
      const data = {
        id: String(new Date().getTime()),
        title: newTask,
      };
      addTask(data);
      setNewTask("");
    }
  };

  return (
    <View>
      <Text style={styles.text}>Lista de Tarefas!</Text>
      <TextInput
        onChangeText={setNewTask}
        placeholderTextColor="#999f"
        placeholder="Adiciona uma tarefa"
        style={styles.input}
        value={newTask}
      />
      <TouchableOpacity
        onPress={handleAddTask}
        activeOpacity={0.7}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>
      <Item />
    </View>
  );
};

export default Home;
