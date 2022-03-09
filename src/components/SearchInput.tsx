import styled from "styled-components";
import { purple } from "@styles/globals";

const SearchInput = styled.input`
  width: 400px;
  height: 25px;
  background: #fbfbfb;
  font: inherit;
  position: relative;
  z-index: 3;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 30px;
  outline: 0;
  font-size: 16px;
  padding: 22px 18px;
  transition: box-shadow 0.3s;
  &:focus {
    color: ${purple};
    box-shadow: 0 10px 10px 0 rgb(61, 52, 139, 0.25);
    transition: box-shadow 0.3s;
  }
  @media (max-width: 600px) {
    width: 250px;
    font-size: 14px;
    height: 15px;
  }
`;

export default SearchInput;
