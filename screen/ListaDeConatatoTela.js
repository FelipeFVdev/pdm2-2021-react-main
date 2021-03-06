import React from "react";

import { View, StyleSheet, Text, Platform, FlatList } from "react-native";
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import BotaoCabecalho from "../components/BotaoCabecalho";
import ItemContato from "../components/ItemContato";

const ListaDeContatoTela = (props) => {
  const contatos = useSelector((estado) => estado.contatos.contatos);
  return (
    <View>
      <FlatList
        data={contatos}
        keyExtractor={(contato) => contato.id}
        renderItem={(contato) => {
          return (
            <ItemContato
              nomeContato={contato.item.nome}
              telefoneContato={contato.item.telefone}
            />
          );
        }}
      />
    </View>
  );
};

ListaDeContatoTela.navigationOptions = (dadosNavegacao) => {
  return {
    headerTitle: "Lista de Contatos",
    headerRight: (
      <HeaderButtons HeaderButtonComponent={BotaoCabecalho}>
        <Item
          title="Adicionar"
          iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
          onPress={() => dadosNavegacao.navigation.navigate("NovoContato")}
        />
      </HeaderButtons>
    ),
  };
};

export default ListaDeContatoTela;
