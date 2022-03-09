import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

import PokemonDetailView from "src/components/PokemonDetailView";
import PokemonDetailProfile from "src/components/PokemonDetailProfile";

import styled from "styled-components";
import Layout from "src/components/Layout";
import Pokeball from "@assets/pokeball.svg";
import { lightGrey } from "@styles/globals";

import {
  getPokemonByNameOrId,
  selectAllPokemons,
} from "@features/pokemonsSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@features/store";
import { getPokemonSpecies } from "@features/speciesSlice";

const Grid = styled.div`
  gird-area: pokemons;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  background-color: ${lightGrey};
  background-image: url(${Pokeball});
  background-repeat: no-repeat;
  background-size: 1500px;
  background-position: center;
  @media (max-width: 600px) {
    max-width: auto;
  }
`;

const PokemonDetailPage: React.FC = () => {
  const [pokemonId, setPokemonId] = useState<number>();

  const location = useLocation();
  const pathname = location.pathname;
  const convertedId = parseInt(pathname.replace("/pokemon/", ""));

  const pokemons = useSelector(selectAllPokemons);
  const dispatch = useAppDispatch();

  const pokemonElements = pokemons.map(
    (pokemon) =>
      pokemon !== null &&
      pokemon.id === pokemonId && (
        <Grid>
          <PokemonDetailView
            key={pokemon.id}
            index={pokemon.id}
            name={pokemon.name}
            type={pokemon.types[0].type.name}
            sprite={pokemon.sprites.other["official-artwork"].front_default}
          />
          <PokemonDetailProfile {...pokemon} />
        </Grid>
      )
  );

  useEffect(() => {
    dispatch(getPokemonSpecies(convertedId));
    if (pokemons.length === 0) {
      dispatch(getPokemonByNameOrId(convertedId));
    } else {
      setPokemonId(convertedId);
    }
  }, [convertedId, dispatch, pokemons.length]);

  return <Layout>{pokemonElements}</Layout>;
};

export default PokemonDetailPage;
