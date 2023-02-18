import React, { useEffect, useState } from "react";
import Table from "../../components/pages/watchlist/Table";
import MainLayout from "../../components/ui/MainLayout";
import Select from "react-select";
import { useCurrencies } from "../../hooks/useCurrencies";
import { SelectWrapper } from "../../components/pages/calculator/Converter/styled";

const Watchlist = () => {
  const currencies = useCurrencies(4);
  const [selectedCurrency, setSelectedCurrency] = useState<any>({
    label: "USDT",
    value: 1,
  });
  const options = currencies?.map((currency) => ({
    value: currency.values.USD.price,
    label: currency.symbol,
  }));

  const handleChange = (currency: any) => {
    setSelectedCurrency(currency);
  };

  if (!currencies) return <div>Loading...</div>;

  return (
    <MainLayout>
      <SelectWrapper>
        <Select
          defaultValue={{ label: "USD", value: 1 }}
          placeholder="USD"
          options={options}
          onChange={handleChange}
        />
      </SelectWrapper>

      <Table selectedCurrency={selectedCurrency} />
    </MainLayout>
  );
};

export default Watchlist;
