import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Loading(props) {
  return (
    <View style={styles.loadingScreen}>
      <View style={styles.title}>
        <MaterialCommunityIcons
          style={props.style}
          size={props.size}
          name={"weather-cloudy"}
        ></MaterialCommunityIcons>
        <Text style={styles.text}>Weather App</Text>
      </View>
      <Text style={styles.loadingText}>
        {!props.location && "Fetching location data"}
        {props.location && !props.weather && "Fetching weather data"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingScreen: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  title: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200,
    flexDirection: "row",
  },
  text: {
    fontSize: 30,
  },
  loadingText: {
    fontSize: 20,
  },
});
