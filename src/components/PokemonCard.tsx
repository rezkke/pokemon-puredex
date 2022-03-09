import React from "react";
import { useHistory } from "react-router";

import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import Badges from "./Badges";
import PokemonCardWrapper from "./PokemonCardWrapper";
import PokemonCardInfo from "./PokemonCardInfo";
import { formatIndex } from "@utils/formatIndex";

export const StyledImage = styled.div`
  margin: 20px 0 15px 0px;
  justify-self: center;
  z-index: 2;
  grid-row-start: 1;
  grid-column-start: 1;
  img {
    height: 130px;
    width: 130px;
  }
  @media (max-width: 539px) {
    img {
      height: 110px;
      width: 110px;
    }
  }
`;

export const StyledIndex = styled.div`
  z-index: 1;
  font-size: 60px;
  font-weight: 600;
  color: #e9e9e9;
  grid-row-start: 1;
  grid-column-start: 1;
  @media (max-width: 539px) {
    font-size: 40px;
  }
`;

interface IPokemon {
  name: string;
  index: number;
  typeOne: string;
  typeTwo: string;
  sprite: string;
}

const PokemonCard: React.FC<IPokemon> = ({
  name,
  index,
  typeOne,
  typeTwo,
  sprite,
}: IPokemon) => {
  const history = useHistory();

  return (
    <PokemonCardWrapper click={() => history.push(`/pokemon/${index}`)}>
      <PokemonCardInfo>
        <StyledImage>
          <LazyLoadImage alt={name} effect="blur" src={sprite} />
        </StyledImage>

        <StyledIndex>
          <h1>{formatIndex(index)}</h1>
        </StyledIndex>
        <p>{name.toUpperCase()}</p>

        <Badges typeOne={typeOne} typeTwo={typeTwo} />
      </PokemonCardInfo>
    </PokemonCardWrapper>
  );
};

export default PokemonCard;
