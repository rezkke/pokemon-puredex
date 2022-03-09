import styled from "styled-components";

import Puredex from "@assets/puredexlogo.png";
import { useHistory } from "react-router";

const Wrapper = styled.div`
  grid-area: header;
  display: flex;
  justify-content: center;
  position: relative;
  min-width: 300px;
  min-height: 120px;
  flex-direction: row;
  text-align: center;
  z-index: 10;
  background-color: #191716ff;
  --box-shadow-color: #3d348b;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  align-items: center;
  div {
    display: flex;
    flex-direction: row;
    margin-top: -5px;
  }
  @media (max-width: 900px) {
    display: flex;
  }
`;

const StyledImage = styled.img`
  height: 100px;
  width: 264px;
  cursor: pointer;
`;

const Sidebar: React.FC = () => {
  const history = useHistory();
  return (
    <Wrapper>
      <div>
        <StyledImage
          src={Puredex}
          alt="puredex"
          onClick={() => history.push("/")}
        />
      </div>
    </Wrapper>
  );
};

export default Sidebar;
