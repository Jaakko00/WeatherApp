import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import WeatherIcon from "./WeatherIcon";

export default function Temperature(props) {
  return (
    <View style={styles.weather}>
      <WeatherIcon size={100} weather={props.desc} style={styles.icon} />
      <Text style={{ fontSize: 20 }}>{props.desc}</Text>
      <Text style={{ fontSize: 50 }}>{props.temp}°C</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  weather: {
    height: 200,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    color: "#06D6A0",
  },
  icon: {
    color: "#E02401",
  },
});
