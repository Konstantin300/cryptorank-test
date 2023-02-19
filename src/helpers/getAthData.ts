import axios from "axios"
import { BitcoinType } from "../types/currencies";

const getBitcoinData = async () => {
    try {
        const { data } : {data: {data: BitcoinType}} = await axios.get(`https://tstapi.cryptorank.io/v0/coins/bitcoin`)
    return data.data;
    }
    catch (err) {
        console.log(err);
    }
}

export const getAthData = async () => {
    const data = await getBitcoinData();

    if(!data) {
        return;
    }
    
    const fromAth = ((data.price.USD - data.athPrice.USD) / data.athPrice.USD) * 100;
    const toAth = ((data.athPrice.USD - data.price.USD) / data.price.USD) * 100;
    return {fromAth, toAth};
    
}