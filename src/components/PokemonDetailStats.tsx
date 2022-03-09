import React from "react";

import { IPokemon } from "@features/types";
import styled from "styled-components";

import ProgressBar from "./ProgressBar";

import { useSpring, animated } from "react-spring";

const Wrapper = styled(animated.div)`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    margin-bottom: 10px;
  }
  td,
  th {
    width: 100%;
  }
  tr {
    align-items: center;
    margin-bottom: 20px;
  }
`;

const Label = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #636363;
  white-space: nowrap;
  p {
    font-weight: 600;
  }
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const PokemonDetailStats: React.FC<IPokemon> = ({ ...props }: IPokemon) => {
  const TransitionEffect = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  const statElements = props.stats.map((stat) => {
    return (
      <tr>
        <td>
          <Label>{stat.stat.name.toUpperCase()}: </Label>
        </td>
        <td>
          <ProgressBar baseStat={stat.base_stat} />
        </td>
      </tr>
    );
  });

  return (
    <Wrapper style={TransitionEffect}>
      <tr>
        <th>
          <Label>
            <p>STATISTIC NAME</p>
          </Label>
        </th>
        <th>
          <Label>
            <p>MAX 255</p>
          </Label>
        </th>
      </tr>

      {statElements}
    </Wrapper>
  );
};

export default PokemonDetailStats;
