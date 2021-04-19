import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const MediaGasolina = ({ navigation, route }) => {
  const km = route.params?.km;
  const lt = route.params?.lt;

  const calculaMedia = () => {
    let media = 0.0;
    media = km / lt;
    return media;
  };

  const media = calculaMedia();

  const verificaConsumo = () => {
    if (media > 12) {
      return "Consumo está no nível A";
    } else if (media <= 12 && media > 10) {
      return "Consumo está no nível B";
    } else if (media <= 10 && media > 8) {
      return "Consumo está no nível C";
    } else if (media <= 8 && media > 4) {
      return "Consumo está no nível D";
    } else {
      return "Consumo está no nível E";
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: "90%",
          }}
        >
          <Text style={{ fontSize: 25, marginTop: 15 }}>
            Média: {media.toFixed(2).replace(".", ",")} Km/L
          </Text>
          <Text style={{ fontSize: 20 }}>{verificaConsumo()}</Text>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "green",
            width: 100,
            height: 40,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 40,
          }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={{ color: "white" }}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MediaGasolina;
