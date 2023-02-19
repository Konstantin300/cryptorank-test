import axios from "axios"
import useSWR from 'swr'
import { Currencies } from "../types/currencies"

const fetchCurrencies = async (url: string) => {
    return await axios.get(url).then((res) => res.data).catch((err) => {
        throw new Error(err.response.data.message); 
    })
}

export const useCurrencies = (limit: number) => {
    const { data, error } = useSWR<{data: Currencies[]}>(`https://api.cryptorank.io/v1/currencies?limit=${limit}&api_key=${process.env.API_KEY}`, fetchCurrencies)
    
    const isLoading = !data && !error;

    return {
        currencies: data?.data,
        isLoading,
        error,
    };
}