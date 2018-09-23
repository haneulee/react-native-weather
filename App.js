import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <ActivityIndicator />
        <Text>hello</Text> */}
        <View style={styles.redView} />
        <View style={styles.yellowView} />
        <View style={styles.redView} />
        <View style={styles.yellowView} />
        <View style={styles.redView} />
        <View style={styles.yellowView} />
        <View style={styles.redView} />
        <View style={styles.yellowView} />
        <View style={styles.redView} />
        <View style={styles.yellowView} />
        <View style={styles.redView} />
        <View style={styles.yellowView} />
        <View style={styles.redView} />
        <View style={styles.yellowView} />
        <View style={styles.redView} />
        <View style={styles.yellowView} />
        <View style={styles.redView} />
        <View style={styles.yellowView} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between", //space-around, flex-start, flex-end, center
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  redView: {
    // flex: 1,
    height: 50,
    width: 50,
    backgroundColor: "red"
  },
  yellowView: {
    // flex: 1,
    height: 50,
    width: 50,
    backgroundColor: "yellow"
    // alignSelf: "flex-end"
  }
});
