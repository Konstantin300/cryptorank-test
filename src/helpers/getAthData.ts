import axios from "axios"
import { BitcoinType } from "../types/currencies";

const getBitcoinData = async () => {
    const { data } : {data: {data: BitcoinType}} = await axios.get(`https://tstapi.cryptorank.io/v0/coins/bitcoin`)
    return data.data;
}

export const getAthData = async () => {
    const data = await getBitcoinData();
    const fromAth = ((data.price.USD - data.athPrice.USD) / data.athPrice.USD) * 100;
    console.log('from', fromAth)
    const toAth = ((data.athPrice.USD - data.price.USD) / data.price.USD) * 100;
    console.log('to', toAth)
    return {fromAth, toAth};
}