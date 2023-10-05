import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import EditableTimer from "./components/EditableTimer";
import ToggleableTimerForm from "./components/ToggleableTimerForm";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.appContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Timers</Text>
          <ScrollView style={styles.timerList}>
            <ToggleableTimerForm isOpen={false} />
            <EditableTimer
              id="1"
              title="Mow the lawn"
              project="House Chroes"
              elapsed="8986300"
              isRunning
            />
            <EditableTimer
              id="2"
              title="Bake squash"
              project="Kitchen Chores"
              elapsed="3890985"
              editFormOpen
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    paddingTop: 35,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "D6D7DA"
  },
});
