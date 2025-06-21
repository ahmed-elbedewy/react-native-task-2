import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles";
import Todos from "./todos";
import React, { useState } from "react";
const StatusTodos = ({ data, removeTodo, updatedtodo }) => {
    const [filter, setFilter] = useState("All");

    const filteredTodos = data.filter((todo) => {
        if (filter === "All") return true;
        if (filter === "Completed") return todo.completed;
        if (filter === "In Progress") return !todo.completed;
    });

    return (
        <>
            <View style={styles.filterContainer}>
                <TouchableOpacity
                    style={[
                        styles.filterBtn,
                        filter === "All" && { backgroundColor: "#155724", borderColor: "#155724" },
                    ]}
                    activeOpacity={0.7}
                    onPress={() => setFilter("All")}
                >
                    <Text style={{ ...styles.filterText, ...filter === "All" && { color: "#ffffff" } }}>All</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.filterBtn,
                        filter === "Completed" && { backgroundColor: "#155724", borderColor: "#155724" },
                    ]}
                    activeOpacity={0.7}
                    onPress={() => setFilter("Completed")}
                >
                    <Text style={{ ...styles.filterText, ...filter === "Completed" && { color: "#ffffff" } }}>Completed</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.filterBtn,
                        filter === "In Progress" && { backgroundColor: "#155724", borderColor: "#155724" },
                    ]}
                    activeOpacity={0.7}
                    onPress={() => setFilter("In Progress")}
                >
                    <Text style={{ ...styles.filterText, ...filter === "In Progress" && { color: "#ffffff" } }}>In Progress</Text>
                </TouchableOpacity>
            </View>
            {filteredTodos && filteredTodos.length > 0 ? (
                <Todos todos={filteredTodos} removeTodo={removeTodo} updatedtodo={updatedtodo} />
            ) : (
                <Text style={{ fontSize: 20, fontWeight: "500", textAlign: "center", paddingTop: 50 }}>No Todos</Text>
            )}
        </>
    );
};

export default StatusTodos;