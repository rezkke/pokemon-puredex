import React, { useState } from "react";

import styled from "styled-components";
import { animated, useSpring } from "react-spring";
import { lightBoxShadow, darkBoxShadow } from "@styles/globals";

export const StyledButton = styled(animated.button)`
  flex-basis: 26%;
  border: none;
  cursor: pointer;
  height: 250px;
  min-width: 400px;
  background-color: #fbfbfb;
  margin: 30px 30px 30px 30px;
  box-shadow: ${lightBoxShadow};
  border: none;
  border-radius: 20px;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: ${darkBoxShadow};
    transition: box-shadow 0.2s;
  }
  @media (max-width: 539px) {
    min-width: 320px;
    height: 200px;
  }
`;

interface IProps {
  children: React.ReactNode;
  click?: () => void;
}

const PokemonCardWrapper: React.FC<IProps> = ({ children, click }: IProps) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const onMountEffect = useSpring({
    from: { y: 25 },
    to: { y: isHovering ? -20 : 0 },
    config: { duration: 200 },
  });

  return (
    <React.Fragment>
      <StyledButton
        onClick={click}
        style={onMountEffect}
        onMouseEnter={() => setIsHovering(!isHovering)}
        onMouseLeave={() => setIsHovering(!isHovering)}
      >
        {children}
      </StyledButton>
    </React.Fragment>
  );
};

export default PokemonCardWrapper;
