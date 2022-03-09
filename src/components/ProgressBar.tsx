import React, { useState } from "react";
import styled from "styled-components";
import { purple } from "@styles/globals";

const ProgressBarWrapper = styled.div`
  display: flex;
  background-color: #d8d8d8;
  border-radius: 20px;
  position: relative;
  height: 25px;
  width: 250px;
  @media (max-width: 600px) {
    width: 180px;
  }
`;

const ProgressDone = styled.div`
  background: ${purple};
  border-radius: 15px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 0;
  opacity: 0;
  transition: 1s ease 0.3s;
`;

interface IProps {
  baseStat: number;
}

const ProgressBar: React.FC<IProps> = ({ baseStat }: IProps) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 0.8,
      width: `${(baseStat / 255) * 100}%`,
    };

    setStyle(newStyle);
  }, 10);

  return (
    <ProgressBarWrapper>
      <ProgressDone style={style}>{baseStat}</ProgressDone>
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
