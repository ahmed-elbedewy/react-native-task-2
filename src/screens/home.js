import { KeyboardAvoidingView, Text, View } from "react-native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TodoForm from "../components/inputform";
import StatusTodos from "../components/statusTodos";
import { styles } from "../../styles";
export default function Home() {
  const [todos, setTodos] = useState([]);

  const onSaveData = async (todo) => {
    try {
      const updatedTodos = [...todos, todo];
      setTodos(updatedTodos);
      await AsyncStorage.setItem("todos", JSON.stringify(updatedTodos));
    } catch (error) {
      console.error("Error saving data", error);
    }
  };
  const removeTodo = async (id) => {
    try {
      const updatedTodos = todos.filter((item) => item.id !== id);
      setTodos(updatedTodos);
      await AsyncStorage.setItem("todos", JSON.stringify(updatedTodos));
    } catch (error) {
      console.error("Error removing todo:", error);
    }
  };

  const updatedtodo = async (id) => {
    try {
      const updatedTodos = todos.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
      setTodos(updatedTodos);
      await AsyncStorage.setItem("todos", JSON.stringify(updatedTodos));
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 35, fontWeight: "bold", marginBottom: 20 }}>
        Todo App
      </Text>
      <TodoForm onSubmit={(todo) => onSaveData(todo)} />
      <View style={styles.dividerLine} />
      <StatusTodos
        data={todos}
        removeTodo={removeTodo}
        updatedtodo={updatedtodo}
      />
    </View>
  );
}
