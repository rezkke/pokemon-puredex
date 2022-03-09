import styled from "styled-components";

const PokemonInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: -45px;
  p {
    font-size: 23px;
    font-weight: 600;
    color: #636363;
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    div {
      margin: 0px 7px;
    }
  }
  @media (max-width: 539px) {
    margin-top: -25px;
    p {
      font-size: 19px;
    }
  }
`;

export default PokemonInfo;
