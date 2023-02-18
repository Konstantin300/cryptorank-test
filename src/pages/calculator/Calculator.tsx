import React, { useState } from "react";
import Converter from "../../components/pages/calculator/Converter";
import Input from "../../components/ui/Input";
import MainLayout from "../../components/ui/MainLayout";
import { Amount, BoldText, Wrapper } from "./styled";

const Calculator = () => {
  const [amount, setAmount] = useState(1);
  console.log(amount);
  return (
    <MainLayout>
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
    </MainLayout>
  );
};

export default Calculator;
