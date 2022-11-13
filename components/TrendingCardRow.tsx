import Image, { StaticImageData } from "next/image"
import Rate from "./cmc-table/rate";


type TrendingCardRowProps = {
    name: string,
    icon: StaticImageData,
    isIncrement: boolean,
    number: number,
    rate: string,
    symbol: string
}

const styles = {
    trendingCardRow: `flex items-center justify-between mb-4 text-[0.93rem ]`
}

const TrendingCardRow = ({ number, name, icon, isIncrement, symbol, rate }: TrendingCardRowProps) => {
    return (
        <div className={styles.trendingCardRow}>
            <p className="opacity-40">{number}</p>
            <div className="w-full flex ">
                <div className="mx-5">
                    {icon && <Image src={icon} alt="icon" width={20} height={20} />}
                </div>
                <p className="font-bold">{name} &nbsp;
                    <span className="text-gray-400">{symbol}</span>
                </p>
            </div>
            <Rate isIncrement={isIncrement} rate={rate} />
        </div>
    )
}

export default TrendingCardRow