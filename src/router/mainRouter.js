import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Home from "../screens/home";
import CompletedTasks from "../screens/completedTasks";
import { AntDesign } from "@expo/vector-icons";
import { Text } from "react-native";

const { Navigator, Screen } = createBottomTabNavigator();

const Router = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const loadTodos = async () => {
      const storedTodos = await AsyncStorage.getItem("todos");
      if (storedTodos) {
        setTodos(JSON.parse(storedTodos));
      }
    };
    loadTodos();
  }, []);

  const myStyle = {
    headerTitleAlign: "center",
    tabBarStyle: {
      position: "absolute",
      backgroundColor: "tomato",
      borderRadius: 20,
      bottom: 10,
      width: "90%",
      height: 60,
      marginLeft: "5%",
    },
  };

  return (
    <NavigationContainer>
      <Navigator screenOptions={myStyle}>
        <Screen
          name="Home"
          options={{
            tabBarIcon: ({ focused }) => (
              <AntDesign
                name="home"
                size={24}
                color={focused ? "green" : "white"}
              />
            ),
            tabBarLabel: ({ focused }) => (
              <Text style={{ color: focused ? "green" : "white", fontSize: 12 }}>
                Home
              </Text>
            ),
          }}
        >
          {() => <Home todos={todos} setTodos={setTodos} />}
        </Screen>

        <Screen
          name="Completed"
          options={{
            tabBarIcon: ({ focused }) => (
              <AntDesign
                name="bars"
                size={24}
                color={focused ? "green" : "white"}
              />
            ),
            tabBarLabel: ({ focused }) => (
              <Text style={{ color: focused ? "green" : "white", fontSize: 12 }}>
                Completed
              </Text>
            ),
          }}
        >
          {() => <CompletedTasks todos={todos} />}
        </Screen>
      </Navigator>
    </NavigationContainer>
  );
};

export default Router;
