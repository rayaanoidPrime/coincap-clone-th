import Image, { StaticImageData } from "next/image"
import MoreButton from "./MoreButton"
import TrendingCardRow from "./TrendingCardRow"

type TrendingCardProps = {
    title: string,
    icon: StaticImageData,
    trendingData: {
        number: number,
        symbol: string,
        name: string,
        icon: StaticImageData,
        isIncrement: boolean,
        rate: string
    }[]
}

const styles = {
    trendingCard: `w-full p-5 py-3 pb-0 bg-[#323546] rounded-xl text-white mr-3`,
    trendingCardWrapper: `flex items-center justify-between `
}

const TrendingCard = ({ title, icon, trendingData }: TrendingCardProps) => {
    return (
        <div className={styles.trendingCard}>
            <div className={styles.trendingCardWrapper}>
                <div className="flex">
                    {icon && <Image src={icon} width={27} height={27} alt="icon" />}
                    &nbsp;&nbsp;
                    <p className="font-bold">{title}</p>
                </div>
                <MoreButton />
            </div>
            <br />

            {trendingData.map((item, index) => {
                return (
                    <TrendingCardRow key={index} symbol={item.symbol} number={item.number} name={item.name} icon={item.icon} isIncrement={item.isIncrement} rate={item.rate} />
                )
            })}
        </div>
    )
}

export default TrendingCard