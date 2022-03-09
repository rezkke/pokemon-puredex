import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { apiClient } from "@apiClient";
import { RootState, AppDispatch } from "./store";
import { IPokemon } from "./types";
import {
  NEXT_FETCH_LIMIT,
  INITIAL_RECENT_OFFSET,
  IDLE,
  LOADING,
  ERROR,
} from "@constants";

export interface IProps {
  limit: number;
  offset: number;
}

interface IPokemonsSliceState {
  pokemons: (IPokemon | null)[];
  recentOffset: number;
  hideShowAll: boolean;
  status: "idle" | "loading";
  error: string | null;
}

const initialState: IPokemonsSliceState = {
  pokemons: [],
  recentOffset: INITIAL_RECENT_OFFSET,
  hideShowAll: true,
  status: IDLE,
  error: null,
};

export const getPokemonByNameOrId = createAsyncThunk<
  void,
  string | number,
  {
    dispatch: AppDispatch;
  }
>("pokemons/getPokemonByNameOrId", async (name, { dispatch }) => {
  const pokemon = await apiClient.getPokemon(name);

  dispatch(getPokemonByNameOrIdReducer({ pokemon }));
});

export const getPokemons = createAsyncThunk<
  void,
  IProps,
  { dispatch: AppDispatch; state: RootState }
>(
  "pokemons/getPokemons",
  async (limits, { dispatch }) => {
    const { limit, offset } = limits;
    const data = await apiClient.getMultiplePokemons(limit, offset);

    dispatch(initializePokemonsReducer({ limit }));
    for await (const [index, { name }] of data.entries()) {
      const pokemon = await apiClient.getPokemon(name);
      dispatch(
        getPokemonsReducer({
          pokemon: pokemon,
          limit,
          index,
        })
      );
    }
  },
  {
    condition: (_, { getState }) => {
      const { pokemons } = getState();

      if (!pokemons.hideShowAll || pokemons.status === LOADING) {
        return false;
      }
      return;
    },
  }
);

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    getPokemonByNameOrIdReducer(
      state,
      action: PayloadAction<{ pokemon: IPokemon }>
    ) {
      const { pokemon } = action.payload;

      state.pokemons.length = 0;
      state.hideShowAll = false;
      state.pokemons.push(pokemon);
      state.error = null;
    },
    getPokemonsReducer(
      state,
      action: PayloadAction<{ pokemon: IPokemon; limit: number; index: number }>
    ) {
      const { pokemon, limit, index } = action.payload;

      state.pokemons[state.pokemons.length - (limit - index)] = pokemon;
    },
    initializePokemonsReducer(state, action: PayloadAction<{ limit: number }>) {
      const { limit } = action.payload;

      state.recentOffset = state.recentOffset + NEXT_FETCH_LIMIT;
      const arrayOfNulls = new Array<null>(limit).fill(null);
      state.pokemons = state.pokemons.concat(arrayOfNulls);
    },
    clearPokemonsReducer(state) {
      state.error = null;
      state.pokemons.length = 0;
      state.hideShowAll = true;
      state.recentOffset = INITIAL_RECENT_OFFSET;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPokemonByNameOrId.pending, (state) => {
      state.error = null;
      state.status = LOADING;
    });
    builder.addCase(getPokemonByNameOrId.rejected, (state) => {
      state.pokemons.length = 0;
      state.hideShowAll = false;
      state.status = IDLE;
      state.error = ERROR;
    });
    builder.addCase(getPokemonByNameOrId.fulfilled, (state) => {
      state.error = null;
      state.status = IDLE;
    });
    builder.addCase(getPokemons.pending, (state) => {
      state.error = null;
      state.status = LOADING;
    });
    builder.addCase(getPokemons.fulfilled, (state) => {
      state.error = null;
      state.status = IDLE;
    });
  },
});

export default pokemonsSlice.reducer;

export const {
  getPokemonsReducer,
  getPokemonByNameOrIdReducer,
  clearPokemonsReducer,
  initializePokemonsReducer,
} = pokemonsSlice.actions;

export const selectRecentOffset = (state: RootState) =>
  state.pokemons.recentOffset;
export const selectHideShowAll = (state: RootState) =>
  state.pokemons.hideShowAll;
export const selectAllPokemons = (state: RootState) => state.pokemons.pokemons;
export const selectPokemonsStatus = (state: RootState) => state.pokemons.status;
export const selectPokemonError = (state: RootState) => state.pokemons.error;
