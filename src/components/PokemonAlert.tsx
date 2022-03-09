import React from "react";
import styled from "styled-components";
import Pikachu from "@assets/pikachu.png";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { StyledButton } from "./PokemonCardWrapper";
import PokemonCardInfo from "./PokemonCardInfo";
import { StyledImage, StyledIndex } from "./PokemonCard";

const StyledSprite = styled(StyledImage)`
  width: 150px;
  height: 165px;
  margin-bottom: -10px;
`;

const PokemonAlertWrapper = styled(StyledButton)`
  cursor: auto;
`;

interface IProps {
  message: string;
}

const PokemonAlert: React.FC<IProps> = ({ message }: IProps) => {
  return (
    <PokemonAlertWrapper>
      <PokemonCardInfo>
        <StyledSprite>
          <LazyLoadImage alt="pikachu" effect="blur" src={Pikachu} />
        </StyledSprite>
        <StyledIndex>
          <h1>#000</h1>
        </StyledIndex>
        <p>{message}</p>
      </PokemonCardInfo>
    </PokemonAlertWrapper>
  );
};

export default PokemonAlert;
