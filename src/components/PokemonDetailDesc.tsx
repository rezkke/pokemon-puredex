import React from "react";

import styled from "styled-components";

import { useSpring, animated } from "react-spring";

import { selectPokemonSpecies } from "@features/speciesSlice";
import { useSelector } from "react-redux";
import { IPokemon } from "@features/types";

import { purple } from "@styles/globals";
import { formatIndex } from "@utils/formatIndex";
import Badges from "./Badges";

const Wrapper = styled(animated.div)`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  font-size: 20px;
  color: #636363;
  span {
    margin-bottom: 20px;
  }
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const Label = styled.span`
  display: flex;
  font-weight: 500;
  margin-bottom: 20px;
  p {
    margin: 0px 10px 0 10px;
    font-weight: 600;
  }
  h1 {
    font-size: 20px;
    margin-bottom: -10px;
    color: ${purple};
  }
`;

const PokemonDetailDesc: React.FC<IPokemon> = ({ ...props }: IPokemon) => {
  const pokemonSpecies = useSelector(selectPokemonSpecies);

  const TransitionEffect = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  const pokemonElements = pokemonSpecies.map((species) => {
    return (
      <React.Fragment>
        <Label>
          <h1>{props.name.toUpperCase()}</h1>
        </Label>
        <span>{species.flavor_text_entries[17].flavor_text}</span>
        <Label>
          Index: <p>{formatIndex(props.id)}</p>
        </Label>
        <Label>
          Weight: <p>{(props.weight * 0.1).toFixed(1)} kg</p>
        </Label>
        <Label>
          Height: <p>{(props.height * 0.1).toFixed(1)} m </p>
        </Label>
        <Label>
          Capture Rate: <p>{species.capture_rate} </p> of 255
        </Label>
        <Label>
          Happiness: <p>{species.base_happiness} </p> of 255
        </Label>
        <Label>
          Habitat: <p>{species.habitat?.name.toUpperCase() || "UNKNOWN"}</p>
        </Label>
        <Label>
          Type: &nbsp;
          <Badges
            typeOne={props.types[0].type.name}
            typeTwo={props.types[1] ? props.types[1].type.name : ""}
          />
        </Label>
      </React.Fragment>
    );
  });

  return <Wrapper style={TransitionEffect}>{pokemonElements}</Wrapper>;
};

export default PokemonDetailDesc;
