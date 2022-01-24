import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import WeatherIcon from "./WeatherIcon";
import moment from "moment";

export default function Temperature(props) {
  return (
    <View style={styles.dayBox}>
      <Text style={styles.text}>{moment(props.dt * 1000).format("ddd")}</Text>
      <WeatherIcon size={48} weather={props.desc} style={styles.icon} />
      <Text style={styles.icon}>{props.temp}°C</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  dayBox: {
    width: 100,
    height: 100,
    borderRadius: 20,
    margin: 8,
    color: "#525252",
    borderColor: "#525252",
    backgroundColor: "#fff",
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    color: "#525252",
    fontWeight: "bold",
  },
  text: {
    color: "#525252",
    fontWeight: "bold",
  },
});
