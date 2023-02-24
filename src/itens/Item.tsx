import React from "react";
import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import { styles } from "../../styles/Styles";
import { ITaskProps, useTaskList } from "../Context/TaskContext";

const Item = () => {
  const { task, removeTask } = useTaskList();
  const handleRemoveTask = (id: any) => {
    Alert.alert("Tem certeza?", "Deseja realmente excluir a tarefa?", [
      {
        text: "Cancelar",
        onPress: () => {},
      },
      {
        text: "Excluir",
        onPress: () => removeTask(id),
      },
    ]);
  };
  return (
    <View>
      <FlatList
        data={task as unknown as ITaskProps[]}
        keyExtractor={(task) => task.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.buttonTask}
            onPress={() => handleRemoveTask(item.id)}
          >
            <Text style={styles.titleTask}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Item;
