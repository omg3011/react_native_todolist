import { React, useState } from "react";

import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TextInput,
} from "react-native";
import Todo from "./Todo";

const TodoList = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState(["First Entry"]);

  const addItem = () => {
    const updatedList = list;
    updatedList.push(text);
    setList(updatedList);
    setText("");
  };

  const deleteItem = (index) => {
    const updatedList = list.filter((todo) => todo !== index);
    setList(updatedList);
  };

  return (
    <View style={{ width: "80%", marginBottom: 60 }}>
      <Text style={[styles.align, styles.font, styles.background]}>
        To-Do List
      </Text>
      <ScrollView>
        {list.map((x, index) => (
          <Todo key={index} index={index} item={x} deleteItem={deleteItem} />
        ))}
      </ScrollView>

      <View>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={(t) => setText(t)}
        />
        <Button title="Add Todo" onPress={addItem}></Button>
      </View>
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  align: {
    alignSelf: "center",
  },
  font: {
    fontSize: 20,
  },
  background: {
    color: "black",
    // backgroundColor: "#fff000",
  },
  input: {
    borderRadius: 8,
    borderWidth: 2,
    marginBottom: 10,
    padding: 4,
  },
});
