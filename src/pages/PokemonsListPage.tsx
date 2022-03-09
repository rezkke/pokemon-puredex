import React, { useEffect, useState } from "react";

import styled from "styled-components";

import Pokeball from "@assets/pokeball.svg";
import PokemonCard from "../components/PokemonCard";
import PokemonAlert from "src/components/PokemonAlert";
import SearchBar from "../components/SearchBar";
import Layout from "../components/Layout";
import { lightGrey } from "@styles/globals";

import { InfiniteScroll } from "../components/InfiniteScroll";
import PokemonCardSkeleton from "../components/PokemonCardSkeleton";

import { useAppDispatch } from "@features/store";
import { useSelector } from "react-redux";
import {
  getPokemons,
  selectAllPokemons,
  selectHideShowAll,
  selectPokemonsStatus,
  selectRecentOffset,
  clearPokemonsReducer,
  selectPokemonError,
} from "@features/pokemonsSlice";

import {
  IDLE,
  ERROR,
  NEXT_FETCH_LIMIT,
  FIRST_FETCH_LIMIT,
  FIRST_FETCH_OFFSET,
} from "@constants";

const Wrapper = styled.div`
  grid-area: pokemons;
  overflow-y: scroll;
  flex-wrap: wrap;
  overflow-x: hidden;
  background-color: ${lightGrey};
  background-image: url(${Pokeball});
  background-repeat: no-repeat;
  background-size: 1500px;
  background-position: center;
`;

const PokemonsListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  margin-top: -20px;
`;

const PokemonsListPage: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const hideShowAll = useSelector(selectHideShowAll);
  const pokemons = useSelector(selectAllPokemons);
  const pokemonsStatus = useSelector(selectPokemonsStatus);
  const pokemonError = useSelector(selectPokemonError);
  const recentOffset = useSelector(selectRecentOffset);
  const dispatch = useAppDispatch();

  const pokemonsList = pokemons.map((pokemon) =>
    pokemon === null ? (
      <PokemonCardSkeleton />
    ) : (
      <PokemonCard
        key={pokemon.id}
        name={pokemon.name}
        index={pokemon.id}
        sprite={pokemon.sprites.other["official-artwork"].front_default}
        typeOne={pokemon.types[0].type.name}
        typeTwo={
          pokemon.types[1] === undefined ? "" : pokemon.types[1].type.name
        }
      />
    )
  );

  const getMorePokemons = async () => {
    if (
      pokemonsStatus === IDLE &&
      pokemons.length > 0 &&
      !loading &&
      hideShowAll
    ) {
      setLoading(true);
      setTimeout(() => {
        dispatch(
          getPokemons({ limit: NEXT_FETCH_LIMIT, offset: recentOffset })
        );
        setLoading(false);
      }, 1500);
    }
  };

  useEffect(() => {
    if (pokemons.length === 0 && hideShowAll) {
      dispatch(clearPokemonsReducer());
      dispatch(
        getPokemons({ limit: FIRST_FETCH_LIMIT, offset: FIRST_FETCH_OFFSET })
      );
    }
    // eslint-disable-next-line
  }, [hideShowAll]);

  return (
    <Layout>
      <Wrapper>
        <SearchBar />
        <InfiniteScroll callBack={getMorePokemons}>
          <PokemonsListWrapper>
            {pokemonsList}
            {pokemonError === ERROR && (
              <PokemonAlert message={"Sorry, we could not find your pokemon"} />
            )}
          </PokemonsListWrapper>
        </InfiniteScroll>
      </Wrapper>
    </Layout>
  );
};

export default PokemonsListPage;
