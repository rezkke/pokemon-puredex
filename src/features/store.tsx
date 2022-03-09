import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import pokemonsReducer from "./pokemonsSlice";
import evolutionChainReducer from "./evolutionChainSlice";
import speciesReducer from "./speciesSlice";

const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
  evolutionChain: evolutionChainReducer,
  species: speciesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
