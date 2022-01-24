import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";


export default function Temperature(props) {
  return (
    <View>
      <View style={styles.info}>
        <View style={styles.infoBox}>
          <Text style={styles.text}>Feels like</Text>
          <MaterialCommunityIcons
            size={48}
            name="thermometer"
            style={styles.icon}
          />
          <Text style={styles.icon}>{props.feels}°C</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.text}>Wind</Text>
          <MaterialCommunityIcons
            size={48}
            name="weather-windy"
            style={styles.icon}
          />
          <Text style={styles.icon}>{props.windspeed}m/s</Text>
        </View>
      </View>
      <View style={styles.info}>
        <View style={styles.infoBox}>
          <Text style={styles.text}>Humidity</Text>
          <MaterialCommunityIcons
            size={48}
            name="water-percent"
            style={styles.icon}
          />
          <Text style={styles.icon}>{props.humidity}%</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.text}>Pressure</Text>
          <MaterialCommunityIcons
            size={48}
            name="speedometer-slow"
            style={styles.icon}
          />
          <Text style={styles.icon}>{props.pressure} hPa</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  info: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    margin: 20,
    flexDirection: "row",
  },
  infoBox: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderColor: "#E02401",
    backgroundColor: "#fff",
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    color: "#E02401",
    fontWeight: "bold",
  },
  text: {
    color: "#000",
    fontWeight: "bold",
  },
});
