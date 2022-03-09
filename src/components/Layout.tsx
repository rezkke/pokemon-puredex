import React from "react";
import styled from "styled-components";
import Header from "./Header";

export interface ILayoutProp {
  children: React.ReactNode;
}

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 4.5fr;
  grid-template-areas: "header" "pokemons";
  height: 100vh;
`;

const Layout: React.FC<ILayoutProp> = ({ children }: ILayoutProp) => {
  return (
    <GridLayout>
      <Header />
      {children}
    </GridLayout>
  );
};

export default Layout;
