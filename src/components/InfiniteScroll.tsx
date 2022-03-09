import React, { Fragment } from "react";
import styled from "styled-components";

import { Waypoint } from "react-waypoint";

interface IProps {
  children: React.ReactNode;
  callBack(args: Waypoint.CallbackArgs): void;
}

const LoadingSpace = styled.div`
  paddingbottom: "20px";
  width: 100%;
  height: 130px;
`;

export const InfiniteScroll = ({ children, callBack }: IProps) => {
  return (
    <Fragment>
      {children}
      <Waypoint bottomOffset="-20px" onEnter={callBack}>
        <LoadingSpace />
      </Waypoint>
    </Fragment>
  );
};
