import { NextComponentType, NextPageContext } from "next";
import { createContext, useState, useEffect } from "react";

interface CoinMarketCtx {
    //??????????????????????????
}
export const CoinMarketContext = createContext<CoinMarketCtx | null>(null);

export const CoinMarketProvider = ({ children }: any /*??????????????????????*/) => {

    const getTopTenCoins = async () => {
        try {
            const res = await fetch('/api/getTopTen');
            const data = await res.json();
            data.data.data;
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <CoinMarketContext.Provider value={
            getTopTenCoins
        }>
            {children}
        </CoinMarketContext.Provider>
    )
}