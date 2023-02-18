export type Currencies = {
    id: string;
    category: string;
    name: string;
    symbol: string;
    circulatingSupply: number;
    values: {
        USD: {
            price: number;
        }
    }
    type: string;
}

export type SelectCurrency = {
    value: string;
    label: string;
}