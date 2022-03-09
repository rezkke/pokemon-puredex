import styled from "styled-components";
import { purple } from "@styles/globals";

export const SearchButton = styled.button`
  display: inline-block;
  background: transparent;
  color: inherit;
  position: relative;
  z-index: 5;
  border: 0;
  transition: all 200ms ease-in;
  cursor: pointer;
  margin-left: -60px;
  background: ${purple};
  color: #ffffff;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  font-size: 15px;
  width: 100px;
  height: 45px;
  opacity: 80%;
  &:hover {
    opacity: 90%;
  }
  @media (max-width: 600px) {
    width: 70px;
    font-size: 14px;
    height: 40px;
    margin-left: -20px;
  }
`;

export const SearchButtonClicked = styled(SearchButton)`
  opacity: 60%;
  cursor: auto;
  &:hover {
    opacity: 60%;
  }
`;
