import { View } from "react-native";
import TodoItem from "./todoItem";

const Todos = ({ todos, removeTodo, updatedtodo }) => {
    return (
        <View>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} updatedtodo={updatedtodo} />
            ))}
        </View>
    );
};

export default Todos;