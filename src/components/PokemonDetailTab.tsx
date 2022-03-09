import { purple } from "@styles/globals";
import React from "react";
import styled from "styled-components";

interface IButtonProps {
  active: boolean;
  id: any;
}

const Wrapper = styled.button<IButtonProps>`
  position: relative;
  border: none;
  background: none;
  font-size: 20px;
  cursor: pointer;
  font-weight: 600;
  margin: 15px 0 0 35px;
  color: #636363;
  height: 35px;
  border-radius: 4px;
  border-bottom: ${(props) => (props.active ? `3px solid ${purple}` : "")};
  ${(props) =>
    !props.active
      ? `font-weight: 500;
      :before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 35px;
    bottom: 0;
    left: 0;
    border-radius: 4px;
    border-bottom: 3px solid ${purple};
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  :hover::before {
    transform: scaleX(1);
  }`
      : ``}
  @media (max-width: 600px) {
    font-size: 16px;
    margin: 15px 0 0 15px;
  }
`;

interface IProps {
  tabName: string;
  click: (event: React.MouseEvent) => void;
  isActive: boolean;
  index: number;
}

const PokemonDetailTab: React.FC<IProps> = ({
  tabName,
  click,
  isActive,
  index,
}: IProps) => {
  return (
    <Wrapper onClick={click} active={isActive} id={index}>
      {tabName}
    </Wrapper>
  );
};

export default PokemonDetailTab;
