import React from "react";
import styled from "styled-components";

import { lightBoxShadow } from "@styles/globals";
import { animated, useSpring } from "react-spring";

import { checkPokemonType } from "@utils/checkPokemonType";
import { formatIndex } from "@utils/formatIndex";
import { IProps } from "@utils/checkPokemonType";

const Wrapper = styled.div<IProps>`
  display: grid;
  place-items: center;
  grid-template-columns: 1fr;
  height: 600px;
  width: 600px;
  border-radius: 30px 30px 30px 0;
  box-shadow: ${lightBoxShadow};
  ${({ pokemonType, light }) => checkPokemonType(pokemonType, light)};
  @media (max-width: 600px) {
    max-height: 480px;
    min-width: 250px;
    max-width: 390px;
    border-radius: 0px 0px 30px 30px;
  }
`;

const StyledImage = styled(animated.img)`
  z-index: 3;
  height: 250px;
  width: 250px;
  grid-row-start: 1;
  grid-column-start: 1;
  @media (max-width: 600px) {
    height: 200px;
    width: 200px;
  }
`;

const StyledName = styled.div`
  z-index: 0;
  font-size: 55px;
  font-weight: 600;
  margin-bottom: 300px;
  color: #636363;
  top: 50px;
  grid-row-start: 1;
  grid-column-start: 1;
  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

const StyledIndex = styled.div`
  z-index: 1;
  font-size: 100px;
  font-weight: 600;
  color: #f2f2f2;
  grid-row-start: 1;
  grid-column-start: 1;
  @media (max-width: 600px) {
    font-size: 65px;
  }
`;

const Round = styled(animated.div)`
  z-index: 2;
  background: transparent;
  opacity: 0.3;
  background-color: #f2f2f2;
  height: 350px;
  width: 350px;
  border-radius: 50%;
  grid-row-start: 1;
  grid-column-start: 1;
  @media (max-width: 600px) {
    height: 320px;
    width: 320px;
  }
`;

interface IPokemon {
  name: string;
  index: number;
  type: string;
  sprite: string;
}

const PokemonDetailView: React.FC<IPokemon> = ({
  name,
  index,
  type,
  sprite,
}: IPokemon) => {
  const calc = (x: number, y: number) => [
    x - window.innerWidth / 2,
    y - window.innerHeight / 2,
  ];
  const trans1 = (x: number, y: number) =>
    `translate3d(${x / 10}px,${y / 10}px,0)`;
  const trans2 = (x: number, y: number) =>
    `translate3d(${x / 10}px,${y / 10}px,0)`;

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  return (
    <Wrapper
      pokemonType={type}
      light
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <StyledName>{name.toUpperCase()}</StyledName>

      <StyledImage src={sprite} style={{ transform: props.xy.to(trans2) }} />

      <Round style={{ transform: props.xy.to(trans1) }} />

      <StyledIndex>
        <h1>{formatIndex(index)}</h1>
      </StyledIndex>
    </Wrapper>
  );
};

export default PokemonDetailView;
