import { NextComponentType, NextPageContext } from "next";
import { createContext, useState, useEffect } from "react";

interface CoinMarketCtx {
    //??????????????????????????
    getTopTenCoins: () => Promise<void>
}
export const CoinMarketContext = createContext<CoinMarketCtx | null>(null);

export const CoinMarketProvider = ({ children }: any /*??????????????????????*/) => {

    const getTopTenCoins = async () => {
        try {
            const res = await fetch('/api/getTopTen');
            const data = await res.json();
            return data.data.data;
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <CoinMarketContext.Provider value={
            { getTopTenCoins }
        }>
            {children}
        </CoinMarketContext.Provider>
    )
}