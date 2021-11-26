import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Cores from "../constantes/Cores";

const ItemContato = (props) => {
  return (
    <TouchableOpacity onPress={props.onSelect} style={styles.lugarItem}>
      <View style={styles.infoContainer}>
        <Text style={styles.nomeLugar}><b>{props.nomeContato}</b></Text>
        <Text style={styles.endereco}>{props.telefoneContato}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  lugarItem: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#B0C4DE",
    // marginBottom: 8,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 8,
    marginTop: 10,

  },
  infoContainer: {
    marginLeft: 25,
    width: 250,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  nomeLugar: {
    color: "#142473",
    fontSize: 18,
    marginBottom: 8,
  },
  endereco: {
    color: "#142473",
    fontSize: 16,
  },
});

export default ItemContato;
