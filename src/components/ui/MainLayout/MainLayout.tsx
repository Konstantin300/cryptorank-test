import React, { FC } from "react";
import Header from "../Header";
import { Wrapper } from "./styled";

type Props = {
  children: React.ReactNode;
};

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};

export default MainLayout;
