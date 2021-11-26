export const ADD_CONTATO = "ADD_CONTATO";

export const addContato = (nomeContato, telefoneContato) => {
  return {
    type: ADD_CONTATO,
    dadosContato: {
      nomeContato: nomeContato,
      telefoneContato: telefoneContato,
    },
  };
};
