import React, { useState } from "react";
import styled from "styled-components";

import { SearchButton, SearchButtonClicked } from "./SearchButton";
import SearchInput from "./SearchInput";
import SearchAllButton from "./SearchAllButton";

import { useAppDispatch } from "@features/store";
import {
  getPokemonByNameOrId,
  selectPokemonsStatus,
} from "@features/pokemonsSlice";
import { useSelector } from "react-redux";
import { LOADING } from "@constants";

const SearchBarContainer = styled.div`
  grid-area: pokemons;
  display: flex;
  justify-content: center;
  height: 190px;
  width: 100%;
  align-items: center;
  div {
    position: relative;
  }
`;

const Searchbar: React.FC = () => {
  const [pokemonNameOrId, setPokemonNameOrId] = useState<string>("");

  const pokemonsStatus = useSelector(selectPokemonsStatus);
  const dispatch = useAppDispatch();

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const enteredInput = event.target.value;
    setPokemonNameOrId(enteredInput);
  };

  const searchPokemonHandler = () => {
    if (pokemonNameOrId) {
      dispatch(getPokemonByNameOrId(pokemonNameOrId.toLowerCase()));
    }
  };

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (pokemonNameOrId) {
        dispatch(getPokemonByNameOrId(pokemonNameOrId.toLowerCase()));
      }
    }
  };

  return (
    <SearchBarContainer>
      <div>
        <SearchAllButton />
        <SearchInput
          placeholder="Enter the name or id of the pokémon"
          onChange={inputHandler}
          type="text"
          value={pokemonNameOrId}
          onKeyDown={keyDownHandler}
        />

        {pokemonsStatus === LOADING || pokemonNameOrId === "" ? (
          <SearchButtonClicked>Search</SearchButtonClicked>
        ) : (
          <SearchButton onClick={searchPokemonHandler}>Search</SearchButton>
        )}
      </div>
    </SearchBarContainer>
  );
};

export default Searchbar;
