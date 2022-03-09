import React, { useState } from "react";
import styled from "styled-components";

import PokemonDetailTab from "./PokemonDetailTab";
import { lightBoxShadow } from "@styles/globals";
import PokemonDetailDesc from "./PokemonDetailDesc";
import { IPokemon } from "@features/types";
import PokemonDetailStats from "./PokemonDetailStats";

const Wrapper = styled.div`
  background-color: #fbfbfb;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 600px;
  width: 600px;
  border: none;
  box-shadow: ${lightBoxShadow};
  border-radius: 30px 0px 30px 30px;
  @media (max-width: 600px) {
    max-height: 530px;
    min-width: 250px;
    max-width: 390px;
    border-radius: 30px 30px 0px 0px;
  }
`;

const TabList = styled.div`
  display: flex;
  margin-bottom: 50px;
`;

const Content = styled.div`
  width: 85%;
  @media (max-width: 600px) {
    width: 85%;
  }
`;

const PokemonDetailProfile: React.FC<IPokemon> = ({ ...props }: IPokemon) => {
  const [active, setActive] = useState<number>(0);

  const changeCurrentTab = (event: React.MouseEvent) => {
    const id = parseInt((event.target as HTMLButtonElement).id, 0);
    if (id !== active) {
      setActive(id);
    }
  };

  const data = {
    tabs: [
      {
        tabName: "Description",
        index: 0,
        isActive: active === 0,
        component: <PokemonDetailDesc {...props} />,
      },
      {
        tabName: "Statistics",
        index: 1,
        isActive: active === 1,
        component: <PokemonDetailStats {...props} />,
      },
      {
        tabName: "Evolutions",
        index: 2,
        isActive: active === 2,
        component: null,
      },
    ],
  };

  const tabElements = data.tabs.map((x) => (
    <PokemonDetailTab
      click={changeCurrentTab}
      isActive={x.isActive}
      index={x.index}
      tabName={x.tabName}
    />
  ));

  const tabContents = data.tabs.map((x) => (
    <React.Fragment>
      {data.tabs[x.index].isActive && x.component}
    </React.Fragment>
  ));

  return (
    <Wrapper>
      <TabList>{tabElements}</TabList>
      <Content>{tabContents}</Content>
    </Wrapper>
  );
};

export default PokemonDetailProfile;
