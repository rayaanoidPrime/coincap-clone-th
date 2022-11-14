import { NextApiRequest, NextApiResponse } from "next"
import { resolve } from "path";

export default function handler(req : NextApiRequest ,res : NextApiResponse){
   const getData =async () => {
        const response = await fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${process.env.NEXT_PUBLIC_CMC_API_KEY}`,
        {
            method :  'GET',
            headers : {
                Accept : '*/*'
            },   
        })

        const data = await response.json();
        res.status(200).json({data});
        return res.end(JSON.stringify(data))
   }
   
   getData();
}