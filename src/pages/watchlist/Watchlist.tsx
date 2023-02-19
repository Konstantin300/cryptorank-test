import React, { useCallback, useEffect, useMemo, useState } from "react";
import Table from "../../components/pages/watchlist/Table";
import MainLayout from "../../components/ui/MainLayout";
import Select from "react-select";
import { useCurrencies } from "../../hooks/useCurrencies";
import { SelectWrapper } from "../../components/pages/calculator/Converter/styled";
import { SelectedCurrency as SelectedCurrency } from "../../types/currencies";

const Watchlist = () => {
  const { currencies, isLoading } = useCurrencies(4);

  const [selectedCurrency, setSelectedCurrency] = useState<SelectedCurrency>({
    label: "USDT",
    value: 1,
  });

  const options = useMemo(() => {
    if (!currencies) {
      return [];
    }
    return currencies.map((currency) => ({
      value: currency.values.USD.price,
      label: currency.symbol,
    }));
  }, [currencies]);

  const handleChange = useCallback((currency: SelectedCurrency | null) => {
    if (currency) {
      setSelectedCurrency(currency);
    }
  }, []);

  if (isLoading) return <div>Loading...</div>;

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
