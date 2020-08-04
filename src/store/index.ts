import { createStore, createLogger } from 'vuex';
import { RootState } from '@/models/AppModels';

const debug = process.env.NODE_ENV !== 'production';

export default createStore({
  state: {
    dataLoaded: false,
    dataError: false,
    // data: [],
  },
  getters: {
    // GetAllThings: (state:RootState) => () => state.data,
  },
  mutations: {

    // SET_THINGS(state: RootState, things: Thing[]) {
    //   state.data = things;
    //   // Set the store status fields now that the things are loaded
    //   state.dataLoaded = true;
    //   state.dataError = false;
    // },

  },
  actions: {

    // Load things from a Service
    loadAllThings({ commit }) {
      // GenericService.loadAllThings(() => {},() => {});
    },

  },
  modules: {
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
