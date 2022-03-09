import { apiClient } from "@apiClient";
import { IDLE, LOADING } from "@constants";

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "./store";
import { ISpecies } from "./types";

interface ISpeciesSliceState {
  species: ISpecies[];
  status: "idle" | "loading";
}

const initialState: ISpeciesSliceState = {
  species: [],
  status: IDLE,
};

export const getPokemonSpecies = createAsyncThunk<
  void,
  string | number,
  {
    dispatch: AppDispatch;
  }
>("pokemons/getPokemonSpecies", async (name, { dispatch }) => {
  const species = await apiClient.getPokemonSpecies(name);

  dispatch(getPokemonSpeciesReducer({ species }));
});

const speciesSlice = createSlice({
  name: "species",
  initialState,
  reducers: {
    getPokemonSpeciesReducer(
      state,
      action: PayloadAction<{ species: ISpecies }>
    ) {
      const { species } = action.payload;

      state.species.length = 0;
      state.species = state.species.concat(species);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPokemonSpecies.pending, (state) => {
      state.status = LOADING;
    });
    builder.addCase(getPokemonSpecies.fulfilled, (state) => {
      state.status = IDLE;
    });
  },
});

export const { getPokemonSpeciesReducer } = speciesSlice.actions;

export default speciesSlice.reducer;

export const selectPokemonSpecies = (state: RootState) => state.species.species;
export const selectPokemonSpeciesStatus = (state: RootState) =>
  state.species.status;
