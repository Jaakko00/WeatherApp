import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import WeatherIcon from "./WeatherIcon";
import Weekday from "./Weekday"

export default function Temperature(props) {
    
  return (
    <View style={styles.weekgrid}>
      <View style={styles.weekrow}>
        <Weekday
          temp={props.weekWeather.daily[1].temp.day}
          desc={props.weekWeather.daily[1].weather[0].main}
          dt={props.weekWeather.daily[1].dt}
        ></Weekday>
        <Weekday
          temp={props.weekWeather.daily[2].temp.day}
          desc={props.weekWeather.daily[2].weather[0].main}
          dt={props.weekWeather.daily[2].dt}
        ></Weekday>
        <Weekday
          temp={props.weekWeather.daily[3].temp.day}
          desc={props.weekWeather.daily[3].weather[0].main}
          dt={props.weekWeather.daily[3].dt}
        ></Weekday>
      </View>
      <View style={styles.weekrow}>
        <Weekday
          temp={props.weekWeather.daily[4].temp.day}
          desc={props.weekWeather.daily[4].weather[0].main}
          dt={props.weekWeather.daily[4].dt}
        ></Weekday>
        <Weekday
          temp={props.weekWeather.daily[5].temp.day}
          desc={props.weekWeather.daily[5].weather[0].main}
          dt={props.weekWeather.daily[5].dt}
        ></Weekday>
        <Weekday
          temp={props.weekWeather.daily[6].temp.day}
          desc={props.weekWeather.daily[6].weather[0].main}
          dt={props.weekWeather.daily[6].dt}
        ></Weekday>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  weekrow: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  weekgrid: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 60,
    marginLeft: 20,
    marginRight: 20,
  },
  icon: {
    color: "#E02401",
  },
  title: {
      fontSize: 30,
  }
});
