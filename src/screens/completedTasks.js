import { View, Text, FlatList } from "react-native";
import React from "react";

const CompletedTasks = ({ todos }) => {
  const completed = todos.filter((item) => item.completed);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 25, fontWeight: "bold", marginBottom: 10,textAlign: 'center' }}>
        Completed Tasks
      </Text>
      <FlatList
        data={completed}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 18, marginVertical: 5 }}>
             {item.text}
          </Text>
        )}
        ListEmptyComponent={<Text style={{ fontSize: 14, marginVertical: 5,textAlign: 'center',color: 'red'  }}>No completed tasks.</Text>}
      />
    </View>
  );
};

export default CompletedTasks;
