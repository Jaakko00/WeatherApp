import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Refresh(props) {
  return (
    <View>
      <Pressable onPress={props.refresh}>
        <MaterialCommunityIcons
          style={props.style}
          size={props.size}
          name={"refresh"}
        ></MaterialCommunityIcons>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({});
