import { createStore } from "vuex";

export default createStore({
  state: {
    orders: [],
    inventory: {
      flavors : [
        { id: 1, desc: "Vainilla", inventory: 0},
        { id: 2, desc: "Chocolate", inventory: 3},
        { id: 3, desc: "Fresa", inventory: 0},
        { id: 4, desc: "Café", inventory: 0},
        { id: 5, desc: "Mil Hojas", inventory: 0},
        { id: 6, desc: "Piñon", inventory: 0},
      ],
      ornaments: [
        { id: 1, desc: "Fondant", inventory: 0},
        { id: 2, desc: "Betún", inventory: 0},
        { id: 3, desc: "Chispas", inventory: 0},
        { id: 4, desc: "Panditas", inventory: 0},
        { id: 5, desc: "M&Ms", inventory: 10},
      ]
    }
  },
  getters: {
    getFlavors(state) {
      return state.inventory.flavors;
    },
    getOrnaments(state) {
      return state.inventory.ornaments;
    }
  },
  mutations: {},
  actions: {
    saveInventory ({commit}, newInventory) {
      console.log(newInventory);
    }
  },
  modules: {},
});
