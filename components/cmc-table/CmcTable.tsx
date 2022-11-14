
import { Key, SetStateAction, useCallback, useContext, useEffect, useState } from 'react'
import btc from '../../assets/btc.png'
import { CoinMarketContext } from '../../context/context'
import CMCTableHeader from './CmcTableHeader';
import CMCTableRow from './CmcTableRow';
;



const CmcTable = () => {

    let { getTopTenCoins } = useContext(CoinMarketContext);
    let [coinData, setCoinData] = useState(null)

    useEffect(() => {
        setData();
    }, [])


    const setData = useCallback(async () => {
        try {
            let apiresponse = await getTopTenCoins();
            let filtererdResponse = [];

            for (let i = 0; i < apiresponse.length; i++) {
                const element = apiresponse[i];
                if (element.cmc_rank <= 10)
                    filtererdResponse.push(element);
            }

            setCoinData(filtererdResponse);

        } catch (error) {
            console.log(error)
        }
    }, [getTopTenCoins])
    console.log(coinData)
    return (
        <div className='text-white font-bold'>
            <div className='mx-auto max-w-screen-2xl'>
                <table className='w-full'>
                    <CMCTableHeader />
                    {coinData && coinData ? (
                        coinData.map((coin: { cmc_rank: number; name: string; symbol: string; quote: { USD: { percent_change_24h: number; percent_change_7d: number; price: number; market_cap: number; volume_24h: number; }; }; total_supply: number; circulating_supply: number; }, index: Key | null | undefined) => {
                            return <CMCTableRow
                                key={index}
                                starNum={coin.cmc_rank}
                                coinName={coin.name}
                                coinSymbol={coin.symbol}
                                coinIcon={btc}
                                showBuy={true}
                                hRate={coin.quote.USD.percent_change_24h}
                                dRate={coin.quote.USD.percent_change_7d}
                                hRateIsIncrement={true}
                                price={coin.quote.USD.price}
                                marketCapValue={coin.quote.USD.market_cap}
                                volumeCryptoValue={coin.quote.USD.volume_24h}
                                volumeValue={coin.total_supply}
                                circulatingSupply={coin.circulating_supply}
                            />
                        })
                    ) : (
                        <></>
                    )
                    }
                </table>
            </div>
        </div>
    )
}

export default CmcTable