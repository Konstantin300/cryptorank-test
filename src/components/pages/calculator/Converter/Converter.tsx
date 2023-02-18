import React, { FC, useEffect, useState } from "react";
import { useCurrencies } from "../../../../hooks/useCurrencies";
import Select from "react-select";
import { SelectWrapper, Text, Wrapper } from "./styled";
import { SelectCurrency } from "../../../../types/currencies";

type Props = {
  amount: number;
};

const Converter: FC<Props> = ({ amount = 1 }) => {
  const [fromCurrency, setFromCurrency] = useState<SelectCurrency>();
  const [toCurrency, setToCurrency] = useState<SelectCurrency>();
  const [sum, setSum] = useState(0);
  const currencies = useCurrencies(10);

  useEffect(() => {
    if (!currencies || !fromCurrency || !toCurrency) {
      return;
    }
    const result = (+fromCurrency.value / +toCurrency.value) * amount;
    setSum(result);
  }, [fromCurrency, toCurrency, currencies, amount]);

  if (!currencies) return <div>Loading...</div>;

  const options = currencies.map((currency) => ({
    value: currency.values.USD.price,
    label: `${currency.name} (${currency.symbol})`,
  }));

  const handleChangeFirstCurrency = (currency: any) => {
    setFromCurrency(currency);
  };

  const handleChangeSecondCurrency = (currency: any) => {
    setToCurrency(currency);
  };

  return (
    <Wrapper>
      <SelectWrapper>
        <Select
          onChange={handleChangeFirstCurrency}
          placeholder="Search currencies"
          options={options}
        />

        <Select
          onChange={handleChangeSecondCurrency}
          placeholder="Search currencies"
          options={options}
        />
      </SelectWrapper>

      {fromCurrency && toCurrency && (
        <Text>
          {`${amount} ${fromCurrency.label} = ${sum.toFixed(3)} ${
            toCurrency.label
          }`}
        </Text>
      )}
    </Wrapper>
  );
};

export default Converter;
