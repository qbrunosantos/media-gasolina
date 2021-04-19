import React from "react";
import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

const PaginaPrincipal = ({ navigation }) => {
  const [km, setKm] = useState();
  const [lt, setLt] = useState();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          width: "90%",
          paddingBottom: 50,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Página Principal
        </Text>
        <View
          style={{
            marginTop: 5,
            marginBottom: 10,
            borderRadius: 3,
            borderWidth: 1,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#fff",
          }}
        >
          <TextInput
            placeholder={"Quilometragem"}
            style={{
              padding: 10,
              flex: 1,
              fontSize: 16,
              color: "#222",
              justifyContent: "center",
              alignItems: "center",
            }}
            value={km}
            onChangeText={setKm}
            keyboardType="numeric"
          />
        </View>
        <View
          style={{
            marginTop: 5,
            marginBottom: 10,
            borderRadius: 3,
            borderWidth: 1,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#fff",
          }}
        >
          <TextInput
            placeholder={"Litro Consumido"}
            style={{
              padding: 10,
              flex: 1,
              fontSize: 16,
              color: "#222",
              justifyContent: "center",
              alignItems: "center",
            }}
            value={lt}
            onChangeText={setLt}
            keyboardType="numeric"
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "green",
            width: 100,
            height: 40,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            navigation.navigate("MediaGasolina", {
              km: km,
              lt: lt,
            });
          }}
        >
          <Text style={{ color: "white" }}>Calcular</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaginaPrincipal;
