import axios from "axios"
import useSWR from 'swr'
import { Currencies } from "../types/currencies"

const fetchCurrencies = async (url: string) => {
    return await axios.get(url).then((res) => res.data).catch((err) => console.log(err))
}

export const useCurrencies = () => {
    const { data } = useSWR<{data: Currencies[]}>('https://api.cryptorank.io/v1/currencies?limit=20&api_key=548dd66ab19de7c9ff0ea8cd8a3199543862758a26ec37c421d74172579e', fetchCurrencies)

    return data?.data;
}