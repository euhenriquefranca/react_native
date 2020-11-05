import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import {css} from "../assets/css/Css";

export default function Home(props) {
  console.log(props);
  return (
    <View style={css.container2}>
      <TouchableOpacity style={css.button__home} onPress={() => props.navigation.navigate("Login")}>
        <Image source={require("../assets/img/buttonLogo.png")} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("Rastreio")}>
        <Image source={require("../assets/img/buttonAgenda.png")} />
      </TouchableOpacity>
    </View>
  );
}
