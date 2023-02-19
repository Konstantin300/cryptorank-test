import React, { useState } from "react";
import Converter from "../../components/pages/calculator/Converter";
import Input from "../../components/ui/Input";
import MainLayout from "../../components/ui/MainLayout";
import { Amount, BoldText, MainContainer, Wrapper } from "./styled";

const Calculator = () => {
  const [amount, setAmount] = useState(1);

  return (
    <MainLayout>
      <MainContainer>
        <div>
          <Wrapper>
            <Input
              placeholder="Enter amount"
              value={amount}
              onChange={(event) => setAmount(+event.target.value)}
            />
            <Amount>
              <BoldText>Amount</BoldText>
            </Amount>
          </Wrapper>
          <Converter amount={amount} />
        </div>
      </MainContainer>
    </MainLayout>
  );
};

export default Calculator;
