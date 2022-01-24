import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ScrollViewStickyHeader,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Loading from "./assets/Loading";
import Temperature from "./assets/Temperature";
import Info from "./assets/Info";
import Top from "./assets/Top";
import WeeksWeather from "./assets/WeeksWeather";
import * as Location from "expo-location";
const axios = require("axios");

export default function App() {
  const [locationFetched, setLocationFetched] = useState(false);
  const [weatherFetched, setWeatherFetched] = useState(false);
  const [dailyFetched, setDailyFetched] = useState(false);
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [city, setCity] = useState();
  const [temp, setTemp] = useState();
  const [desc, setDesc] = useState();
  const [feels, setFeels] = useState();
  const [windspeed, setWindspeed] = useState();
  const [humidity, setHumidity] = useState();
  const [pressure, setPressure] = useState();
  const [weekWeather, setWeekWeather] = useState();

  useEffect(() => {
    const intervalID = setInterval(() => tick(), 1000);
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      console.log("Access: " + status);
      if (status !== "granted") {
        fetchData(0, 0);
        return;
      }

      console.log("Fetching location");
      let location = await Location.getCurrentPositionAsync();
      setLocationFetched(true);

      setLat(location.coords.latitude);
      setLng(location.coords.longitude);

      fetchData(location.coords.latitude, location.coords.longitude);
      fetchWeekData(location.coords.latitude, location.coords.longitude);
    })();
  }, []);

  const handleRefresh = () => {
    console.log("Refreshing");
    fetchData(lat, lng);
    fetchWeekData(lat, lng);
  };

  const fetchData = (latitude, longitude) => {
    console.log("Fetching weather");
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=203f7c6bdab01d08240e0d2f98f62aec&units=metric`
        //`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=203f7c6bdab01d08240e0d2f98f62aec`
      )
      .then(function (response) {
        setWeatherFetched(true);
        console.log("Data received");
        setCity(response.data.name);
        setTemp(response.data.main.temp);
        setDesc(response.data.weather[0].main);
        setFeels(response.data.main.feels_like);
        setWindspeed(response.data.wind.speed);
        setHumidity(response.data.main.humidity);
        setPressure(response.data.main.pressure);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const fetchWeekData = (latitude, longitude) => {
    console.log("Fetching daily weather data");
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=203f7c6bdab01d08240e0d2f98f62aec`
      )
      .then(function (response) {
        setWeekWeather(response.data);
        setDailyFetched(true);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  tick = () => {
    setTime(new Date().toLocaleTimeString());
  };

  return (
    <View style={{backgroundColor: "#fff"}}>
      {!dailyFetched &&
        (!weatherFetched && (
          <Loading
            style={styles.icon}
            size={80}
            weather={weatherFetched}
            location={locationFetched}
          ></Loading>
        ))}
      {dailyFetched && weatherFetched && (
        <ScrollView>
          <View style={styles.container}>
            <Top time={time} city={city} handleRefresh={handleRefresh}></Top>

            <View style={styles.card}>
              <Temperature desc={desc} temp={temp}></Temperature>

              <Info
                feels={feels}
                windspeed={windspeed}
                humidity={humidity}
                pressure={pressure}
              ></Info>
            </View>

            <WeeksWeather weekWeather={weekWeather}></WeeksWeather>
          </View>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  icon: {
    color: "#E02401",
  },
  card: {
    borderWidth: 3,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 25,
    borderColor: "#E02401",
    backgroundColor: "#fff",
  }
});
