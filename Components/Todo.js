import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Todo = (props) => {
  return (
    <View style={[styles.item, { margin: 8, padding: 8 }]}>
      <Text>{props.item}</Text>
      <Button
        color={"red"}
        title={"Delete"}
        onPress={() => props.deleteItem(props.item)}
      />
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "whitesmoke",
  },
});