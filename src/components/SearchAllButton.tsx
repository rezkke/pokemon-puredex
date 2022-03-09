import React from "react";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";
import { darkGrey } from "@styles/globals";

import { useAppDispatch } from "@features/store";
import {
  clearPokemonsReducer,
  selectHideShowAll,
} from "@features/pokemonsSlice";
import { useSelector } from "react-redux";

const StyledSearchAllButton = styled(animated.button)`
  display: inline-block;
  color: inherit;
  background: transparent;
  border: 0;
  cursor: pointer;
  position: absolute;
  top: 12px;
  left: -150px;
  z-index: 1;
  margin-right: 30px;
  background: ${darkGrey};
  color: #ffffff;
  box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.15);
  border-radius: 25px;
  font-size: 15px;
  width: 130px;
  height: 45px;
  transition: all 0.3s ease-in-out 0s;
  &:hover {
    opacity: 90%;
  }
  @media (max-width: 539px) {
    left: 97.5px;
    top: -50px;
  }
`;

const SearchAllButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const hideShowAll = useSelector(selectHideShowAll);

  const showAllHandler = () => {
    dispatch(clearPokemonsReducer());
  };

  const hideShowAllEffect = useTransition(hideShowAll, {
    from: { opacity: 0, x: 200 },
    enter: { opacity: 0.8, x: 0 },
    leave: { opacity: 0.5, x: 200 },
    config: { duration: 200 },
  });

  return (
    <React.Fragment>
      {hideShowAllEffect((style, searchButton) =>
        searchButton ? (
          ""
        ) : (
          <animated.div style={style}>
            <StyledSearchAllButton onClick={showAllHandler}>
              Search all
            </StyledSearchAllButton>
          </animated.div>
        )
      )}
    </React.Fragment>
  );
};

export default SearchAllButton;
