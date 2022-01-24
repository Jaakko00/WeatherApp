import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function WeatherIcon(props) {
  const getIcon = () => {
    switch (props.weather) {
      case "Clouds":
        return "weather-cloudy";
        break;
      case "Clear":
        return "weather-sunny";
        break;
      case "Mist":
        return "weather-fog";
        break;
      case "Fog":
        return "weather-fog";
        break;
      case "Snow":
        return "weather-snowy";
        break;
      case "Rain":
        return "weather-pouring";
        break;
      case "Drizzle":
        return "weather-rainy";
        break;
      case "Thunderstorm":
        return "weather-lightning";
        break;
      default:
        return "weather-cloudy";
    }
  };
  return (
    <MaterialCommunityIcons
      style={props.style}
      size={props.size}
      name={getIcon()}
    ></MaterialCommunityIcons>
  );
}
