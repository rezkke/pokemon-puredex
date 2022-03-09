import styled from "styled-components";
import { checkPokemonType } from "@utils/checkPokemonType";
import React from "react";

interface IProps {
  type: string;
  light?: boolean;
}

export const Badge = styled.div<IProps>`
  font-size: 17px;
  font-weight: 600;
  text-align: center;
  display: inline-block;
  text-transform: uppercase;
  ${({ type }) => checkPokemonType(type)};
  @media (max-width: 539px) {
    font-size: 14px;
  }
`;

const Dot = styled.div`
  height: 10px;
  width: 10px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  margin: 0 10px 0 10px;
`;

interface ITypes {
  typeOne: string;
  typeTwo: string;
}

const Badges: React.FC<ITypes> = ({ typeOne, typeTwo }: ITypes) => {
  const hasTypeTwo = !typeTwo ? null : (
    <React.Fragment>
      <Dot /> <Badge type={typeTwo}>{typeTwo}</Badge>
    </React.Fragment>
  );

  return (
    <div>
      <Badge type={typeOne}>{typeOne}</Badge>
      {hasTypeTwo}
    </div>
  );
};

export default Badges;
