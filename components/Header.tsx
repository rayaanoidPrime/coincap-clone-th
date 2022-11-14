import React, { FC } from "react";
import Image from "next/image";
import Search from '../assets/svg/search'
import { ConnectButton } from "web3uikit"


const styles = {
    header: `bg-[#17171A] text-white h-20 flex gap-[100px] w-full p-[30px]`,
    headerWrapper: `flex justify-center h-full max-w-screen-xl mx-auto px-4`,
    nav: `flex justify-center items-center gap-[20px] `,
    navItem: `relative mr-2 cursor-pointer hover:opacity-60`,
    navLinks: `text-white flex max-[100px]`,
    badge: `rounded-full bg-blue-600 h-1 w-1 bottom-5 absolute right-0 top-1 ring-4`,
    inputContainer: `flex inputContainer p-2 rounded bg-[#17124]`,
    input: `bg-transparent outline-none text-white w-70  ml-3`
}

const Header: FC = () => {
    return (
        <div className={styles.header}>
            <Image src='https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg'
                alt="logo"
                width={200}
                height={200} />

            <div className={styles.headerWrapper}>
                <nav className={styles.nav}>
                    <div className={styles.navItem}>
                        <div className={styles.navLinks}>
                            Cryptocurrencies
                        </div>
                        <div className={styles.badge} />
                    </div>

                    <div className={styles.navItem}>
                        <div className={styles.navLinks}>
                            Exchanges
                        </div>
                    </div>

                    <div className={styles.navItem}>
                        <div className={styles.navLinks}>
                            NFTs
                        </div>
                        <div className={styles.badge} />
                    </div>

                    <div className={styles.navItem}>
                        <div className={styles.navLinks}>
                            Cryptown
                        </div>
                        <div className={styles.badge} />
                    </div>

                    <div className={styles.navItem}>
                        <div className={styles.navLinks}>
                            Portfolio
                        </div>
                    </div>

                    <div className={styles.navItem}>
                        <div className={styles.navLinks}>
                            Watchlist
                        </div>
                    </div>

                    <div className={styles.navItem}>
                        <div className={styles.navLinks}>
                            Products
                        </div>
                        <div className={styles.badge} />
                    </div>

                    <div className={styles.navItem}>
                        <div className={styles.navLinks}>
                            Learn
                        </div>
                    </div>

                </nav>

                <div className="flex items-center">
                    <ConnectButton />
                    <div className={styles.inputContainer}>
                        <Search />
                        <input className={styles.input} placeholder="Search"></input>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header