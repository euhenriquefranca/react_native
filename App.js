import React, { useState, useEffect } from "react";
import { Alert, Button, Text, View } from "react-native";
import { css } from "./assets/css/Css";
import Page from "./views/Page";

export default function App() {
  const [product, setProduct] = useState("bola");
  const [quantity, setQuantity] = useState(0);

  //substitui o component DidMount
  useEffect(() => { // Hooks useEffect = trabalhar com efeitos colaterais
    if(quantity > 0){
      Alert.alert('Novo produto foi adicionado')
    }
  }, [quantity]);
  const props = {
    empresa: "Webdesign em Foco",
    name: "Thiago",
    produto: product,
    quantidade: quantity
  };
  return (
    <View style={css.container}>
      <Text>{product}</Text>
      <Page {...props} />
      <Button title='Adicionar produtos' onPress={()=> setQuantity(quantity + 1)} />
    </View>
  );
}
