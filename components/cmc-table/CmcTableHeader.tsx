import ChevronDown from "../../assets/svg/chevronDown";
import Info from '../../assets/svg/info'


const styles = {
    textIcon: `flex items-center `
}

const CMCTableHeader = () => {
    return (
        <tbody>
            <tr>
                <th></th>
                <th className="flex items-center"><b># &nbsp;</b>< ChevronDown fill={undefined} /></th>
                <th>Name</th>
                <th>Price</th>
                <th>24h %</th>
                <th>7d %</th>
                <th><div className={styles.textIcon}><p className="mr-2">Market Cap</p><Info /></div></th>
                <th><div className={styles.textIcon}><p className="mr-2">Volume</p><Info /></div></th>
                <th><div className={styles.textIcon}><p className="mr-2">Circulating Supply</p><Info /></div></th>
                <th>The last 7 days</th>
            </tr>
        </tbody>
    )
}

export default CMCTableHeader;