import Image, { StaticImageData } from "next/image"
import { MouseEventHandler } from "react"

type CoinNameRowProps = {
    name: string,
    icon: StaticImageData,
}

const CoinNameRow = ({ name, icon }: CoinNameRowProps) => {
    return (
        <div className='flex'>
            <Image src={icon} alt="icon" width={20} height={20} />
            <p>{name}</p>
        </div>
    )
}

export default CoinNameRow