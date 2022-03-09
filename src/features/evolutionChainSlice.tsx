import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "./store";
import { apiClient } from "@apiClient";

import { IEvolutions } from "./types";
import { IDLE } from "@constants";

interface IEvolutionsSliceState {
  evolutionChain: IEvolutions[];
  status: "idle" | "loading";
  error: string | null;
}

const initialState: IEvolutionsSliceState = {
  evolutionChain: [],
  status: IDLE,
  error: null,
};

export const getEvolutionChain = createAsyncThunk<
  void,
  string | number,
  {
    dispatch: AppDispatch;
  }
>("evolutions/getEvolutionChain", async (id, { dispatch }) => {
  const response = await apiClient.getPokemonSpecies(id);

  const evolutionChainId = parseInt(
    response.evolution_chain.url.replace(
      "https://pokeapi.co/api/v2/evolution-chain/",
      ""
    )
  );
  if (evolutionChainId) {
    const evolutionChain = await apiClient.getEvolutionChain(evolutionChainId);

    dispatch(getEvolutionChainReducer({ evolutionChain }));
  }
});

const evolutionChainSlice = createSlice({
  name: "evolutionChain",
  initialState,
  reducers: {
    getEvolutionChainReducer(
      state,
      action: PayloadAction<{ evolutionChain: IEvolutions }>
    ) {
      const { evolutionChain } = action.payload;

      state.evolutionChain.length = 0;
      state.evolutionChain.push(evolutionChain);
    },
  },
});

export const { getEvolutionChainReducer } = evolutionChainSlice.actions;

export default evolutionChainSlice.reducer;

export const selectEvolutionChain = (state: RootState) =>
  state.evolutionChain.evolutionChain;
