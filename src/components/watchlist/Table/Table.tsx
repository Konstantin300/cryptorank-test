/* eslint-disable react/jsx-key */
import React, { FC, useMemo } from "react";
import { useCurrencies } from "../../../hooks/useCurrencies";
import { useTable, Column } from "react-table";
import formatNumber from "../../../helpers/formatNumber";
import { Cell, Row, StyledTable, TableHeader, TableWrapper } from "./styled";
import { SelectedCurrency } from "../../../types/currencies";

type Props = {
  selectedCurrency: SelectedCurrency;
};

const Table: FC<Props> = ({ selectedCurrency }) => {
  const { currencies, isLoading } = useCurrencies(30);

  const columns: Column[] = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Price",
        accessor: "price",
      },
      {
        Header: "Circ. supply",
        accessor: "circulating_supply",
      },
      {
        Header: "Market cap",
        accessor: "market_cap",
      },
      {
        Header: "Category",
        accessor: "category",
      },
    ],
    []
  );

  const data = useMemo(() => {
    const suffix =
      selectedCurrency.label === "USDT" ? "$" : selectedCurrency.label;
    return (
      currencies &&
      currencies.map((currency) => ({
        name: `${currency.name} (${currency.symbol})`,
        price: `${suffix} ${formatNumber(
          currency.values.USD.price / selectedCurrency.value
        )}`,
        circulating_supply: formatNumber(currency.circulatingSupply),
        market_cap: `${suffix} ${formatNumber(
          (currency.circulatingSupply * currency.values.USD.price) /
            selectedCurrency.value
        )}`,
        category: currency.category,
      }))
    );
  }, [currencies, selectedCurrency]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: data || [] });

  if (isLoading) return <div>Loading...</div>;

  return (
    <TableWrapper>
      <StyledTable {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <Row {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => (
                <TableHeader {...column.getHeaderProps()}>
                  {column.render("Header")}
                </TableHeader>
              ))}
            </Row>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <Row {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <Cell {...cell.getCellProps()}>{cell.render("Cell")}</Cell>
                  );
                })}
              </Row>
            );
          })}
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
};

export default Table;
