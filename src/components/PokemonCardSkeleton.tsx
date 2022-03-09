import styled, { keyframes } from "styled-components";
import { lightBoxShadow } from "@styles/globals";

const loadingAnimation = keyframes` 
	100% {
    transform: translateX(100%);
  }
`;

const PokemonCardSkeleton = styled.div`
  flex-basis: 26%;
  min-width: 400px;
  height: 250px;
  background: #cccccc;
  margin: 30px;
  box-shadow: ${lightBoxShadow};
  border: none;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, transparent, #e6e6e6, transparent);
    transform: translateX(-100%);
    animation: ${loadingAnimation} 0.8s infinite;
  }
`;

export default PokemonCardSkeleton;
