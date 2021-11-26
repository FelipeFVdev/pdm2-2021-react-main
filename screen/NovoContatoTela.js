import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  Button,
} from "react-native";

import { useDispatch } from "react-redux";
import * as contatosActions from "../store/contatos.action";
import Cores from "../constantes/Cores";

const NovoContatoTela = (props) => {
  const dispatch = useDispatch();
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");

  const capturarNome = (nome) => {
    setNome(nome);
  };

  const capturarTelefone = (telefone) => {
    setTelefone(telefone);
  };

  const adicionarContato = () => {
    dispatch(contatosActions.addContato(nome, telefone));
    props.navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={estilos.form}>
        <Text style={estilos.titulo}><b>Novo Contato</b></Text>
        <TextInput
          style={estilos.textInput}
          placeholder="Digite seu nome..."
          onChangeText={capturarNome}
          value={nome}
        />
        <TextInput
          style={estilos.textInput}
          placeholder="Digite seu numero de telefone..."
          onChangeText={capturarTelefone}
          value={telefone}
        />
        <Button
          // style={estilos.button}
          color={Cores.button}
          title="Adicionar Contato"
          onPress={() => {
            adicionarContato();
            setNome("");
            setTelefone("");
          }}
        />
      </View>
    </ScrollView>
  );
};

const estilos = StyleSheet.create({
  form: {
    margin: 30,
  },
  titulo: {
    fontSize: 18,
    marginBottom: 12,
    color: '#142473',
  },
  textInput: {
    borderBottomColor: "#CCC",
    borderBottomWidth: 2,
    marginBottom: 12,
    paddingVertical: 8,
  },
});

export default NovoContatoTela;
