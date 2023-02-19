import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { useCurrencies } from "../../../../hooks/useCurrencies";
import Select from "react-select";
import { SelectWrapper, SwitchButton, Text, Wrapper } from "./styled";
import { SelectedCurrency } from "../../../../types/currencies";
import Arrows from "../../../../assets/svg/Arrows";

type Props = {
  amount: number;
};

const Converter: FC<Props> = ({ amount }) => {
  const [fromCurrency, setFromCurrency] = useState<SelectedCurrency>();
  const [toCurrency, setToCurrency] = useState<SelectedCurrency>();
  const [sum, setSum] = useState(0);
  const { currencies, isLoading } = useCurrencies(10);
  const isAllDataAvailable = fromCurrency && toCurrency && currencies;

  useEffect(() => {
    if (!isAllDataAvailable) {
      return;
    }
    const result = (+fromCurrency.value / +toCurrency.value) * amount;
    setSum(result);
  }, [fromCurrency, toCurrency, amount, isAllDataAvailable]);

  const options = useMemo(
    () =>
      currencies &&
      currencies.map((currency) => ({
        value: currency.values.USD.price,
        label: `${currency.name} (${currency.symbol})`,
      })),
    [currencies]
  );

  const handleChangeFirstCurrency = useCallback(
    (currency: SelectedCurrency | null) => {
      if (currency) {
        setFromCurrency(currency);
      }
    },
    []
  );

  const handleChangeSecondCurrency = useCallback(
    (currency: SelectedCurrency | null) => {
      if (currency) {
        setToCurrency(currency);
      }
    },
    []
  );

  const handleSwitchCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <SelectWrapper>
        <Select
          classNamePrefix={"CUSTOM_PREFIX"}
          onChange={handleChangeFirstCurrency}
          placeholder="Search currencies"
          options={options}
          value={fromCurrency}
          inputId="firstCurrency"
        />
        <SwitchButton onClick={handleSwitchCurrencies}>
          <Arrows />
        </SwitchButton>
        <Select
          classNamePrefix={"CUSTOM_PREFIX"}
          name="secondCurrency"
          value={toCurrency}
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
