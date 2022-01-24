import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Refresh from "./Refresh";

export default function Temperature(props) {
  return (
    <View>
      <View style={styles.top}>
        <View style={styles.location}>
          <Text style={styles.clock}>{props.time}</Text>
          <Text style={{ fontSize: 25 }}>{props.city}</Text>
        </View>
        <Refresh
          style={styles.refresh}
          size={40}
          refresh={props.handleRefresh}
        ></Refresh>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  location: {
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 60,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  clock: {
    fontSize: 50,
  },
  refresh: {
    color: "#E02401",
    marginTop: 60,
    marginRight: 20,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
